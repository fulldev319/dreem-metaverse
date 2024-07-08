import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    minHeight: 380,
    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 20.96%, rgba(0, 0, 0, 0) 53.03%)",
  },
  darkLayer: {
    position: "absolute",
    width: "100%",
    height: 380,
    backgroundImage: `url(${require("assets/gameImages/avatar_bg.png")})`,
    opacity: 0.6
  },
  backButtonContainer: {
    width: "100%",
    minHeight: 93,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    borderBottom: "2px solid #ffffff2b",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0 70px 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0 50px 0",
    },
  },
  backBtn: {

  },
  pageTitle: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "120%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#FFFFFF"
  },
  fitContent: {
    width: "100%",
    position: "relative",
    maxWidth: 1280,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 46,
      paddingRight: 46,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 26,
      paddingRight: 26,
    },
    "& .infinite-scroll-component": {
      overflow: "visible !important",
    },
  },
  container: {
    display: "flex",
    gap: 16,
    width: "100%",
    paddingBottom: 100,
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 480,
    zIndex: 1,
    flex: 1,
  },
  preview: {
    position: "relative",
    width: "100%",
    padding: 8,
    background: "linear-gradient(180deg, rgba(130, 225, 255, 0.21) 2.81%, rgba(0, 0, 0, 0) 58.16%), conic-gradient(from 180deg at 50% 50%, rgba(0, 0, 0, 0) -30deg, #232426 132.44deg, #7EE8FF 135.58deg, #232426 137.66deg, rgba(0, 0, 0, 0) 220.39deg, #7EE8FF 224.8deg, #232426 226.99deg, rgba(0, 0, 0, 0) 330deg, #232426 492.44deg), #0A0A0B",
    border: "1px solid rgba(0, 180, 246, 0.47)",
    boxSizing: "border-box",
    boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.89), inset 0px 3px 5px #00B4F6",
    borderRadius: "19px",
    overflow: "hidden",
    "&:before": {
      content: "''",
      float: "left",
      paddingTop: "100%",
    }
  },
  preview1: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: 2,
    background: "#151515",
    border: "1px solid rgba(0, 180, 246, 0.47)",
    boxSizing: "border-box",
    // boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.89), inset 0px 3px 5px #00B4F6", 
    borderRadius: "16px",
    overflow: "hidden",
  },
  preview2: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: 4,
    background: "conic-gradient(from 180deg at 50% 50%, rgba(0, 0, 0, 0) -30deg, #232426 132.44deg, #7EE8FF 135.58deg, #232426 137.66deg, rgba(0, 0, 0, 0) 220.39deg, #7EE8FF 224.8deg, #232426 226.99deg, rgba(0, 0, 0, 0) 330deg, #232426 492.44deg), #0A0A0B",
    border: "1px solid rgba(0, 180, 246, 0.47)",
    boxSizing: "border-box",
    boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.89), inset 0px 3px 5px #00B4F6",
    borderRadius: "12px",
    overflow: "hidden",
  },
  preview3: {
    width: "100%",
    height: "100%",
    background: "#040404",
    border: "1px solid rgba(0, 180, 246, 0.52)",
    boxSizing: "border-box",
    boxShadow: "0px -2px 4px #00F6E7",
    borderRadius: "12px",
    overflow: "hidden",
  },
  entryAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "6.49px 14.3539px 2.69136px",
    position: "absolute",
    width: "117.71px",
    height: "26px",
    left: "317px",
    top: "calc(50% - 26px/2 - 194px)",
    background: "#A5FF4B",
    borderRadius: "7px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "11.6626px",
    lineHeight: "120%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#212121",
  },
  viewButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "7px 10px",
    position: "absolute",
    height: "29px",
    left: "20px",
    top: "17px",
    background: "#151515",
    borderRadius: "6.26179px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#00B4F7"
  },
  creator: {
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.65) -5.25%, rgba(0, 0, 0, 0) 97.07%)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxSizing: "border-box",
    borderRadius: "16px",
    margin: 16,
    padding: "31px 40px",
  },
  creatorAvatar: {
    width: "83px",
    height: "83px",
    borderRadius: "55px"
  },
  creatorInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  creatorDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gridGap: "8px"
  },
  divider: {
    minHeight: 16,
    width: 0,
    opacity: 0.1,
    borderLeft: "1px solid #ffffff",
  },
  rightPanel: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
  detailBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  detailContent: {
    display: "flex",
    padding: "32px",
    zIndex: 1,
    flexDirection: "column"
  },
  enterRealm: {
    position: "relative",
    backgroundImage: `url(${require("assets/gameImages/avatar_detail_bg_top.png")})`,
    backgroundSize: `100% 100%`,
  },
  avatar: {
    marginTop: 24,
    position: "relative",
    backgroundImage: `url(${require("assets/gameImages/avatar_detail_bg_center.png")})`,
    backgroundSize: `100% 100%`,
  },
  avatarCopy: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "3px 8px 2px",
    position: "absolute",
    width: "190px",
    height: "23px",
    left: "32px",
    top: "-9px",
    background: "#00B4F7",
    borderRadius: "5px"
  },
  avatarAction: {
    display: "flex",
    gap: 8,
    marginTop: 8,
  },
  avatarStatus: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionSale: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 8px 2px",
    background: "conic-gradient(from 31.61deg at 50% 50%, #91D502 -25.18deg, #E5FF46 15deg, rgba(186, 252, 0, 0.76) 103.13deg, #A3CC00 210deg, #91D502 334.82deg, #E5FF46 375deg)",
    borderRadius: "4.71318px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13.2857px",
    lineHeight: "14px",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#212121"
  },
  actionRent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 8px 2px",
    background: "conic-gradient(from 31.61deg at 50% 50%, #F2C525 -73.13deg, #EBBD27 15deg, rgba(213, 168, 81, 0.76) 103.13deg, #EBED7C 210deg, #F2C525 286.87deg, #EBBD27 375deg)",
    borderRadius: "4px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13.2857px",
    lineHeight: "14px",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#212121"
  },
  horizontalDivider: {
    opacity: "0.1",
    borderTop: "2px solid #FFFFFF",
    width: "100%",
    height: "0px",
  },
  pricing: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
  },
  pricingItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 8,
  },
  btnBuy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#00B4F7 !important",
    borderRadius: "8px",
    fontFamily: "GRIFTER !important",
    fontStyle: "normal",
    fontSize: "18px !important",
    lineHeight: "120% !important",
    textTransform: "uppercase",
    color: "#FFFFFF",
    minWidth: "117px !important",
    height: "48px !important",
  },
  btnRent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#7535FB !important",
    borderRadius: "8px !important",
    fontFamily: "GRIFTER !important",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "120% !important",
    textTransform: "uppercase",
    color: "#FFFFFF",
    minWidth: "117px !important",
    height: "48px !important",
  },
  btnBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff !important",
    borderRadius: "8px !important",
    fontFamily: "GRIFTER !important",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "120% !important",
    textTransform: "uppercase",
    color: "#151515 !important",
    minWidth: "117px !important",
    height: "48px !important",
  },
  btnBook: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 44px 10px !important",
    background: "rgba(255, 255, 255, 0.2) !important",
    borderRadius: "8px !important",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "120% !important",
    textAlign: "right",
    textTransform: "uppercase",
    color: "#FFFFFF !important",
    height: "58px !important",
  },
  attributes: {
    marginTop: 24,
    position: "relative",
    backgroundImage: `url(${require("assets/gameImages/avatar_detail_bg_bottom.png")})`,
    backgroundSize: `100% 100%`,
  },
  btnElement: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    padding: "8px 29px 8px 20px !important",
    border: "1px solid rgba(255, 255, 255, 0.25) !important",
    boxSizing: "border-box",
    borderRadius: "32px !important",
    background: "transparent !important",
    height: "48px !important",
  },
  typo1: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF"
  },
  typo2: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "120%",
    color: "#FFFFFF",
    marginBottom: "16px",
  },
  typo3: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "175%",
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  typo4: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "120%",
    textTransform: "capitalize",
    color: "#00B4F7"
  },
  typo5: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "110%",
    color: "#FFFFFF",
  },
  typo6: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "110%",
    letterSpacing: "0.02em",
    color: "rgba(255, 255, 255, 0.6)",
  },
  typo7: {
    display: "flex",
    alignItems: "center",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
  },
  typo8: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "120%",
    textAlign: "right",
    textTransform: "uppercase",
    color: "#FFFFFF"
  },
  typo9: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF"
  },
  typo10: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "160%",
    color: "#FFFFFF",
  },
  typo11: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#FFFFFF"
  },
  typo12: {
    margin: "16px 0px",
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "175%",
    color: "#FFFFFF"
  },
  typo13: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "160%",
    color: "rgba(255, 255, 255, 0.6)"
  },
  typo14: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "120%",
    textTransform: "uppercase",
    color: "#FFFFFF"
  },
  typo15: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "120%",
    textTransform: "uppercase",
    color: "#8AE92C"
  },
  typo16: {

  },
  typo17: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF"
  },
  typo18: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "110%",
    color: "rgba(255, 255, 255, 0.6)"
  },
  typo19: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "110%",
    color: "#7535FB"
  },
  typo20: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "15px",
    color: "#8AE92C",
    background: "linear-gradient(246.14deg, #0AF0FF -27.07%, #FFFFFF 95.52%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
  },
  typo21: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12.8342px",
    lineHeight: "13px",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#EFFFF9"
  },
}));