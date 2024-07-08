import React, { useState } from "react";
import cls from "classnames";

import Box from "shared/ui-kit/Box";
import { getDefaultBGImage, getDefaultAvatar } from "shared/services/user/getUserAvatar";
import { Avatar, PrimaryButton } from "shared/ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, useTheme, useMediaQuery, CircularProgress, Button, Select, MenuItem } from "@material-ui/core";
import VotingItem from "./components/VotingItem";
import OwnedAssetCard from "components/PriviMetaverse/subPages/CreatorPage/OwnedAssetCard";
import { MasonryGrid } from "shared/ui-kit/MasonryGrid/MasonryGrid";
import * as MetaverseAPI from "shared/services/API/MetaverseAPI";
import { usePageStyles, useFilterSelectStyles } from "./index.styles";

const SORT_OPTIONS = ['All', 'Draft', 'Minted', 'For Sale'];
export const VOTING_STATES = {
  ACTIVE: "active voting",
  VALIDATED: "Validated",
  REJECTED: "rejected",
}

const FILTERS = ["all", "active voting", "validated", "voted on", "rejected"];

const COLUMNS_COUNT_BREAK_POINTS_FOUR = {
  375: 1,
  600: 2,
  1000: 3,
  1440: 4,
};
export default function VotingPage() {
  const classes = usePageStyles();
  const filterClasses = useFilterSelectStyles();
  const [selVotingMenu, setSelVotingMenu] = useState("voting");
  const [selFilter, setSelFilter] = useState("all");
  const [sortOption, setSortOption] = useState<any>("All");
  const [votingItems, setVotingItems] = useState([
    {
      state: VOTING_STATES.ACTIVE,
    },
    {
      state: VOTING_STATES.VALIDATED,
    },
    {
      state: VOTING_STATES.REJECTED,
    }
  ]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [votings, setVotings] = React.useState<any>([]);
  const [curPage, setCurPage] = React.useState<number>(1);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const loadVotings = () => {
    setIsLoading(true);
    MetaverseAPI.getAssets(12,curPage,"DESC",["WORLD"], undefined, undefined, undefined, undefined, false, false, undefined)
      .then(res => {
        setVotings(res.data.elements);
        setHasMore(res.data.page.cur < res.data.page.max);
        setCurPage(res.data.page.cur + 1)
      })
      .finally(() => {
        setIsLoading(false)
      });
  };

  React.useEffect(() => {
    loadVotings()
  }, []);
  return (
    <>
      <Box display={"flex"} alignItems={"center"} mt={9}>
        {FILTERS.map(item => (
          <Box
            className={cls({ [classes.selectedFilterItem]: item === selFilter }, classes.filterItem)}
            onClick={() => setSelFilter(item)}
          >
            {item}
          </Box>
        ))}
      </Box>
      <Box display={"flex"} alignItems={"center"} mt={5.5}>
        <ActiveIcon />
        <Box ml={2.5} className={classes.typo7}>
          Active Voting For Extensions
        </Box>
      </Box>
      <InfiniteScroll
        scrollableTarget={"scrollContainer"}
        hasChildren={votings.length || 0}
        dataLength={votings.length}
        next={loadVotings}
        hasMore={hasMore}
        loader={
          <Box display={"flex"} flexDirection="column" mt={4}>
            <Box mb={2.5}>
              <VotingItem item={{}} isLoading={true} />
            </Box>
          </Box>
        }
      >
        <Box display={"flex"} flexDirection="column" mt={4}>
          {votings.map(item => (
            <Box mb={2.5}>
              <VotingItem item={item} isLoading={false} />
            </Box>
          ))}
        </Box>
      </InfiniteScroll>
    </>
  );
}

const SolanaIcon = () => (
  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.3978 4.04305C13.3481 4.09696 13.2879 4.14027 13.221 4.17039C13.1541 4.20048 13.0818 4.21678 13.0084 4.21828H0.772947C0.721106 4.21756 0.670726 4.20189 0.627646 4.17316C0.584567 4.14444 0.550688 4.10387 0.530097 4.05637C0.509506 4.00885 0.503081 3.95641 0.511697 3.90534C0.520166 3.85427 0.543239 3.80675 0.57814 3.76851L3.17171 0.88876C3.22149 0.834845 3.28163 0.791533 3.34855 0.761421C3.41547 0.731309 3.48777 0.715026 3.56113 0.713522H15.8044C15.8562 0.714252 15.9067 0.729921 15.9497 0.758645C15.9928 0.78737 16.0267 0.827938 16.0472 0.875443C16.0678 0.922961 16.0742 0.975401 16.0657 1.02647C16.0571 1.07753 16.034 1.12505 15.9991 1.1633L13.3978 4.04305ZM0.566459 6.43019C0.531557 6.39194 0.508484 6.34442 0.500014 6.29335C0.491398 6.24229 0.497824 6.18985 0.518414 6.14233C0.539004 6.09481 0.572884 6.05426 0.615963 6.02553C0.659042 5.99681 0.709424 5.98114 0.761265 5.98041L13.0006 5.97067C13.074 5.97217 13.1463 5.98845 13.2132 6.01857C13.2801 6.04868 13.3403 6.09199 13.39 6.1459L16.003 9.01591C16.0379 9.05416 16.061 9.10168 16.0696 9.15274C16.0781 9.20381 16.0717 9.25625 16.0511 9.30377C16.0306 9.35129 15.9967 9.39184 15.9536 9.42057C15.9106 9.44929 15.8601 9.46496 15.8083 9.46569L3.56892 9.47543C3.49555 9.47393 3.42325 9.45764 3.35634 9.42753C3.28943 9.39742 3.22927 9.35411 3.17949 9.30019L0.566459 6.43019ZM13.3978 14.5573C13.3481 14.6112 13.2879 14.6546 13.221 14.6847C13.1541 14.7148 13.0818 14.7311 13.0084 14.7326L0.765061 14.7228C0.713366 14.7221 0.66284 14.7064 0.619761 14.6777C0.576681 14.649 0.542802 14.6084 0.522357 14.5609C0.501766 14.5134 0.495341 14.461 0.503811 14.4099C0.512427 14.3588 0.5355 14.3113 0.570401 14.2731L3.17171 11.403C3.22149 11.3491 3.28163 11.3058 3.34855 11.2757C3.41547 11.2456 3.48777 11.2293 3.56113 11.2278H15.8044C15.8562 11.2285 15.9067 11.2442 15.9497 11.2729C15.9928 11.3017 16.0267 11.3422 16.0472 11.3897C16.0678 11.4373 16.0742 11.4897 16.0657 11.5408C16.0571 11.5918 16.034 11.6393 15.9991 11.6776L13.3978 14.5573Z"
      fill="#212121"
    />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.2989 16.6638C10.2989 16.6638 20 10.9247 20 5.36038C20 2.38886 17.6111 0 14.6396 0C12.8625 0 11.2894 0.844842 10.328 2.18494C9.33751 0.873975 7.79349 0 6.0164 0C3.04489 0 0.656023 2.38886 0.656023 5.36038C0.597758 10.9247 10.2989 16.6638 10.2989 16.6638Z"
      fill="white"
      fill-opacity="0.8"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.4997 10.1373C11.8253 10.1373 12.8998 8.95648 12.8998 7.49984C12.8998 6.0432 11.8253 4.86237 10.4997 4.86237C9.17417 4.86237 8.09961 6.0432 8.09961 7.49984C8.09961 8.95648 9.17417 10.1373 10.4997 10.1373Z"
      fill="white"
      fill-opacity="0.8"
    />
    <path
      d="M20.8555 7.05703C20.6681 6.80207 16.1987 0.750488 10.4996 0.750488C4.80048 0.750488 0.331165 6.80207 0.143693 7.05703C0.0498463 7.18546 -0.000732422 7.3404 -0.000732422 7.49946C-0.000732422 7.65852 0.0498463 7.81347 0.143693 7.94189C0.331165 8.19685 4.80048 14.2484 10.4996 14.2484C16.1987 14.2484 20.6681 8.19685 20.8555 7.94189C20.9494 7.81347 21 7.65852 21 7.49946C21 7.3404 20.9494 7.18546 20.8555 7.05703V7.05703ZM10.4996 11.9988C9.34261 11.9616 8.24759 11.467 7.45473 10.6235C6.66187 9.78005 6.23591 8.65656 6.27026 7.49946C6.23591 6.34236 6.66187 5.21887 7.45473 4.37541C8.24759 3.53194 9.34261 3.03736 10.4996 3.00015C11.6566 3.03736 12.7516 3.53194 13.5445 4.37541C14.3374 5.21887 14.7633 6.34236 14.729 7.49946C14.7633 8.65656 14.3374 9.78005 13.5445 10.6235C12.7516 11.467 11.6566 11.9616 10.4996 11.9988V11.9988Z"
      fill="white"
      fill-opacity="0.8"
    />
  </svg>
);

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

const TwitterLargeIcon = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="45" height="45" rx="22.5" fill="#1DA1F2" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M34.5 15.0586C33.6177 15.4506 32.6681 15.7146 31.6722 15.8338C32.6889 15.2242 33.4697 14.2595 33.8368 13.11C32.8865 13.6747 31.8314 14.0835 30.7107 14.3051C29.8123 13.3484 28.5316 12.75 27.1165 12.75C24.3975 12.75 22.1928 14.9547 22.1928 17.6737C22.1928 18.0592 22.2368 18.4352 22.3208 18.796C18.2283 18.5912 14.6005 16.6305 12.1719 13.6515C11.7479 14.3787 11.5055 15.2242 11.5055 16.1266C11.5055 17.8345 12.3735 19.3416 13.6958 20.2247C12.8878 20.1991 12.1295 19.9775 11.4647 19.6087V19.6703C11.4647 22.0566 13.163 24.046 15.4141 24.4996C15.0013 24.6116 14.5661 24.6724 14.1174 24.6724C13.7998 24.6724 13.491 24.6412 13.1902 24.5836C13.8166 26.5395 15.6357 27.9634 17.7899 28.0034C16.1052 29.3233 13.9822 30.1112 11.6751 30.1112C11.2767 30.1112 10.8848 30.088 10.5 30.0416C12.6791 31.4384 15.2669 32.2543 18.0475 32.2543C27.1037 32.2543 32.0562 24.7516 32.0562 18.2456C32.0562 18.032 32.0522 17.8193 32.0418 17.6089C33.0049 16.9129 33.84 16.0458 34.5 15.0586Z"
      fill="white"
    />
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H12.5C15.12 13.25 17.25 11.12 17.25 8.5C17.25 5.88 15.12 3.75 12.5 3.75H7.5C4.88 3.75 2.75 5.88 2.75 8.5C2.75 9.6 3.14 10.67 3.84 11.52C4.1 11.84 4.06 12.31 3.74 12.58C3.42 12.84 2.95 12.8 2.68 12.48C1.76 11.36 1.25 9.95 1.25 8.5C1.25 5.05 4.05 2.25 7.5 2.25H12.5C15.95 2.25 18.75 5.05 18.75 8.5C18.75 11.95 15.95 14.75 12.5 14.75Z"
      fill="white"
      stroke="white"
      stroke-width="0.5"
    />
    <path
      d="M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z"
      fill="white"
      stroke="white"
      stroke-width="0.5"
    />
  </svg>
);

const RocketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.875 8H13.25V10.625H10.625V13.25H8V10.625H5.375V15.875H0.125V10.625H5.375V8H2.75V5.375H5.375V2.75H8V0.125H15.875V8Z"
      fill="white"
    />
  </svg>
);

const WorldIcon = () => (
  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 0.4375C7.00962 0.4375 0.9375 6.50962 0.9375 14C0.9375 21.4904 7.00962 27.5625 14.5 27.5625C21.9904 27.5625 28.0625 21.4904 28.0625 14C28.0625 6.50962 21.9904 0.4375 14.5 0.4375ZM2.875 14C2.875 13.5796 2.90019 13.163 2.94475 12.7542L10.625 17.875V19.8125C10.625 20.882 11.493 21.75 12.5625 21.75V25.4506C7.07356 24.5226 2.875 19.7486 2.875 14ZM22.25 22.6393V21.75C22.25 20.6805 21.382 19.8125 20.3125 19.8125H18.375V15.9375C18.375 14.868 17.507 14 16.4375 14H8.6875V12.0625H10.625C11.6945 12.0625 12.5625 11.1945 12.5625 10.125V8.1875H16.4375C17.507 8.1875 18.375 7.3195 18.375 6.25V3.05312C22.8836 4.6535 26.125 8.95088 26.125 14C26.125 17.4313 24.6215 20.51 22.25 22.6393Z" fill="white"/>
  </svg>
);

const ArrowBottomIcon = () => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.10303 1.06741L5.29688 5.26175L9.71878 0.839844" stroke="#00B4F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="45" height="45" rx="22.5" fill="url(#paint0_radial_7651_132821)" />
    <rect width="45" height="45" rx="22.5" fill="#6441A5" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32.5917 23.5963L28.3748 27.8129H21.7508L18.1371 31.426V27.8129H12.7168V10.3473H32.5917V23.5963ZM10.3069 7.93832L9.10254 12.7566V34.4373H14.5235V37.4492H17.5339L20.5461 34.4373H25.3635L34.9995 24.8025V7.93832H10.3069Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.3418 22.3906H21.7508V15.1624H19.3418V22.3906ZM25.9662 22.3906H28.3751V15.1624H25.9662V22.3906Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_7651_132821"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-0.081019 39.9491) rotate(-39.5226) scale(54.6654)"
      >
        <stop stop-color="#FFC050" />
        <stop offset="0.56998" stop-color="#AE3AA3" />
        <stop offset="1" stop-color="#5459CA" />
      </radialGradient>
    </defs>
  </svg>
);

const ActiveIcon = () => (
  <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.11483 23.0962H6.84921L10.2672 28.4407C10.7022 29.1864 11.7587 29.1864 12.2558 28.4407L15.6738 23.0962H18.4082C20.5832 23.0962 22.3233 21.3562 22.3233 19.1811V4.88778C22.3233 2.71271 20.5832 0.972656 18.4082 0.972656H4.11483C1.93976 0.972656 0.199707 2.71271 0.199707 4.88778V19.1811C0.261852 21.3562 2.00191 23.0962 4.11483 23.0962ZM5.35773 10.7294C6.04133 10.0458 7.22208 10.0458 7.96782 10.7294L9.77002 12.5316L14.7416 7.56001C15.4252 6.87642 16.606 6.87642 17.3517 7.56001C18.0353 8.24361 18.0353 9.42436 17.3517 10.1701L11.1372 16.3846C10.7643 16.7575 10.3293 16.9439 9.83216 16.9439C9.335 16.9439 8.89999 16.7575 8.52712 16.3846L5.41988 13.2773C4.61199 12.5937 4.61199 11.4751 5.35773 10.7294Z"
      fill="white"
    />
  </svg>
);
