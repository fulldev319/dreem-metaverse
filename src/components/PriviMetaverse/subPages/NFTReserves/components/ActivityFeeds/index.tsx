import React, { useEffect, useState } from "react";

import { getTrendingGameNfts } from "shared/services/API/ReserveAPI";
import { useTheme, useMediaQuery } from "@material-ui/core";

import Box from "shared/ui-kit/Box";
import Avatar from "shared/ui-kit/Avatar";
import { getDefaultAvatar } from "shared/services/user/getUserAvatar";
import { LoadingWrapper } from "shared/ui-kit/Hocs";

import { useStyles } from "./index.styles";
import { getNftGameFeed } from "shared/services/API/DreemAPI";
import { listenerSocket } from "components/Login/Auth";
import { getAbbrAddress } from "shared/helpers";
import { useHistory } from "react-router-dom";

const isProd = process.env.REACT_APP_ENV === "prod";

export default function ActivityFeeds({ onClose }) {
  const classes = useStyles({});

  const theme = useTheme();
  const isBigTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [selectedTab, setSelectedTab] = useState<"feed" | "trending">("feed");
  const [nftList, setNftList] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [transactions, setTransactions] = useState<any[]>([]);
  const [transactionloading, setTransactionLoading] = useState<boolean>(false);
  const [transactionHasMore, setTransactionHasMore] = useState<boolean>(false);
  const [lastTransactionId, setLastTransactionId] = useState<any>();
  const history = useHistory();

  const isProd = process.env.REACT_APP_ENV === "prod";

  useEffect(() => {
    if (selectedTab === "feed") {
      loadTransactions(true);
    } else {
      setLoading(true);
      getTrendingGameNfts({
        mode: isProd ? "main" : "test",
        sortBy: "transaction_count",
      })
        .then(res => {
          setNftList(res.data);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [selectedTab]);

  useEffect(() => {
    if (listenerSocket) {
      const updateMarketPlaceFeedHandler = _transaction => {
        setTransactions(prev => {
          let _transactions = prev.map(transaction =>
            _transaction.id === transaction.id ? _transaction : transaction
          );
          if (_transactions.length === 0 || _transactions[0].id < _transaction.id) {
            _transactions = [_transaction].concat(_transactions);
          }
          return _transactions;
        });
      };

      listenerSocket.on("updateMarketPlaceFeed", updateMarketPlaceFeedHandler);

      return () => {
        listenerSocket.removeListener("updateMarketPlaceFeed", updateMarketPlaceFeedHandler);
      };
    }
  }, [listenerSocket]);

  const loadTransactions = async (init = false) => {
    if (transactionloading) return;
    try {
      setTransactionLoading(true);

      const response = await getNftGameFeed({
        gameId: undefined,
        lastId: init ? undefined : lastTransactionId,
        searchValue: undefined,
        mode: isProd ? "main" : "test",
        status: undefined,
      });
      if (response.success) {
        const newCharacters = response.data.list;
        const newLastId = response.data.lastId;
        const newhasMore = response.data.hasMore;

        setTransactions(prev => (init ? newCharacters : [...prev, ...newCharacters]));
        setLastTransactionId(newLastId);
        setTransactionHasMore(newhasMore);
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTransactionLoading(false);
    }
  };

  const accTitle = item => {
    const info =
      item.operator || item.seller || item.fromSeller || item.toSeller || item.Address || undefined;

    if (info) {
      return info.substring(0, 6) + "..." + info.substring(info.length - 4, info.length);
    }
    return "";
  };

  const goToNft = item => {
    history.push(`/P2E/${item.slug || item.Slug}/${item.tokenId}`);
  };

  return (
    <Box className={classes.root}>
      {!isMobile && (
        <div className={classes.collapseIcon} onClick={onClose}>
          <CollapseIcon />
        </div>
      )}
      <div className={classes.switch}>
        <div
          className={classes.switchButton}
          style={{
            background:
              selectedTab === "feed"
                ? "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)"
                : "transparent",
            color: selectedTab === "feed" ? "#212121" : "#fff",
          }}
          onClick={() => setSelectedTab("feed")}
        >
          Activity Feed
        </div>
        <div
          className={classes.switchButton}
          style={{
            background:
              selectedTab === "trending"
                ? "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)"
                : "transparent",
            color: selectedTab === "trending" ? "#212121" : "#fff",
          }}
          onClick={() => setSelectedTab("trending")}
        >
          Trending
        </div>
      </div>
      <Box className={classes.content}>
        {selectedTab === "feed" ? (
          transactions && transactions.length > 0 ? (
            transactions.map((item, index) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={3.5}
                pl={0.5}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  goToNft(item);
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Avatar size={32} rounded={true} radius={0} image={item?.image || getDefaultAvatar()} />
                  <Box display={"flex"} flexDirection={"column"} ml={1.5}>
                    <Box className={classes.typo1}>{item.name}</Box>
                    <Box className={classes.typo2} mt={0.25}>
                      {accTitle(item)}
                    </Box>
                  </Box>
                </Box>
                <Box
                  className={classes.typeTag}
                  style={{
                    background:
                    item.type && item.type.toLowerCase() === "mint"
                    ? "conic-gradient(from 31.61deg at 50% 50%, #10bd04 -73.13deg, #0a8202 15deg, #16ed0770 103.13deg, #16ed07 210deg, #10bd04 286.87deg, #0a8202 375deg)"
                    : item.type && item.type.toLowerCase() === "rented"
                      ? "conic-gradient(from 31.61deg at 50% 50%, #F2C525 -73.13deg, #EBBD27 15deg, rgba(213, 168, 81, 0.76) 103.13deg, #EBED7C 210deg, #F2C525 286.87deg, #EBBD27 375deg)"
                      : item.type && item.type.toLowerCase() === "sold"
                        ? "conic-gradient(from 31.61deg at 50% 50%, #91D502 -25.18deg, #E5FF46 15deg, rgba(186, 252, 0, 0.76) 103.13deg, #A3CC00 210deg, #91D502 334.82deg, #E5FF46 375deg)"
                        : item.type && item.type.toLowerCase() === "blocked"
                          ? "conic-gradient(from 31.61deg at 50% 50%, #F24A25 -73.13deg, #FF3124 15deg, rgba(202, 36, 0, 0.76) 103.13deg, #F2724A 210deg, #F24A25 286.87deg, #FF3124 375deg)"
                          : item.type && item.type.toLowerCase() === "transfer"
                            ? "conic-gradient(from 180deg at 50% 50%, #C7CAFE 0deg, rgba(196, 214, 250, 0.92) 135deg, rgba(238, 239, 244, 0.75) 230.62deg, rgba(114, 145, 255, 0.87) 303.75deg, #C7CAFE 360deg)"
                            : "",
                  }}
                >
                  {item.type}
                </Box>
              </Box>
            ))
          ) : (
            <Box fontSize={16} fontFamily={"Rany"} ml={2}>
              No Data
            </Box>
          )
        ) : loading ? (
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" flex={1}>
            <LoadingWrapper loading={loading} />
          </Box>
        ) : nftList && nftList.length > 0 ? (
          nftList.map((item, index) => (
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={3.5} pl={0.5}>
              <Box display={"flex"} alignItems={"center"}>
                <Avatar size={49} rounded={false} radius={5} image={item?.image || getDefaultAvatar()} />
                <Box display={"flex"} flexDirection={"column"} ml={1.5}>
                  <Box className={classes.typo1}>{item.name}</Box>
                  <Box className={classes.typo2} mt={0.25}>
                    {item.owner?.name || getAbbrAddress(item.currentOwner, 7, 2)}
                  </Box>
                </Box>
              </Box>
              <Box className={classes.orderTag}>{`# ${item.tokenId}`}</Box>
            </Box>
          ))
        ) : (
          <Box>NO DATA</Box>
        )}
      </Box>
    </Box>
  );
}

const CollapseIcon = () => (
  <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.02065 4L0.935547 4L0.935545 18.8085L4.02065 18.8085L4.02065 4Z"
      fill="white"
      fillOpacity="0.5"
    />
    <path
      d="M8 11.25H22.5M8 11.25L14.5 5M8 11.25L14.5 17.5"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="3"
    />
  </svg>
);
