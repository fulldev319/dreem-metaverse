import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles(theme => ({
  root: {
    background: "#151515",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 331px",
    backgroundAttachment: "absolute",
    backgroundPosition: "top center",
  },
  darkLayer: {
    maxHeight: 333,
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "#151515",
    opacity: 0.7,
    zIndex: 0,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    marginTop: 72,
    padding: "41px 85px",
    color: "#ffffff",
    [theme.breakpoints.down("md")]: {
      paddingTop: 80,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 350,
    zIndex: 1,
  },
  solanaIcon: {
    background: "#fff",
    width: 40,
    height: 31,
    padding: "8px 11px",
    borderRadius: 4,
  },
  selectedMenu: {
    background: "#00B4F7",
    padding: "12px 24px 10px",
    borderRadius: "63px",
    color: "#151515",
    width: "fit-content",
  },
  followerSection: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
  },
  twitterFeedSection: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
    marginTop: 16,
    padding: 16,
  },
  twitterFeedItem: {
    display: "flex",
  },
  creationDateSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: 10,
    padding: 24,
    marginTop: 16,
  },
  rightPanel: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 185,
    zIndex: 1,
  },
  followButton: {
    background: "#FFFFFF !important",
    borderRadius: "52px !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "11px 44px 10px !important",
    fontFamily: "GRIFTER !important",
    fontStyle: "normal !important",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "120% !important",
    textAlign: "right",
    textTransform: "uppercase",
    color: "#212121 !important",
  },
  applyExtensionButton: {
    background: "#00B4F7 !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "260px !important",
    height: "48px !important",
    textTransform: "uppercase",
    paddingTop: "4px !important",
  },
  createRealmButton: {
    background: "#7535FB !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "230px !important",
    height: "48px !important",
    textTransform: "uppercase",
    paddingTop: "4px !important",
  },
  filterItem: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Grifter",
    textTransform: "capitalize",
    color: "#ffffff70",
    cursor: "pointer",
    padding: "15px 24px",
    borderRadius: "63px",
    background: "rgba(255, 255, 255, 0.1)",
    marginRight: 12,
  },
  selectedFilterItem: {
    background: "#fff !important",
    color: "#151515 !important",
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "capitalize",
  },
  typo1: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Rany",
  },
  typo2: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  typo3: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo4: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo5: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Grifter",
  },
  typo6: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Rany",
    lineHeight: "140%",
  },
  typo7: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "capitalize",
  },
  pageTitle: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "34px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#00B4F7",
  },
  pageSubTitle: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "44px",
    lineHeight: "100%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  pageDesc: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "160%",
    textAlign: "center",
    color: "#FFFFFF",
    flex: 1,
    maxWidth: 780,
  },
  imgCardContainer: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "left",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
  },
  imgCard: {
    borderRadius: 8,
    width: 365,
    height: 365,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  pageDescTwoColumn: {
    justifyContent: "center",
    gap: "16px",
  },
  pageDescLeft: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "160%",
    textAlign: "left",
    color: "#FFFFFF",
    flex: 1,
    maxWidth: 490,
  },
}));
