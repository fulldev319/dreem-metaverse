import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useWeb3React } from "@web3-react/core";

import { useMediaQuery, useTheme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { PrimaryButton } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import { RootState } from "store/reducers/Reducer";
import RangeSlider from "shared/ui-kit/RangeSlider";
import { blockedByMeNFTStyles } from "./index.styles";
import { sanitizeIfIpfsUrl } from "shared/helpers";

const isProd = process.env.REACT_APP_ENV === "prod";
export default ({ item, isLoading }: { item: any; isLoading?: boolean }) => {
  const classes = blockedByMeNFTStyles({});
  const history = useHistory();
  const { account } = useWeb3React();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  const [closeTime, setCloseTime] = useState<any>(null);
  const tokens = useSelector((state: RootState) => state.marketPlace.tokenList);

  useEffect(() => {
    const interval = setInterval(() => {
      if (item) {
        let formatDate = getRemainingTime(item.history);
        setCloseTime(formatDate);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [item]);

  const handleClickAddress = () => {
    const address = item?.Address || "";
    if (item?.Chain?.toLowerCase() === "polygon") {
      window.open(`https://${!isProd ? "mumbai." : ""}polygonscan.com/address/${address}`, "_blank");
    } else if (item?.Chain.toLowerCase() === "bsc") {
      window.open(`https://bscscan.com/address/${address}`, "_blank");
    }
  };

  const getRemainingTime = _blockingInfo => {
    let value = Math.max(
      _blockingInfo?.ReservePeriod * 3600 * 24 * 1000 + _blockingInfo?.created - Date.now(),
      0
    );
    value = value / 1000;

    let day_unit = 3600 * 24;
    let hr_unit = 3600;
    let min_unit = 60;
    return {
      day: parseInt((value / day_unit).toString()),
      hour: parseInt(((value % day_unit) / hr_unit).toString()),
      min: parseInt(((value / min_unit) % min_unit).toString()),
      seconds: Math.floor(value % 60),
    };
  };

  const getTokenSymbol = addr => {
    if (tokens.length == 0 || !addr) return 0;
    let token = tokens.find(token => token.Address.toLowerCase() === addr.toLowerCase());
    return token?.Symbol || "";
  };

  const totalCollateralPercent = Number(item.history?.TotalCollateralPercent);
  const collateralPercent = Number(item.history?.CollateralPercent);

  const isExpired = item.history?.ReservePeriod * 3600 * 24 * 1000 + item.history?.created - Date.now() <= 0;
  const isClaimed = item.ownerAddress?.toLowerCase() === account?.toLowerCase();
  const isPaid = item.history?.status === "SOLD";

  const chainImage = item.Chain?.toLowerCase().includes("polygon")
    ? require("assets/tokenImages/POLYGON.png")
    : require("assets/metaverseImages/bsc.png");

  return (
    <Box className={classes.borderContainer}>
      {isLoading ? (
        <Box className={classes.skeleton}>
          <Skeleton variant="rect" width="100%" height={226} />
          <Skeleton variant="rect" width="100%" height={24} style={{ marginTop: "8px" }} />
          <Skeleton variant="rect" width="80%" height={24} style={{ marginTop: "8px" }} />
          <Skeleton variant="rect" width="80%" height={24} style={{ marginTop: "8px" }} />
          <Skeleton variant="rect" width="80%" height={24} style={{ marginTop: "8px" }} />
        </Box>
      ) : (
        <Box display={"flex"} flexDirection={"column"} className={classes.container}>
          <Box display="flex" alignItems="center" color="#fff" width="100%">
            <img
              src={sanitizeIfIpfsUrl(item?.image) ?? require(`assets/backgrounds/digital_art_1.png`)}
              className={classes.nftImage}
              alt={item.nftName}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              ml={4}
              flex={1}
              height="150px"
            >
              <Box className={classes.nftName}>{item?.name}</Box>
              <Box
                display="flex"
                alignItems="center"
                flex={1}
                flexDirection={isTablet ? "column" : "row"}
                mt={isMobile ? 2 : 0}
              >
                <Box
                  display={"flex"}
                  alignItems={isMobile ? "start" : "center"}
                  flex={isTablet ? 1 : 0.5}
                  width={isTablet ? 1 : 0.5}
                  flexDirection={isMobile ? "column" : "row"}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    flex={isTablet ? 0.5 : 0.25}
                    className={classes.section}
                  >
                    <Box className={classes.header}>Blocking Price</Box>
                    <Box>{`${item.history?.Price} ${getTokenSymbol(item.history?.PaymentToken)}`}</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    flex={isTablet ? 0.5 : 0.25}
                    pl={isMobile ? 0 : 6}
                    className={classes.section}
                  >
                    <Box className={classes.header}>Collateral</Box>
                    <Box>
                      {`${(
                        (item.history?.Price *
                          (item.history?.TotalCollateralPercent || item.history?.CollateralPercent)) /
                        100
                      ).toFixed(2)} ${getTokenSymbol(item.history?.PaymentToken)}`}
                    </Box>
                  </Box>
                </Box>
                {!isMobile && (
                  <Box
                    display="flex"
                    alignItems="center"
                    flex={0.5}
                    pl={isTablet ? 0 : 3}
                    mt={isTablet ? 3 : 0}
                  >
                    {isExpired ? (
                      isPaid ? (
                        <Box className={classes.paymentStatus} mr={2} color="#EEFF21">
                          Paid
                        </Box>
                      ) : (
                        <Box className={classes.paymentStatus} mr={2} color="#FF6868">
                          You’ve lost the posibility to buy
                        </Box>
                      )
                    ) : (
                      <Box className={classes.paymentStatus} mr={2} color="#ffffff">
                        Payment In
                      </Box>
                    )}
                    <span className={classes.time}>{closeTime?.day} day(s) </span>
                    <span className={classes.time}>{closeTime?.hour} hour(s) </span>
                    <span className={classes.time}>{closeTime?.min} min</span>
                    <span className={classes.time}>{closeTime?.seconds} sec</span>
                  </Box>
                )}
              </Box>
              {!isMobile && !isTablet && (
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" mr={8}>
                    <Box className={classes.header}>Collateral Pct.</Box>
                    <Box>
                      {item.history?.TotalCollateralPercent
                        ? Number(item.history?.TotalCollateralPercent).toFixed(2)
                        : "0.00"}
                      %
                    </Box>
                  </Box>
                  {isExpired ? (
                    isPaid ? (
                      isClaimed ? (
                        <Box mr={4.5}>
                          <Box className={classes.gradientText}>Already Claimed</Box>
                          <PrimaryButton
                            size="medium"
                            className={classes.primaryButton}
                            onClick={() => handleClickAddress()}
                          >
                            check on {item.Chain}scan
                            <img
                              src={chainImage}
                              style={{ width: "16px", height: "16px", marginLeft: "8px" }}
                            />
                          </PrimaryButton>
                        </Box>
                      ) : (
                        <Box mr={4.5}>
                          <PrimaryButton
                            size="medium"
                            className={classes.primaryButton}
                            onClick={() => {
                              history.push(`/P2E/${item.Slug}/${item.id}`);
                            }}
                          >
                            CLAIM YOUR NFT
                          </PrimaryButton>
                        </Box>
                      )
                    ) : (
                      <Box mr={4.5}>
                        <PrimaryButton
                          size="medium"
                          className={classes.primaryButton}
                          onClick={() => {
                            history.push(`/P2E/${item.Slug}/${item.id}`);
                          }}
                        >
                          CLAIM OUTSTANDING COLLATERAL
                        </PrimaryButton>
                      </Box>
                    )
                  ) : (
                    <Box display="flex" flexDirection="column" flex={1} mr={4} mt={1.5}>
                      <RangeSlider
                        value={(Number(totalCollateralPercent) / Number(collateralPercent) - 1) * 100 + 20}
                        variant="transparent"
                        onChange={(event, newValue) => {}}
                      />
                      <Box display="flex" width={1} mt={1.5} fontSize={14}>
                        <Box flex={20}>
                          <strong>0%</strong>
                        </Box>
                        <Box flex={30} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                          <span>{Number(collateralPercent).toFixed(1)}%</span>
                          <span style={{ marginLeft: -8, marginTop: 4 }}>High Risk</span>
                        </Box>
                        <Box flex={25} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                          <span>{Number(collateralPercent * 1.5).toFixed(1)}%</span>
                          <span style={{ marginLeft: -16, marginTop: 4 }}>Medium Risk</span>
                        </Box>
                        <Box flex={25} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                          <span>
                            <strong>{Number(collateralPercent * 1.75).toFixed(1)}%</strong>
                          </span>
                          <span style={{ marginLeft: -7, marginTop: 4 }}>
                            <strong>Low Risk</strong>
                          </span>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
            <img
              src={require(`assets/icons/arrow_white_right.png`)}
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push(`/P2E/${item.Slug}/${item.id}`);
              }}
            />
          </Box>
          {isMobile && (
            <Box
              display="flex"
              flexDirection={"column"}
              flex={0.5}
              pl={isTablet ? 0 : 3}
              mt={isTablet ? 3 : 0}
            >
              {isExpired ? (
                isPaid ? (
                  <Box className={classes.paymentStatus} mr={2} color="#EEFF21">
                    Paid
                  </Box>
                ) : (
                  <Box className={classes.paymentStatus} mr={2} color="#FF6868">
                    You’ve lost the posibility to buy
                  </Box>
                )
              ) : (
                <Box className={classes.paymentStatus} mr={2} color="#ffffff">
                  Payment In
                </Box>
              )}
              <Box display={"flex"}>
                <span className={classes.time}>{closeTime?.day} day(s) </span>
                <span className={classes.time}>{closeTime?.hour} hour(s) </span>
                <span className={classes.time}>{closeTime?.min} min</span>
                <span className={classes.time}>{closeTime?.seconds} sec</span>
              </Box>
            </Box>
          )}
          {isTablet && (
            <Box
              display="flex"
              alignItems={isMobile ? "start" : "center"}
              justifyContent="space-between"
              flexDirection={isMobile ? "column" : "row"}
              width={1}
            >
              <Box
                display="flex"
                flexDirection="column"
                mx={isMobile ? 0 : 3}
                mb={isMobile ? 0 : 3}
                mt={isMobile ? 3 : 0}
              >
                <Box className={classes.header}>Collateral Pct.</Box>
                <Box>
                  {item.history?.TotalCollateralPercent
                    ? Number(item.history?.TotalCollateralPercent).toFixed(2)
                    : "0.00"}
                  %
                </Box>
              </Box>
              {isExpired ? (
                isPaid ? (
                  isClaimed ? (
                    <Box mr={4.5}>
                      <Box className={classes.gradientText}>Already Claimed</Box>
                      <PrimaryButton
                        size="medium"
                        className={classes.primaryButton}
                        onClick={() => handleClickAddress()}
                      >
                        check on {item.Chain}scan
                        <img src={chainImage} style={{ width: "16px", height: "16px", marginLeft: "8px" }} />
                      </PrimaryButton>
                    </Box>
                  ) : (
                    <Box mr={4.5}>
                      <PrimaryButton
                        size="medium"
                        className={classes.primaryButton}
                        onClick={() => {
                          history.push(`/P2E/${item.Slug}/${item.id}`);
                        }}
                      >
                        CLAIM YOUR NFT
                      </PrimaryButton>
                    </Box>
                  )
                ) : (
                  <Box mr={4.5}>
                    <PrimaryButton
                      size="medium"
                      className={classes.primaryButton}
                      onClick={() => {
                        history.push(`/P2E/${item.Slug}/${item.id}`);
                      }}
                    >
                      CLAIM OUTSTANDING COLLATERAL
                    </PrimaryButton>
                  </Box>
                )
              ) : (
                <Box display="flex" flexDirection="column" flex={1} mr={4} mt={1.5} width={1}>
                  <RangeSlider
                    value={Number(collateralPercent / totalCollateralPercent - 1) * 100 + 20}
                    variant="transparent"
                    onChange={(event, newValue) => {}}
                  />
                  <Box display="flex" width={1} mt={1.5} fontSize={12}>
                    <Box flex={20}>
                      <strong>0%</strong>
                    </Box>
                    <Box flex={30} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                      <span>{Number(collateralPercent).toFixed(1)}%</span>
                      <span style={{ marginLeft: -8, marginTop: 4 }}>High Risk</span>
                    </Box>
                    <Box flex={25} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                      <span>{Number(collateralPercent * 1.5).toFixed(1)}%</span>
                      <span style={{ marginLeft: -16, marginTop: 4 }}>Medium Risk</span>
                    </Box>
                    <Box flex={25} ml={"-26px"} display={"flex"} flexDirection={"column"}>
                      <span>
                        <strong>{Number(collateralPercent * 1.75).toFixed(1)}%</strong>
                      </span>
                      <span style={{ marginLeft: -7, marginTop: 4 }}>
                        <strong>Low Risk</strong>
                      </span>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
