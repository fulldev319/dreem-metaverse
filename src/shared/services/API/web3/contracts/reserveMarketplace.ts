import Web3 from "web3";
import { ContractInstance } from "shared/connectors/web3/functions";
import config from "shared/connectors/web3/config";

const MAX_PRIO_FEE = "50";

const reserveMarketplace = (network: string) => {
  const metadata = require("shared/connectors/web3/contracts/reserve/ReserveMarketplace.json");
  const contractAddress = config[network].CONTRACT_ADDRESSES.RESERVE_MARKETPLACE;

  const cancelPurchaseReserveProposal = async (
    web3: Web3,
    account: string,
    payload: any,
    setHash: any
  ): Promise<any> => {
    return new Promise(async resolve => {
      try {
        const contract = ContractInstance(web3, metadata.abi, contractAddress);
        console.log(payload);
        const gas = await contract.methods
          .cancelPurchaseReserveProposal(
            payload.collection_id,
            payload.token_id,
            payload.paymentToken,
            payload.collateralToken,
            payload.price,
            payload.collateralPercent,
            payload.reservePeriod,
            payload.buyer,
          )
          .estimateGas({ from: account });

        const response = await web3.eth.getChainId()==137 
            ? await contract.methods
                    .cancelPurchaseReserveProposal(
                      payload.collection_id,
                      payload.token_id,
                      payload.paymentToken,
                      payload.collateralToken,
                      payload.price,
                      payload.collateralPercent,
                      payload.reservePeriod,
                      payload.buyer,
                    )
                    .send({ from: account, gas: gas, maxPriorityFeePerGas: await web3.utils.toWei(MAX_PRIO_FEE, 'gwei') })
                    .on("transactionHash", hash => {
                      setHash(hash);
                    })
             : await contract.methods
                    .cancelPurchaseReserveProposal(
                      payload.collection_id,
                      payload.token_id,
                      payload.paymentToken,
                      payload.collateralToken,
                      payload.price,
                      payload.collateralPercent,
                      payload.reservePeriod,
                      payload.buyer,
                    )
                    .send({ from: account, gas: gas })
                    .on("transactionHash", hash => {
                      setHash(hash);
                    })

        console.log("transaction succeed... ", response.events);
        if (response?.events?.PurchaseReserveProposalCanceled) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      } catch (e) {
        console.log(e);
        resolve({ success: false });
      }
    });
  };

  const cancelSaleReserveProposal = async (
    web3: Web3,
    account: string,
    payload: any,
    setHash: any
  ): Promise<any> => {
    return new Promise(async resolve => {
      try {
        const contract = ContractInstance(web3, metadata.abi, contractAddress);
        console.log(payload);
        const gas = await contract.methods
          .cancelSaleReserveProposal(
            payload.collection_id,
            payload.token_id,
            payload.paymentToken,
            payload.collateralToken,
            payload.price,
            payload.collateralPercent,
            payload.reservePeriod,
            payload.owner,
          )
          .estimateGas({ from: account });

        const response = await web3.eth.getChainId()==137 
            ? await contract.methods
                .cancelSaleReserveProposal(
                  payload.collection_id,
                  payload.token_id,
                  payload.paymentToken,
                  payload.collateralToken,
                  payload.price,
                  payload.collateralPercent,
                  payload.reservePeriod,
                  payload.owner,
                )
                .send({ from: account, gas: gas, maxPriorityFeePerGas: await web3.utils.toWei(MAX_PRIO_FEE, 'gwei') })
                .on("transactionHash", hash => {
                  setHash(hash);
                })
            : await contract.methods
                  .cancelSaleReserveProposal(
                    payload.collection_id,
                    payload.token_id,
                    payload.paymentToken,
                    payload.collateralToken,
                    payload.price,
                    payload.collateralPercent,
                    payload.reservePeriod,
                    payload.owner,
                  )
                  .send({ from: account, gas: gas })
                  .on("transactionHash", hash => {
                    setHash(hash);
                  });



        console.log("transaction succeed... ", response?.events);
        if (response?.events?.SaleReserveProposalCanceled) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      } catch (e) {
        console.log(e);
        resolve({ success: false });
      }
    });
  };

  const approveReserveToBuy = async (
    web3: Web3,
    account: string,
    payload: any,
    setHash: any
  ): Promise<any> => {
    return new Promise(async resolve => {
      try {
        const contract = ContractInstance(web3, metadata.abi, contractAddress);
        console.log("Getting gas....");
        console.log(payload)
        const gas = await contract.methods
          .approveReserveToBuy(
            payload.collection_id,
            payload.token_id,
            payload.paymentToken,
            payload.collateralToken,
            payload.price,
            payload.beneficiary,
            payload.collateralPercent,
            payload.collateralInitialAmount,
            payload.reservePeriod,
            payload.validityPeriod,
            payload.sellerToMatch
          )
          .estimateGas({ from: account });
        console.log("calced gas price is.... ", gas);


        const response = await web3.eth.getChainId()==137 
           ? await contract.methods
                .approveReserveToBuy(
                  payload.collection_id,
                  payload.token_id,
                  payload.paymentToken,
                  payload.collateralToken,
                  payload.price,
                  payload.beneficiary,
                  payload.collateralPercent,
                  payload.collateralInitialAmount,
                  payload.reservePeriod,
                  payload.validityPeriod,
                  payload.sellerToMatch
                )
                .send({ from: account, gas, maxPriorityFeePerGas: await web3.utils.toWei(MAX_PRIO_FEE, 'gwei') })
                .on("transactionHash", hash => {
                  setHash(hash);
                })
          : await contract.methods
                .approveReserveToBuy(
                  payload.collection_id,
                  payload.token_id,
                  payload.paymentToken,
                  payload.collateralToken,
                  payload.price,
                  payload.beneficiary,
                  payload.collateralPercent,
                  payload.collateralInitialAmount,
                  payload.reservePeriod,
                  payload.validityPeriod,
                  payload.sellerToMatch
                )
                .send({ from: account, gas })
                .on("transactionHash", hash => {
                  setHash(hash);
                })
        console.log(response?.events)
        if (
          payload.mode === 0 && response?.events?.PurchaseReserved ||       // Buyer accepts owner's blocking offer
          payload.mode === 1 && response?.events?.PurchaseReserveProposed   // Buyer makes a new blocking offer
        ) {
          resolve({ success: true, hash: response.transactionHash });
        } else {
          resolve({
            success: false,
          });
        }
      } catch (e) {
        console.log(e);
        resolve({
          success: false,
        });
      }
    });
  };

  const approveReserveToSell = async (
    web3: Web3,
    account: string,
    payload: any,
    setHash: any
  ): Promise<any> => {
    return new Promise(async resolve => {
      try {
        const contract = ContractInstance(web3, metadata.abi, contractAddress);
        console.log("Getting gas....");
        console.log("payload", payload);
        const gas = await contract.methods
          .approveReserveToSell(
            payload.collection_id,
            payload.token_id,
            payload.paymentToken,
            payload.collateralToken,
            payload.price,
            payload.beneficiary,
            payload.collateralPercent,
            payload.reservePeriod,
            payload.validityPeriod,
            payload.buyerToMatch
          )
          .estimateGas({ from: account });
        console.log("calced gas price is.... ", gas);


        const response = await web3.eth.getChainId()==137 
            ? await contract.methods
                .approveReserveToSell(
                  payload.collection_id,
                  payload.token_id,
                  payload.paymentToken,
                  payload.collateralToken,
                  payload.price,
                  payload.beneficiary,
                  payload.collateralPercent,
                  payload.reservePeriod,
                  payload.validityPeriod,
                  payload.buyerToMatch
                )
                .send({ from: account, gas: gas, maxPriorityFeePerGas: await web3.utils.toWei(MAX_PRIO_FEE, 'gwei') })
                .on("transactionHash", hash => {
                  setHash(hash);
                })
            : await contract.methods
                  .approveReserveToSell(
                    payload.collection_id,
                    payload.token_id,
                    payload.paymentToken,
                    payload.collateralToken,
                    payload.price,
                    payload.beneficiary,
                    payload.collateralPercent,
                    payload.reservePeriod,
                    payload.validityPeriod,
                    payload.buyerToMatch
                  )
                  .send({ from: account, gas: gas })
                  .on("transactionHash", hash => {
                    setHash(hash);
                  })
        console.log("transaction succeed", response.events);
        const offer = response?.events?.SaleReserveProposed || response?.events?.SaleReserved;
        if (
          payload.mode === 0 && response?.events?.SaleReserved ||       // Owner accepts buyer's blocking offer
          payload.mode === 1 && response?.events?.SaleReserveProposed   // Owner sets the blocking price
        ) {
          resolve({ success: true, offer, hash: response.transactionHash });
        } else {
          resolve({ success: false, offer, hash: response.transactionHash });
        }
      } catch (e) {
        console.log(e);
        resolve({
          success: false,
        });
      }
    });
  };

  return { cancelSaleReserveProposal, cancelPurchaseReserveProposal, approveReserveToBuy, approveReserveToSell };
};

export default reserveMarketplace;
