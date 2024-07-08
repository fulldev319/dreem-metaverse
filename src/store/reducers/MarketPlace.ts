import * as actionTypes from "../actions/ActionTypes";
import { RootState } from "./Reducer";

type rootState = RootState["marketPlace"];
interface State extends rootState {
  allNFTList: any[];
  collectionNFTList: any[];
  tokenList: any[];
  fee: number;
  selectedTabMarketMain: string;
  selectedTabMarketManageNFTMain: string;
  selectedTabMarketManageNFTSub: number;
  scrollPositionInCollection: number;
  scrollPositionInAllNFT: number;
}
interface Action extends rootState {
  type: string;
}

// Set initial state for SelectedSwapTabsValue
const initialState: State = {
  allNFTList: [],
  collectionNFTList: [],
  tokenList: [],
  fee: 0,
  selectedTabMarketMain: "",
  selectedTabMarketManageNFTMain: "",
  selectedTabMarketManageNFTSub: 0,
  scrollPositionInCollection: 0,
  scrollPositionInAllNFT: 0,
};

// Set a SelectedSwapPool into the global state
const setTokenList = (state: State, action: Action) => {
  return {
    ...state,
    ...{ tokenList: action.tokenList },
  };
};

const setMarketFee = (state: State, action: any) => {
  return {
    ...state,
    fee: action.fee,
  };
};

const setSelTabMarketMain = (state: State, action: any) => {
  return {
    ...state,
    selectedTabMarketMain: action.selectedTabMarketMain,
  };
};

const setSelTabMarketManageNFTMain = (state: State, action: any) => {
  return {
    ...state,
    selectedTabMarketManageNFTMain: action.selectedTabMarketManageNFTMain,
  };
};

const setSelTabMarketManageNFTSub = (state: State, action: any) => {
  return {
    ...state,
    selectedTabMarketManageNFTSub: action.selectedTabMarketManageNFTSub,
  };
};

const setCollectionNFTList = (state: State, action: Action) => {
  return {
    ...state,
    collectionNFTList: action.collectionNFTList,
  };
};

const setAllNFTList = (state: State, action: Action) => {
  return {
    ...state,
    allNFTList: action.allNFTList,
  };
};

const setScrollPositionInCollection = (state: State, action: Action) => {
  return {
    ...state,
    scrollPositionInCollection: action.scrollPositionInCollection,
  };
};

const setScrollPositionInAllNFT = (state: State, action: Action) => {
  return {
    ...state,
    scrollPositionInAllNFT: action.scrollPositionInAllNFT,
  };
};

// Return the SelectedSwapPool state
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN_LIST:
      return setTokenList(state, action);
    case actionTypes.SET_MARKET_FEE:
      return setMarketFee(state, action);
    case actionTypes.SET_SELTAB_MARKET_MAIN:
      return setSelTabMarketMain(state, action);
    case actionTypes.SET_SELTAB_MARKET_MANAGE_NFT_MAIN:
      return setSelTabMarketManageNFTMain(state, action);
    case actionTypes.SET_SELTAB_MARKET_MANAGE_NFT_SUB:
      return setSelTabMarketManageNFTSub(state, action);
    case actionTypes.SET_ALL_NFT_LIST:
      return setAllNFTList(state, action);
    case actionTypes.SET_COLLECTION_NFT_LIST:
      return setCollectionNFTList(state, action);
    case actionTypes.SET_SCROLL_POSITION_IN_COLLECTION:
      return setScrollPositionInCollection(state, action);
    case actionTypes.SET_SCROLL_POSITION_IN_ALL_NFT:
      return setScrollPositionInAllNFT(state, action);
    default:
      return state;
  }
};

export default reducer;
