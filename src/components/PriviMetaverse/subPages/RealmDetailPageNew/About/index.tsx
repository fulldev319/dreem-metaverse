import React from "react";
import Box from "shared/ui-kit/Box";
import { usePageStyles } from "./index.styles";

export default function AboutPage(props) {
  const classes = usePageStyles();
  const [realmData, setRealmData] = React.useState<any>(null);

  React.useEffect(() => {
    if (props.realmData) {
      setRealmData(props.realmData);
    }
  }, [props.realmData]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={12}>
        <Box className={classes.pageTitle}>about game</Box>
        <Box className={classes.pageSubTitle} mt={5.5}>
          {realmData ? realmData.name : "Game name With two lines"}
        </Box>
        <Box className={classes.pageDesc} mt={2.5}>
          {realmData
            ? realmData.description
            : "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an..."}
        </Box>
      </Box>
      {/* <Box className={classes.imgCardContainer} mt={7}>
        <Box className={classes.imgCard}>
          <img src={require("assets/gameImages/game_image_1.png")} alt="nft image" />
        </Box>
        <Box className={classes.imgCard}>
          <img src={require("assets/gameImages/game_image_2.png")} alt="nft image" />
        </Box>
        <Box className={classes.imgCard}>
          <img src={require("assets/gameImages/game_image_3.png")} alt="nft image" />
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="column" alignItems={"center"} mt={6}>
        <Box className={classes.pageDesc}>
          Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game
          player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with
          numerous game modes for every type of game player. Watch a concert, build an...
        </Box>
      </Box>
      <Box className={classes.imgCardContainer} mt={7}>
        <img src={require("assets/gameImages/game_image_wide_width.png")} alt="nft image" width={"100%"} />
      </Box>
      <Box className={classes.pageDescTwoColumn} display={"flex"} flexDirection="row" mt={6}>
        <Box className={classes.pageDescLeft}>
          Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game
          player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with
          numerous game modes for every type of game player. Watch a concert, build an...
        </Box>
        <Box className={classes.pageDescLeft}>
          Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game
          player. Watch a concert, build an island or fight.Fortnite is.
        </Box>
      </Box> */}
    </>
  );
}
