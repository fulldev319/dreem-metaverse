import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Box from "shared/ui-kit/Box";
import { getDefaultBGImage } from "shared/services/user/getUserAvatar";
import { useStyles } from "./index.styles";

const TYPE = ["active voting", "validated", "rejected"];

export default function DaoItem() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={getDefaultBGImage()} alt="dao item image" width={200} height={200} />
      <Box display={"flex"} flexDirection="column" mx={2}>
        <Box className={classes.tag}>24, Jan 2022</Box>
        <Box className={classes.typo1} mt={3}>
          New Realm Added
        </Box>
        <Box className={classes.typo2} mt={3}>
          Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an...
        </Box>
        <Box display={"flex"} justifyContent="flex-end">
          <Button
            onClick={() => {}}
            style={{
              fontFamily: "GRIFTER",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "120%",
              textAlign: "right",
              textTransform: "uppercase",
              color: "#151515",
              background: "#00B4F7",
              borderRadius: 8,
              padding: "9px 34px",
              height: "unset",
            }}
          >
            see more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const TimerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.1835 7.09173C14.1835 11.0084 11.0084 14.1835 7.09173 14.1835C3.17508 14.1835 0 11.0084 0 7.09173C0 3.17508 3.17508 0 7.09173 0C11.0084 0 14.1835 3.17508 14.1835 7.09173Z"
      fill="#00B4F7"
    />
    <path
      d="M6.6748 3.33594V6.98609L9.17777 9.17619"
      stroke="#151515"
      stroke-width="2.06786"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
  </svg>
);
