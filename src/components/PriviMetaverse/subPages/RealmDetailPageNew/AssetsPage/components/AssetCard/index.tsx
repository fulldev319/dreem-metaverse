import React from "react";

import Box from "shared/ui-kit/Box";
import { getDefaultImageUrl } from "shared/services/user/getUserAvatar";
import { cardStyles } from "./index.styles";
import { Skeleton } from "@material-ui/lab";

export default function AssetCard(props) {
  const classes = cardStyles(props);
  console.log(props.isLoading)
  const item = props.item

  return (
    <>
      {props.isLoading ? (
        <Box className={classes.skeleton}>
          <Skeleton variant="rect" width="100%" height={226} />
          <Box my={2}>
            <Skeleton variant="rect" width={"100%"} height={24} />
          </Box>
          <Skeleton variant="rect" width={"80%"} height={24} />
        </Box>
      ) : (
      <Box className={classes.card}>
        <Box className={classes.assetKindBadge}>realm</Box>
        <Box className={classes.shareButtoon}>
          <ShareIcon />
        </Box>
        <Box
          className={classes.cardImage}
          style={{
            backgroundImage: item.modelImage
              ? `url("${item.modelImage}")`
              : `url(${getDefaultImageUrl()})`
          }}
        ></Box>
        <Box display="flex" justifyContent="space-between" style={{ padding: "15px 14px 20px" }}>
          <Box className={classes.avatar}>
            <img src={item.submitter.user.avatarUrl ? item.submitter.user.avatarUrl : getDefaultImageUrl()} />
          </Box>
          <Box display="flex" flexDirection="row">
            <Box className={classes.typo3} mr={1}>
              Price:
            </Box>
            <Box className={classes.typo4}>2234 USDT</Box>
          </Box>
        </Box>
        <Box className={classes.typo1}>{item.name}</Box>
        <Box className={classes.typo2}>
          {item.description}
        </Box>
        <Box style={{ height: 0, border: "0.725087px solid rgba(255, 255, 255, 0.5)", opacity: 0.2 }}></Box>
        <Box className={classes.footer}>
          <LocationIcon />
          <Box className={classes.typo3} ml={1}>
            Location:
          </Box>
          <Box className={classes.typo4} ml={1}>
            245,245
          </Box>
        </Box>
      </Box>
      )}
    </>
  );
}

const LocationIcon = () => (
  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.95352 0.263C3.13989 0.263 0.864258 2.54387 0.864258 5.36399C0.864258 9.18974 5.95352 14.8373 5.95352 14.8373C5.95352 14.8373 11.0428 9.18974 11.0428 5.36399C11.0428 2.54387 8.76716 0.263 5.95352 0.263ZM5.95352 7.18578C4.95021 7.18578 4.13593 6.36962 4.13593 5.36399C4.13593 4.35837 4.95021 3.54221 5.95352 3.54221C6.95684 3.54221 7.77112 4.35837 7.77112 5.36399C7.77112 6.36962 6.95684 7.18578 5.95352 7.18578Z"
      fill="#E9FF26"
    />
  </svg>
);

const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.05195 9.70384L4.78404 7.56988M4.77798 5.8367L9.04991 3.70073M12.7157 10.5689C12.7157 11.6368 11.85 12.5025 10.7821 12.5025C9.71421 12.5025 8.84852 11.6368 8.84852 10.5689C8.84852 9.50103 9.71421 8.63534 10.7821 8.63534C11.85 8.63534 12.7157 9.50103 12.7157 10.5689ZM12.7157 2.83464C12.7157 3.90252 11.85 4.76821 10.7821 4.76821C9.71421 4.76821 8.84852 3.90252 8.84852 2.83464C8.84852 1.76676 9.71421 0.901077 10.7821 0.901077C11.85 0.901077 12.7157 1.76676 12.7157 2.83464ZM4.98139 6.70178C4.98139 7.76966 4.1157 8.63534 3.04782 8.63534C1.97994 8.63534 1.11426 7.76966 1.11426 6.70178C1.11426 5.6339 1.97994 4.76821 3.04782 4.76821C4.1157 4.76821 4.98139 5.6339 4.98139 6.70178Z"
      stroke="white"
      stroke-width="1.45017"
    />
  </svg>
);
