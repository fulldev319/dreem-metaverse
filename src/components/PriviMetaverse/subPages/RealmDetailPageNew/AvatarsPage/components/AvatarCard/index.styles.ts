import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(0deg, #232426, #232426), #1B1B1B",
    borderRadius: "8px",
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
    },
  },
  divider: {
    height: "0px",
    width: "100%",
    left: "0px",
    top: "0px",
    opacity: "0.2",
    border: "0.725087px solid rgba(255, 255, 255, 0.5)"
  },
  info: {
    padding: 16,
  },
  detail: {
    padding: "8px, 0px",
  },
  typo1: {
    position: "absolute",
    height: "15px",
    left: "17.4px",
    top: "19px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF"
  },
  typo2: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF"
  },
  typo3: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF"
  },
  typo4: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "104.5%",
    color: "rgba(255, 255, 255, 0.5)"
  },
  typo5: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "104.5%",
    textAlign: "right",
    textTransform: "uppercase",
    color: "#FFFFFF"
  },
  typo6: {
    fontFamily: "Rany", 
    fontStyle: "normal", 
    fontWeight: 500, 
    fontSize: "14px", 
    lineHeight: "104.5%", 
    textAlign: "right", 
    textTransform: "uppercase", 
    color: "#FFFFFF", 
    opacity: "0.4"
  },
  skeleton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "30px 24px 70px",
    height: "100%",
    background: "unset",
    border: "1px solid #ED7B7B",
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 40px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px 20px",
    },
    "& .MuiSkeleton-root": {
      backgroundColor: "#505050",
      borderRadius: 6,
      "&:nth-child(1)": {
        height: (props: any) => (props.isFeature ? 400 : 200),
        [theme.breakpoints.down("sm")]: {
          height: (props: any) => (props.isFeature ? 260 : 160),
        },
      },
      "&:nth-child(2)": {
        height: (props: any) => (props.isFeature ? 36 : 24),
        [theme.breakpoints.down("sm")]: {
          height: (props: any) => (props.isFeature ? 24 : 16),
        },
      },
      "&:nth-child(3)": {
        height: (props: any) => (props.isFeature ? 36 : 24),
        [theme.breakpoints.down("sm")]: {
          height: (props: any) => (props.isFeature ? 24 : 16),
        },
      },
    },
  },
  avatar: {
    width: 25,
    height: 25,
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  statusBadge: {
    position: "absolute",
    height: "22px",
    right: "6.21px",
    top: "6px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px",
    background: "conic-gradient(from 31.61deg at 50% 50%, #F2C525 -73.13deg, #EBBD27 15deg, rgba(213, 168, 81, 0.76) 103.13deg, #EBED7C 210deg, #F2C525 286.87deg, #EBBD27 375deg)",
    borderRadius: "4px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "10px",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#212121"
  },
}));
