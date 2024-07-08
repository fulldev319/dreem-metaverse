import exchange from "./contracts/Exchange";
import auction from "./contracts/Auction";
import loan from "./contracts/Loan";
import erc721 from "./contracts/ERC721WithRoyalty";
import erc20 from "./contracts/ERC20Tokens";
import vaultFactory from "./contracts/VaultFactory";
import tokenVault from "./contracts/TokenVault";
import erc20Exchange from "./contracts/Erc20Exchange";
import podManager from "./contracts/PodManager";
import podWithdrawManager from "./contracts/PodWithdrawManager";
import distributionManager from "./contracts/DistributionManager";
import socialErc20 from "./contracts/SocialERC20";
import socialTokenDeployer from "./contracts/SocialTokenDeployer";
import nftWithRoyalty from "./contracts/NFTWithRoyalty";
import royaltyFactory from "./contracts/RoyaltyFactory";
import nftWithRoyaltyBatch from "./contracts/NFTWithRoyaltyBatch";
import royaltyFactoryBatch from "./contracts/RoyaltyFactoryBatch";
import RealmFactory from "./contracts/RealmFactory";
import RealmCreator from "./contracts/RealmCreator";
import dreemLaunchpadVesting from "./contracts/DreemLaunchpadVesting";
import openSalesManager from "./contracts/OpenSalesManager";
import dreem from "./contracts/Dreem";
import vault from "./contracts/Vault";
import rentalManager from "./contracts/rentalManager";
import syntheticNFTManager from "./contracts/SyntheticNFT";
import reservesManager from "./contracts/reservesManager";
import reserveMarketplace from "./contracts/reserveMarketplace";

const api = network => {
  return {
    Exchange: exchange(network),
    Auction: auction(network),
    Loan: loan(network),
    Erc721: erc721(network),
    Erc20: erc20(network),
    Vault: vault(network),
    VaultFactory: vaultFactory(network),
    TokenVault: tokenVault(network),
    erc20Exchange: erc20Exchange(network),
    PodManager: podManager(network),
    PodWithdrawManager: podWithdrawManager(network),
    DistributionManager: distributionManager(network),
    SocialERC20: socialErc20(network),
    SocialTokenDeployer: socialTokenDeployer(network),
    NFTWithRoyalty: nftWithRoyalty(network),
    RoyaltyFactory: royaltyFactory(network),
    NFTWithRoyaltyBatch: nftWithRoyaltyBatch(network),
    RoyaltyFactoryBatch: royaltyFactoryBatch(network),
    RealmCreator: RealmCreator(network),
    RealmFactory: RealmFactory(network),
    openSalesManager: openSalesManager(network),
    DreemLaunchpadVesting: dreemLaunchpadVesting(network),
    Dreem: dreem(network),
    RentalManager: rentalManager(network),
    SyntheticNFTManager: syntheticNFTManager(),
    ReserveMarketplace: reserveMarketplace(network),
    ReservesManager: reservesManager(network),
  };
};

export default api;
