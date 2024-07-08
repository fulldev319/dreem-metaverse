import React, { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "store/reducers/Reducer";
import { toDecimals } from "shared/functions/web3";

import Box from "shared/ui-kit/Box";
import { PrimaryButton, Text } from "shared/ui-kit";
import { useAuth } from "shared/contexts/AuthContext";

import BlockNFTModal from "components/PriviMetaverse/modals/BlockNFTModal";
import InstantBuyModal from "components/PriviMetaverse/modals/InstantBuyModal";
import RentNFTModal from "components/PriviMetaverse/modals/RentNFTModal";
import EditSellingPriceModal from "components/PriviMetaverse/modals/EditSellingPriceModal";
import EditBlockingPriceModal from "components/PriviMetaverse/modals/EditBlockingPriceModal";
import EditRentPriceModal from "components/PriviMetaverse/modals/EditRentPriceModal";
import SetBlockingPriceModal from "components/PriviMetaverse/modals/SetBlockingPriceModal";
import SetRentPriceModal from "components/PriviMetaverse/modals/SetRentPriceModal";
import CancelBlockingPriceModal from "components/PriviMetaverse/modals/CancelBlockingPriceModal";
import CancelRentPriceModal from "components/PriviMetaverse/modals/CancelRentPriceModal";
import SetSellingPriceModal from "components/PriviMetaverse/modals/SetSellingPriceModal";
import CancelSellingPriceModal from "components/PriviMetaverse/modals/CancelSellingPriceModal";

import { exploreOptionDetailPageStyles } from "../../index.styles";

const isProd = process.env.REACT_APP_ENV === "prod";
export default ({ isOwnership, nft, setNft, refresh, onRent }) => {
  const classes = exploreOptionDetailPageStyles({});
  const { isSignedin } = useAuth();

  const [openEditSellingPriceModal, setOpenEditSellingPriceModal] = useState<boolean>(false);
  const [openSetSellingPriceModal, setOpenSetSellingPriceModal] = useState<boolean>(false);
  const [openCancelSellingPriceModal, setOpenCancelSellingPriceModal] = useState<boolean>(false);
  const [openInstantModal, setOpenInstantModal] = useState<boolean>(false);

  const [openSetBlockingPriceModal, setOpenSetBlockingPriceModal] = useState<boolean>(false);
  const [openCancelBlockingPriceModal, setOpenCancelBlockingPriceModal] = useState<boolean>(false);
  const [openEditBlockingPriceModal, setOpenEditBlockingPriceModal] = useState<boolean>(false);
  const [openReserveNftModal, setOpenReserveNftModal] = useState<boolean>(false);

  const [openSetRentPriceModal, setOpenSetRentPriceModal] = useState<boolean>(false);
  const [openCancelRentPriceModal, setOpenCancelRentPriceModal] = useState<boolean>(false);
  const [openEditRentPriceModal, setOpenEditRentPriceModal] = useState<boolean>(false);

  const [openRentNFTModal, setOpenRentNFTModal] = useState<boolean>(false);
  const tokenList = useSelector((state: RootState) => state.marketPlace.tokenList);

  const SECONDS_PER_HOUR = 3600;

  const getTokenSymbol = addr => {
    if (tokenList.length == 0 || !addr) return 0;
    let token = tokenList.find(token => token.Address === addr);
    return token?.Symbol || "";
  };

  const getTokenDecimal = addr => {
    if (tokenList.length == 0 || !addr) return null;
    let token = tokenList.find(token => token.Address === addr);
    return token?.Decimals ?? 1;
  };

  const handleInstantBuy = () => {
    setOpenInstantModal(false);
    refresh();
  };

  const setOpenOpensea = () => {
    if (nft.Chain === "Polygon") {
      window.open(
        `https://${!isProd ? "testnets." : ""}opensea.io/assets/mumbai/${nft.Address}/${nft.tokenId}`,
        "_blank"
      );
    } else {
      window.open(`https://nftrade.com/assets/bsc/${nft.Address}/${nft.tokenId}`, "_blank");
    }
  };

  return (
    <>
      <Box display="flex">
        <Text
          style={{
            fontSize: "18px",
            color: "white",
            fontWeight: 700,
            fontFamily: "GRIFTER",
          }}
        >
          Live Pricing Details
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" my={3.5}>
        <Box display="flex" alignItems="center">
          {!isOwnership && nft?.sellingOffer?.Price && (
            <Box mr={2}>
              <img
                src={require(nft.Chain === "Polygon"
                  ? "assets/icons/opensea.svg"
                  : "assets/icons/nftrade.png")}
                alt="opensea icon"
                width={40}
                height={36}
              />
            </Box>
          )}
          <Text className={classes.pricingText1}>Selling Price:</Text>
        </Box>
        <Box textAlign="right">
          {(!isSignedin || isOwnership) && nft?.sellingOffer?.Price && (
            <Text className={classes.pricingText2}>
              {nft?.sellingOffer?.Price &&
                `${nft.sellingOffer.Price} ${getTokenSymbol(nft.sellingOffer.PaymentToken)}`}
            </Text>
          )}
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            {isOwnership && isSignedin ? (
              nft?.sellingOffer?.Price ? (
                <Box display="flex" alignItems="space-between" marginTop="10px">
                  <PrimaryButton
                    size="small"
                    className={classes.cancelBtn}
                    onClick={() => {
                      setOpenCancelSellingPriceModal(true);
                    }}
                  >
                    CANCEL
                  </PrimaryButton>
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenEditSellingPriceModal(true);
                    }}
                  >
                    EDIT
                  </PrimaryButton>
                </Box>
              ) : (
                <>
                  <Text className={classes.pricingText2}>
                    {nft?.sellingOffer?.Price &&
                      `${nft.sellingOffer.Price} ${getTokenSymbol(nft.sellingOffer.PaymentToken)}`}
                  </Text>
                  &nbsp;
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenSetSellingPriceModal(true);
                    }}
                  >
                    SET
                  </PrimaryButton>
                </>
              )
            ) : nft?.sellingOffer?.Price && isSignedin ? (
              <>
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  {nft?.sellingOffer?.Price &&
                    `${nft.sellingOffer.Price} ${getTokenSymbol(nft.sellingOffer.PaymentToken)}`}
                </Text>
                &nbsp;
                <PrimaryButton
                  size="small"
                  className={`${classes.pricingButton} ${classes.openseaButton}`}
                  onClick={() => {
                    setOpenOpensea();
                  }}
                >
                  {nft.Chain === "Polygon" ? "Buy on opensea" : "Buy on NFTrade"}
                </PrimaryButton>
              </>
            ) : (
              !nft?.sellingOffer?.Price && (
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  Not Available
                </Text>
              )
            )}
          </Box>
        </Box>
      </Box>
      <hr className={classes.divider} />
      <Box display="flex" justifyContent="space-between" mb={3.5} mt={2.5}>
        <Text className={classes.pricingText1}>Blocking Price:</Text>
        <Box textAlign="right">
          {(!isSignedin || isOwnership) && nft?.blockingSaleOffer?.Price && (
            <Text className={classes.pricingText2}>
              {nft?.blockingSaleOffer?.Price &&
                `${nft.blockingSaleOffer.Price} ${getTokenSymbol(nft.blockingSaleOffer.PaymentToken)} for ${
                  nft.blockingSaleOffer.ReservePeriod
                } Day(s)`}
            </Text>
          )}
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            {isOwnership && isSignedin ? (
              nft?.blockingSaleOffer?.Price ? (
                <Box display="flex" alignItems="space-between" marginTop="10px">
                  <PrimaryButton
                    size="small"
                    className={classes.cancelBtn}
                    onClick={() => {
                      setOpenCancelBlockingPriceModal(true);
                    }}
                  >
                    CANCEL
                  </PrimaryButton>
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenEditBlockingPriceModal(true);
                    }}
                  >
                    EDIT
                  </PrimaryButton>
                </Box>
              ) : (
                <>
                  <Text className={classes.pricingText2}>
                    {nft?.blockingSaleOffer?.Price &&
                      `${nft.blockingSaleOffer.Price} ${getTokenSymbol(
                        nft.blockingSaleOffer.PaymentToken
                      )} for ${nft.blockingSaleOffer.ReservePeriod} Day(s)`}
                  </Text>
                  &nbsp;
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenSetBlockingPriceModal(true);
                    }}
                  >
                    SET
                  </PrimaryButton>
                </>
              )
            ) : nft?.blockingSaleOffer?.Price && isSignedin ? (
              <>
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  {nft?.blockingSaleOffer?.Price &&
                    `${nft.blockingSaleOffer.Price} ${getTokenSymbol(
                      nft.blockingSaleOffer.PaymentToken
                    )} for ${nft.blockingSaleOffer.ReservePeriod} Day(s)`}
                </Text>
                &nbsp;
                <PrimaryButton
                  size="small"
                  className={classes.pricingButton}
                  onClick={() => {
                    setOpenReserveNftModal(true);
                  }}
                >
                  Block
                </PrimaryButton>
              </>
            ) : (
              !nft?.blockingSaleOffer?.Price && (
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  Not Available
                </Text>
              )
            )}
          </Box>
        </Box>
      </Box>
      <hr className={classes.divider} />
      <Box display="flex" justifyContent="space-between" mb={3.5} mt={2.5}>
        <Text className={classes.pricingText1}>Rental Fee (per hour):</Text>
        <Box textAlign="right">
          {(!isSignedin || isOwnership) && nft?.rentSaleOffer?.pricePerSecond && (
            <Text className={classes.pricingText2}>
              {nft?.rentSaleOffer?.pricePerSecond &&
                `${(
                  +toDecimals(
                    nft.rentSaleOffer.pricePerSecond,
                    getTokenDecimal(nft.rentSaleOffer.fundingToken)
                  ) * SECONDS_PER_HOUR
                ).toFixed(2)} ${getTokenSymbol(nft.rentSaleOffer.fundingToken)}`}
            </Text>
          )}
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            {isOwnership && isSignedin ? (
              nft?.rentSaleOffer?.pricePerSecond ? (
                <Box display="flex" alignItems="space-between" marginTop="10px">
                  <PrimaryButton
                    size="small"
                    className={classes.cancelBtn}
                    onClick={() => {
                      setOpenCancelRentPriceModal(true);
                    }}
                  >
                    CANCEL
                  </PrimaryButton>
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenEditRentPriceModal(true);
                    }}
                  >
                    EDIT
                  </PrimaryButton>
                </Box>
              ) : (
                <>
                  <Text className={classes.pricingText2}>
                    {nft?.rentSaleOffer?.pricePerSecond &&
                      `${(
                        +toDecimals(
                          nft.rentSaleOffer.pricePerSecond,
                          getTokenDecimal(nft.rentSaleOffer.fundingToken)
                        ) * SECONDS_PER_HOUR
                      ).toFixed(2)} ${getTokenSymbol(nft.rentSaleOffer.fundingToken)}`}
                  </Text>
                  &nbsp;
                  <PrimaryButton
                    size="small"
                    className={classes.pricingButton}
                    onClick={() => {
                      setOpenSetRentPriceModal(true);
                    }}
                  >
                    SET
                  </PrimaryButton>
                </>
              )
            ) : nft?.rentSaleOffer?.pricePerSecond && isSignedin ? (
              <>
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  {nft?.rentSaleOffer?.pricePerSecond &&
                    `${(
                      +toDecimals(
                        nft.rentSaleOffer.pricePerSecond,
                        getTokenDecimal(nft.rentSaleOffer.fundingToken)
                      ) * SECONDS_PER_HOUR
                    ).toFixed(2)} ${getTokenSymbol(nft.rentSaleOffer.fundingToken)}`}
                </Text>
                &nbsp;
                <PrimaryButton
                  size="small"
                  className={classes.pricingButton}
                  onClick={() => {
                    setOpenRentNFTModal(true);
                  }}
                >
                  Rent
                </PrimaryButton>
              </>
            ) : (
              !nft?.rentSaleOffer?.pricePerSecond && (
                <Text className={!nft?.status ? classes.pricingText2 : classes.pricingText2Disable}>
                  Not Available
                </Text>
              )
            )}
          </Box>
        </Box>
      </Box>
      <hr className={classes.divider} />
      <InstantBuyModal
        open={openInstantModal}
        handleClose={() => setOpenInstantModal(false)}
        onConfirm={handleInstantBuy}
        offer={nft.sellingOffer}
        nft={nft}
      />
      <SetSellingPriceModal
        open={openSetSellingPriceModal}
        handleClose={() => setOpenSetSellingPriceModal(false)}
        nft={nft}
        setNft={setNft}
      />
      <CancelSellingPriceModal
        open={openCancelSellingPriceModal}
        handleClose={() => setOpenCancelSellingPriceModal(false)}
        offer={nft.sellingOffer}
        nft={nft}
        setNft={setNft}
      />
      <EditSellingPriceModal
        open={openEditSellingPriceModal}
        handleClose={() => setOpenEditSellingPriceModal(false)}
        offer={nft.sellingOffer}
        nft={nft}
        setNft={setNft}
      />
      <BlockNFTModal
        open={openReserveNftModal}
        handleClose={() => setOpenReserveNftModal(false)}
        nft={nft}
        setNft={setNft}
        onConfirm={() => {
          setOpenReserveNftModal(false);
          refresh();
        }}
      />
      <SetBlockingPriceModal
        open={openSetBlockingPriceModal}
        handleClose={() => setOpenSetBlockingPriceModal(false)}
        nft={nft}
        setNft={setNft}
      />
      <CancelBlockingPriceModal
        open={openCancelBlockingPriceModal}
        handleClose={() => setOpenCancelBlockingPriceModal(false)}
        offer={nft.blockingSaleOffer}
        nft={nft}
        setNft={setNft}
      />
      <EditBlockingPriceModal
        open={openEditBlockingPriceModal}
        handleClose={() => setOpenEditBlockingPriceModal(false)}
        offer={nft.blockingSaleOffer}
        nft={nft}
        setNft={setNft}
      />
      <SetRentPriceModal
        open={openSetRentPriceModal}
        handleClose={() => setOpenSetRentPriceModal(false)}
        nft={nft}
        setNft={setNft}
      />
      <CancelRentPriceModal
        open={openCancelRentPriceModal}
        handleClose={() => setOpenCancelRentPriceModal(false)}
        offer={nft.rentSaleOffer}
        nft={nft}
        setNft={setNft}
      />
      <EditRentPriceModal
        open={openEditRentPriceModal}
        handleClose={() => setOpenEditRentPriceModal(false)}
        offer={nft.rentSaleOffer}
        nft={nft}
        setNft={setNft}
      />
      <RentNFTModal
        open={openRentNFTModal}
        handleClose={() => setOpenRentNFTModal(false)}
        offer={nft.rentSaleOffer}
        nft={nft}
        setNft={setNft}
        onSuccess={() => onRent()}
      />
    </>
  );
};
