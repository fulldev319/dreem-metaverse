import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./subPages/HomePage";
import CreatorPage from "./subPages/CreatorPage";
import ManageContentPage from "./subPages/ManageContentPage";
import GettingStartedPage from "./subPages/GettingStartedPage";
import CreatingRealmPage from "./subPages/CreatingRealmPage";
import CreatingExtensionPage from "./subPages/CreatingExtensionPage";
import LandingPage from "components/Landing";
import CollectionDetailPage from "./subPages/CollectionDetailPage";
import RealmDetailPage from "./subPages/RealmDetailPage";
import MainPage from "./subPages/MainPage";
import ExploreRealmsPage from "./subPages/ExploreRealmsPage";
import ExplorePage from "./subPages/ExplorePage";
import UseScrollTop from "shared/hooks/useScrollTop";
import Error404Page from "./subPages/Error404Page";
import GameDetailPage from "./subPages/GameDetailPage";
import ExploreGamesPage from "./subPages/ExploreGamesPage";
import GameNFTExplorerPage from "./subPages/GameNFTExplorerPage";
import NotificationPage from "./subPages/NotificationPage";
import NFTReserves from "./subPages/NFTReserves";
import ManageNFTPage from "./subPages/NFTReserves/components/ManageNFTPage";
import ExploreReserveDetailPage from "./subPages/NFTReserves/components/ExploreReserveDetailPage";
import RealmMapPage from "./subPages/RealmMapPage";
import WorldDetailPage from "./subPages/WorldDetailPage";
import CreateRealmPage from "./subPages/CreateRealmPage";
import MintNFTPage from "./subPages/MintNFTPage";
import ApplyExtensionPage from "./subPages/ApplyExtensionPage";
import RealmDetailPageNew from "./subPages/RealmDetailPageNew";

// import ClaimDreemPage from "./subPages/ClaimDreemPage";

export default function PriviMetaverseRouter(props) {
  return (
    <>
      <UseScrollTop />
      <Switch>
        <Route exact path="/play" component={LandingPage} />
        <Route exact path="/create" component={ManageContentPage} />
        <Route exact path="/collection/:id" component={CollectionDetailPage} />
        <Route exact path="/create_realm" component={CreateRealmPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/explore/:itemId" component={ExplorePage} />
        <Route exact path="/realms/map" component={RealmMapPage} />
        <Route exact path="/realms" component={ExploreRealmsPage} />
        <Route exact path="/realm/:id" component={RealmDetailPageNew} />
        <Route exact path="/realm/:id/:tap" component={RealmDetailPageNew} />
        <Route exact path="/realm/:id/:tap/:itemId" component={RealmDetailPageNew} />
        <Route exact path="/realms/:id/:character_id" component={RealmDetailPage} />
        <Route exact path="/apply_extension" component={ApplyExtensionPage} />
        <Route exact path="/world/:id" component={WorldDetailPage} />
        <Route exact path="/unfinished_mint/:id" component={MintNFTPage} />
        <Route exact path="/nft/:nftId" component={HomePage} />,
        <Route exact path="/profile/:creatorAddress" component={CreatorPage} />
        <Route exact path="/profile/:creatorAddress/:draftId" component={CreatorPage} />
        <Route exact path="/become_creator" component={GettingStartedPage} />
        <Route exact path="/creating_realm" component={CreatingRealmPage} />
        <Route exact path="/creating_extension/:id" component={CreatingExtensionPage} />
        <Route exact path="/P2E" component={NFTReserves} />
        <Route exact path="/P2E/manage_nft/:tab?" component={ManageNFTPage} />
        <Route exact path="/P2E/explorer" component={GameNFTExplorerPage} />
        <Route exact path="/P2E/explorer_games" component={ExploreGamesPage} />
        <Route exact path="/P2E/:collection_id" component={GameDetailPage} />
        <Route exact path="/P2E/:collection_id/:token_id" component={ExploreReserveDetailPage} />
        <Route exact path="/notifications" component={NotificationPage} />
        {/* <Route exact path="/realm/:id/voting" component={VotingPage} />
        <Route exact path="/realm/:id/dao_updates" component={DaoUpdatesPage} />
        <Route exact path="/realm/:id/assets" component={AssetsPage} />
        <Route exact path="/realm/:id/asset_detail" component={AssetDetailPage} />
        <Route exact path="/realm/:id/avatars" component={AvatarsPage} />
        <Route exact path="/realm/:id/avatar_detail" component={AvatarDetailPage} /> */}
        {/* <Route exact path="/claim_dreem" component={ClaimDreemPage} /> */}
        <Route exact path="/" component={MainPage} />
        <Route path="/404" component={Error404Page} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}
