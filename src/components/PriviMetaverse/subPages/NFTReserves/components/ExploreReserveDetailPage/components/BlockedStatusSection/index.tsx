import React, { useState, useEffect } from "react";
import Box from "shared/ui-kit/Box";
import { PrimaryButton } from "shared/ui-kit";
import { exploreOptionDetailPageStyles } from "../../index.styles";
import RangeSlider from "shared/ui-kit/RangeSlider";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers/Reducer";
import { checkChainID, getChainForNFT } from "shared/functions/metamask";
import Web3 from "web3";
import { useAlertMessage } from "shared/hooks/useAlertMessage";
import TransactionProgressModal from "components/PriviMetaverse/modals/TransactionProgressModal";
import NoLiquidationPossibleModal from "components/PriviMetaverse/modals/NoLiquidationPossibleModal";

// import ProcessingPaymentModal from "components/PriviMetaverse/modals/ProcessingPaymentModal";
import { closeBlockingHistory } from "shared/services/API/ReserveAPI";
import { useWeb3React } from "@web3-react/core";
import { useParams } from "react-router-dom";
const isProd = process.env.REACT_APP_ENV === "prod";

export default ({ isOwnership, nft, refresh }) => {
  const [range, setRange] = useState(0);
  const classes = exploreOptionDetailPageStyles({});
  const [blockingInfo, setBlockingInfo] = useState<any>(null);
  const tokens = useSelector((state: RootState) => state.marketPlace.tokenList);
  const { collection_id, token_id } = useParams<{ collection_id: string; token_id: string }>();

  const [selectedChain, setSelectedChain] = useState<any>(getChainForNFT(nft));
  const [hash, setHash] = useState<string>("");
  const [transactionSuccess, setTransactionSuccess] = useState<boolean | null>(null);
  const [openTranactionModal, setOpenTransactionModal] = useState<boolean>(false);
  const [openNoLiquidationPossibleModal, setOpenNoLiquidationPossibleModal] = useState(false);
  const { showAlertMessage } = useAlertMessage();
  const { account, library, chainId } = useWeb3React();

  useEffect(() => {
    if (nft && nft?.blockingSalesHistories) {
      setBlockingInfo(nft?.blockingSalesHistories[nft?.blockingSalesHistories?.length - 1]);
    }
  }, [nft]);

  useEffect(() => {
    setRange(blockingInfo?.CollateralPercent);
  }, [blockingInfo]);

  const getTokenSymbol = addr => {
    if (tokens.length == 0 || !addr) return 0;
    let token = tokens.find(token => token.Address.toLowerCase() === addr.toLowerCase());
    return token?.Symbol || "";
  };

  const getTokenAvatar = addr => {
    if (tokens.length == 0 || !addr) return null;
    let token = tokens.find(token => token.Address.toLowerCase() === addr.toLowerCase());
    return token?.ImageUrl || "";
  };

  const handleConfirm = async () => {
    setOpenTransactionModal(true);
    if (!checkChainID(chainId)) {
      showAlertMessage(`network error`, { variant: "error" });
      return;
    }
    const web3APIHandler = selectedChain.apiHandler;
    const web3 = new Web3(library.provider);
    const activeReserveId = await web3.utils.keccak256(
      web3.eth.abi.encodeParameters(
        ["address", "uint256", "address", "address"],
        [nft.Address, token_id, blockingInfo.from, blockingInfo.Beneficiary]
      )
    );

    const response = await web3APIHandler.ReservesManager.liquidateUndercollateralization(
      web3,
      account!,
      {
        activeReserveId,
      },
      setHash
    );

    if (response.success) {
      await closeBlockingHistory({
        ...blockingInfo,
        mode: isProd ? "main" : "test",
        CollectionId: collection_id,
        TokenId: token_id,
        Id: activeReserveId,
        Beneficiary: blockingInfo.Beneficiary,
        offerer: account!,
        notificationMode: 3,
        hash: response.hash,
      });

      setTransactionSuccess(true);
      refresh();
    } else {
      setTransactionSuccess(false);
      setOpenNoLiquidationPossibleModal(true);
      //showAlertMessage(`Liquidation Failed! ${nft?.owner?.name} holds enough collateral and could not be liquidated.`, { variant: "error" });
    }
  };

  return (
    <Box display="flex" flexDirection="column" p={4} pl={4.5} width="100%" className={classes.gradientBorder}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box
            fontFamily="GRIFTER"
            fontSize={20}
            className={classes.gradientText}
            style={{
              textTransform: "uppercase",
            }}
          >
            Buyer status of reservation
          </Box>
          <Box fontSize={14} color="#ffffff" fontFamily="Rany" mt={1}>
            If the blocker’s collateral falls below the collateral level you set you can claim liquidation and
            cancel the block
          </Box>
        </Box>
        <PrimaryButton size="medium" className={classes.claimButton} onClick={handleConfirm}>
          CLAIM LIQUIDATION
        </PrimaryButton>
      </Box>

      <Box mt={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <span>
            Collateral status
            <span style={{ color: "#ffffff", marginLeft: 6 }}>{blockingInfo?.TotalCollateralPercent}%</span>
          </span>
          <span>
            Collateral needed
            <span style={{ color: "#D30401", marginLeft: 6 }}>{blockingInfo?.CollateralPercent}%</span>
          </span>
        </Box>
        <RangeSlider
          variant="transparent"
          value={Number(blockingInfo?.TotalCollateralPercent)}
          onChange={(event, newValue) => {}}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <span>
            <strong>0 %</strong>
          </span>
          <span>
            <strong>100 %</strong>
          </span>
        </Box>
      </Box>

      <Box
        className={classes.gradientText}
        fontFamily="GRIFTER"
        fontSize={24}
        mt={4.5}
        style={{
          textTransform: "uppercase",
        }}
      >
        Collateral available
      </Box>
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        borderTop="1px solid #00000010"
        borderBottom="1px solid #00000010"
        padding="8px 50px"
        mt={3}
      >
        <Box className={classes.tableHeader} flex={0.4}>
          account
        </Box>
        <Box className={classes.tableHeader} flex={0.6}>
          symbol
        </Box>
        <Box className={classes.tableHeader} flex={0.3}>
          % of
        </Box>
        <Box className={classes.tableHeader} flex={0.3}>
          amount
        </Box>
      </Box>
      <Box display="flex" flex={1} alignItems="center" padding="15px 50px">
        <Box flex={0.4} color="#ffffff">
          {blockingInfo?.Beneficiary?.substr(0, 6) +
            "..." +
            blockingInfo?.Beneficiary?.substr(blockingInfo?.Beneficiary?.length - 6, 6)}
        </Box>
        <Box flex={0.6}>
          <img src={getTokenAvatar(blockingInfo?.PaymentToken)} width={24} />
        </Box>
        <Box flex={0.3}>{blockingInfo?.TotalCollateralPercent} %</Box>
        <Box flex={0.3}>{`${(
          (Number(blockingInfo?.Price) * Number(blockingInfo?.TotalCollateralPercent)) /
          100
        ).toFixed(2)} ${getTokenSymbol(blockingInfo?.PaymentToken)}`}</Box>
      </Box>
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
      {openNoLiquidationPossibleModal && (
        <NoLiquidationPossibleModal
          open={openNoLiquidationPossibleModal}
          onClose={() => setOpenNoLiquidationPossibleModal(false)}
          collateral={blockingInfo?.CollateralPercent}
        />
      )}
    </Box>
  );
};
