import React, { useEffect, useState } from "react";

import Box from "shared/ui-kit/Box";
import { getDefaultAvatar } from "shared/services/user/getUserAvatar";
import { PrimaryButton } from "shared/ui-kit";
import { usePageStyles } from "./index.styles";
import { BackButton } from "components/PriviMetaverse/components/BackButton";
import { useHistory } from "react-router";
import AvatarOrderBookModal from "components/PriviMetaverse/modals/AvatarOrderBookModal";
import { useParams } from "react-router-dom";
import * as MetaverseAPI from "shared/services/API/MetaverseAPI";

export default function AvatarDetailPage() {
  const classes = usePageStyles();
  const history = useHistory();
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<any>({});
  const [openAvatarOrderBookModal, setOpenAvatarOrderBookModal] = useState<boolean>(false);

  useEffect(() => {
    if (itemId) {
      MetaverseAPI.getAsset(itemId).then(res => {
        console.log("========================", res.data);
        setItem(res.data);
      });
    }
  }, [itemId]);

  return (
    <Box className={classes.root}>
      <Box className={classes.darkLayer} />
      <Box display={"flex"} justifyContent={"center"} mt={9}>
        <Box className={classes.fitContent}>
          <Box className={classes.backButtonContainer}>
            <BackButton light overrideFunction={() => history.goBack()} dark={true} style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 24px",
              background: "#FFFFFF",
              borderRadius: "63px",
              fontFamily: "GRIFTER",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "120%",
              textAlign: "center",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#151515"
            }} />
            <Box className={classes.pageTitle}>Avatar Details</Box>
            <ShareIcon />
          </Box>
          <Box className={classes.container} mt={4} display={"flex"} flexDirection={"row"}>
            <Box className={classes.leftPanel}>
              <Box className={classes.preview}>
                <Box className={classes.preview1}>
                  <Box className={classes.preview2}>
                    <Box className={classes.preview3}
                      style={{
                        backgroundImage: !item?.characterModel && item?.characterImage
                          ? `url("${item.characterImage}")`
                          : 'transparent',
                        backgroundSize: `100% 100%`,
                      }}>
                      <model-viewer
                        src={item?.characterModel}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        seamless-poster
                        shadow-intensity="1"
                        camera-controls
                        style={{ width: "100%", height: "100%" }}
                      ></model-viewer>
                      <Box className={classes.viewButton}>
                        3d view
                        <ArrowIcon />
                      </Box>
                      <Box className={classes.entryAvatar}>
                        entry avatar
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.creator}>
                <Box className={classes.typo1}>
                  CREATOR
                </Box>
                <Box display={"flex"} gridGap={16} mt={2}>
                  <Box className={classes.creatorAvatar} style={{
                    backgroundImage: item?.submitter?.user?.avatarUrl
                      ? `url("${item?.submitter?.user?.avatarUrl}")`
                      : `url(${getDefaultAvatar()})`,
                    backgroundSize: `100% 100%`,
                  }}>
                  </Box>
                  <Box flex={1}>
                    <Box className={classes.typo2}>{item?.submitter?.user?.name}</Box>
                    <Box className={classes.typo3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut justo, a nunc vulputate egestas.</Box>
                    <Box className={classes.typo4}>more from creator</Box>
                    <Box className={classes.creatorInfo} mt={2}>
                      <Box className={classes.creatorDetail}>
                        <Box className={classes.typo5}>63.8m</Box>
                        <Box className={classes.typo6}>Stars</Box>
                      </Box>
                      <Box className={classes.divider}></Box>
                      <Box className={classes.creatorDetail}>
                        <Box className={classes.typo5}>11.3k</Box>
                        <Box className={classes.typo6}>Followers</Box>
                      </Box>
                      <Box className={classes.divider}></Box>
                      <Box className={classes.creatorDetail}>
                        <Box className={classes.typo5}>2.2k</Box>
                        <Box className={classes.typo6}>Following</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.rightPanel}>
              <Box className={classes.enterRealm}
                style={{
                  backgroundImage: `url(${require("assets/gameImages/avatar_detail_bg_top.png")})`,
                  backgroundSize: `100% 100%`,
                }}>
                <Box className={classes.detailContent}>
                  <Box className={classes.typo7}>
                    <KeyIcon />This avatar allows you to enter <span style={{ color: "#00b4f6", marginLeft: 16 }}>[Realm name]</span>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.avatar}>
                <Box className={classes.detailContent}>
                  <Box className={classes.avatarCopy}>
                    <Box className={classes.typo8}>
                      copies available 11 / 25
                    </Box>
                  </Box>
                  <Box className={classes.typo9}>
                    {item?.name}
                  </Box>
                  <Box className={classes.avatarAction}>
                    <Box className={classes.actionSale}>
                      for sale
                    </Box>
                    <Box className={classes.actionRent}>
                      for rent
                    </Box>
                  </Box>
                  <Box className={classes.avatarStatus}>
                    <Box display={"flex"}>
                      <Box className={classes.typo10}>
                        Collection ID:  x926ab3273...
                      </Box>
                      <LinkIcon />
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Box display={"flex"}>
                      <MintIcon />
                      <Box className={classes.typo10}>
                        523 minted
                      </Box>
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Box display={"flex"}>
                      <PeopleIcon />
                      <Box className={classes.typo10}>
                        30 owners
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.horizontalDivider} mt={4} mb={4}></Box>
                  <Box className={classes.typo11}>Description:</Box>
                  <Box className={classes.typo12}>{item?.description}</Box>
                  <Box className={classes.typo11}>Pricing</Box>
                  <Box className={classes.pricing}>
                    <Box className={classes.pricingItem}>
                      <Box display={"flex"} gridGap={8}>
                        <SellIcon />
                        <Box className={classes.typo13}>Sell Price</Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo14}>0.02 SOLe</Box>
                        <Box className={classes.typo15}>25 available</Box>
                      </Box>
                      <PrimaryButton
                        className={classes.btnBuy}
                        size="small"
                        onClick={() => { }}>Buy</PrimaryButton>
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Box className={classes.pricingItem}>
                      <Box display={"flex"} gridGap={8}>
                        <RentIcon />
                        <Box className={classes.typo13}>Rent Price </Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo14}>0.1 ETH / day</Box>
                      </Box>
                      <PrimaryButton
                        className={classes.btnRent}
                        size="small"
                        onClick={() => { }}>rent</PrimaryButton>
                    </Box>
                    <Box className={classes.divider}></Box>
                    <Box className={classes.pricingItem} style={{ opacity: 0.2 }}>
                      <Box display={"flex"} gridGap={8}>
                        <ReserveIcon />
                        <Box className={classes.typo13}>Reserve  Price </Box>
                      </Box>
                      <Box>
                        <Box className={classes.typo14}>N/A</Box>
                      </Box>
                      <PrimaryButton
                        className={classes.btnBlock}
                        size="small"
                        onClick={() => { }}>block</PrimaryButton>
                    </Box>
                  </Box>
                  <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} mt={3}>
                    <PrimaryButton
                      className={classes.btnBook}
                      size="small"
                      onClick={() => { setOpenAvatarOrderBookModal(true); }}>
                      open order book
                    </PrimaryButton>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.attributes}>
                <Box className={classes.detailContent}>
                  <Box className={classes.typo17}>Attributes</Box>
                  <Box className={classes.horizontalDivider} mt={2} mb={2}></Box>
                  <Box display={"flex"}>
                    <Box display={"flex"} flexDirection={"column"} gridGap={16}>
                      <Box className={classes.typo18}>Rarity</Box>
                      <Box className={classes.typo19}>LEGENDARY</Box>
                    </Box>
                    <Box className={classes.divider} mr={5} ml={5}></Box>
                    <Box display={"flex"} flexDirection={"column"} gridGap={8}>
                      <Box className={classes.typo18}>Elements</Box>
                      <Box display={"flex"}>
                        <PrimaryButton
                          className={classes.btnElement}
                          size="small"
                          onClick={() => { }}>
                          <WaterIcon />
                          <Box className={classes.typo20}>water</Box>
                        </PrimaryButton>
                        <PrimaryButton
                          className={classes.btnElement}
                          size="small"
                          onClick={() => { }}>
                          <AirIcon />
                          <Box className={classes.typo21}>air</Box>
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {openAvatarOrderBookModal && (
        <AvatarOrderBookModal
          open={openAvatarOrderBookModal}
          onClose={() => setOpenAvatarOrderBookModal(false)}
        />
      )}
    </Box>
  );
}

const ShareIcon = () => (
  <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" width="53" height="35.2708" rx="17.6354" fill="#00B4F7" />
    <g opacity="0.9">
      <path d="M28.1915 22.5475L21.8149 19.3592M21.8059 16.7697L28.1885 13.5784M33.6654 23.84C33.6654 25.4354 32.372 26.7288 30.7765 26.7288C29.181 26.7288 27.8876 25.4354 27.8876 23.84C27.8876 22.2445 29.181 20.9511 30.7765 20.9511C32.372 20.9511 33.6654 22.2445 33.6654 23.84ZM33.6654 12.2844C33.6654 13.8799 32.372 15.1733 30.7765 15.1733C29.181 15.1733 27.8876 13.8799 27.8876 12.2844C27.8876 10.6889 29.181 9.39551 30.7765 9.39551C32.372 9.39551 33.6654 10.6889 33.6654 12.2844ZM22.1098 18.0622C22.1098 19.6577 20.8164 20.9511 19.2209 20.9511C17.6254 20.9511 16.332 19.6577 16.332 18.0622C16.332 16.4667 17.6254 15.1733 19.2209 15.1733C20.8164 15.1733 22.1098 16.4667 22.1098 18.0622Z" stroke="#081831" stroke-width="2" />
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 12 }}>
    <path d="M13 3.23486L8.13235 7.97754L3 2.97754" stroke="#00B4F7" stroke-width="3" stroke-linecap="square" />
  </svg>
);

const SellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9597 8.96039C19.2897 8.22039 18.2797 7.79039 16.8797 7.64039V6.88039C16.8797 5.51039 16.2997 4.19039 15.2797 3.27039C14.2497 2.33039 12.9097 1.89039 11.5197 2.02039C9.12975 2.25039 7.11975 4.56039 7.11975 7.06039V7.64039C5.71975 7.79039 4.70975 8.22039 4.03975 8.96039C3.06975 10.0404 3.09975 11.4804 3.20975 12.4804L3.90975 18.0504C4.11975 20.0004 4.90975 22.0004 9.20975 22.0004H14.7897C19.0897 22.0004 19.8797 20.0004 20.0897 18.0604L20.7897 12.4704C20.8997 11.4804 20.9297 10.0404 19.9597 8.96039ZM11.6597 3.41039C12.6597 3.32039 13.6097 3.63039 14.3497 4.30039C15.0797 4.96039 15.4897 5.90039 15.4897 6.88039V7.58039H8.50975V7.06039C8.50975 5.28039 9.97975 3.57039 11.6597 3.41039ZM11.9997 18.5804C9.90975 18.5804 8.20975 16.8804 8.20975 14.7904C8.20975 12.7004 9.90975 11.0004 11.9997 11.0004C14.0897 11.0004 15.7897 12.7004 15.7897 14.7904C15.7897 16.8804 14.0897 18.5804 11.9997 18.5804Z" fill="white" />
    <path d="M11.4299 16.64C11.2399 16.64 11.0499 16.57 10.8999 16.42L9.90988 15.43C9.61988 15.14 9.61988 14.66 9.90988 14.37C10.1999 14.08 10.6799 14.08 10.9699 14.37L11.4499 14.85L13.0499 13.37C13.3499 13.09 13.8299 13.11 14.1099 13.41C14.3899 13.71 14.3699 14.19 14.0699 14.47L11.9399 16.44C11.7899 16.57 11.6099 16.64 11.4299 16.64Z" fill="white" />
  </svg>
);

const RentIcon = () => (
  <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.1992 14.7881C0.805 15.1802 0.495358 15.649 0.289397 16.1654C0.0834365 16.6818 -0.0144689 17.235 0.00172618 17.7908C0.0360416 18.6597 0.406947 19.4812 1.03601 20.0815C1.66507 20.6819 2.50298 21.0141 3.37254 21.0079H8.62714C9.49671 21.0141 10.3346 20.6819 10.9637 20.0815C11.5927 19.4812 11.9636 18.6597 11.998 17.7908C12.0132 17.2362 11.9148 16.6844 11.7089 16.1692C11.5029 15.6541 11.1938 15.1865 10.8005 14.7953L8.06594 12.0607C7.78719 11.7813 7.63065 11.4027 7.63065 11.008C7.63065 10.6133 7.78719 10.2348 8.06594 9.95532L10.8005 7.22078C11.196 6.82745 11.5064 6.35697 11.7124 5.83858C11.9185 5.32019 12.0156 4.76497 11.998 4.20743C11.9636 3.33852 11.5927 2.51702 10.9637 1.91664C10.3346 1.31626 9.49671 0.984075 8.62714 0.990321H3.37254C2.50298 0.984075 1.66507 1.31626 1.03601 1.91664C0.406947 2.51702 0.0360416 3.33852 0.00172618 4.20743C-0.0134851 4.76199 0.0849 5.31381 0.290832 5.82895C0.496765 6.34409 0.805891 6.81166 1.1992 7.20291L3.93374 9.93745C4.21249 10.2169 4.36903 10.5955 4.36903 10.9902C4.36903 11.3849 4.21249 11.7634 3.93374 12.0429L1.1992 14.7881ZM3.34394 6.23778C3.28001 6.31316 3.20114 6.37446 3.11232 6.41781C3.02349 6.46117 2.92664 6.48563 2.82789 6.48966C2.72913 6.49369 2.63061 6.4772 2.53855 6.44123C2.44649 6.40526 2.36288 6.35059 2.29302 6.28067L2.268 6.25565C2.1419 6.13527 2.06235 5.97423 2.04338 5.80093C2.02442 5.62763 2.06725 5.4532 2.16434 5.30839C2.22456 5.22614 2.30168 5.15772 2.39052 5.10772C2.47936 5.05773 2.57786 5.02731 2.67942 5.0185C2.78099 5.0097 2.88326 5.02272 2.97937 5.05669C3.07549 5.09066 3.16323 5.14479 3.23671 5.21545L3.25815 5.2369C3.39503 5.36278 3.47976 5.53538 3.49564 5.72066C3.51152 5.90594 3.4574 6.09044 3.34394 6.23778ZM3.94447 7.92855C3.82057 7.80637 3.74369 7.64443 3.72735 7.47118C3.711 7.29794 3.75624 7.12448 3.8551 6.98129C3.91533 6.89904 3.99245 6.83062 4.08129 6.78062C4.17013 6.73062 4.26863 6.7002 4.37019 6.6914C4.47175 6.6826 4.57402 6.69562 4.67014 6.72959C4.76626 6.76356 4.854 6.81769 4.92747 6.88835L5.76035 7.72122C5.89457 7.84946 5.97597 8.02327 5.98854 8.20848C6.00111 8.39369 5.94393 8.5769 5.82826 8.7221C5.76433 8.79748 5.68546 8.85878 5.59664 8.90213C5.50781 8.94549 5.41097 8.96995 5.31221 8.97398C5.21345 8.97801 5.11493 8.96152 5.02287 8.92555C4.93081 8.88958 4.84721 8.83491 4.77734 8.76499L3.94447 7.92855ZM4.65938 13.3547C5.01657 12.9983 5.50058 12.7981 6.0052 12.7981C6.50983 12.7981 6.99384 12.9983 7.35103 13.3547L9.79245 15.7962C10.2821 16.2834 10.5618 16.9428 10.5717 17.6335C10.5727 17.8891 10.523 18.1424 10.4256 18.3787C10.3282 18.6151 10.185 18.8298 10.0043 19.0106C9.82351 19.1914 9.60877 19.3346 9.37241 19.4319C9.13606 19.5293 8.88277 19.579 8.62714 19.578H3.37254C3.11751 19.5785 2.8649 19.5286 2.6292 19.4313C2.39349 19.3339 2.17933 19.1909 1.999 19.0106C1.81867 18.8303 1.67572 18.6161 1.57834 18.3804C1.48096 18.1447 1.43108 17.8921 1.43155 17.6371C1.44144 16.9464 1.72112 16.2869 2.21081 15.7997L4.65938 13.3547Z" fill="white" />
    <path d="M3.94447 7.92855C3.82057 7.80637 3.74369 7.64443 3.72735 7.47118C3.711 7.29794 3.75624 7.12448 3.8551 6.98129C3.91533 6.89904 3.99245 6.83062 4.08129 6.78062C4.17013 6.73062 4.26863 6.7002 4.37019 6.6914C4.47175 6.6826 4.57402 6.69562 4.67014 6.72959C4.76626 6.76356 4.854 6.81769 4.92747 6.88835L5.76035 7.72122C5.89457 7.84946 5.97597 8.02327 5.98854 8.20848C6.00111 8.39369 5.94393 8.5769 5.82826 8.7221C5.76433 8.79748 5.68546 8.85878 5.59664 8.90213C5.50781 8.94549 5.41097 8.96995 5.31221 8.97398C5.21345 8.97801 5.11493 8.96152 5.02287 8.92555C4.93081 8.88958 4.84721 8.83491 4.77734 8.76499L3.94447 7.92855Z" fill="white" />
    <path d="M3.34394 6.23778C3.28001 6.31316 3.20114 6.37446 3.11232 6.41781C3.02349 6.46117 2.92664 6.48563 2.82789 6.48966C2.72913 6.49369 2.63061 6.4772 2.53855 6.44123C2.44649 6.40526 2.36288 6.35059 2.29302 6.28067L2.268 6.25565C2.1419 6.13527 2.06235 5.97423 2.04338 5.80093C2.02442 5.62763 2.06725 5.4532 2.16434 5.30839C2.22456 5.22614 2.30168 5.15772 2.39052 5.10772C2.47936 5.05773 2.57786 5.02731 2.67942 5.0185C2.78099 5.0097 2.88326 5.02272 2.97937 5.05669C3.07549 5.09066 3.16323 5.14479 3.23671 5.21545L3.25815 5.2369C3.39503 5.36278 3.47976 5.53538 3.49564 5.72066C3.51152 5.90594 3.4574 6.09044 3.34394 6.23778Z" fill="white" />
  </svg>
);

const ReserveIcon = () => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.474683 0.466797H11.481V9.31818H1.58151V19.5094H0.474609L0.474683 0.466797ZM11.9762 4.31059H20.1869L16.4597 8.47425L20.1869 13.162H9.18056V9.72657H11.9762V4.31059Z" fill="white" />
  </svg>
);

const WaterIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7901_5564)">
      <path d="M5.81041 0.264911L5.51604 0.532771C5.22168 0.264911 5.22168 0.264911 5.22168 0.264911C5.2971 0.182017 5.40397 0.134766 5.51604 0.134766C5.62812 0.134766 5.73499 0.182017 5.81041 0.264911Z" fill="#0AF0FF" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22193 0.265625L5.21819 0.269734L5.20824 0.280747C5.19956 0.290355 5.18687 0.304458 5.17043 0.32284C5.13756 0.359602 5.08968 0.413491 5.02894 0.482773C4.90743 0.621313 4.73438 0.821538 4.52694 1.06955C4.11238 1.56517 3.55877 2.2537 3.00429 3.02369C2.45083 3.79226 1.89077 4.64989 1.46749 5.48288C1.04992 6.30464 0.740234 7.15024 0.740234 7.88126C0.740234 10.6193 2.86084 12.8716 5.5163 12.8716C8.17175 12.8716 10.2924 10.6193 10.2924 7.88126C10.2924 7.15024 9.98267 6.30464 9.56513 5.48288C9.14185 4.64989 8.58177 3.79226 8.02831 3.02369C7.47381 2.2537 6.92022 1.56517 6.50566 1.06955C6.29822 0.821538 6.12517 0.621313 6.00365 0.482773C5.94292 0.413491 5.89504 0.359602 5.86216 0.32284C5.84573 0.304458 5.83303 0.290355 5.82435 0.280747L5.8144 0.269734L5.81102 0.265996C5.81102 0.265996 5.81066 0.265625 5.5163 0.533485L5.22193 0.265625ZM3.22465 8.44177C3.24536 8.22295 3.08475 8.02876 2.86591 8.00806C2.64708 7.98733 2.45289 8.14796 2.43218 8.36679C2.30794 9.6798 3.27162 10.8449 4.58463 10.9691C4.80347 10.9899 4.99766 10.8292 5.01835 10.6104C5.03905 10.3916 4.87845 10.1974 4.65962 10.1767C3.78428 10.0938 3.14183 9.3171 3.22465 8.44177Z" fill="url(#paint0_linear_7901_5564)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_7901_5564" x1="5.5163" y1="0.265625" x2="3.5" y2="17.999" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0AF0FF" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <clipPath id="clip0_7901_5564">
        <rect width="9.55213" height="12.7362" fill="white" transform="translate(0.740234 0.134766)" />
      </clipPath>
    </defs>
  </svg>
);

const AirIcon = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.69799 4.24364H1.41612C1.21614 4.24364 1.02436 4.32308 0.882954 4.46448C0.74155 4.60589 0.662109 4.79768 0.662109 4.99765C0.662109 5.19763 0.74155 5.38941 0.882954 5.53082C1.02436 5.67222 1.21614 5.75166 1.41612 5.75166H8.82806C8.88584 5.75135 8.9434 5.74439 8.99959 5.73093C9.45322 5.6729 9.88048 5.48525 10.2301 5.19047C10.5798 4.8957 10.837 4.50632 10.9709 4.06903C11.1047 3.63174 11.1097 3.16512 10.985 2.72511C10.8603 2.28511 10.6114 1.89041 10.268 1.58836C9.9246 1.2863 9.50138 1.08971 9.04907 1.02216C8.59676 0.954619 8.13457 1.01899 7.71792 1.20754C7.30128 1.3961 6.94788 1.70085 6.70009 2.08523C6.45231 2.46962 6.32067 2.91732 6.32097 3.37464C6.32097 3.57462 6.40041 3.7664 6.54181 3.90781C6.68322 4.04921 6.875 4.12865 7.07498 4.12865C7.27496 4.12865 7.46674 4.04921 7.60815 3.90781C7.74955 3.7664 7.82899 3.57462 7.82899 3.37464C7.82899 3.20277 7.87996 3.03476 7.97544 2.89185C8.07093 2.74894 8.20665 2.63756 8.36544 2.57179C8.52423 2.50602 8.69895 2.48881 8.86752 2.52234C9.03609 2.55587 9.19093 2.63863 9.31246 2.76017C9.434 2.8817 9.51676 3.03654 9.55029 3.20511C9.58382 3.37368 9.56661 3.5484 9.50084 3.70719C9.43507 3.86598 9.32369 4.0017 9.18078 4.09719C9.03787 4.19267 8.86986 4.24364 8.69799 4.24364Z" fill="#EFFFF9" />
    <path d="M1.41612 9.14308H8.46425C8.66422 9.14308 8.85601 9.06364 8.99741 8.92224C9.13882 8.78083 9.21826 8.58905 9.21826 8.38907C9.21826 8.18909 9.13882 7.99731 8.99741 7.8559C8.85601 7.7145 8.66422 7.63506 8.46425 7.63506H1.41612C1.21614 7.63506 1.02436 7.7145 0.882954 7.8559C0.74155 7.99731 0.662109 8.18909 0.662109 8.38907C0.662109 8.58905 0.74155 8.78083 0.882954 8.92224C1.02436 9.06364 1.21614 9.14308 1.41612 9.14308Z" fill="#EFFFF9" />
    <path d="M13.0147 7.7347C12.3846 7.7357 11.7806 7.98645 11.335 8.43201C10.8894 8.87758 10.6387 9.4816 10.6377 10.1117C10.6377 10.3117 10.7171 10.5035 10.8585 10.6449C10.9999 10.7863 11.1917 10.8657 11.3917 10.8657C11.5917 10.8657 11.7835 10.7863 11.9249 10.6449C12.0663 10.5035 12.1457 10.3117 12.1457 10.1117C12.1457 9.93985 12.1967 9.77184 12.2922 9.62893C12.3876 9.48603 12.5234 9.37464 12.6822 9.30887C12.8409 9.2431 13.0157 9.22589 13.1842 9.25942C13.3528 9.29295 13.5077 9.37571 13.6292 9.49725C13.7507 9.61878 13.8335 9.77362 13.867 9.94219C13.9005 10.1108 13.8833 10.2855 13.8176 10.4443C13.7518 10.6031 13.6404 10.7388 13.4975 10.8343C13.3546 10.9298 13.1866 10.9807 13.0147 10.9807H1.41612C1.21614 10.9807 1.02436 11.0602 0.882954 11.2016C0.74155 11.343 0.662109 11.5348 0.662109 11.7347C0.662109 11.9347 0.74155 12.1265 0.882954 12.2679C1.02436 12.4093 1.21614 12.4887 1.41612 12.4887H13.1448C13.2026 12.4884 13.2601 12.4815 13.3163 12.468C13.9133 12.3887 14.458 12.0857 14.8402 11.6202C15.2225 11.1548 15.4137 10.5616 15.3755 9.96054C15.3372 9.35948 15.0721 8.79537 14.6339 8.3822C14.1957 7.96903 13.617 7.7376 13.0147 7.7347Z" fill="#EFFFF9" />
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H12.5C15.12 13.25 17.25 11.12 17.25 8.5C17.25 5.88 15.12 3.75 12.5 3.75H7.5C4.88 3.75 2.75 5.88 2.75 8.5C2.75 9.6 3.14 10.67 3.84 11.52C4.1 11.84 4.06 12.31 3.74 12.58C3.42 12.84 2.95 12.8 2.68 12.48C1.76 11.36 1.25 9.95 1.25 8.5C1.25 5.05 4.05 2.25 7.5 2.25H12.5C15.95 2.25 18.75 5.05 18.75 8.5C18.75 11.95 15.95 14.75 12.5 14.75Z" fill="white" stroke="white" stroke-width="0.5" />
    <path d="M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z" fill="white" stroke="white" stroke-width="0.5" />
  </svg>
);

const KeyIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 16 }}>
    <path d="M17.2908 0.5L9.65181 8.604C9.05181 8.437 8.43381 8.352 7.80481 8.352C5.98081 8.352 4.26581 9.062 2.97681 10.351C0.309813 13.017 0.309813 17.357 2.97681 20.024C4.26881 21.316 5.98581 22.028 7.81281 22.028C9.63981 22.028 11.3568 21.316 12.6498 20.024C14.4108 18.263 15.0598 15.697 14.3898 13.329L15.2938 12.425L16.0358 10.197L18.5138 9.371L19.3298 6.924L22.4998 6.034V0.5H17.2908ZM9.46381 16.839C8.55281 17.75 7.07281 17.75 6.16081 16.839C5.24881 15.927 5.24881 14.447 6.16081 13.535C7.07381 12.623 8.55281 12.623 9.46381 13.535C10.3758 14.447 10.3758 15.927 9.46381 16.839Z" fill="white" />
  </svg >
);

const MintIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.375 8H13.75V10.625H11.125V13.25H8.5V10.625H5.875V15.875H0.625V10.625H5.875V8H3.25V5.375H5.875V2.75H8.5V0.125H16.375V8Z" fill="white" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50033 1.66602C5.31699 1.66602 3.54199 3.44102 3.54199 5.62435C3.54199 7.76602 5.21699 9.49935 7.40033 9.57435C7.46699 9.56602 7.53366 9.56602 7.58366 9.57435C7.60033 9.57435 7.60866 9.57435 7.62533 9.57435C7.63366 9.57435 7.63366 9.57435 7.64199 9.57435C9.77533 9.49935 11.4503 7.76602 11.4587 5.62435C11.4587 3.44102 9.68366 1.66602 7.50033 1.66602Z" fill="white" />
    <path d="M11.7338 11.7914C9.40879 10.2414 5.61712 10.2414 3.27546 11.7914C2.21712 12.4997 1.63379 13.4581 1.63379 14.4831C1.63379 15.5081 2.21712 16.4581 3.26712 17.1581C4.43379 17.9414 5.96712 18.3331 7.50046 18.3331C9.03379 18.3331 10.5671 17.9414 11.7338 17.1581C12.7838 16.4497 13.3671 15.4997 13.3671 14.4664C13.3588 13.4414 12.7838 12.4914 11.7338 11.7914Z" fill="white" />
    <path d="M16.6588 6.11708C16.7921 7.73374 15.6421 9.15041 14.0505 9.34207C14.0421 9.34207 14.0421 9.34207 14.0338 9.34207H14.0088C13.9588 9.34207 13.9088 9.34207 13.8671 9.35874C13.0588 9.40041 12.3171 9.14207 11.7588 8.66707C12.6171 7.90041 13.1088 6.75041 13.0088 5.50041C12.9505 4.82541 12.7171 4.20874 12.3671 3.68374C12.6838 3.52541 13.0505 3.42541 13.4255 3.39208C15.0588 3.25041 16.5171 4.46708 16.6588 6.11708Z" fill="white" />
    <path d="M18.3249 13.8247C18.2582 14.633 17.7415 15.333 16.8749 15.808C16.0415 16.2663 14.9915 16.483 13.9499 16.458C14.5499 15.9163 14.8999 15.2413 14.9665 14.5247C15.0499 13.4913 14.5582 12.4997 13.5749 11.708C13.0165 11.2663 12.3665 10.9163 11.6582 10.658C13.4999 10.1247 15.8165 10.483 17.2415 11.633C18.0082 12.2497 18.3999 13.0247 18.3249 13.8247Z" fill="white" />
  </svg>
);