import React from "react";
import Moment from "react-moment";

// import { PrimaryButton } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import { useCardStyles } from "./index.styles";

export default function DaoUpdateCard({ item, index }) {
  const classes = useCardStyles({});

  return (
    <Box className={classes.card}>
      <Box className={classes.container}>
        <Box className={classes.filterBg}></Box>
        <img className={classes.image} src={item?.image} alt="image" />
        <Box className={classes.typo1} mt={2}>
          <Moment format="DD,MMM YYYY">{item?.timestamp * 1000}</Moment>
        </Box>
        <Box className={classes.typo2} mt={1}>
          {item?.title}
        </Box>
        <Box className={classes.typo3} mt={2}>
          {item?.text.length > 100 ? item?.text.slice(0, 100) + "..." : item?.text}
        </Box>
        <Box mt={4} mb={4}>
          {/* <PrimaryButton
            size="medium"
            onClick={() => {}}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "150px",
              height: "34px",
              background: "#00B4F7",
              borderRadius: "8px",
              fontFamily: "GRIFTER",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "120%",
              textAlign: "right",
              textTransform: "uppercase",
              color: "#151515",
            }}
          >
            see more
          </PrimaryButton> */}
        </Box>
      </Box>
    </Box>
  );
}
