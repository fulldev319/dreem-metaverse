import React from "react";

import Box from "shared/ui-kit/Box";
import { getDefaultImageUrl } from "shared/services/user/getUserAvatar";
import { cardStyles } from "./index.styles";
import { useHistory, useParams } from "react-router";
import { Skeleton } from "@material-ui/lab";

export default function AvatarCard(props) {
  const item = props.item;
  const classes = cardStyles(props);
  const history = useHistory();
  const { id: realmId } = useParams<{ id: string }>();
  const { tap: currentTap } = useParams<{ tap: string }>();

  const goToDetail = () => {
    if (realmId && currentTap && item?.versionHashId) {
      history.push(`/realm/${realmId}/${currentTap}/${item?.versionHashId}`);
    }
  };

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
        <Box className={classes.card} onClick={() => { goToDetail(); }}>
          <Box className={classes.statusBadge}>RENTED</Box>
          <Box className={classes.typo1}>#1</Box>
          <Box
            className={classes.cardImage}
            style={{
              backgroundImage: item.characterImage
                ? `url("${item.characterImage}")`
                : `url(${getDefaultImageUrl()})`
            }}
          ></Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.info}>
            <Box display="flex" justifyContent="space-between">
              <Box className={classes.typo2}>{item.name}</Box>
              <Box className={classes.typo3}>20/200</Box>
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.info}>
            <Box display="flex" justifyContent="space-between" pt={1} pb={1}>
              <Box className={classes.typo4}>Selling</Box>
              <Box className={classes.typo5}>10 ETH</Box>
            </Box>
            <Box display="flex" justifyContent="space-between" pt={1} pb={1}>
              <Box className={classes.typo4}>Rental</Box>
              <Box className={classes.typo5}>0.1 ETH/DAY</Box>
            </Box>
            <Box display="flex" justifyContent="space-between" pt={1} pb={1}>
              <Box className={classes.typo4}>Blocking</Box>
              <Box className={classes.typo6}>N/A</Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
