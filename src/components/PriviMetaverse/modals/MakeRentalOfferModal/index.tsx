import React, { useState, useEffect, useMemo } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

import Box from "shared/ui-kit/Box";
import { Modal } from "shared/ui-kit";
import { ReserveTokenSelect } from "shared/ui-kit/Select/ReserveTokenSelect";
import InputWithLabelAndTooltip from "shared/ui-kit/InputWithLabelAndTooltip";
import { PrimaryButton } from "shared/ui-kit";
import { useAlertMessage } from "shared/hooks/useAlertMessage";
import { getChainForNFT, switchNetwork, checkChainID } from "shared/functions/metamask";
import { toDecimals, toNDecimals } from "shared/functions/web3";
import { createRentOffer } from "shared/services/API/ReserveAPI";
import { RootState } from "store/reducers/Reducer";
import { getNextDay } from "shared/helpers/utils";
import TransactionProgressModal from "../TransactionProgressModal";
import { MakeRentalOfferModalStyles } from "./index.style";
import { getInputValue } from "shared/helpers";

const SECONDS_PER_HOUR = 3600;
const PRECISSION = 1.01;
const isProd = process.env.REACT_APP_ENV === "prod";

export default function MakeRentalOfferModal({ open, handleClose = () => {}, nft, setNft }) {
  const classes = MakeRentalOfferModalStyles({});
  const { account, library, chainId } = useWeb3React();
  const { collection_id, token_id } = useParams<{ collection_id: string; token_id: string }>();

  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [date, setDate] = useState<any>();
  const [rentalTime, setRentalTime] = useState<number>();
  const [pricePerHour, setPricePerHour] = useState<number>();
  const [selectedChain, setSelectedChain] = useState<any>(getChainForNFT(nft));
  const tokenList = useSelector((state: RootState) => state.marketPlace.tokenList);
  const marketFee = useSelector((state: RootState) => state.marketPlace.fee);
  const [rentalToken, setRentalToken] = useState<any>(tokenList[0]);

  const [hash, setHash] = useState<string>("");
  const [transactionSuccess, setTransactionSuccess] = useState<boolean | null>(null);
  const [openTranactionModal, setOpenTransactionModal] = useState<boolean>(false);
  const { showAlertMessage } = useAlertMessage();

  const rentalSeconds = (rentalTime || 0) * SECONDS_PER_HOUR;
  const price = (pricePerHour || 0) * (rentalTime || 0);
  const offerPrice = useMemo(() => (price || 0) * (1 + marketFee), [price, marketFee]);

  useEffect(() => {
    setRentalToken(tokenList[0]);
  }, [tokenList]);

  useEffect(() => {
    if (!open) {
      setIsApproved(false);
      return;
    }

    if (nft) {
      setSelectedChain(getChainForNFT(nft));
    }
  }, [nft, open]);

  const handleApprove = async () => {
    try {
      if (isApproved) {
        return;
      }

      if (!pricePerHour || !rentalTime) {
        showAlertMessage("Hey there! Please make sure to fill out all fields before you proceed", {
          variant: "error",
        });
        return;
      }

      const nftChain = getChainForNFT(nft);
      if (!nftChain) {
        showAlertMessage(`network error`, { variant: "error" });
        return;
      }
      if (chainId && chainId !== nftChain?.chainId) {
        const isHere = await switchNetwork(nftChain?.chainId || 0);
        if (!isHere) {
          showAlertMessage("Network switch failed or was not confirmed on user wallet, please try again", {
            variant: "error",
          });
          return;
        }
        setSelectedChain(nftChain);
      }

      setOpenTransactionModal(true);
      const web3Config = nftChain.config;
      const web3APIHandler = nftChain.apiHandler;
      const web3 = new Web3(library.provider);
      let balance = await web3APIHandler.Erc20[rentalToken.Symbol].balanceOf(web3, { account });
      let decimals = await web3APIHandler.Erc20[rentalToken.Symbol].decimals(web3, { account });
      balance = balance / Math.pow(10, decimals);

      if (balance < (price || 0)) {
        showAlertMessage(`Insufficient balance to approve`, { variant: "error" });
        setTransactionSuccess(false);
        return;
      }
      const approved = await web3APIHandler.Erc20[rentalToken.Symbol].approve(
        web3,
        account!,
        web3Config.CONTRACT_ADDRESSES.RENTAL_MANAGER,
        toNDecimals(offerPrice * PRECISSION, rentalToken.Decimals)
      );
      if (!approved) {
        showAlertMessage(`Can't proceed to approve`, { variant: "error" });
        setTransactionSuccess(false);
        return;
      }
      setIsApproved(true);
      showAlertMessage(
        `Successfully approved ${(offerPrice * PRECISSION).toFixed(2)} ${rentalToken.Symbol}!`,
        {
          variant: "success",
        }
      );
      setTransactionSuccess(null);
      setOpenTransactionModal(false);
    } catch (error) {
      console.log(error);
      showAlertMessage("Something went wrong. Please try again!", {
        variant: "error",
      });
    } finally {
    }
  };

  const handleConfirm = async () => {
    try {
      if (!isApproved) {
        return;
      }

      if (!pricePerHour || !rentalTime) {
        showAlertMessage("Hey there! Please make sure to fill out all fields before you proceed", {
          variant: "error",
        });
        return;
      }

      setOpenTransactionModal(true);
      if (!checkChainID(chainId)) {
        showAlertMessage(`network error`, { variant: "error" });
        return;
      }
      const web3APIHandler = selectedChain.apiHandler;
      const web3 = new Web3(library.provider);
      const response = await web3APIHandler.RentalManager.rentalOffer(
        web3,
        account!,
        {
          collectionId: nft.Address,
          tokenId: token_id,
          rentalTime: rentalSeconds,
          pricePerSecond: toNDecimals(pricePerHour / SECONDS_PER_HOUR, rentalToken.Decimals),
          rentalExpiration: getNextDay(date),
          operator: nft.ownerAddress,
          fundingToken: rentalToken.Address,
        },
        setHash
      );
      console.log(response);

      if (response.success) {
        const offer = response.offer;
        if (!offer) {
          setTransactionSuccess(false);
          showAlertMessage("Failed to make an offer", { variant: "error" });
          return;
        }
        setTransactionSuccess(true);
        let estimatedCost = +toDecimals(offer.pricePerSecond, rentalToken?.Decimals) * offer.rentalTime;
        const newOffer = {
          mode: isProd ? "main" : "test",
          collection: collection_id,
          fundingToken: offer.fundingToken,
          operator: offer.operator,
          pricePerSecond: offer.pricePerSecond,
          rentalExpiration: offer.rentalExpiration,
          rentalOfferId: offer.rentalOfferId,
          rentalTime: offer.rentalTime,
          tokenId: offer.tokenId,
          offerer: account!,
          hash: offer.hash,
          estimatedCost,
        };
        await createRentOffer(newOffer);
        let newNft = { ...nft };
        newNft.rentBuyOffers.unshift({
          id: offer.rentalOfferId,
          fundingToken: offer.fundingToken,
          operator: offer.operator,
          pricePerSecond: offer.pricePerSecond,
          rentalExpiration: offer.rentalExpiration,
          rentalTime: offer.rentalTime,
          offerer: account!,
          hash: offer.hash,
          created: new Date().getTime(),
        });
        setNft(newNft);
        handleClose();
      } else {
        setTransactionSuccess(false);
        showAlertMessage("Failed to make an offer", { variant: "error" });
      }
    } catch (err) {
      console.log(err);
      setTransactionSuccess(false);
      showAlertMessage("Failed to make an offer", { variant: "error" });
    }
  };

  const handleCloseModal = () => {
    handleClose();
  };

  return (
    <>
      <Modal
        size="medium"
        isOpen={open}
        onClose={handleCloseModal}
        showCloseIcon
        className={classes.container}
      >
        <Box style={{ padding: "25px" }}>
          <Box fontSize="24px" className={classes.title}>
            Make Rental Offer
          </Box>
          <Grid container spacing={2}>
            <Grid item sm={7}>
              <Box className={classes.nameField}>Price Per Hour</Box>
            </Grid>
            <Grid item sm={5}>
              <Box className={classes.nameField}>Rental Token</Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={7}>
              <InputWithLabelAndTooltip
                inputValue={pricePerHour}
                onInputValueChange={e => setPricePerHour(getInputValue(e.target.value, 0))}
                overriedClasses={classes.inputJOT}
                required
                type="number"
                theme="light"
                minValue={0}
                disabled={isApproved}
                placeHolder={"0"}
              />
            </Grid>
            <Grid item sm={5}>
              <ReserveTokenSelect
                tokens={tokenList.filter(
                  token => token?.Network?.toLowerCase() === selectedChain?.name?.toLowerCase()
                )}
                value={rentalToken?.Address || ""}
                className={classes.inputJOT}
                onChange={e => {
                  setRentalToken(tokenList.find(v => v.Address === e.target.value));
                }}
                style={{ flex: "1" }}
                disabled={true}
              />
            </Grid>
          </Grid>
          <Box className={classes.nameField}>Rental Time</Box>
          <InputWithLabelAndTooltip
            inputValue={rentalTime}
            onInputValueChange={e => setRentalTime(getInputValue(e.target.value, 0))}
            overriedClasses={classes.inputJOT}
            required
            type="number"
            theme="light"
            minValue={0}
            endAdornment={<div className={classes.purpleText}>HOURS</div>}
            disabled={isApproved}
            placeHolder={"00"}
          />
          <Box className={classes.nameField}>Offer will disapppear if not accepted before</Box>
          <Box width="100%">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MMM/yyyy"
                margin="dense"
                id="date-picker-inline"
                value={date}
                onChange={(date, _) => date && setDate(new Date(date?.getTime()))}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                size="small"
                inputVariant="outlined"
                className={classes.datePicker}
                disabled={isApproved}
              />
            </MuiPickersUtilsProvider>
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.totalText}>Total</Box>
            <Box style={{ color: "#ffffff", fontSize: "14px", fontFamily: "Rany", fontWeight: 500 }}>
              {`${offerPrice} ${rentalToken?.Symbol}`}
            </Box>
          </Box>
          <Box textAlign="end" fontSize={12} fontFamily="Rany" mt={1} color="white">
            incl. {marketFee*100}% marketplace fee
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-end" mt={3}>
            <PrimaryButton
              size="medium"
              className={classes.primaryButton}
              disabled={isApproved}
              onClick={handleApprove}
            >
              Approve
            </PrimaryButton>
            <PrimaryButton
              size="medium"
              className={classes.primaryButton}
              disabled={!isApproved}
              onClick={handleConfirm}
            >
              Confirm Offer
            </PrimaryButton>
          </Box>
        </Box>
      </Modal>
      {openTranactionModal && (
        <TransactionProgressModal
          open={openTranactionModal}
          onClose={() => {
            setHash("");
            setTransactionSuccess(null);
            setOpenTransactionModal(false);
          }}
          txSuccess={transactionSuccess}
          hash={hash}
          network={selectedChain?.value.replace(" blockchain", "") || ""}
        />
      )}
    </>
  );
}
