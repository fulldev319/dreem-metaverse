import { makeStyles } from "@material-ui/core/styles";
import { Color } from "shared/ui-kit";

export const useModalStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    maxWidth: "680px !important",
    background: "#1B1B1B",
    boxShadow: "0px 11px 20px rgba(0, 0, 0, 0.55)",
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#ffffff",
    fontFamily: "GRIFTER",
    "& span": {
      fontWeight: 400,
    },
  },
  header1: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "normal",
    "fontSize": "16px",
    "lineHeight": "155%",
    "textAlign": "center",
    "color": "#FFFFFF"
  },
  header2: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": 500,
    "fontSize": "16px",
    "lineHeight": "150%",
    "textAlign": "center",
    "color": "#00B4F7",
    "opacity": 0.9,
  },
  header3: {
    fontSize: 28,
    fontWeight: 800,
    color: Color.MusicDAODark,
    "& span": {
      color: Color.MusicDAOGray,
    },
  },
  greenBox: {
    background: "linear-gradient(0deg, #F2FBF6, #F2FBF6), #17172D",
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(2),
  },
  customButtonBox: {
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    "& svg": {
      position: "absolute",
      right: 0,
      top: 0,
      left: 0,
      transform: "translate(0, 0)",
      height: "100%",
      zIndex: 0,
    },
  },
  grayBorderBox: {
    border: "1px solid #CCD1DE",
    borderRadius: theme.spacing(2.5),
    padding: theme.spacing(2),
  },
  ethImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "calc(50% - 34px)",
    top: "calc(50% - 40px)",
    borderRadius: "50%",
    padding: "10px",
    width: "70px",
    height: "70px",
  },
  "@keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
  "@-webkit-keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
  "@-moz-keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
  loader: {
    WebkitAnimation: "$rotating 0.5s linear infinite",
    animation: "$rotating 0.5s linear infinite",
    MozAnimation: "$rotating 0.5s linear infinite",
  },
}));
