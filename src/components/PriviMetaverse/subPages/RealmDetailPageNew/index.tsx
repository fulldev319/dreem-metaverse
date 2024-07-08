import React, { useState, useEffect } from "react";
import cls from "classnames";
import { useHistory, useParams } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import Box from "shared/ui-kit/Box";
import { Avatar, PrimaryButton, CircularLoadingIndicator } from "shared/ui-kit";
import * as MetaverseAPI from "shared/services/API/MetaverseAPI";
import { sanitizeIfIpfsUrl } from "shared/helpers";
import { getDefaultBGImage } from "shared/services/user/getUserAvatar";
import { useLogin } from "shared/hooks/useLogin";
import VotingPage from "./Voting";
import ExtensionsPage from "./ExtensionsPage";
import AboutPage from "./About";
import AvatarsPage from "./AvatarsPage";
import AssetsPage from "./AssetsPage";
import OverviewPage from "./OverviewPage";
import AvatarDetail from "./AvatarsPage/components/AvatarDetail";
import { usePageStyles } from "./index.styles";

const MENU_OPTIONS = [
  {
    label: "overview",
    value: "overview",
  },
  {
    label: "about",
    value: "about",
  },
  // {
  //   label: "realm avatars",
  //   value: "avatars",
  // },
  // {
  //   label: "assets",
  //   value: "assets",
  // },
  // {
  //   label: "extensions",
  //   value: "extensions",
  // },
  // {
  //   label: "owners",
  //   value: "owners",
  // },
  // {
  //   label: "voting",
  //   value: "voting",
  // },
];

export default function RealmDetailPageNew() {
  const classes = usePageStyles();
  const history = useHistory();
  const isLogin = useLogin();

  const { id: realmId } = useParams<{ id: string }>();
  const { tap: currentTap } = useParams<{ tap: string }>();
  const { itemId } = useParams<{ itemId: string }>();

  const [menu, setMenu] = useState<string>("about");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingExtra, setIsLoadingExtra] = useState<boolean>(false);
  const [isLoadingFollow, setIsLoadingFollow] = useState<boolean>(false);
  const [realmData, setRealmData] = useState<any>({});
  const [realmExtraData, setRealmExtraData] = useState<any>({});
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    loadRealm(realmId);
    loadRealmExtraData(realmId);
  }, []);

  useEffect(() => {
    if (currentTap) {
      setMenu(currentTap);
    }
  }, [realmId, currentTap]);

  useEffect(() => {
    if (realmExtraData?.followers?.currentlyFollowing) {
      setIsFollowing(true);
    } else setIsFollowing(false);
  }, [realmExtraData?.followers?.currentlyFollowing]);

  const loadRealm = realmId => {
    setIsLoading(true);
    MetaverseAPI.getAsset(realmId)
      .then(res => {
        if (res.success) {
          setRealmData(res.data);
        } else {
          history.push("/404");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const loadRealmExtraData = realmId => {
    setIsLoadingExtra(true);
    MetaverseAPI.getRealmDetails(realmId)
      .then(res => {
        if (res.success) {
          setRealmExtraData(res.data);
        } else {
          history.push("/404");
        }
      })
      .finally(() => setIsLoadingExtra(false));
  };

  const handleTap = selectedTap => {
    if (realmData?.versionHashId) {
      history.push(`/realm/${realmData?.versionHashId}/${selectedTap}`);
    }
  };

  const handleSocialSite = url => {
    window.open(url, "_blank");
  };

  const followRealm = () => {
    setIsLoadingFollow(true);
    if (isFollowing) {
      MetaverseAPI.getUnfollowRealm(realmId)
        .then(res => {
          if (res.success) {
            setIsFollowing(false);
          }
        })
        .finally(() => setIsLoadingFollow(false));
    } else {
      MetaverseAPI.getFollowRealm(realmId)
        .then(res => {
          if (res.success) {
            setIsFollowing(true);
          }
        })
        .finally(() => setIsLoadingFollow(false));
    }
  };

  return (
    <>
      {menu && itemId ? (
        <Box>{menu == "avatars" && <AvatarDetail />}</Box>
      ) : (
        <Box className={classes.root}>
          <Box className={classes.darkLayer}>
            {realmExtraData && realmExtraData.videos && realmExtraData.videos.main ? (
              <video
                autoPlay
                muted
                loop
                height="auto"
                width="100%"
                style={{
                  backgroundImage: `url("${sanitizeIfIpfsUrl(realmExtraData.videos.main)}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "absolute",
                }}
              >
                <source src={sanitizeIfIpfsUrl(realmExtraData.videos.main)} type="video/mp4" />
              </video>
            ) : null}
          </Box>
          <Box
            style={{
              left: 0,
              width: "100%",
              top: 186,
              height: 150,
              position: "absolute",
              background: "linear-gradient(180deg, rgba(28, 31, 41, 0) 0%, #242D43 54.55%)",
            }}
          ></Box>
          <Box className={classes.container} id="scrollContainer">
            <Box className={classes.leftPanel}>
              <img
                src={
                  realmExtraData && realmExtraData.images && realmExtraData.images.main
                    ? realmExtraData.images.main
                    : getDefaultBGImage()
                }
                alt="nft image"
                width={300}
                height={300}
              />
              <Box className={classes.title} mt={4}>
                {realmData ? realmData.name : ""}
              </Box>
              <Box display={"flex"} flexDirection={"column"} mt={4.5} pl={3} mb={2}>
                {MENU_OPTIONS.map(item => (
                  <Box
                    className={cls({ [classes.selectedMenu]: item.value === menu }, classes.typo2)}
                    color={"#ffffff90"}
                    mb={2.5}
                    onClick={() => handleTap(item.value)}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
              <Box className={classes.followerSection}>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} p={3}>
                  <Box display={"flex"}>
                    <HeartIcon />
                    <Box className={classes.typo3} color={"#ffffff90"} ml={1}>
                      Followers
                    </Box>
                  </Box>
                  <Box className={classes.typo4}>
                    {realmExtraData && realmExtraData.followers ? realmExtraData.followers.followCount : 0}
                  </Box>
                </Box>
                <Box height={"1px"} bgcolor={"#ffffff15"} />
                {/* <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} p={3}>
                  <Box display={"flex"}>
                    <EyeIcon />
                    <Box className={classes.typo3} color={"#ffffff90"} ml={1}>
                      Views
                    </Box>
                  </Box>
                  <Box className={classes.typo4}>2,245</Box>
                </Box> */}
              </Box>
              <Box className={classes.twitterFeedSection}>
                <Box display={"flex"} alignItems={"center"} mb={2}>
                  <TwitterIcon />
                  <Box className={classes.typo5} ml={1}>
                    Twitter Feed
                  </Box>
                </Box>
                {!isLoadingExtra ? (
                  realmExtraData && realmExtraData.twitters ? (
                    realmExtraData.twitters.map(item => (
                      <>
                        <TwitterTimelineEmbed
                          sourceType="profile"
                          screenName={item.tag}
                          options={{ height: 480 }}
                          theme="dark"
                          noHeader
                          noFooter
                          noBorders
                          noScrollbar
                          transparent
                        />
                      </>
                    ))
                  ) : (
                    <Box display="display" alignItems="center">
                      No Data
                    </Box>
                  )
                ) : (
                  <Box display="flex" justifyContent="center" py={8}>
                    <CircularLoadingIndicator />
                  </Box>
                )}
                {/* {[0, 1, 2].map((item, index, list) => (
                  <>
                    <Box className={classes.twitterFeedItem}>
                      <Avatar size="small" url={require("assets/gameImages/game_title_image.png")} />
                      <Box display={"flex"} flexDirection={"column"} ml={1} pt={1}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                          <Box className={classes.typo3}>Twitter Name</Box>
                          <Box className={classes.typo6} color={"#ffffff70"}>
                            12 hours ago
                          </Box>
                        </Box>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          className={classes.typo6}
                          my={1.5}
                          color={"#ffffff80"}
                        >
                          Some game updates mentioned on twitter and shown here as twitter feed
                        </Box>
                        <Box className={classes.typo3} style={{ cursor: "pointer" }}>
                          Read more
                        </Box>
                      </Box>
                    </Box>
                    {index + 1 !== list.length && <Box height={"1px"} bgcolor={"#ffffff15"} my={1.5} />}
                  </>
                ))} */}
              </Box>
              {/* <Box className={classes.creationDateSection}>
                <Box display={"flex"}>
                  <HeartIcon />
                  <Box className={classes.typo3} color={"#ffffff90"} ml={1}>
                    Creation Date
                  </Box>
                </Box>
                <Box className={classes.typo4}>10/11/2021</Box>
              </Box> */}
            </Box>
            <Box className={classes.rightPanel}>
              {/* <Box display={"flex"} alignItems={"center"} justifyContent={"end"}>
                <PrimaryButton
                  onClick={() => history.push(`/creating_extension/${realmData?.versionHashId}`)}
                  size="medium"
                  className={classes.applyExtensionButton}
                >
                  Apply Extension
                </PrimaryButton>
                <PrimaryButton
                  onClick={() => history.push("/create_realm")}
                  size="medium"
                  className={classes.createRealmButton}
                >
                  Create Realm
                </PrimaryButton>
              </Box> */}
              <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"} mt={"150px"}>
                {/* <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box mr={0.5}>{`Collection ID: x926ab3273...`}</Box>
                    <Box onClick={() => {}} style={{ cursor: "pointer" }}>
                      <LinkIcon />
                    </Box>
                  </Box>
                  <Box width={"1px"} height={"34px"} bgcolor={"rgba(255, 255, 255, 0.15)"} mx={6} />
                  <Box display={"flex"} alignItems={"center"}>
                    <RocketIcon />
                    <Box ml={0.5}>{`523 minted`}</Box>
                  </Box>
                </Box> */}

                <Box display={"flex"} alignItems={"center"}>
                  {isLogin ? (
                    <Box mr={2} style={{ cursor: "pointer" }}>
                      <PrimaryButton onClick={followRealm} size="medium" className={classes.followButton}>
                        {isFollowing ? (
                          <>
                            <FollowIcon />
                            Following
                          </>
                        ) : (
                          <>
                            <FollowIcon />
                            Follow
                          </>
                        )}
                      </PrimaryButton>
                    </Box>
                  ) : (
                    <></>
                  )}

                  {realmExtraData &&
                    realmExtraData.websites &&
                    realmExtraData.websites.map(item => (
                      <img
                        src={item.iconUrl}
                        style={{ width: 45, height: 45, marginRight: 16, cursor: "pointer" }}
                        onClick={() => handleSocialSite(item.url)}
                      />
                    ))}
                </Box>
              </Box>
              <Box>
                {menu == "overview" && (
                  <OverviewPage isLoadingExtra={isLoadingExtra} realmExtraData={realmExtraData} />
                )}
                {menu == "about" && <AboutPage realmData={realmData} />}
                {menu == "voting" && <VotingPage />}
                {menu == "extensions" && <ExtensionsPage />}
                {menu == "assets" && <AssetsPage />}
                {menu == "avatars" && <AvatarsPage />}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

const HeartIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.2989 16.6638C10.2989 16.6638 20 10.9247 20 5.36038C20 2.38886 17.6111 0 14.6396 0C12.8625 0 11.2894 0.844842 10.328 2.18494C9.33751 0.873975 7.79349 0 6.0164 0C3.04489 0 0.656023 2.38886 0.656023 5.36038C0.597758 10.9247 10.2989 16.6638 10.2989 16.6638Z"
      fill="white"
      fill-opacity="0.8"
    />
  </svg>
);

// const EyeIcon = () => (
//   <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M10.4997 10.1373C11.8253 10.1373 12.8998 8.95648 12.8998 7.49984C12.8998 6.0432 11.8253 4.86237 10.4997 4.86237C9.17417 4.86237 8.09961 6.0432 8.09961 7.49984C8.09961 8.95648 9.17417 10.1373 10.4997 10.1373Z"
//       fill="white"
//       fill-opacity="0.8"
//     />
//     <path
//       d="M20.8555 7.05703C20.6681 6.80207 16.1987 0.750488 10.4996 0.750488C4.80048 0.750488 0.331165 6.80207 0.143693 7.05703C0.0498463 7.18546 -0.000732422 7.3404 -0.000732422 7.49946C-0.000732422 7.65852 0.0498463 7.81347 0.143693 7.94189C0.331165 8.19685 4.80048 14.2484 10.4996 14.2484C16.1987 14.2484 20.6681 8.19685 20.8555 7.94189C20.9494 7.81347 21 7.65852 21 7.49946C21 7.3404 20.9494 7.18546 20.8555 7.05703V7.05703ZM10.4996 11.9988C9.34261 11.9616 8.24759 11.467 7.45473 10.6235C6.66187 9.78005 6.23591 8.65656 6.27026 7.49946C6.23591 6.34236 6.66187 5.21887 7.45473 4.37541C8.24759 3.53194 9.34261 3.03736 10.4996 3.00015C11.6566 3.03736 12.7516 3.53194 13.5445 4.37541C14.3374 5.21887 14.7633 6.34236 14.729 7.49946C14.7633 8.65656 14.3374 9.78005 13.5445 10.6235C12.7516 11.467 11.6566 11.9616 10.4996 11.9988V11.9988Z"
//       fill="white"
//       fill-opacity="0.8"
//     />
//   </svg>
// );

const TwitterIcon = () => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="29" height="29" rx="14.5" fill="#1DA1F2" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.2333 9.70654C21.6646 9.95915 21.0527 10.1293 20.4109 10.2061C21.0661 9.81325 21.5693 9.19154 21.8059 8.45073C21.1935 8.81469 20.5135 9.07812 19.7912 9.22092C19.2123 8.60436 18.387 8.21875 17.475 8.21875C15.7227 8.21875 14.302 9.63953 14.302 11.3918C14.302 11.6403 14.3303 11.8826 14.3845 12.1151C11.7471 11.9831 9.40916 10.7195 7.84404 8.79974C7.57081 9.26835 7.41461 9.81326 7.41461 10.3948C7.41461 11.4954 7.97395 12.4666 8.82611 13.0358C8.30543 13.0193 7.81672 12.8765 7.38832 12.6388V12.6785C7.38832 14.2163 8.48277 15.4984 9.93345 15.7907C9.66744 15.8629 9.387 15.9021 9.09779 15.9021C8.89313 15.9021 8.69413 15.882 8.5003 15.8449C8.90395 17.1053 10.0762 18.0229 11.4645 18.0487C10.3789 18.8993 9.01066 19.4071 7.5239 19.4071C7.26717 19.4071 7.01457 19.3922 6.7666 19.3623C8.17088 20.2624 9.83859 20.7882 11.6305 20.7882C17.4668 20.7882 20.6583 15.9531 20.6583 11.7604C20.6583 11.6227 20.6558 11.4856 20.6491 11.35C21.2698 10.9015 21.808 10.3427 22.2333 9.70654Z"
      fill="white"
    />
  </svg>
);

const FollowIcon = () => (
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 10 }}
  >
    <path
      d="M10.471 16.8318C10.471 16.8318 20.1721 11.0927 20.1721 5.52835C20.1721 2.55683 17.7833 0.167969 14.8117 0.167969C13.0347 0.167969 11.4615 1.01281 10.5001 2.35291C9.50963 1.04194 7.9656 0.167969 6.18852 0.167969C3.21701 0.167969 0.828142 2.55683 0.828142 5.52835C0.769877 11.0927 10.471 16.8318 10.471 16.8318Z"
      fill="#fff"
    />
  </svg>
);
