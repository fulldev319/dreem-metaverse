import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { RootState } from "store/reducers/Reducer";
import { setSelTabWorldDetail } from "store/actions/World";
import { PrimaryButton, SecondaryButton } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import Avatar from "shared/ui-kit/Avatar";
import { getDefaultAvatar, getDefaultWorldImageUrl } from "shared/services/user/getUserAvatar";
import { FruitSelect } from "shared/ui-kit/Select/FruitSelect";
import TabsView, { TabItem } from "shared/ui-kit/TabsView";
import LandForSale from "./components/LandForSale";
import LandOwners from "./components/LandOwners";
import Assets from "./components/Assets";
import { worldDetailPageStyles } from "./index.styles";

import SeedImg from "assets/metaverseImages/dreem_seed_image.png";
import ShapeImgTriangle from "assets/metaverseImages/shape_home_2.png";

import { hideMint } from "shared/functions/getURL";

const Tabs: TabItem[] = [
  {
    key: "sale",
    title: "Land For Sale",
  },
  {
    key: "owners",
    title: "Land Owners",
  },
  {
    key: "assets",
    title: "Assets",
  },
];

export default function WorldDetailPage() {
  const classes = worldDetailPageStyles({});
  const dispatch = useDispatch();
  const selTab = useSelector((state: RootState) => state.world.selectedTabWorldDetail);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  const [fruitData, setFruitData] = useState<any>({});
  const [selectedTab, setSelectedTab] = useState<string>(selTab || "sale");

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={SeedImg} className={classes.seedImage} alt="seed image" />
        <Box className={classes.fitContent}>
          <Box className={classes.userInfoSection}>
            {(isMobile || isTablet) && (
              <Box>
                <Box display="flex" alignItems="center" justifyContent="right" mb={3}>
                  <div className={classes.iconBtn} onClick={() => {}}>
                    <PolygonIcon />
                  </div>
                  <div className={classes.iconBtn} onClick={() => {}}>
                    <OpenSeaIcon />
                  </div>
                  <Box className={classes.iconBtn}>
                    <FruitSelect
                      fruitObject={fruitData}
                      onGiveFruit={() => {}}
                      fruitWidth={32}
                      fruitHeight={32}
                      style={{ background: "transparent" }}
                    />
                  </Box>
                  <div className={classes.iconBtn} onClick={() => {}}>
                    <ShareIcon />
                  </div>
                </Box>
                <img src={getDefaultWorldImageUrl()} className={classes.worldImage} alt="nft image" />
              </Box>
            )}
            <Box
              display="flex"
              alignItems={isMobile ? "start" : "center"}
              justifyContent="space-between"
              flexDirection={isMobile ? "column" : "row"}
            >
              <Box display="flex" alignItems="center">
                <Avatar size={42} rounded image={getDefaultAvatar()} />
                <Box display="flex" flexDirection="column" ml={1}>
                  <Box className={classes.typo1}>Creator</Box>
                  <Box className={classes.typo2}>0xcsdw20x...0xcsdw2</Box>
                </Box>
              </Box>
              <Box width={isMobile ? 0 : 2} height={isMobile ? 20 : 40} bgcolor="#ffffff20" margin="0 48px" />
              <Box display="flex" alignItems="center">
                <Avatar size={42} rounded bordered image={getDefaultAvatar()} />
                <Box display="flex" flexDirection="column" ml={0.5}>
                  <Box className={classes.typo1}>Owner</Box>
                  <Box className={classes.typo2}>0xcsdw20x...0xcsdw2</Box>
                </Box>
              </Box>
            </Box>
            {!isMobile && !isTablet && (
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <div className={classes.iconBtn} onClick={() => {}}>
                  <PolygonIcon />
                </div>
                <div className={classes.iconBtn} onClick={() => {}}>
                  <OpenSeaIcon />
                </div>
                <Box className={classes.iconBtn}>
                  <FruitSelect
                    fruitObject={fruitData}
                    onGiveFruit={() => {}}
                    fruitWidth={32}
                    fruitHeight={32}
                    style={{ background: "transparent" }}
                  />
                </Box>
                <div className={classes.iconBtn} onClick={() => {}}>
                  <ShareIcon />
                </div>
              </Box>
            )}
          </Box>
          <Box className={classes.worldInfoSection}>
            <Box
              display="flex"
              flexDirection="column"
              alignSelf="flex-start"
              pt={5}
              width={isMobile ? 348 : 525}
            >
              <Box className={classes.typo1}>ID #322</Box>
              <Box className={classes.typo3} mt={1}>
                World Name
              </Box>
              <Box className={classes.typo4} mt={3}>
                Robotos is a collection of droid characters designed by Pablo Stanley and minted as NFTs. They
                are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces,
                backpacks, arms, and colors. Get your own!
              </Box>
              <Box className={classes.flexBox} mt={7} mb={4}>
                <SecondaryButton
                  size="medium"
                  style={{
                    border: "1px solid #fff",
                    color: "#fff",
                    background: "transparent",
                    height: 48,
                    width: 255,
                    borderRadius: "100px",
                    textTransform: "uppercase",
                    fontSize: 18,
                    paddingTop: 6,
                  }}
                >
                  Edit Draft
                </SecondaryButton>
                {/* {!hideMint && (
                  <PrimaryButton
                    size="medium"
                    style={{
                      color: "#212121",
                      background: "#fff",
                      height: 48,
                      width: 255,
                      borderRadius: "100px",
                      textTransform: "uppercase",
                      fontSize: 18,
                      paddingTop: 6,
                    }}
                  >
                    Mint NFT
                  </PrimaryButton>
                )} */}
              </Box>
              <PrimaryButton
                size="medium"
                style={{
                  color: "#212121",
                  background: "#E9FF26",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  height: 48,
                  width: "100%",
                  borderRadius: "100px",
                  textTransform: "uppercase",
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LandIcon />
                <Box ml={1.5} pt={"6px"}>
                  Manage Land
                </Box>
              </PrimaryButton>
            </Box>
            {!isMobile && !isTablet && (
              <div style={{ paddingLeft: 20 }}>
                <img src={getDefaultWorldImageUrl()} className={classes.worldImage} alt="nft image" />
              </div>
            )}
          </Box>
        </Box>
        <Box className={classes.content}>
          <img className={classes.bgImgTriangle} src={ShapeImgTriangle} alt="triangle image" />
          <Box className={classes.fitContent}>
            <Box className={classes.tabSection}>
              <TabsView
                tabs={Tabs}
                onSelectTab={tab => {
                  setSelectedTab(tab.key);
                  dispatch(setSelTabWorldDetail(tab.key));
                }}
                seletedTabIndex={Tabs.findIndex(tab => tab.key === selectedTab)}
              />
            </Box>
            {selectedTab === "sale" ? (
              <LandForSale />
            ) : selectedTab === "owners" ? (
              <LandOwners />
            ) : (
              <Assets />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ShareIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9963 16.2661L7.86463 12.7002M7.8545 9.80408L14.9929 6.23487M21.1184 17.7116C21.1184 19.496 19.6718 20.9426 17.8874 20.9426C16.103 20.9426 14.6564 19.496 14.6564 17.7116C14.6564 15.9272 16.103 14.4806 17.8874 14.4806C19.6718 14.4806 21.1184 15.9272 21.1184 17.7116ZM21.1184 4.78763C21.1184 6.57206 19.6718 8.01863 17.8874 8.01863C16.103 8.01863 14.6564 6.57206 14.6564 4.78763C14.6564 3.00321 16.103 1.55664 17.8874 1.55664C19.6718 1.55664 21.1184 3.00321 21.1184 4.78763ZM8.19441 11.2496C8.19441 13.0341 6.74785 14.4806 4.96342 14.4806C3.17899 14.4806 1.73242 13.0341 1.73242 11.2496C1.73242 9.46519 3.17899 8.01863 4.96342 8.01863C6.74785 8.01863 8.19441 9.46519 8.19441 11.2496Z"
      stroke="#212121"
      strokeWidth="2.23684"
    />
  </svg>
);

const OpenSeaIcon = () => (
  <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4963_54753)">
      <path
        d="M22.5 11.7891C22.5 17.8639 17.5748 22.7891 11.5 22.7891C5.42521 22.7891 0.5 17.8639 0.5 11.7891C0.5 5.71427 5.42521 0.789062 11.5 0.789062C17.5761 0.789062 22.5 5.71427 22.5 11.7891Z"
        fill="#212121"
      />
      <path
        d="M5.92587 12.1589L5.97333 12.0843L8.83487 7.60781C8.87669 7.54227 8.97501 7.54905 9.00664 7.62024C9.4847 8.69162 9.8972 10.0241 9.70396 10.8536C9.62146 11.1949 9.39543 11.6571 9.14113 12.0843C9.10837 12.1465 9.0722 12.2075 9.03377 12.2663C9.01569 12.2934 8.98517 12.3092 8.95239 12.3092H6.0095C5.93038 12.3092 5.88405 12.2233 5.92587 12.1589Z"
        fill="#C3FF50"
      />
      <path
        d="M18.6829 12.9889V13.6975C18.6829 13.7382 18.658 13.7744 18.6218 13.7902C18.4003 13.8851 17.642 14.2332 17.3267 14.6717C16.522 15.7917 15.9072 17.3931 14.533 17.3931H8.79971C6.76773 17.3931 5.12109 15.7408 5.12109 13.702V13.6365C5.12109 13.5822 5.16516 13.5382 5.21941 13.5382H8.41548C8.47876 13.5382 8.52509 13.5969 8.51946 13.6591C8.49684 13.867 8.53527 14.0795 8.63359 14.2728C8.82345 14.6581 9.21675 14.8989 9.64168 14.8989H11.2239V13.6636H9.65976C9.57953 13.6636 9.53207 13.5709 9.5784 13.5054C9.59534 13.4794 9.61457 13.4523 9.6349 13.4218C9.78296 13.2116 9.99429 12.8849 10.2045 12.5131C10.348 12.2622 10.487 11.9944 10.5989 11.7254C10.6215 11.6768 10.6396 11.6271 10.6577 11.5785C10.6882 11.4926 10.7199 11.4124 10.7424 11.3321C10.7651 11.2643 10.7831 11.1931 10.8012 11.1264C10.8543 10.8981 10.8769 10.6563 10.8769 10.4054C10.8769 10.3071 10.8724 10.2042 10.8634 10.1059C10.8588 9.99855 10.8453 9.89117 10.8317 9.78381C10.8227 9.68888 10.8057 9.59507 10.7877 9.49675C10.7651 9.35322 10.7334 9.21084 10.6972 9.06729L10.6848 9.01306C10.6577 8.91472 10.6351 8.82093 10.6034 8.72261C10.5142 8.41406 10.4113 8.11346 10.3028 7.83205C10.2633 7.72016 10.2181 7.6128 10.1728 7.50544C10.1062 7.34383 10.0384 7.19691 9.97621 7.0579C9.94457 6.9946 9.91745 6.93696 9.89032 6.8782C9.85981 6.81152 9.82817 6.74484 9.79651 6.68156C9.77392 6.63297 9.74791 6.58776 9.72983 6.54255L9.53658 6.18542C9.50946 6.13682 9.55467 6.07918 9.60777 6.09388L10.817 6.42161H10.8204C10.8227 6.42161 10.8238 6.42276 10.8249 6.42276L10.9843 6.46682L11.1595 6.51656L11.2239 6.53463V5.81586C11.2239 5.4689 11.5019 5.1875 11.8455 5.1875C12.0173 5.1875 12.1732 5.25757 12.2851 5.37171C12.397 5.48586 12.467 5.64182 12.467 5.81586V6.88273L12.5959 6.91888C12.6061 6.92229 12.6162 6.9268 12.6253 6.93357C12.6569 6.95731 12.7021 6.99234 12.7598 7.0353C12.805 7.07145 12.8536 7.11554 12.9123 7.16075C13.0287 7.25453 13.1677 7.37547 13.3203 7.51448C13.361 7.54951 13.4006 7.58568 13.4367 7.62184C13.6334 7.80493 13.8538 8.01965 14.064 8.25698C14.1227 8.32367 14.1804 8.39147 14.2391 8.46266C14.2979 8.535 14.3601 8.60619 14.4143 8.6774C14.4855 8.77233 14.5624 8.87065 14.629 8.9735C14.6607 9.0221 14.6968 9.07182 14.7274 9.12042C14.8132 9.25037 14.889 9.38488 14.9613 9.51937C14.9918 9.58152 15.0234 9.64932 15.0506 9.716C15.1308 9.8957 15.1941 10.0788 15.2348 10.2619C15.2472 10.3014 15.2563 10.3444 15.2608 10.3828V10.3918C15.2743 10.4461 15.2789 10.5037 15.2834 10.5625C15.3015 10.7501 15.2924 10.9377 15.2517 11.1264C15.2348 11.2067 15.2122 11.2824 15.1851 11.3626C15.1579 11.4395 15.1308 11.5197 15.0958 11.5954C15.028 11.7525 14.9477 11.9096 14.8528 12.0565C14.8223 12.1108 14.7861 12.1684 14.7499 12.2227C14.7104 12.2803 14.6697 12.3346 14.6335 12.3877C14.5838 12.4555 14.5307 12.5267 14.4765 12.59C14.4279 12.6567 14.3781 12.7233 14.3239 12.7821C14.2482 12.8714 14.1758 12.9561 14.1001 13.0375C14.0549 13.0906 14.0063 13.1449 13.9566 13.1935C13.908 13.2477 13.8583 13.2963 13.8131 13.3415C13.7374 13.4172 13.6741 13.476 13.6209 13.5246L13.4966 13.6388C13.4785 13.6546 13.4548 13.6636 13.4299 13.6636H12.467V14.8989H13.6786C13.9498 14.8989 14.2075 14.8028 14.4154 14.6265C14.4866 14.5643 14.7974 14.2954 15.1647 13.8896C15.1771 13.8761 15.193 13.8659 15.2111 13.8614L18.5574 12.894C18.6196 12.8759 18.6829 12.9234 18.6829 12.9889Z"
        fill="#C3FF50"
      />
    </g>
    <defs>
      <clipPath id="clip0_4963_54753">
        <rect width="22" height="27" fill="white" transform="translate(0.5 0.789062)" />
      </clipPath>
    </defs>
  </svg>
);

const PolygonIcon = () => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.7113 6.64636C19.4733 6.51336 19.2052 6.44352 18.9326 6.44352C18.66 6.44352 18.3919 6.51336 18.1539 6.64636L14.5809 8.71872L12.1533 10.0703L8.58051 12.1426C8.3425 12.2755 8.07444 12.3453 7.80184 12.3453C7.52924 12.3453 7.26118 12.2755 7.02317 12.1426L4.18309 10.5208C3.95202 10.3883 3.75901 10.1984 3.6227 9.96957C3.48639 9.74071 3.41139 9.48058 3.40493 9.21429V6.01564C3.40174 5.74733 3.47271 5.48334 3.61002 5.25281C3.74733 5.02227 3.94564 4.83413 4.18309 4.70915L6.9773 3.13235C7.21531 2.99946 7.48337 2.9297 7.75597 2.9297C8.02857 2.9297 8.29663 2.99946 8.53464 3.13235L11.3289 4.70915C11.5599 4.84166 11.7529 5.03151 11.8892 5.26036C12.0255 5.48922 12.1006 5.74935 12.107 6.01564V8.088L14.5347 6.69141V4.61905C14.5379 4.35074 14.4669 4.08675 14.3296 3.85621C14.1923 3.62568 13.994 3.43754 13.7565 3.31256L8.58051 0.339376C8.3425 0.206485 8.07444 0.136719 7.80184 0.136719C7.52924 0.136719 7.26118 0.206485 7.02317 0.339376L1.75483 3.31277C1.51741 3.43773 1.31911 3.62583 1.1818 3.85633C1.04449 4.08683 0.973506 4.35077 0.976666 4.61905V10.6109C0.973468 10.8792 1.04444 11.1432 1.18175 11.3737C1.31906 11.6043 1.51738 11.7924 1.75483 11.9174L7.02256 14.8908C7.26057 15.0236 7.52863 15.0934 7.80123 15.0934C8.07383 15.0934 8.34189 15.0236 8.5799 14.8908L12.1527 12.8634L14.5803 11.4669L18.1533 9.43954C18.3913 9.30654 18.6594 9.23671 18.932 9.23671C19.2046 9.23671 19.4727 9.30654 19.7107 9.43954L22.5049 11.0163C22.7359 11.1489 22.9289 11.3387 23.0652 11.5676C23.2015 11.7964 23.2765 12.0565 23.283 12.3228V15.5215C23.2862 15.7898 23.2152 16.0538 23.0779 16.2843C22.9406 16.5148 22.7423 16.703 22.5049 16.828L19.7107 18.4498C19.4726 18.5827 19.2046 18.6525 18.932 18.6525C18.6594 18.6525 18.3913 18.5827 18.1533 18.4498L15.3591 16.873C15.128 16.7405 14.935 16.5506 14.7987 16.3218C14.6624 16.0929 14.5874 15.8328 14.5809 15.5665V13.494L12.1533 14.8906V16.9629C12.1501 17.2312 12.2211 17.4952 12.3584 17.7257C12.4957 17.9563 12.694 18.1444 12.9315 18.2694L18.1992 21.2428C18.4372 21.3757 18.7053 21.4454 18.9779 21.4454C19.2505 21.4454 19.5185 21.3757 19.7565 21.2428L25.0243 18.2694C25.2553 18.1369 25.4483 17.947 25.5846 17.7182C25.7209 17.4893 25.7959 17.2292 25.8024 16.9629V10.9713C25.8056 10.703 25.7346 10.439 25.5973 10.2085C25.46 9.97792 25.2617 9.78978 25.0243 9.6648L19.7113 6.64636Z"
      fill="#212121"
    />
  </svg>
);

const LandIcon = () => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.8269 0.753908H20.2177V17.7686H22.7957C23.069 17.7694 23.3308 17.8783 23.524 18.0715C23.7172 18.2648 23.8261 18.5266 23.8269 18.7998C23.8249 19.0727 23.7156 19.3338 23.5227 19.5268C23.3297 19.7197 23.0686 19.829 22.7957 19.831H2.17179V4.87869H18.6709V3.3319H0.625V21.3778H23.8269C24.0301 21.3781 24.2314 21.3383 24.4192 21.2606C24.6069 21.183 24.7776 21.0691 24.9212 20.9254C25.0649 20.7817 25.1789 20.6111 25.2565 20.4233C25.3341 20.2355 25.374 20.0342 25.3737 19.831V2.3007C25.374 2.0975 25.3342 1.89624 25.2565 1.70845C25.1789 1.52066 25.0649 1.35003 24.9213 1.20635C24.7776 1.06266 24.6069 0.948735 24.4192 0.871097C24.2314 0.79346 24.0301 0.753636 23.8269 0.753908Z"
      fill="#151515"
    />
    <path
      d="M7.84353 18.2845C7.84353 18.4213 7.89786 18.5524 7.99455 18.6491C8.09124 18.7458 8.22239 18.8001 8.35913 18.8001H8.87473C9.01148 18.8001 9.14262 18.7458 9.23931 18.6491C9.33601 18.5524 9.39033 18.4213 9.39033 18.2845V17.2533H9.90593C10.0427 17.2533 10.1738 17.199 10.2705 17.1023C10.3672 17.0056 10.4215 16.8745 10.4215 16.7377V14.6753H10.9371C11.0739 14.6753 11.205 14.621 11.3017 14.5243C11.3984 14.4276 11.4527 14.2965 11.4527 14.1598V13.6442C11.4527 13.5074 11.3984 13.3763 11.3017 13.2796C11.205 13.1829 11.0739 13.1286 10.9371 13.1286H8.35913V12.0974C8.49588 12.0974 8.62702 12.043 8.72371 11.9463C8.82041 11.8497 8.87473 11.7185 8.87473 11.5818V11.0662H9.39033C9.52707 11.0662 9.65822 11.0118 9.75491 10.9151C9.8516 10.8185 9.90593 10.6873 9.90593 10.5506V9.51937H10.4215C10.5583 9.51937 10.6894 9.46505 10.7861 9.36835C10.8828 9.27166 10.9371 9.14052 10.9371 9.00377V8.48817C10.9371 8.35143 10.8828 8.22028 10.7861 8.12359C10.6894 8.0269 10.5583 7.97258 10.4215 7.97258H7.84353V6.94138C7.84353 6.80463 7.78921 6.67349 7.69252 6.5768C7.59583 6.4801 7.46468 6.42578 7.32794 6.42578H5.78114C5.6444 6.42578 5.51325 6.4801 5.41656 6.5768C5.31987 6.67349 5.26554 6.80463 5.26554 6.94138V7.97258H4.23435C4.0976 7.97258 3.96646 8.0269 3.86977 8.12359C3.77307 8.22028 3.71875 8.35143 3.71875 8.48817V9.00377C3.71875 9.14052 3.77307 9.27166 3.86977 9.36835C3.96646 9.46505 4.0976 9.51937 4.23435 9.51937H5.26554V10.5506C5.26554 10.6873 5.31987 10.8185 5.41656 10.9151C5.51325 11.0118 5.6444 11.0662 5.78114 11.0662H6.29674V11.5818C6.29674 11.7185 6.35106 11.8497 6.44776 11.9463C6.54445 12.043 6.67559 12.0974 6.81234 12.0974V13.1286H6.29674C6.15999 13.1286 6.02885 13.1829 5.93216 13.2796C5.83546 13.3763 5.78114 13.5074 5.78114 13.6442V14.1598C5.78114 14.2965 5.83546 14.4276 5.93216 14.5243C6.02885 14.621 6.15999 14.6753 6.29674 14.6753H6.81234V15.7065C6.81234 15.8433 6.86666 15.9744 6.96335 16.0711C7.06005 16.1678 7.19119 16.2221 7.32794 16.2221H7.84353V18.2845Z"
      fill="#151515"
    />
    <path
      d="M17.1248 13.1286H18.6716V6.94141H14.0312C13.8944 6.94141 13.7633 6.99573 13.6666 7.09242C13.5699 7.18911 13.5156 7.32026 13.5156 7.457V8.4882C13.5156 8.62495 13.5699 8.75609 13.6666 8.85278C13.7633 8.94948 13.8944 9.0038 14.0312 9.0038H14.5468V10.035H13C12.8633 10.0354 12.7324 10.0898 12.6358 10.1864C12.5392 10.2831 12.4848 10.414 12.4844 10.5506V11.0662C12.4848 11.2028 12.5392 11.3337 12.6358 11.4303C12.7324 11.5269 12.8633 11.5814 13 11.5818H13.5156V13.1286H13C12.8632 13.1286 12.7321 13.1829 12.6354 13.2796C12.5387 13.3763 12.4844 13.5074 12.4844 13.6442V14.1598C12.4844 14.2965 12.5387 14.4277 12.6354 14.5244C12.7321 14.6211 12.8632 14.6754 13 14.6754H13.5156V15.7066C13.5156 15.8433 13.5699 15.9745 13.6666 16.0712C13.7633 16.1678 13.8944 16.2222 14.0312 16.2222H14.5468V17.2534C14.5472 17.39 14.6016 17.5209 14.6982 17.6175C14.7948 17.7141 14.9257 17.7686 15.0624 17.769H16.6092C16.7458 17.7686 16.8767 17.7141 16.9733 17.6175C17.0699 17.5209 17.1244 17.39 17.1248 17.2534V15.7066H17.6404C17.7771 15.7066 17.9082 15.6523 18.0049 15.5556C18.1016 15.4589 18.156 15.3277 18.156 15.191V14.6754C18.156 14.5386 18.1016 14.4075 18.0049 14.3108C17.9082 14.2141 17.7771 14.1598 17.6404 14.1598H17.1248V13.1286Z"
      fill="#151515"
    />
  </svg>
);
