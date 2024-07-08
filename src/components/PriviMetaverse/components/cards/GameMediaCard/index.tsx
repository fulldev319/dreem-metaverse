import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

import Box from "shared/ui-kit/Box";
import { getDefaultAvatar } from "shared/services/user/getUserAvatar";
import { Avatar } from "shared/ui-kit";
import { gameMediaCardStyles } from "./index.styles";
import { sanitizeIfIpfsUrl } from "shared/helpers";

export default function GameMediaCard(props) {
  const { isLoading, item, gameInfo } = props;
  const classes = gameMediaCardStyles({});
  const history = useHistory();

  const [media, setMedia] = useState<any>(props.item ?? {});

  useEffect(() => {
    if (item?.id) {
      setMedia({
        ...item,
        gameInfo,
      });
    }
  }, [item?.id, gameInfo]);

  return (
    <Box className={classes.card}>
      {isLoading ? (
        <Box className={classes.skeleton}>
          <Skeleton variant="rect" width="100%" height={226} />
          <Skeleton variant="rect" width="100%" height={24} style={{ marginTop: 16, marginBottom: 16 }} />
          <Skeleton variant="rect" width="80%" height={24} />
        </Box>
      ) : (
        <>
          <Box
            flex={1}
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            className={classes.container}
            onClick={() => {
              history.push(`/P2E/${gameInfo.Slug}/${item.id}`);
            }}
          >
            <img className={classes.image} src={sanitizeIfIpfsUrl(media?.image)} alt="robot" />
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
              <Box className={classes.name}>
                {media?.gameInfo?.Chain === "Solana"
                  ? media?.id || media?.gameInfo?.CollectionName
                  : media?.name || media?.gameInfo?.CollectionName}
              </Box>
            </Box>
            <Box onClick={() => {}} className={classes.userName}>
              <Avatar size="small" url={getDefaultAvatar()} />
              <span>{"@0xcwa...rfed3rr"}</span>
            </Box>
          </Box>
          <Box className={classes.divider} />
          <Box pt={2} pb={4} px={3}>
            <div className={classes.cardContentDiv}>
              <span className={classes.cardContentText}>Direct Purchase</span>
              <span className={classes.cardContentAmount}>{"10 ETH"}</span>
            </div>
            <div className={classes.cardContentDiv}>
              <span className={classes.cardContentText}>Block to Buy Later</span>
              <span className={classes.cardContentAmount}>{"1ETH"}</span>
            </div>
            <div className={classes.cardContentDiv}>
              <span className={classes.cardContentText}>Rental Fee (per hour)</span>
              <span className={classes.cardContentAmount}>{"0.1ETH"}</span>
            </div>
          </Box>
        </>
      )}
    </Box>
  );
}
