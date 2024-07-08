import React from "react";
import Carousel from "react-elastic-carousel";
// import cls from "classnames";
// import { useHistory } from "react-router-dom";
import Box from "shared/ui-kit/Box";
import { PrimaryButton, CircularLoadingIndicator } from "shared/ui-kit";
import { usePageStyles } from "./index.styles";
// import { useTheme } from "@material-ui/core";
import DaoUpdateCard from "components/PriviMetaverse/components/cards/DaoUpdateCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function OverviewPage(props) {
  const classes = usePageStyles();
  const [realmExtraData, setRealmExtraData] = React.useState<any>(null);

  React.useEffect(() => {
    if (props.realmExtraData) {
      setRealmExtraData(props.realmExtraData);
    }
  }, [props.realmExtraData]);

  return (
    <Box className={classes.container}>
      {/* <Box className={classes.videoContainer}>
        <video autoPlay muted loop height="auto" width="100%">
          <source src={require("assets/metaverseImages/play.mp4")} type="video/mp4" />
        </video>
      </Box> */}
      {/* <Box className={classes.title} mt={6} mb={3}>
        <GameIcon /> Game Tokens & Stats Overview
      </Box> */}
      {/* <Box className={classes.tokenStatContainer}>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              token #1
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <img src={require("assets/gameImages/dreem_token.png")} />
              <Box>
                <Box className={classes.typo1}>DREEM</Box>
                <Box className={classes.typo2}>DREEM</Box>
              </Box>
              <Box >
                <Box className={classes.typo3}>224 USDT</Box>
                <Box className={classes.typo4}>5%</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              24h Volume
              <InfoIcon />
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <VolumnIcon />
              <Box className={classes.typo3}>24 556 USDt </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              Holders
              <InfoIcon />
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <HoldersIcon />
              <Box className={classes.typo3}>2455</Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              Weekly Active Players
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <WeeklyActiveIcon />
              <Box className={classes.typo3}>455 456</Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              Revenue Monthly
              <InfoIcon />
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <RevenueMonthlyIcon />
              <Box className={classes.typo3}>24 556 USDT</Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.grayBgContainer}>
          <Box className={classes.tokenStatItem}>
            <Box className={classes.tokenStatItemTop}>
              Assets Revenue Monthly
            </Box>
            <Box className={classes.tokenStatItemBottom}>
              <AssetRevenueMonthlyIcon />
              <Box className={classes.typo3}>24 556 USDT</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.betweenContainer} mt={6} mb={3}>
        <Box className={classes.title}>
          <PlayerIcon /> Top Players <span className={classes.typo2}>24 455 Total Players </span>
        </Box>
        <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
          show all
        </PrimaryButton>
      </Box>
      <Box className={classes.playersContainer}>
        {Array(11)
          .fill(0)
          .map((item, index) => (
            <Box display="flex" flexDirection={"column"} justifyContent="center" gridGap={8}>
              <div className={classes.roundImageBox}>
                <img src={`${require("assets/gameImages/wall_circle_" + ((index % 11) + 1) + ".png")}`} />
              </div>
              <div className={classes.typo5}>@uslug</div>
            </Box>
          ))}
      </Box>
      <Box className={classes.girdContainer}>
        <Box className={classes.subContainer}>
          <Box className={classes.title} mt={6} mb={3}>
            <RevenueSummaryIcon /> Revenue Summary
          </Box>
          <Box className={cls(classes.subContent, classes.grayBgContainer)}>
            <Box display={"flex"} gridGap={8}>
              <PrimaryButton className={classes.fillBtn} size={"medium"} onClick={() => {}}>
                Weekly
              </PrimaryButton>
              <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
                Monthly
              </PrimaryButton>
            </Box>
            <Box className={classes.girdContainer} pl={2} pr={2} pb={3}>
              <Box className={classes.subContainer} mt={3}>
                <Box className={classes.typo6}>sales weekly</Box>
                <Box display={"flex"} alignItems="flex-start">
                  <Box className={cls(classes.typo7, classes.color1)}>12 456</Box>
                  <Box className={classes.typo8}>USDT</Box>
                </Box>
              </Box>
              <Box className={classes.subContainer} mt={3}>
                <Box className={classes.typo6}>rentals weekly</Box>
                <Box display={"flex"} alignItems="flex-start">
                  <Box className={cls(classes.typo7, classes.color2)}>12 456</Box>
                  <Box className={classes.typo8}>USDT</Box>
                </Box>
              </Box>
              <Box className={classes.flexWrap}></Box>
              <Box className={classes.subContainer} mt={3}>
                <Box className={classes.typo6}>blocking weekly </Box>
                <Box display={"flex"} alignItems="flex-start">
                  <Box className={cls(classes.typo7, classes.color3)}>12 456</Box>
                  <Box className={classes.typo8}>USDT</Box>
                </Box>
              </Box>
              <Box className={classes.subContainer} mt={3}>
                <Box className={classes.typo6}>total transactions</Box>
                <Box display={"flex"} alignItems="flex-start">
                  <Box className={cls(classes.typo7, classes.color4)}>256</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.subContainer}>
          <Box className={classes.title} mt={6} mb={3}>
            <RecentTransactionIcon /> Recent Transactions
          </Box>
          <Box className={classes.subContainer}>
            <Box className={classes.vScroll}>
              {Array(10)
                .fill(0)
                .map((row, index) => {
                  const type = ["mint", "rented", "blocked", "transfer"][index % 4];
                  return (
                    <Box
                      className={classes.grayBgContainer}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className={classes.roundImageBox} style={{ width: 38, height: 38 }}>
                        <img src={`${require("assets/gameImages/transaction_sample.png")}`} />
                      </div>
                      <Box className={classes.typo5}>NFT Name </Box>
                      <Box className={classes.typo5}>0.08230 ETH </Box>
                      <Box style={{ width: 120, display: "flex", justifyContent: "center" }}>
                        <Box
                          className={classes.typeTag}
                          style={{
                            background:
                              type.toLowerCase() === "mint"
                                ? "conic-gradient(from 31.61deg at 50% 50%, #10bd04 -73.13deg, #0a8202 15deg, #16ed0770 103.13deg, #16ed07 210deg, #10bd04 286.87deg, #0a8202 375deg)"
                                : type.toLowerCase() === "rented"
                                ? "conic-gradient(from 31.61deg at 50% 50%, #F2C525 -73.13deg, #EBBD27 15deg, rgba(213, 168, 81, 0.76) 103.13deg, #EBED7C 210deg, #F2C525 286.87deg, #EBBD27 375deg)"
                                : type.toLowerCase() === "sold"
                                ? "conic-gradient(from 31.61deg at 50% 50%, #91D502 -25.18deg, #E5FF46 15deg, rgba(186, 252, 0, 0.76) 103.13deg, #A3CC00 210deg, #91D502 334.82deg, #E5FF46 375deg)"
                                : type.toLowerCase() === "blocked"
                                ? "conic-gradient(from 31.61deg at 50% 50%, #F24A25 -73.13deg, #FF3124 15deg, rgba(202, 36, 0, 0.76) 103.13deg, #F2724A 210deg, #F24A25 286.87deg, #FF3124 375deg)"
                                : type.toLowerCase() === "transfer"
                                ? "conic-gradient(from 180deg at 50% 50%, #C7CAFE 0deg, rgba(196, 214, 250, 0.92) 135deg, rgba(238, 239, 244, 0.75) 230.62deg, rgba(114, 145, 255, 0.87) 303.75deg, #C7CAFE 360deg)"
                                : "",
                          }}
                        >
                          {type}
                        </Box>
                      </Box>
                      <Box>
                        <RightArrowIcon />{" "}
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
              show all
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={classes.flexWrap}></Box>
        <Box className={classes.subContainer}>
          <Box className={classes.title} mt={6} mb={3}>
            <ScheduledEventIcon /> Scheduled Events
          </Box>
          <Box className={classes.subContainer}>
            <Box className={classes.vScroll}>
              {Array(10)
                .fill(0)
                .map((row, index) => {
                  const type = ["mint", "rented", "blocked", "transfer"][index % 4];
                  return (
                    <Box
                      className={classes.grayBgContainer}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box
                        style={{
                          background: "rgba(0, 180, 247, 0.1)",
                          borderRadius: "12px",
                          width: "50px",
                          height: "50px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box className={classes.typo9}>{Math.ceil(Math.random() * 30)}</Box>
                        <Box className={classes.typo10}>Mar</Box>
                      </Box>
                      <Box flex={1} ml={2}>
                        <Box className={classes.typo3}>Event title will go here </Box>
                        <Box className={classes.typo11}>Short decription of the event here </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
              show all
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={classes.subContainer}>
          <Box className={classes.title} mt={6} mb={3}>
            <RecentVotingIcon /> Recent Voting
          </Box>
          <Box className={classes.subContainer}>
            <Box className={classes.vScroll}>
              {Array(10)
                .fill(0)
                .map((row, index) => {
                  const type = ["mint", "rented", "blocked", "transfer"][index % 4];
                  return (
                    <Box
                      className={classes.grayBgContainer}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <div className={classes.roundImageBox} style={{ width: 50, height: 50 }}>
                        <img src={`${require("assets/gameImages/voting_sample.png")}`} />
                      </div>
                      <Box>
                        <Box className={classes.flexContainer}>
                          <Box
                            style={{
                              width: 70,
                              height: 12,
                              background: "rgba(255, 255, 255, 0.3)",
                              borderRadius: "57px",
                              position: "relative",
                            }}
                          >
                            <Box
                              style={{
                                position: "absolute",
                                left: 0,
                                height: "100%",
                                width: "60%",
                                background: "#E9FF26",
                                borderRadius: "57px",
                              }}
                            ></Box>
                          </Box>
                          <Box className={classes.typo12}>40%</Box>
                        </Box>
                        <Box mt={1} className={classes.flexContainer}>
                          <Box
                            style={{
                              width: 70,
                              height: 12,
                              background: "rgba(255, 255, 255, 0.3)",
                              borderRadius: "57px",
                              position: "relative",
                            }}
                          >
                            <Box
                              style={{
                                position: "absolute",
                                left: 0,
                                height: "100%",
                                width: "20%",
                                background: "#F74444",
                                borderRadius: "57px",
                              }}
                            ></Box>
                          </Box>
                          <Box className={classes.typo12}>15%</Box>
                        </Box>
                      </Box>
                      <div
                        style={{ borderRight: "1px solid rgba(131, 131, 131, 0.26)", height: "100%" }}
                      ></div>
                      <Box>
                        <Box className={classes.typo13}>Add “Realm Name” to the game ...</Box>
                        <Box mt={1} className={classes.flexContainer}>
                          <TimeLeftIcon />
                          <Box className={classes.typo14}>Time left</Box>
                          <Box className={classes.typo15}>2 days 18h 34m</Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
              show all
            </PrimaryButton>
          </Box>
        </Box>
      </Box> */}
      <Box className={classes.betweenContainer} mt={8} mb={3}>
        <Box className={classes.title}>
          <DaoUpdatesIcon /> DAO Updates
        </Box>
        {/* <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
          show all
        </PrimaryButton> */}
      </Box>
      {!props.isLoadingExtra ? (
        realmExtraData && realmExtraData.updates && realmExtraData.updates.length > 0 ? (
          <Box className={classes.updatesContainer}>
            <Carousel isRTL={false} breakPoints={breakPoints}>
              {realmExtraData.updates.map((item, index) => (
                <DaoUpdateCard item={item} index={index} />
              ))}
            </Carousel>
          </Box>
        ) : (
          <Box width={1} display="flex" alignItems="center" justifyContent="start">
            No Data
          </Box>
        )
      ) : (
        <Box display="flex" justifyContent="center" py={8}>
          <CircularLoadingIndicator />
        </Box>
      )}
      <Box className={classes.girdContainer}>
        {/* <Box className={classes.subContainer}>
          <Box className={classes.betweenContainer} mt={6} mb={3}>
            <Box className={classes.title}>
              <MembersIcon /> Members
            </Box>
            <Box className={classes.typo16}>214</Box>
          </Box>
          <Box className={classes.subContainer}>
            <Box className={classes.vScroll} style={{ height: 300 }}>
              {Array(20)
                .fill(0)
                .map((row, index) => {
                  return (
                    <Box
                      className={classes.grayBgContainer}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box className={classes.flexContainer}>
                        <div className={classes.roundImageBox} style={{ width: 50, height: 50 }}>
                          <img
                            src={`${require("assets/gameImages/wall_circle_" +
                              Math.ceil(Math.random() * 11) +
                              ".png")}`}
                          />
                        </div>
                        <Box className={classes.typo17}>@uSlug</Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo17}>NFTs Owned</Box>
                        <Box className={classes.typo18} mt={1}>
                          24
                        </Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo17}>Tokens Held</Box>
                        <Box className={classes.typo18} mt={1}>
                          45
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
              show all
            </PrimaryButton>
          </Box>
        </Box> */}
        <Box className={classes.subContainer}>
          <Box className={classes.betweenContainer} mt={6} mb={3}>
            <Box className={classes.title}>
              <CoreMembersIcon /> Top Members
            </Box>
            {/* <Box className={classes.typo16}>22</Box> */}
          </Box>
          <Box className={classes.subContainer}>
            <Box className={classes.vScroll} style={{ height: 300 }}>
              {/* <Box className={classes.playersContainer}> */}
              {!props.isLoadingExtra ? (
                realmExtraData && realmExtraData.members && realmExtraData.members.length > 0 ? (
                  realmExtraData.members.map((item, index) => (
                    <Box
                      className={classes.grayBgContainer}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box className={classes.flexContainer}>
                        <div className={classes.roundImageBox} style={{ width: 50, height: 50 }}>
                          <img src={item.avatar} />
                        </div>
                        <Box className={classes.typo17}>{`@${item.urlSlug}`}</Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo17}>NFTs Owned</Box>
                        <Box className={classes.typo18} mt={1}>
                          {item.ownedNFTs}
                        </Box>
                      </Box>
                      {/* <Box>
                          <Box className={classes.typo17}>Tokens Held</Box>
                          <Box className={classes.typo18} mt={1}>
                            45
                          </Box>
                        </Box> */}
                    </Box>
                  ))
                ) : (
                  <Box display="flex">No Data</Box>
                )
              ) : (
                <Box display="flex" justifyContent="center" py={8}>
                  <CircularLoadingIndicator />
                </Box>
              )}
              {/* </Box> */}
            </Box>
            <PrimaryButton className={classes.strokeBtn} size={"medium"} onClick={() => {}}>
              show all
            </PrimaryButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// const GameIcon = () => (
//   <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M13 0.0625C12.0883 0.0625 11.214 0.424664 10.5693 1.06932C9.92466 1.71398 9.5625 2.58832 9.5625 3.5V18.5C9.5625 19.4117 9.92466 20.286 10.5693 20.9307C11.214 21.5753 12.0883 21.9375 13 21.9375C13.9117 21.9375 14.786 21.5753 15.4307 20.9307C16.0753 20.286 16.4375 19.4117 16.4375 18.5V3.5C16.4375 2.58832 16.0753 1.71398 15.4307 1.06932C14.786 0.424664 13.9117 0.0625 13 0.0625Z"
//       fill="white"
//     />
//     <path
//       opacity="0.7"
//       d="M21.75 10.0625C20.8383 10.0625 19.964 10.4247 19.3193 11.0693C18.6747 11.714 18.3125 12.5883 18.3125 13.5V18.5C18.3125 19.4117 18.6747 20.286 19.3193 20.9307C19.964 21.5753 20.8383 21.9375 21.75 21.9375C22.6617 21.9375 23.536 21.5753 24.1807 20.9307C24.8253 20.286 25.1875 19.4117 25.1875 18.5V13.5C25.1875 12.5883 24.8253 11.714 24.1807 11.0693C23.536 10.4247 22.6617 10.0625 21.75 10.0625Z"
//       fill="white"
//     />
//     <path
//       d="M4.25 5.0625C3.33832 5.0625 2.46398 5.42466 1.81932 6.06932C1.17466 6.71398 0.8125 7.58832 0.8125 8.5V18.5C0.8125 19.4117 1.17466 20.286 1.81932 20.9307C2.46398 21.5753 3.33832 21.9375 4.25 21.9375C5.16168 21.9375 6.03602 21.5753 6.68068 20.9307C7.32534 20.286 7.6875 19.4117 7.6875 18.5V8.5C7.6875 7.58832 7.32534 6.71398 6.68068 6.06932C6.03602 5.42466 5.16168 5.0625 4.25 5.0625Z"
//       fill="white"
//     />
//   </svg>
// );

const PlayerIcon = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8333 2.20412C9.27875 0.682038 5.655 0.0699548 3.61292 2.25829C1.61417 4.39245 0 9.53775 0 14.3916C0 20.2476 4.9075 21.0601 7.58333 18.1833C9.1325 16.515 9.27875 16.2544 10.2917 14.9333H15.7083C16.7267 16.2544 16.8675 16.515 18.4167 18.1833C21.092 21.0601 26 20.2476 26 14.3916C26 9.53775 24.3858 4.39245 22.3871 2.25829C20.345 0.0699548 16.7267 0.682038 15.1667 2.20412C14.5654 2.78912 13 3.01662 13 3.01662C13 3.01662 11.4346 2.78912 10.8333 2.20412ZM8.66667 5.77912V7.34941H10.2375C10.8658 7.34941 11.375 7.83691 11.375 8.43329C11.375 9.02912 10.8658 9.51662 10.2375 9.51662H8.66667V11.0869C8.66667 11.7158 8.17917 12.225 7.58333 12.225C6.9875 12.225 6.5 11.7163 6.5 11.0869V9.51662H4.92917C4.30083 9.51662 3.79167 9.02912 3.79167 8.43329C3.79167 7.83691 4.30083 7.34941 4.92917 7.34941H6.5V5.77912C6.5 5.15079 6.9875 4.64162 7.58333 4.64162C8.17917 4.64162 8.66667 5.15079 8.66667 5.77912V5.77912ZM18.4167 6.53745C18.4167 5.78995 19.0233 5.18329 19.7708 5.18329C20.5183 5.18329 21.125 5.78995 21.125 6.53745C21.125 7.28495 20.5183 7.89162 19.7708 7.89162C19.0233 7.89162 18.4167 7.28495 18.4167 6.53745ZM15.7083 9.78745C15.7083 9.03941 16.315 8.43329 17.0625 8.43329C17.81 8.43329 18.4167 9.03941 18.4167 9.78745C18.4167 10.5344 17.81 11.1416 17.0625 11.1416C16.315 11.1416 15.7083 10.5344 15.7083 9.78745Z"
      fill="white"
    />
  </svg>
);

// const RevenueSummaryIcon = () => (
//   <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M28.6801 0.55957H1.32006C1.11849 0.55957 0.925185 0.639642 0.782658 0.782169C0.64013 0.924697 0.560059 1.11801 0.560059 1.31957V16.5196C0.560059 16.7211 0.64013 16.9144 0.782658 17.057C0.925185 17.1995 1.11849 17.2796 1.32006 17.2796H28.6801C28.8816 17.2796 29.0749 17.1995 29.2175 17.057C29.36 16.9144 29.4401 16.7211 29.4401 16.5196V1.31957C29.4401 1.11801 29.36 0.924697 29.2175 0.782169C29.0749 0.639642 28.8816 0.55957 28.6801 0.55957ZM7.40006 9.67957H5.88006C5.67849 9.67957 5.48519 9.5995 5.34266 9.45697C5.20013 9.31444 5.12006 9.12113 5.12006 8.91957C5.12006 8.71801 5.20013 8.5247 5.34266 8.38217C5.48519 8.23964 5.67849 8.15957 5.88006 8.15957H7.40006C7.60162 8.15957 7.79493 8.23964 7.93746 8.38217C8.07999 8.5247 8.16006 8.71801 8.16006 8.91957C8.16006 9.12113 8.07999 9.31444 7.93746 9.45697C7.79493 9.5995 7.60162 9.67957 7.40006 9.67957ZM15.0001 12.7196C14.2485 12.7196 13.5138 12.4967 12.8889 12.0792C12.264 11.6616 11.7769 11.0681 11.4893 10.3738C11.2017 9.67941 11.1265 8.91535 11.2731 8.17823C11.4197 7.4411 11.7816 6.764 12.3131 6.23256C12.8445 5.70113 13.5216 5.33921 14.2587 5.19259C14.9958 5.04596 15.7599 5.12121 16.4543 5.40883C17.1486 5.69644 17.7421 6.1835 18.1596 6.8084C18.5772 7.43331 18.8001 8.168 18.8001 8.91957C18.8001 9.92739 18.3997 10.8939 17.6871 11.6066C16.9744 12.3192 16.0079 12.7196 15.0001 12.7196ZM24.1201 9.67957H22.6001C22.3985 9.67957 22.2052 9.5995 22.0627 9.45697C21.9201 9.31444 21.8401 9.12113 21.8401 8.91957C21.8401 8.71801 21.9201 8.5247 22.0627 8.38217C22.2052 8.23964 22.3985 8.15957 22.6001 8.15957H24.1201C24.3216 8.15957 24.5149 8.23964 24.6575 8.38217C24.8 8.5247 24.8801 8.71801 24.8801 8.91957C24.8801 9.12113 24.8 9.31444 24.6575 9.45697C24.5149 9.5995 24.3216 9.67957 24.1201 9.67957ZM17.2801 8.91957C17.2801 9.37051 17.1463 9.81133 16.8958 10.1863C16.6453 10.5612 16.2892 10.8534 15.8726 11.026C15.456 11.1986 14.9975 11.2437 14.5553 11.1558C14.113 11.0678 13.7067 10.8506 13.3879 10.5318C13.069 10.2129 12.8518 9.80665 12.7639 9.36438C12.6759 8.9221 12.721 8.46367 12.8936 8.04705C13.0662 7.63044 13.3584 7.27435 13.7334 7.02382C14.1083 6.77329 14.5491 6.63957 15.0001 6.63957C15.6048 6.63957 16.1847 6.87978 16.6123 7.30737C17.0398 7.73495 17.2801 8.31488 17.2801 8.91957Z"
//       fill="white"
//     />
//   </svg>
// );

// const RecentTransactionIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M0.821289 9.84256V17.5514H3.90484V13.5814L13.9264 23.6029L16.1234 21.4059L6.10187 11.3843H10.0719V8.30078H2.36307C1.51509 8.30078 0.821289 8.99458 0.821289 9.84256Z"
//       fill="white"
//     />
//     <path
//       d="M18.6675 12.9266H14.6975V16.0101H22.4064C23.2543 16.0101 23.9481 15.3163 23.9481 14.4684V6.75948H20.8646V10.7296L10.843 0.708008L8.646 2.90504L18.6675 12.9266Z"
//       fill="white"
//     />
//   </svg>
// );

// const ScheduledEventIcon = () => (
//   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M7.04002 4.93977C7.27104 4.93977 7.4926 4.84799 7.65596 4.68463C7.81931 4.52128 7.91109 4.29972 7.91109 4.06869V1.13084C7.91109 0.899814 7.81931 0.678254 7.65596 0.514897C7.4926 0.351539 7.27104 0.259766 7.04002 0.259766C6.80899 0.259766 6.58743 0.351539 6.42408 0.514897C6.26072 0.678254 6.16895 0.899814 6.16895 1.13084V4.07191C6.1698 4.30237 6.26194 4.52311 6.42521 4.68577C6.58848 4.84843 6.80955 4.93977 7.04002 4.93977Z"
//       fill="white"
//     />
//     <path
//       d="M19.0078 4.93977C19.2388 4.93977 19.4604 4.84799 19.6237 4.68463C19.7871 4.52128 19.8789 4.29972 19.8789 4.06869V1.13084C19.8789 0.899814 19.7871 0.678254 19.6237 0.514897C19.4604 0.351539 19.2388 0.259766 19.0078 0.259766C18.7768 0.259766 18.5552 0.351539 18.3918 0.514897C18.2285 0.678254 18.1367 0.899814 18.1367 1.13084V4.07191C18.1376 4.30237 18.2297 4.52311 18.393 4.68577C18.5562 4.84843 18.7773 4.93977 19.0078 4.93977Z"
//       fill="white"
//     />
//     <path
//       d="M23.6479 2.60352H21.1033V4.12173C21.1033 4.69005 20.8775 5.23509 20.4757 5.63696C20.0738 6.03882 19.5288 6.26459 18.9604 6.26459C18.3921 6.26459 17.8471 6.03882 17.4452 5.63696C17.0434 5.23509 16.8176 4.69005 16.8176 4.12173V2.60352H9.18366V4.12173C9.18366 4.69005 8.9579 5.23509 8.55604 5.63696C8.15417 6.03882 7.60913 6.26459 7.04081 6.26459C6.47249 6.26459 5.92744 6.03882 5.52558 5.63696C5.12371 5.23509 4.89795 4.69005 4.89795 4.12173V2.60352H2.35331C1.78499 2.60352 1.23994 2.82928 0.838078 3.23114C0.436214 3.63301 0.210449 4.17805 0.210449 4.74637V23.7642C0.210449 24.3326 0.436214 24.8776 0.838078 25.2795C1.23994 25.6813 1.78499 25.9071 2.35331 25.9071H23.6479C24.2163 25.9071 24.7613 25.6813 25.1632 25.2795C25.565 24.8776 25.7908 24.3326 25.7908 23.7642V4.74637C25.7908 4.17805 25.565 3.63301 25.1632 3.23114C24.7613 2.82928 24.2163 2.60352 23.6479 2.60352ZM6.49223 21.1135L4.30009 18.8399L5.45724 17.7246L6.54902 18.8582L8.91366 16.6435L10.0119 17.8221L6.49223 21.1135ZM6.49223 13.5524L4.30009 11.2789L5.45724 10.1635L6.54902 11.2971L8.91366 9.08244L10.0119 10.2557L6.49223 13.5524ZM21.2962 20.0142H12.8319V18.4071H21.2962V20.0142ZM21.2962 12.0128H12.8319V10.4057H21.2962V12.0128Z"
//       fill="white"
//     />
//   </svg>
// );

// const RecentVotingIcon = () => (
//   <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M4.11483 22.1802H6.84921L10.2672 27.5247C10.7022 28.2704 11.7587 28.2704 12.2558 27.5247L15.6738 22.1802H18.4082C20.5832 22.1802 22.3233 20.4402 22.3233 18.2651V3.97177C22.3233 1.7967 20.5832 0.0566406 18.4082 0.0566406H4.11483C1.93976 0.0566406 0.199707 1.7967 0.199707 3.97177V18.2651C0.261852 20.4402 2.00191 22.1802 4.11483 22.1802ZM5.35773 9.81339C6.04133 9.12979 7.22208 9.12979 7.96782 9.81339L9.77002 11.6156L14.7416 6.644C15.4252 5.9604 16.606 5.9604 17.3517 6.644C18.0353 7.32759 18.0353 8.50834 17.3517 9.25408L11.1372 15.4686C10.7643 15.8414 10.3293 16.0279 9.83216 16.0279C9.335 16.0279 8.89999 15.8414 8.52712 15.4686L5.41988 12.3613C4.61199 11.6777 4.61199 10.5591 5.35773 9.81339Z"
//       fill="white"
//     />
//   </svg>
// );

const DaoUpdatesIcon = () => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7794_136753)">
      <path d="M25.4017 6.48633H23.5005V8.38753H25.4017V6.48633Z" fill="white" />
      <path
        d="M25.3985 10.2797H21.5989V14.0793H23.5001V15.9805H19.7005V14.0793H17.7993V8.3785H19.7005V6.4801H23.5001V4.5789H21.5989V2.6805H17.7993V0.779297H10.2001V2.6805H6.40051V4.5789H4.49931V6.4801H2.60091V12.1781H0.699707V27.3793H2.60091V25.4781H4.49931V23.5797H6.40051V25.4781H8.29891V27.3793H12.0985V23.5797H15.9009V27.3793H19.7005V25.4781H21.5989V23.5797H23.5001V25.4781H25.3985V27.3793H27.2997V12.1781H25.3985V10.2797ZM13.9997 10.2797H10.2001V14.0793H12.0985V15.9805H8.29891V14.0793H6.40051V8.3785H8.29891V6.4801H12.0985V8.3785H13.9997"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_7794_136753">
        <rect width="28" height="28" fill="white" transform="translate(0 0.0839844)" />
      </clipPath>
    </defs>
  </svg>
);

// const MembersIcon = () => (
//   <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M15.3262 14.498L16.0062 19.878C16.0233 20.0176 16.0108 20.1592 15.9694 20.2936C15.9281 20.428 15.8588 20.5522 15.7662 20.658C15.6714 20.766 15.5545 20.8522 15.4233 20.9109C15.2922 20.9696 15.1499 20.9993 15.0062 20.998H1.00624C0.864256 20.9979 0.723937 20.9675 0.59462 20.9088C0.465302 20.8502 0.349951 20.7647 0.256241 20.658C0.161873 20.553 0.0908069 20.4293 0.0477177 20.2948C0.00462852 20.1604 -0.00950682 20.0183 0.00624148 19.878L0.676242 14.498C0.798673 13.526 1.27357 12.6328 2.01087 11.9876C2.74816 11.3425 3.69658 10.9904 4.67624 10.998H11.3762C12.3473 11.0026 13.2836 11.3602 14.0104 12.0042C14.7372 12.6482 15.2049 13.5346 15.3262 14.498ZM7.00624 9.99805H9.00624C9.80189 9.99805 10.565 9.68198 11.1276 9.11937C11.6902 8.55676 12.0062 7.7937 12.0062 6.99805V3.99805C12.0062 3.2024 11.6902 2.43934 11.1276 1.87673C10.565 1.31412 9.80189 0.998047 9.00624 0.998047H7.00624C6.21059 0.998047 5.44753 1.31412 4.88492 1.87673C4.32231 2.43934 4.00624 3.2024 4.00624 3.99805V6.99805C4.00624 7.7937 4.32231 8.55676 4.88492 9.11937C5.44753 9.68198 6.21059 9.99805 7.00624 9.99805Z"
//       fill="white"
//     />
//   </svg>
// );

const CoreMembersIcon = () => (
  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.7908 0.998047L9.15181 9.10205C8.55181 8.93505 7.93381 8.85005 7.30481 8.85005C5.48081 8.85005 3.76581 9.56005 2.47681 10.849C-0.190187 13.515 -0.190187 17.855 2.47681 20.522C3.76881 21.814 5.48581 22.526 7.31281 22.526C9.13981 22.526 10.8568 21.814 12.1498 20.522C13.9108 18.761 14.5598 16.195 13.8898 13.827L14.7938 12.923L15.5358 10.695L18.0138 9.86905L18.8298 7.42205L21.9998 6.53205V0.998047H16.7908ZM8.96381 17.337C8.05281 18.248 6.57281 18.248 5.66081 17.337C4.74881 16.425 4.74881 14.945 5.66081 14.033C6.57381 13.121 8.05281 13.121 8.96381 14.033C9.87581 14.945 9.87581 16.425 8.96381 17.337Z"
      fill="white"
    />
  </svg>
);

// const VolumnIcon = () => (
//   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#C4C4C4" />
//     <g clip-path="url(#clip0_7794_136562)">
//       <path
//         d="M29.055 22.0443C28.4667 21.4561 27.8784 20.8678 27.2901 20.2795C26.3537 19.343 25.4172 18.4065 24.4783 17.4677C24.2646 17.254 24.0509 17.0403 23.8372 16.8266C23.8372 17.5061 23.8372 18.1856 23.8372 18.8652C24.4255 18.2769 25.0138 17.6886 25.6021 17.1003C26.5386 16.1638 27.475 15.2274 28.4139 14.2885C28.6276 14.0748 28.8413 13.8611 29.055 13.6474C29.3167 13.3856 29.4776 12.999 29.4776 12.6293C29.4776 12.2763 29.3215 11.8537 29.055 11.6112C28.7813 11.359 28.4211 11.1717 28.0369 11.1885C27.6551 11.2054 27.2949 11.335 27.0188 11.6112C26.4305 12.1995 25.8422 12.7877 25.2539 13.376C24.3175 14.3125 23.381 15.249 22.4421 16.1878C22.2284 16.4015 22.0147 16.6152 21.801 16.829C21.2511 17.3788 21.2487 18.3153 21.801 18.8676C22.3893 19.4559 22.9776 20.0442 23.5659 20.6324C24.5023 21.5689 25.4388 22.5054 26.3777 23.4442C26.5914 23.658 26.8051 23.8717 27.0188 24.0854C27.2805 24.3471 27.6671 24.508 28.0369 24.508C28.3899 24.508 28.8125 24.3519 29.055 24.0854C29.3071 23.8116 29.4944 23.4514 29.4776 23.0673C29.4608 22.6807 29.3311 22.3205 29.055 22.0443Z"
//         fill="white"
//         fill-opacity="0.8"
//       />
//       <path
//         d="M33.3684 16.4123C33.0178 16.4123 32.6648 16.4123 32.3142 16.4123C31.4786 16.4123 30.643 16.4123 29.8074 16.4123C28.7893 16.4123 27.7712 16.4123 26.7507 16.4123C25.8742 16.4123 24.9954 16.4123 24.119 16.4123C23.6915 16.4123 23.2641 16.4075 22.8391 16.4123C22.8319 16.4123 22.8271 16.4123 22.8199 16.4123C22.4501 16.4123 22.0635 16.5732 21.8018 16.8349C21.5521 17.0846 21.3648 17.4952 21.3792 17.853C21.396 18.2252 21.5185 18.6118 21.8018 18.8711C22.0827 19.1304 22.4309 19.2937 22.8199 19.2937C23.1705 19.2937 23.5235 19.2937 23.874 19.2937C24.7097 19.2937 25.5453 19.2937 26.3809 19.2937C27.399 19.2937 28.4171 19.2937 29.4376 19.2937C30.314 19.2937 31.1929 19.2937 32.0693 19.2937C32.4967 19.2937 32.9241 19.2985 33.3492 19.2937C33.3564 19.2937 33.3612 19.2937 33.3684 19.2937C33.7381 19.2937 34.1247 19.1328 34.3865 18.8711C34.6362 18.6214 34.8235 18.2108 34.8091 17.853C34.7923 17.4808 34.6698 17.0942 34.3865 16.8349C34.1055 16.5756 33.7574 16.4123 33.3684 16.4123Z"
//         fill="white"
//         fill-opacity="0.8"
//       />
//       <path
//         d="M16.8699 21.4793C17.4582 22.0675 18.0465 22.6558 18.6348 23.2441C19.5713 24.1806 20.5078 25.1171 21.4466 26.0559C21.6603 26.2696 21.874 26.4833 22.0877 26.697C22.0877 26.0175 22.0877 25.338 22.0877 24.6584C21.4995 25.2467 20.9112 25.835 20.3229 26.4233C19.3864 27.3598 18.4499 28.2962 17.5111 29.2351C17.2974 29.4488 17.0837 29.6625 16.8699 29.8762C16.6082 30.138 16.4473 30.5246 16.4473 30.8943C16.4473 31.2473 16.6034 31.6699 16.8699 31.9124C17.1437 32.1646 17.5039 32.3519 17.8881 32.3351C18.2698 32.3182 18.63 32.1886 18.9062 31.9124C19.4945 31.3241 20.0827 30.7359 20.671 30.1476C21.6075 29.2111 22.544 28.2746 23.4828 27.3358C23.6965 27.1221 23.9103 26.9084 24.124 26.6946C24.6738 26.1448 24.6762 25.2083 24.124 24.656C23.5357 24.0677 22.9474 23.4794 22.3591 22.8912C21.4226 21.9547 20.4861 21.0182 19.5473 20.0794C19.3336 19.8656 19.1199 19.6519 18.9062 19.4382C18.6444 19.1765 18.2578 19.0156 17.8881 19.0156C17.5351 19.0156 17.1125 19.1717 16.8699 19.4382C16.6178 19.712 16.4305 20.0722 16.4473 20.4563C16.4665 20.8429 16.5938 21.2031 16.8699 21.4793Z"
//         fill="white"
//         fill-opacity="0.8"
//       />
//       <path
//         d="M12.6319 27.1218C12.9801 27.1218 13.3283 27.1218 13.6764 27.1218C14.5121 27.1218 15.3477 27.1218 16.1833 27.1218C17.1894 27.1218 18.1955 27.1218 19.2016 27.1218C20.0756 27.1218 20.9473 27.1218 21.8213 27.1218C22.2439 27.1218 22.6689 27.1267 23.0915 27.1218C23.0987 27.1218 23.1035 27.1218 23.1107 27.1218C23.4805 27.1218 23.8671 26.961 24.1288 26.6992C24.3786 26.4495 24.5659 26.0389 24.5515 25.6811C24.5346 25.3089 24.4122 24.9224 24.1288 24.663C23.8479 24.4037 23.4997 24.2404 23.1107 24.2404C22.7626 24.2404 22.4144 24.2404 22.0662 24.2404C21.2306 24.2404 20.395 24.2404 19.5594 24.2404C18.5533 24.2404 17.5472 24.2404 16.5411 24.2404C15.667 24.2404 14.7954 24.2404 13.9214 24.2404C13.4988 24.2404 13.0737 24.2356 12.6511 24.2404C12.6439 24.2404 12.6391 24.2404 12.6319 24.2404C12.2621 24.2404 11.8755 24.4013 11.6138 24.663C11.3641 24.9127 11.1768 25.321 11.1912 25.6811C11.208 26.0533 11.3305 26.4399 11.6138 26.6992C11.8948 26.9586 12.2429 27.1218 12.6319 27.1218Z"
//         fill="white"
//         fill-opacity="0.8"
//       />
//     </g>
//     <defs>
//       <clipPath id="clip0_7794_136562">
//         <rect width="26" height="26" fill="white" transform="translate(10 8)" />
//       </clipPath>
//     </defs>
//   </svg>
// );

// const HoldersIcon = () => (
//   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#C4C4C4" />
//     <path
//       d="M22.5 3C26.7983 3 30.9761 4.42016 34.3839 7.03967C37.7918 9.65918 40.2386 13.3312 41.3441 17.4849C42.4495 21.6386 42.1516 26.0412 40.4966 30.0081C38.8417 33.975 35.9224 37.2839 32.1927 39.4204L29.7062 35.0797C32.4791 33.4913 34.6495 31.0312 35.8799 28.082C37.1103 25.1327 37.3318 21.8596 36.5099 18.7715C35.688 15.6834 33.8689 12.9533 31.3353 11.0058C28.8017 9.05827 25.6956 8.00243 22.5 8.00243V3Z"
//       fill="#00B4F7"
//     />
//     <path
//       d="M30.7445 40.1714C28.1989 41.359 25.4269 41.9826 22.618 41.9996C19.8091 42.0166 17.0297 41.4266 14.47 40.2699L16.5299 35.7113C18.433 36.5713 20.4994 37.0099 22.5877 36.9973C24.676 36.9847 26.737 36.521 28.6295 35.6381L30.7445 40.1714Z"
//       fill="#FF7A00"
//     />
//     <path
//       d="M12.6602 39.3353C8.80453 37.0818 5.83922 33.5731 4.25995 29.3957C2.68068 25.2183 2.58316 20.6254 3.98368 16.3848L8.73377 17.9535C7.69253 21.1063 7.76503 24.521 8.93916 27.6267C10.1133 30.7324 12.3179 33.341 15.1844 35.0165L12.6602 39.3353Z"
//       fill="#E9FF26"
//     />
//     <path
//       d="M4.61119 14.7385C6.01618 11.5003 8.27383 8.70412 11.1433 6.64832C14.0128 4.59251 17.3865 3.35417 20.9046 3.06537L21.3139 8.05104C18.6983 8.26575 16.1901 9.18641 14.0567 10.7148C11.9233 12.2432 10.2449 14.3221 9.2003 16.7296L4.61119 14.7385Z"
//       fill="#151515"
//     />
//   </svg>
// );

// const WeeklyActiveIcon = () => (
//   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#C4C4C4" />
//     <path
//       d="M29.3262 25.5L30.0062 30.88C30.0233 31.0196 30.0108 31.1612 29.9694 31.2956C29.9281 31.43 29.8588 31.5542 29.7662 31.66C29.6714 31.7679 29.5545 31.8542 29.4233 31.9129C29.2922 31.9715 29.1499 32.0012 29.0062 32H15.0062C14.8643 31.9998 14.7239 31.9694 14.5946 31.9108C14.4653 31.8522 14.35 31.7667 14.2562 31.66C14.1619 31.555 14.0908 31.4312 14.0477 31.2968C14.0046 31.1623 13.9905 31.0203 14.0062 30.88L14.6762 25.5C14.7987 24.528 15.2736 23.6347 16.0109 22.9896C16.7482 22.3444 17.6966 21.9923 18.6762 22H25.3762C26.3473 22.0045 27.2836 22.3621 28.0104 23.0061C28.7372 23.6501 29.2049 24.5365 29.3262 25.5ZM21.0062 21H23.0062C23.8019 21 24.565 20.6839 25.1276 20.1213C25.6902 19.5587 26.0062 18.7956 26.0062 18V15C26.0062 14.2044 25.6902 13.4413 25.1276 12.8787C24.565 12.3161 23.8019 12 23.0062 12H21.0062C20.2106 12 19.4475 12.3161 18.8849 12.8787C18.3223 13.4413 18.0062 14.2044 18.0062 15V18C18.0062 18.7956 18.3223 19.5587 18.8849 20.1213C19.4475 20.6839 20.2106 21 21.0062 21Z"
//       fill="white"
//       fill-opacity="0.8"
//     />
//   </svg>
// );

// const RevenueMonthlyIcon = () => (
//   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#C4C4C4" />
//     <path
//       d="M20.8333 13.7041C19.2788 12.182 15.655 11.57 13.6129 13.7583C11.6142 15.8925 10 21.0377 10 25.8916C10 31.7476 14.9075 32.5601 17.5833 29.6833C19.1325 28.015 19.2788 27.7544 20.2917 26.4333H25.7083C26.7267 27.7544 26.8675 28.015 28.4167 29.6833C31.092 32.5601 36 31.7476 36 25.8916C36 21.0377 34.3858 15.8925 32.3871 13.7583C30.345 11.57 26.7267 12.182 25.1667 13.7041C24.5654 14.2891 23 14.5166 23 14.5166C23 14.5166 21.4346 14.2891 20.8333 13.7041ZM18.6667 17.2791V18.8494H20.2375C20.8658 18.8494 21.375 19.3369 21.375 19.9333C21.375 20.5291 20.8658 21.0166 20.2375 21.0166H18.6667V22.5869C18.6667 23.2158 18.1792 23.725 17.5833 23.725C16.9875 23.725 16.5 23.2163 16.5 22.5869V21.0166H14.9292C14.3008 21.0166 13.7917 20.5291 13.7917 19.9333C13.7917 19.3369 14.3008 18.8494 14.9292 18.8494H16.5V17.2791C16.5 16.6508 16.9875 16.1416 17.5833 16.1416C18.1792 16.1416 18.6667 16.6508 18.6667 17.2791ZM28.4167 18.0375C28.4167 17.29 29.0233 16.6833 29.7708 16.6833C30.5183 16.6833 31.125 17.29 31.125 18.0375C31.125 18.785 30.5183 19.3916 29.7708 19.3916C29.0233 19.3916 28.4167 18.785 28.4167 18.0375ZM25.7083 21.2875C25.7083 20.5394 26.315 19.9333 27.0625 19.9333C27.81 19.9333 28.4167 20.5394 28.4167 21.2875C28.4167 22.0344 27.81 22.6416 27.0625 22.6416C26.315 22.6416 25.7083 22.0344 25.7083 21.2875Z"
//       fill="white"
//       fill-opacity="0.8"
//     />
//   </svg>
// );

// const AssetRevenueMonthlyIcon = () => (
//   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#C4C4C4" />
//     <g clip-path="url(#clip0_7794_136627)">
//       <path
//         d="M34.9 13.6711C34.798 13.3651 34.594 13.2971 34.458 13.2631C34.084 13.1951 33.812 13.5011 33.302 14.0111C32.86 14.4871 32.248 15.0991 31.432 15.5751C30.14 16.3231 28.814 15.4051 28.338 14.9971C28.508 14.6231 28.44 14.1811 28.134 13.8411L28.848 13.1611C29.528 12.4811 29.528 11.3931 28.848 10.7131C28.168 10.0331 27.08 10.0331 26.4 10.7131L25.72 11.4271L25.516 11.2231C25.108 10.8151 24.462 10.8151 24.088 11.2231L21.504 13.8411C21.096 14.2491 21.096 14.8951 21.504 15.2691L21.776 15.5411L10.522 27.1691C9.46798 28.2231 9.90998 28.9711 10.25 29.3451C10.862 29.9571 11.678 29.8551 12.426 29.1071L24.054 17.8191L24.122 17.8871C24.428 18.1931 24.904 18.2611 25.278 18.0911C25.686 18.5671 26.604 19.8931 25.856 21.1851C25.38 22.0011 24.734 22.6131 24.292 23.0551C23.782 23.5311 23.476 23.8371 23.544 24.2111C23.544 24.2791 23.612 24.3811 23.68 24.4831C23.748 24.5511 23.816 24.5851 23.952 24.6531C25.21 25.1631 29.222 25.7411 32.622 22.3411C36.022 18.9071 35.41 14.9291 34.9 13.6711Z"
//         fill="white"
//         fill-opacity="0.8"
//       />
//     </g>
//     <defs>
//       <clipPath id="clip0_7794_136627">
//         <rect width="26" height="26" fill="white" transform="translate(10 8)" />
//       </clipPath>
//     </defs>
//   </svg>
// );

// const TimeLeftIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M14.1835 7.17571C14.1835 11.0924 11.0084 14.2674 7.09173 14.2674C3.17508 14.2674 0 11.0924 0 7.17571C0 3.25906 3.17508 0.0839844 7.09173 0.0839844C11.0084 0.0839844 14.1835 3.25906 14.1835 7.17571Z"
//       fill="#00B4F7"
//     />
//     <path
//       d="M6.6748 3.41992V7.07008L9.17777 9.26017"
//       stroke="#151515"
//       stroke-width="2.06786"
//       stroke-linecap="square"
//       stroke-linejoin="round"
//     />
//   </svg>
// );

// const InfoIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
//       fill="#212121"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M8.67609 4.39855C8.67609 4.91657 8.26599 5.33386 7.74078 5.33386C7.22277 5.33386 6.80548 4.91657 6.80548 4.39855C6.80548 3.87334 7.22277 3.45605 7.74078 3.45605C8.26599 3.45605 8.67609 3.87334 8.67609 4.39855ZM9.99964 11.3486C9.99964 11.6436 9.76941 11.8522 9.47443 11.8522H6.54621C6.25122 11.8522 6.021 11.6436 6.021 11.3486C6.021 11.068 6.25122 10.845 6.54621 10.845H7.43834V7.54263H6.66851C6.37353 7.54263 6.14331 7.33399 6.14331 7.03901C6.14331 6.75842 6.37353 6.53538 6.66851 6.53538H8.02111C8.38804 6.53538 8.58229 6.79439 8.58229 7.1829V10.845H9.47443C9.76941 10.845 9.99964 11.068 9.99964 11.3486Z"
//       fill="white"
//       fill-opacity="0.6"
//     />
//     <path
//       d="M8 15C4.13401 15 1 11.866 1 8H-1C-1 12.9706 3.02944 17 8 17V15ZM15 8C15 11.866 11.866 15 8 15V17C12.9706 17 17 12.9706 17 8H15ZM8 1C11.866 1 15 4.13401 15 8H17C17 3.02944 12.9706 -1 8 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z"
//       fill="white"
//       fill-opacity="0.3"
//     />
//   </svg>
// );

// const RightArrowIcon = () => (
//   <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M1.45693 15.084L8.09668 8.44501L1.09668 1.44501"
//       stroke="white"
//       stroke-opacity="0.5"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     />
//   </svg>
// );
