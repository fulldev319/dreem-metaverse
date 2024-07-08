import React from "react";
// import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers/Reducer";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

// import { Select, MenuItem, useMediaQuery, useTheme } from "@material-ui/core";

// import URL from "shared/functions/getURL";

// import { FruitSelect } from "shared/ui-kit/Select/FruitSelect";
// import { useAuth } from "shared/contexts/AuthContext";
// import { useAlertMessage } from "shared/hooks/useAlertMessage";
// import { FilterAssetTypeOptionNames } from "shared/constants/constants";
import Box from "shared/ui-kit/Box";
import { MasonryGrid } from "shared/ui-kit/MasonryGrid/MasonryGrid";
import useWindowDimensions from "shared/hooks/useWindowDimensions";
import { useShareMedia } from "shared/contexts/ShareMediaContext";
import * as MetaverseAPI from "shared/services/API/MetaverseAPI";
import WorldCard from "components/PriviMetaverse/components/cards/WorldCard";
import AssetsCard from "components/PriviMetaverse/components/cards/AssetsCard";
import AvatarCard from "components/PriviMetaverse/components/cards/AvatarCard";
import { collectionDetailPageStyles, useFilterSelectStyles } from "./index.styles";

const COLUMNS_COUNT_BREAK_POINTS_FOUR = {
  375: 1,
  600: 2,
  1200: 3,
  1440: 4,
};

// const FilterAssetTypeOptionAllNames = ["ALL", ...FilterAssetTypeOptionNames];
// const filterStatusOptions = ["All", "DRAFT", "MINTED"];

export default function CollectionDetailPage() {
  const classes = collectionDetailPageStyles({});
  // const filterClasses = useFilterSelectStyles({});

  // const { isSignedin } = useAuth();
  const width = useWindowDimensions().width;
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { shareMedia } = useShareMedia();
  // const { showAlertMessage } = useAlertMessage();

  const userSelector = useSelector((state: RootState) => state.user);
  const { id: collectionId } = useParams<{ id: string }>();

  const [collectionData, setCollectionData] = React.useState<any>({});
  const [nftData, setNftData] = React.useState<any[]>([]);
  // const [fruitData, setFruitData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasMore, setHasMore] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<string>();
  // const [openAssetTypeSelect, setOpenAssetTypeSelect] = React.useState<boolean>(false);
  // const [openStatusSelect, setOpenStatusSelect] = React.useState<boolean>(false);
  // const [filterAssetType, setFilterAssetType] = React.useState<string>(FilterAssetTypeOptionAllNames[0]);
  // const [filterStatus, setFilterStatus] = React.useState<string>(filterStatusOptions[0]);

  const loadingCount = React.useMemo(
    () => (width > 1440 ? 4 : width > 1200 ? 3 : width > 600 ? 2 : 1),
    [width]
  );

  React.useEffect(() => {
    setSelectedTab("drafts");
    if (collectionId) {
      loadCollection(collectionId);
    }
  }, [collectionId]);

  const loadCollection = collectionId => {
    setIsLoading(true);
    setLoading(true);
    MetaverseAPI.getAsset(collectionId)
      .then(res => {
        if (res.success) {
          setCollectionData(res.data);
          setNftData(res.data?.collectionAssets?.elements);
        } else {
          setCollectionData({});
          setNftData([]);
        }
      })
      .finally(() => {
        setIsLoading(false);
        setLoading(false);
      });
  };

  const loadData = async () => {
    try {
      let filters: string[] = ["WORLD"];
      if (selectedTab === "drafts") {
        filters = ["WORLD"];
      } else {
        filters = ["WORLD"];
      }
      if (filters.length) {
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleShare = () => {
    shareMedia("Collection", `collection/${collectionData.versionHashId}`);
  };

  const handleGoToPolygonscan = () => {
    window.open(collectionData.polygonscanUrl, "_blank");
  };

  const handleGoToOpensea = () => {
    window.open(collectionData.openseaUrl, "_blank");
  };

  // const handleFruit = type => {
  //   if (fruitData.fruits?.filter(f => f.fruitId === type)?.find(f => f.userId === userSelector.hashId)) {
  //     showAlertMessage("You had already given this fruit.", { variant: "info" });
  //     return;
  //   }

  //   const body = {
  //     realmId: collectionId,
  //     userId: userSelector.hashId,
  //     fruitId: type,
  //   };
  //   axios.post(`${URL()}/dreemRealm/fruit`, body).then(res => {
  //     const resp = res.data;
  //     if (resp.success) {
  //       const itemCopy = { ...fruitData };
  //       itemCopy.fruits = resp.fruitsArray;
  //       setFruitData(itemCopy);
  //     }
  //   });
  // };

  // const handleFilterAssetType = e => {
  //   setFilterAssetType(e.target.value);
  // };

  // const handleFilterStatus = e => {
  //   setFilterStatus(e.target.value);
  // };

  return (
    <Box className={classes.root}>
      <Box className={classes.container} id="scrollContainer">
        <Box className={classes.fitContent} mb={2}>
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.title}>{collectionData?.name || ""}</Box>
            <Box display="flex" alignItems="center">
              <div className={classes.iconBtn} onClick={() => handleGoToPolygonscan()}>
                <PolygonIcon />
              </div>
              <div className={classes.iconBtn} style={{ paddingTop: 5 }} onClick={() => handleGoToOpensea()}>
                <OpenSeaIcon />
              </div>
              {/* {isSignedin && (
                <Box className={classes.iconBtn}>
                  <FruitSelect
                    fruitObject={fruitData}
                    onGiveFruit={handleFruit}
                    fruitWidth={32}
                    fruitHeight={32}
                    style={{ background: "transparent" }}
                  />
                </Box>
              )} */}
              <div className={classes.iconBtn} onClick={handleShare}>
                <ShareIcon />
              </div>
            </Box>
          </Box>
          <Box className={classes.symbol}>{collectionData?.collectionSymbol || ""}</Box>
          <Box className={classes.description}>{collectionData?.description || ""}</Box>
          {/* <Box
            display="flex"
            mb={5}
            width={isMobile ? 1 : "auto"}
            justifyContent={isMobile ? "space-between" : "flex-start"}
          >
            <Select
              open={openAssetTypeSelect}
              onClose={() => setOpenAssetTypeSelect(false)}
              value={filterAssetType}
              onChange={handleFilterAssetType}
              className={classes.select}
              renderValue={(value: any) => (
                <Box display="flex" alignItems="center" onClick={() => setOpenAssetTypeSelect(true)}>
                  <Box component="label" display="flex" alignItems="center">
                    ASSET TYPE:&nbsp;&nbsp;
                  </Box>
                  <span>{value}</span>
                </Box>
              )}
              MenuProps={{
                classes: filterClasses,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
              IconComponent={ArrowIcon(setOpenAssetTypeSelect)}
            >
              {FilterAssetTypeOptionAllNames.map((chain, index) => (
                <MenuItem key={`filter-chain-${index}`} value={chain}>
                  {chain}
                </MenuItem>
              ))}
            </Select>
            <Select
              open={openStatusSelect}
              onClose={() => setOpenStatusSelect(false)}
              value={filterStatus}
              onChange={handleFilterStatus}
              className={classes.select}
              renderValue={(value: any) => (
                <Box display="flex" alignItems="center" onClick={() => setOpenStatusSelect(true)}>
                  <label>TYPE&nbsp;&nbsp;</label>
                  <span>{value}</span>
                </Box>
              )}
              MenuProps={{
                classes: filterClasses,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
              IconComponent={ArrowIcon(setOpenStatusSelect)}
            >
              {filterStatusOptions.map((status, index) => (
                <MenuItem key={`filter-status-${index}`} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Box> */}
          <InfiniteScroll
            hasChildren={nftData?.length > 0}
            dataLength={nftData?.length}
            scrollableTarget={"scrollContainer"}
            next={loadData}
            hasMore={hasMore}
            loader={
              loading && (
                <Box mt={2}>
                  <MasonryGrid
                    gutter={"16px"}
                    data={Array(loadingCount).fill(0)}
                    renderItem={(_, index) => <AvatarCard isLoading={true} key={`loading_${index}`} />}
                    columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS_FOUR}
                  />
                </Box>
              )
            }
          >
            <Box mt={4}>
              <MasonryGrid
                gutter={"40px"}
                data={nftData}
                renderItem={(item, index) =>
                  item?.itemKind === "WORLD" ? (
                    <WorldCard nft={item} selectable={false} isLoading={loading} key={`world_${index}`} />
                  ) : item?.itemKind === "CHARACTER" ? (
                    <AvatarCard item={item} key={`avatar_${index}`} />
                  ) : (
                    <AssetsCard item={item} key={`asset_${index}`} />
                  )
                }
                columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS_FOUR}
              />
            </Box>
          </InfiniteScroll>
          {!loading && nftData?.length < 1 && (
            <Box textAlign="center" width="100%" mb={10} mt={2}>
              No Data
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export const ArrowIcon = func => () =>
  (
    <Box style={{ fill: "white", cursor: "pointer" }} onClick={() => func(true)}>
      <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.10303 1.06644L5.29688 5.26077L9.71878 0.838867"
          stroke="#2D3047"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );

const PolygonIcon = () => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.713 6.85534C19.475 6.72234 19.2069 6.65251 18.9343 6.65251C18.6617 6.65251 18.3936 6.72234 18.1556 6.85534L14.5827 8.92771L12.155 10.2792L8.58222 12.3516C8.34421 12.4845 8.07615 12.5543 7.80355 12.5543C7.53095 12.5543 7.26289 12.4845 7.02488 12.3516L4.1848 10.7298C3.95373 10.5973 3.76072 10.4074 3.62441 10.1786C3.4881 9.9497 3.4131 9.68956 3.40664 9.42327V6.22463C3.40344 5.95631 3.47442 5.69233 3.61173 5.46179C3.74904 5.23125 3.94735 5.04312 4.1848 4.91814L6.97901 3.34134C7.21702 3.20845 7.48508 3.13868 7.75768 3.13868C8.03028 3.13868 8.29834 3.20845 8.53635 3.34134L11.3306 4.91814C11.5616 5.05065 11.7546 5.24049 11.891 5.46935C12.0273 5.6982 12.1023 5.95833 12.1087 6.22463V8.29699L14.5364 6.9004V4.82803C14.5396 4.55972 14.4686 4.29574 14.3313 4.0652C14.194 3.83466 13.9957 3.64653 13.7582 3.52154L8.58222 0.548361C8.34421 0.415469 8.07615 0.345703 7.80355 0.345703C7.53095 0.345703 7.26289 0.415469 7.02488 0.548361L1.75653 3.52175C1.51912 3.64671 1.32082 3.83482 1.18351 4.06532C1.0462 4.29581 0.975215 4.55976 0.978375 4.82803V10.8199C0.975177 11.0882 1.04615 11.3522 1.18346 11.5827C1.32077 11.8132 1.51909 12.0014 1.75653 12.1264L7.02427 15.0997C7.26228 15.2326 7.53034 15.3024 7.80294 15.3024C8.07553 15.3024 8.3436 15.2326 8.58161 15.0997L12.1544 13.0724L14.582 11.6758L18.155 9.64853C18.393 9.51552 18.6611 9.44569 18.9337 9.44569C19.2063 9.44569 19.4744 9.51552 19.7124 9.64853L22.5066 11.2253C22.7376 11.3578 22.9306 11.5477 23.0669 11.7766C23.2032 12.0054 23.2783 12.2655 23.2847 12.5318V15.7305C23.2879 15.9988 23.217 16.2628 23.0796 16.4933C22.9423 16.7238 22.744 16.912 22.5066 17.0369L19.7124 18.6588C19.4744 18.7917 19.2063 18.8615 18.9337 18.8615C18.6611 18.8615 18.393 18.7917 18.155 18.6588L15.3608 17.082C15.1298 16.9495 14.9368 16.7596 14.8004 16.5308C14.6641 16.3019 14.5891 16.0418 14.5827 15.7755V13.7029L12.155 15.0995V17.1719C12.1518 17.4402 12.2228 17.7042 12.3601 17.9347C12.4974 18.1653 12.6957 18.3534 12.9332 18.4784L18.2009 21.4518C18.4389 21.5847 18.707 21.6544 18.9796 21.6544C19.2522 21.6544 19.5202 21.5847 19.7582 21.4518L25.026 18.4784C25.257 18.3459 25.45 18.156 25.5863 17.9272C25.7226 17.6983 25.7976 17.4382 25.8041 17.1719V11.1803C25.8073 10.912 25.7364 10.648 25.599 10.4174C25.4617 10.1869 25.2634 9.99877 25.026 9.87379L19.713 6.85534Z"
      fill="#212121"
    />
  </svg>
);

const OpenSeaIcon = () => (
  <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip_001_opensea)">
      <path
        d="M22.5 11C22.5 17.0748 17.5748 22 11.5 22C5.42521 22 0.5 17.0748 0.5 11C0.5 4.92521 5.42521 0 11.5 0C17.5761 0 22.5 4.92521 22.5 11Z"
        fill="#212121"
      />
      <path
        d="M5.92697 11.3699L5.97443 11.2953L8.83597 6.81875C8.87779 6.75321 8.97611 6.75999 9.00774 6.83118C9.4858 7.90256 9.8983 9.23501 9.70505 10.0645C9.62255 10.4058 9.39653 10.8681 9.14223 11.2953C9.10947 11.3574 9.0733 11.4185 9.03487 11.4772C9.01678 11.5044 8.98627 11.5202 8.95349 11.5202H6.01059C5.93148 11.5202 5.88515 11.4343 5.92697 11.3699Z"
        fill="#C3FF50"
      />
      <path
        d="M18.6818 12.2018V12.9104C18.6818 12.9511 18.6569 12.9873 18.6207 13.0031C18.3992 13.098 17.6409 13.4461 17.3256 13.8846C16.5209 15.0046 15.9061 16.606 14.5319 16.606H8.79862C6.76663 16.606 5.12 14.9537 5.12 12.9149V12.8494C5.12 12.7951 5.16406 12.7511 5.21831 12.7511H8.41439C8.47766 12.7511 8.52399 12.8098 8.51836 12.872C8.49574 13.0799 8.53418 13.2924 8.63249 13.4856C8.82235 13.871 9.21565 14.1118 9.64058 14.1118H11.2228V12.8765H9.65866C9.57843 12.8765 9.53097 12.7838 9.57731 12.7183C9.59425 12.6923 9.61347 12.6652 9.6338 12.6347C9.78186 12.4245 9.99319 12.0978 10.2034 11.726C10.3469 11.4751 10.4859 11.2073 10.5978 10.9383C10.6204 10.8897 10.6385 10.84 10.6566 10.7914C10.6871 10.7055 10.7188 10.6252 10.7413 10.545C10.764 10.4772 10.782 10.406 10.8001 10.3393C10.8532 10.111 10.8758 9.86917 10.8758 9.61828C10.8758 9.51997 10.8713 9.41712 10.8623 9.3188C10.8577 9.21144 10.8442 9.10406 10.8306 8.9967C10.8216 8.90177 10.8046 8.80796 10.7866 8.70964C10.764 8.56611 10.7323 8.42373 10.6961 8.28018L10.6837 8.22595C10.6566 8.12761 10.634 8.03382 10.6024 7.9355C10.5131 7.62695 10.4102 7.32635 10.3017 7.04494C10.2622 6.93305 10.217 6.82569 10.1717 6.71833C10.1051 6.55672 10.0373 6.4098 9.97511 6.27079C9.94347 6.20749 9.91635 6.14985 9.88922 6.09109C9.85871 6.02441 9.82707 5.95773 9.79541 5.89445C9.77282 5.84586 9.74682 5.80065 9.72873 5.75544L9.53548 5.39831C9.50836 5.34971 9.55357 5.29207 9.60668 5.30677L10.8159 5.6345H10.8193C10.8216 5.6345 10.8227 5.63565 10.8238 5.63565L10.9832 5.67971L11.1584 5.72945L11.2228 5.74752V5.02875C11.2228 4.68179 11.5008 4.40039 11.8444 4.40039C12.0162 4.40039 12.1721 4.47046 12.284 4.5846C12.3959 4.69875 12.466 4.85471 12.466 5.02875V6.09562L12.5948 6.13177C12.605 6.13518 12.6151 6.13969 12.6242 6.14646C12.6558 6.1702 12.701 6.20523 12.7587 6.24819C12.8039 6.28434 12.8525 6.32843 12.9112 6.37364C13.0276 6.46742 13.1666 6.58836 13.3192 6.72737C13.3599 6.7624 13.3995 6.79857 13.4356 6.83473C13.6323 7.01782 13.8527 7.23254 14.0629 7.46988C14.1216 7.53656 14.1793 7.60436 14.238 7.67555C14.2968 7.74789 14.359 7.81908 14.4132 7.89029C14.4844 7.98522 14.5613 8.08354 14.6279 8.18639C14.6596 8.23499 14.6957 8.28471 14.7263 8.33331C14.8121 8.46326 14.8879 8.59777 14.9602 8.73226C14.9907 8.79441 15.0224 8.86221 15.0495 8.92889C15.1297 9.10859 15.193 9.29167 15.2337 9.47476C15.2461 9.51431 15.2552 9.55726 15.2597 9.59569V9.60473C15.2732 9.65896 15.2778 9.7166 15.2823 9.77536C15.3004 9.96298 15.2913 10.1506 15.2506 10.3393C15.2337 10.4196 15.2111 10.4953 15.184 10.5755C15.1568 10.6524 15.1297 10.7326 15.0947 10.8083C15.0269 10.9654 14.9466 11.1225 14.8517 11.2694C14.8212 11.3237 14.785 11.3813 14.7488 11.4356C14.7093 11.4932 14.6686 11.5474 14.6324 11.6006C14.5827 11.6684 14.5296 11.7396 14.4754 11.8029C14.4268 11.8695 14.377 11.9362 14.3228 11.995C14.2471 12.0843 14.1747 12.169 14.099 12.2504C14.0538 12.3035 14.0052 12.3578 13.9555 12.4064C13.9069 12.4606 13.8572 12.5092 13.812 12.5544C13.7363 12.6301 13.673 12.6889 13.6198 12.7375L13.4955 12.8516C13.4774 12.8675 13.4537 12.8765 13.4288 12.8765H12.466V14.1118H13.6775C13.9487 14.1118 14.2064 14.0157 14.4143 13.8394C14.4855 13.7772 14.7963 13.5083 15.1636 13.1025C15.176 13.089 15.1919 13.0788 15.21 13.0743L18.5563 12.1069C18.6185 12.0888 18.6818 12.1363 18.6818 12.2018Z"
        fill="#C3FF50"
      />
    </g>
    <defs>
      <clipPath id="clip_001_opensea">
        <rect width="22" height="27" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ShareIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9963 16.2661L7.86463 12.7002M7.8545 9.80408L14.9929 6.23487M21.1184 17.7116C21.1184 19.496 19.6718 20.9426 17.8874 20.9426C16.103 20.9426 14.6564 19.496 14.6564 17.7116C14.6564 15.9272 16.103 14.4806 17.8874 14.4806C19.6718 14.4806 21.1184 15.9272 21.1184 17.7116ZM21.1184 4.78763C21.1184 6.57206 19.6718 8.01863 17.8874 8.01863C16.103 8.01863 14.6564 6.57206 14.6564 4.78763C14.6564 3.00321 16.103 1.55664 17.8874 1.55664C19.6718 1.55664 21.1184 3.00321 21.1184 4.78763ZM8.19441 11.2496C8.19441 13.0341 6.74785 14.4806 4.96342 14.4806C3.17899 14.4806 1.73242 13.0341 1.73242 11.2496C1.73242 9.46519 3.17899 8.01863 4.96342 8.01863C6.74785 8.01863 8.19441 9.46519 8.19441 11.2496Z"
      stroke="#212121"
      strokeWidth="2.23684"
    />
  </svg>
);
