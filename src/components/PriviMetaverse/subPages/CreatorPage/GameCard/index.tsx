import React, { useState } from "react";
import cls from "classnames";

import Box from "shared/ui-kit/Box";
import { getDefaultImageUrl } from "shared/services/user/getUserAvatar";
import { cardStyles } from "./index.styles";

export default function GameCard(props) {
  const { selected, onClick, item, index } = props;
  const classes = cardStyles(props);
  const count = index % 4 + 1;
  return (
    <Box
      className={cls(classes.card, { [classes.selected]: selected })}
      onClick={onClick}
    >
      <Box
        className={classes.cardImage}
        style={{
          backgroundImage: `url(${require("assets/gameImages/game_sample_" + count+".png")})`
        }}
      >
      </Box>
      <Box className={classes.title} mt={2}>
        Game name With two lines Game name With two lines
      </Box>
    </Box>
  );
}
