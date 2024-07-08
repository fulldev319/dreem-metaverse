import { makeStyles } from "@material-ui/core";

export const tabViewStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    overflowX: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      padding: "15px 11px",
    },
  },
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "63px",
    color: "white",
    marginRight: "12px",
    cursor: "pointer",
    padding: "15px 24px",
    fontFamily: "GRIFTER",
    fontSize: "16px",
    lineHeight: "120%",
    opacity: 0.7,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginRight: "8px",
      padding: "10px 33px 6px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "6px",
      padding: "8px 16px 4px",
    },
  },
  selected: {
    background: "white",
    color: "#151515",
    opacity: 1,
  },
  equalized: {
    minWidth: 210,
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down("md")]: {
      minWidth: 182,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 142,
    },
  },
  percentaged: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 0,
      width: "33%",
    },
  },
}));
