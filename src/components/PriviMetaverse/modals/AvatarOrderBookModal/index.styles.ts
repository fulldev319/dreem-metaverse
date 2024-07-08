import { makeStyles } from "@material-ui/core/styles";

export const useModalStyles = makeStyles(theme => ({
  root: {
    width: "100vw !important",
    maxWidth: "unset !important",
    padding: "0px !important",
    height: "100vh !important",
    borderRadius: "20px !important",
    color: "#fff !important",
    background: "transparent !important",
    "& > svg": {
      zIndex: 1,
      position: "absolute",
      width: "65px",
      height: "65px",
      right: "31px",
      top: "30px",
      background: "#282828",
      boxShadow: "0px 11px 20px rgb(0 0 0 / 55%)",
      borderRadius: "16px",
      padding: "22px",
    },
    "& > svg path": {
      stroke: "#FFFFFF",
    },
    [theme.breakpoints.down("xs")]: {
      height: "unset !important",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 20.96%, rgba(0, 0, 0, 0) 53.03%) !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& .MuiAccordion-root": {
      width: "100%",
      padding: 0,
      background: "#151515",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxSizing: "border-box",
      borderRadius: "12px",
      marginTop: 32,
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
    }
  },
  fitContent: {
    width: "100%",
    position: "relative",
    maxWidth: 1280,
    display: "flex",
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
  titleContainer: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF"
  },
  filterItem: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Grifter",
    textTransform: "capitalize",
    color: "#ffffff70",
    cursor: "pointer",
    padding: "13px 24px",
    borderRadius: "63px",
    background: "rgba(255, 255, 255, 0.1)",
    marginRight: 12,
  },
  selectedFilterItem: {
    background: "#fff !important",
    color: "#151515 !important",
  },
  tableContainer: {
    borderTop: "1px solid #ffffff1a",
    maxHeight: 400,
    overflow: "scroll",
    "& .MuiTableCell-root": {
      borderBottom: "1px solid #ffffff1a",
    },
    "& .MuiTableCell-head": {
      fontFamily: "Rany",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "13px",
      textAlign: "center",
      textTransform: "capitalize !important",
      color: "rgba(255, 255, 255, 0.5) !important",
    },
    "& .MuiTableBody-root": {
      maxHeight: 300,
      overflow: "scroll"
    }
  },
  tableTitle: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 46,
  },
  tdAccount: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "120%",
    color: "#00B4F7"
  },
  tdPrice: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "120%",
    color: "#FFFFFF"
  },
  tdCollateral: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "120%",
    color: "#FFFFFF"
  },
  tdDuration: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "120%",
    color: "#FFFFFF"
  },
  tdExpire: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "120%",
    color: "#FFFFFF"
  },
  tdPolygonscan: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tdPeriod: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "120%",
    color: "#FFFFFF"
  },
  btnOffer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "11px 32px 8px !important",
    height: "45.7px !important",
    background: "#00B4F7 !important",
    borderRadius: "88px !important",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px !important",
    lineHeight: "17px !important",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF !important"
  },
}));
