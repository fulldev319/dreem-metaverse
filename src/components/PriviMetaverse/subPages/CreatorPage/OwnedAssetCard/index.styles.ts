import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#232426",
    borderRadius: 8,
    position: "relative",
  },
  cardImage: {
    height: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "100%",
    "& img": {
      width: "100%",
    }
  },
  typo1: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "14px",
    "lineHeight": "120%",
    "letterSpacing": "0.02em",
    "textTransform": "capitalize",
    "color": "#FFFFFF",
    padding: "0px 14px",
  },
  typo2: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "normal",
    "fontSize": "13px",
    "lineHeight": "140%",
    "letterSpacing": "0.02em",
    "textTransform": "capitalize",
    "color": "#FFFFFF",
    opacity: 0.6,
    padding: "0px 14px 12px 14px",
  },
  typo3: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "normal",
    "fontSize": "13px",
    "lineHeight": "12px",
    "color": "#FFFFFF",
  }, 
  typo4: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "13px",
    "lineHeight": "12px",
    "color": "#FFFFFF"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    padding: "14px 17px",
    "& svg": {
      marginTop: -5,
    }
  },
  avatar: {
    width: 25,
    height: 25,
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    }
  },
  assetKindBadge: {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "padding": "3px 13px",
    "position": "absolute",
    "left": "9.43px",
    "top": "10px",
    "background": "#34ADF1",
    "borderRadius": "2.90035px",
    "fontFamily": "GRIFTER",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "11px",
    "lineHeight": "120%",
    "textAlign": "center",
    "textTransform": "uppercase",
    "color": "#FFFFFF",
  },
  shareButtoon: {
    "position": "absolute",
    "width": "25px",
    "height": "25px",
    "right": "6.47px",
    "top": "5.51px",
    "background": "#212121",
    "border": "1.62191px solid #212121",
    "boxSizing": "border-box",
    "borderRadius": "81.0953px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));
