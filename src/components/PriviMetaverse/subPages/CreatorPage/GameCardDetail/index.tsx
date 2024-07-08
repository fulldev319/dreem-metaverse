import React, { useState } from "react";
import cls from "classnames";
import { Grid } from "@material-ui/core";

import Box from "shared/ui-kit/Box";
import { getDefaultImageUrl } from "shared/services/user/getUserAvatar";
import { cardStyles } from "./index.styles";
import { CloseIcon } from "shared/ui-kit/Icons";

export default function GameCardDetail(props) {
  const { item, handleClose } = props;
  const classes = cardStyles(props);
  
  return (
    <Box className={classes.root}>
      <Box 
        className={classes.close}
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <div className={classes.typo1} style={{marginRight: 20}}> Achievements </div>
        <div className={classes.typo2}> 4 </div>
        <div className={classes.typo3}> / 12 received </div>
      </Box>
      <div style={{marginTop: 27}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <div className={classes.cardTop}>
                <Box display="flex" flexDirection="row"alignItems="center">
                  <div className={classes.typo8}> 6 </div>
                  <Box display="flex" ml={4}>
                    {Array(3).fill(0).map(item => (
                      <>
                        <Box display="flex" flexDirection="column">
                          <img className={classes.rabbitImage} src={require("assets/metaverseImages/rabbit.png")} />
                          <img className={classes.rabbitImage} src={require("assets/metaverseImages/rabbit.png")} />
                        </Box>
                      </>
                    ))}
                  </Box>
                </Box>
              </div>
              <div className={classes.typo4}> Acquired NFTs </div>
              <div className={classes.typo5} style={{marginTop: 4}}> 
                All NFTs owned by the user from selected game. Some other short text here. 
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <div className={classes.cardTop}>
                <Box display="flex" flexDirection="column">
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <img className={classes.rabbitImage} src={require("assets/metaverseImages/game.png")} width="38" height="38" />
                    <Box display="flex" flexDirection="column" style={{marginLeft: 11}}>
                      <div className={classes.typo11}> Dreem  </div>
                      <div className={classes.typo12}> Dreem </div>    
                    </Box>
                  </Box>
                  <Box className={classes.typo9} mt={1}> 12 456  </Box>
                  <Box className={classes.typo10} mt={-1}> 21 245 USDT </Box>
                </Box>
              </div>
              <div className={classes.typo4}> Owned Game Token </div>
              <div className={classes.typo5} style={{marginTop: 4}}> 
                All NFTs owned by the user from selected game. Some other short text here. 
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <div className={classes.cardTop}>
                <div className={classes.typo7}> #{item} </div>
              </div>
              <div className={classes.typo4}> Member Position </div>
              <div className={classes.typo5} style={{marginTop: 4}}> 
                All NFTs owned by the user from selected game. Some other short text here. 
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      
    </Box>
  );
}
