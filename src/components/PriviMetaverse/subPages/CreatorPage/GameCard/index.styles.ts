import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
  },
  selected: {
    "background": "rgba(0, 180, 247, 0.2)",
    "border": "1px solid #00B4F7",
    "boxSizing": "border-box",
    "borderRadius": "12px",
    padding: "12px 12px 22px",
  },
  cardImage: {
    height: 0,
    borderRadius: 8,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "100%",
    "& img": {
      width: "100%",
    }
  },
  title: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "22px",
    "lineHeight": "130%",
    "letterSpacing": "0.02em",
    "textTransform": "capitalize",
    "color": "#FFFFFF",
    height: "58px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }
}));
