import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  Switch,
  SwitchProps,
  styled,
  Select,
  MenuItem,
} from "@material-ui/core";

import * as MetaverseAPI from "shared/services/API/MetaverseAPI";
import { useTypedSelector } from "store/reducers/Reducer";
import { useAlertMessage } from "shared/hooks/useAlertMessage";
import useWindowDimensions from "shared/hooks/useWindowDimensions";
import { PrimaryButton, SecondaryButton } from "shared/ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import { MasonryGrid } from "shared/ui-kit/MasonryGrid/MasonryGrid";
import CollectionCard from "components/PriviMetaverse/components/cards/CollectionCard";
import RealmExtensionProfileCard from "components/PriviMetaverse/components/cards/RealmExtensionProfileCard";
import Box from "shared/ui-kit/Box";
import { switchNetwork } from "shared/functions/metamask";
import { BlockchainNets } from "shared/constants/constants";
import TransactionProgressModal from "shared/ui-kit/Modal/Modals/TransactionProgressModal";
import FileUploadingModal from "components/PriviMetaverse/modals/FileUploadingModal";
import { InfoTooltip } from "shared/ui-kit/InfoTooltip";
import CreatingStep from "../CreatingStep";
import NFTOption from "../NFTOption";
import CreateCollection from "../CreateCollection";
import { ReactComponent as AssetIcon } from "assets/icons/mask_group.svg";
import { FilterAssetTypeOptionNames } from "shared/constants/constants";
import { useModalStyles } from "./index.styles";

const COLUMNS_COUNT_BREAK_POINTS_THREE = {
  375: 1,
  600: 2,
  1000: 3,
  1440: 3,
};
const CollectionList = ({
  handleNext,
  handleCancel,
  handleSelect,
}: {
  handleNext: () => void;
  handleCancel: () => void;
  handleSelect: (item: any) => void;
}) => {
  const classes = useModalStyles({});
  const userSelector = useTypedSelector(state => state.user);
  const { showAlertMessage } = useAlertMessage();
  const width = useWindowDimensions().width;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [image, setImage] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const [isDraft, setIsDraft] = useState<boolean>(true);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [chain, setChain] = useState<string>(BlockchainNets[0].value);

  // Transaction Modal
  const [txModalOpen, setTxModalOpen] = useState<boolean>(false);
  const [txSuccess, setTxSuccess] = useState<boolean | null>(null);
  const [txHash, setTxHash] = useState<string>("");

  const [openCreateCollectionModal, setOpenCreateCollectionModal] = useState<boolean>(false);
  const loadingCount = React.useMemo(() => (width > 1000 ? 6 : width > 600 ? 3 : 6), [width]);
  const [currentCollection, setCurrentCollection] = useState<any>(null);
  const [curPage, setCurPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(0);
  const [loadingCollection, setLoadingCollection] = React.useState<boolean>(true);

  const [collections, setCollections] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, []);

  const onImageInput = e => {
    const files = e.target.files;
    if (files.length) {
      handleImageFiles(files);
    }
    e.preventDefault();

    if (imageInputRef !== null && imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const handleImageFiles = (files: any) => {
    if (files && files[0] && files[0].type) {
      setImage(files[0]);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageFile(reader.result);
        let image = new Image();
        if (reader.result !== null && (typeof reader.result === "string" || reader.result instanceof String))
          image.src = reader.result.toString();
      });

      reader.readAsDataURL(files[0]);
    }
  };

  const handleRefreshCollection = () => {
    setCurPage(1);
    setLoadingCollection(true);
    MetaverseAPI.getAssets(
      12,
      1,
      "DESC",
      ["COLLECTION"],
      undefined,
      userSelector.hashId,
      null,
      undefined,
      undefined,
      undefined,
      ""
    )
      .then(res => {
        if (res.success) {
          const items = res.data.elements;
          if (items && items.length > 0) {
            setCollections(res.data.elements);
            if (res.data.page && curPage <= res.data.page.max) {
              setCurPage(curPage => curPage + 1);
              setLastPage(res.data.page.max);
            } else {
              setHasMore(false);
            }
          }
        }
      })
      .finally(() => setLoadingCollection(false));
  };

  const loadData = () => {
    setLoadingCollection(true);
    MetaverseAPI.getAssets(
      12,
      curPage,
      "DESC",
      ["COLLECTION"],
      undefined,
      userSelector.hashId,
      null,
      undefined,
      undefined,
      undefined,
      ""
    )
      .then(res => {
        if (res.success) {
          const items = res.data.elements;
          if (items && items.length > 0) {
            setCollections(res.data.elements);
            if (res.data.page && curPage <= res.data.page.max) {
              setCurPage(curPage => curPage + 1);
              setLastPage(res.data.page.max);
            } else {
              setHasMore(false);
            }
          }
        }
      })
      .finally(() => setLoadingCollection(false));
  };
  const loadMore = () => {
    setLoadingCollection(true);
    MetaverseAPI.getAssets(
      12,
      curPage,
      "DESC",
      ["COLLECTION"],
      undefined,
      userSelector.hashId,
      null,
      undefined,
      undefined,
      undefined,
      ""
    )
      .then(res => {
        if (res.success) {
          const items = res.data.elements;
          if (items && items.length > 0) {
            setCollections([...collections, ...res.data.elements]);
            if (res.data.page && curPage <= res.data.page.max) {
              setCurPage(curPage => curPage + 1);
              setLastPage(res.data.page.max);
              curPage >= res.data.page.max && setHasMore(false);
            } else {
              setHasMore(false);
            }
          }
        }
      })
      .finally(() => setLoadingCollection(false));
  };

  return (
    <>
      {!openCreateCollectionModal ? (
        <div className={classes.otherContent}>
          {loadingCollection || collections.length ? (
            <>
              <Box display="flex" alignItems="center" justifyContent="space-between" width={1}>
                <Box className={classes.typo4}>Select Collection</Box>
                <div
                  className={classes.createCollectionBtn}
                  onClick={() => setOpenCreateCollectionModal(true)}
                >
                  <PlusIcon />
                  create new collection
                </div>
              </Box>
              <Box width={1} pb={20}>
                <InfiniteScroll
                  hasChildren={collections?.length > 0}
                  dataLength={collections?.length}
                  scrollableTarget={"scrollContainer"}
                  next={loadMore}
                  hasMore={hasMore}
                  loader={
                    loadingCollection && (
                      <Box mt={2}>
                        <MasonryGrid
                          gutter={"16px"}
                          data={Array(loadingCount).fill(0)}
                          renderItem={(item, _) => <CollectionCard nft={{}} isLoading={true} />}
                          columnsCountBreakPoints={COLUMNS_COUNT_BREAK_POINTS_THREE}
                        />
                      </Box>
                    )
                  }
                >
                  <Grid container spacing={3} style={{ marginBottom: 24 }}>
                    {collections?.map((item, index) => (
                      <Grid item key={`trending-pod-${index}`} md={4} sm={6} xs={12}>
                        <CollectionCard
                          item={item}
                          isLoading={false}
                          onClick={() => handleSelect(item)}
                          selectable={true}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </InfiniteScroll>
              </Box>
            </>
          ) : (
            <Box pb={20}>
              <Box className={classes.typo4}>All of your collections</Box>
              <Box display="flex" alignItems="center" mt={6} mb={3}>
                <Box border="2px dashed #FFFFFF40" borderRadius={12} className={classes.sideBox} />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed #FFFFFF"
                  borderRadius={12}
                  mx={"30px"}
                  className={classes.centerBox}
                >
                  <img src={require("assets/metaverseImages/dreem_fav_icon.png")} />
                </Box>
                <Box border="2px dashed #FFFFFF40" borderRadius={12} className={classes.sideBox} />
              </Box>
              <Box className={classes.typo3}>
                No collections created yet, Create Collection with the button above.
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" width={1} mt="20px">
                <div
                  className={classes.createCollectionBtn}
                  onClick={() => setOpenCreateCollectionModal(true)}
                >
                  <PlusIcon />
                  create new collection
                </div>
              </Box>
            </Box>
          )}
        </div>
      ) : (
        <div className={classes.otherContent}>
          <div className={classes.typo1}>Creating New Collection</div>
          <Box className={classes.typo3} mb={3}>
            Fill all the details of your new collection
          </Box>
          <CreateCollection
            handleNext={() => {}}
            handleCancel={() => setOpenCreateCollectionModal(false)}
            handleRefresh={() => handleRefreshCollection()}
          />
        </div>
      )}
    </>
  );
};

const PlusIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 12.0488V2.04883M1.5 7.04883L11.5 7.04883"
      stroke="#151515"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
  </svg>
);

export default CollectionList;
