import { makeStyles } from "@material-ui/core/styles";

export const useNFTOptionsStyles = makeStyles(theme => ({
  main: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  imageBg: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  sideBar: {
    display: "flex",
    justifyContent: "center",
    marginTop: 72,
    height: "calc(100% - 72px)",
    background: "#212121",
    border: "2px solid #151515",
    zIndex: 1,
  },
  mobileSideBar: {
    bottom: 0,
    width: "100%",
    height: 53,
    background: "#212121",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
  },
  expandIcon: {
    padding: 16,
    cursor: "pointer",
  },
  collapseIcon: {
    position: "absolute",
    top: "16px",
    right: "18px",
    cursor: "pointer",
  },
  image1: {
    position: "absolute",
    left: -210,
    top: 560,
  },
  image2: {
    position: "absolute",
    top: 610,
    right: -200,
  },
  limitedContent: {
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 9.5%, #17151A 69.7%)",
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
    maxHeight: "100%",
    overflowX: "hidden",
    position: "relative",
    padding: "80px 8px 45px",
    marginLeft: "auto",
    marginRight: "auto",
    "& > div > h2": {
      fontFamily: "Grifter",
      fontWeight: "800",
      fontSize: "40px",
      lineHeight: "104.5%",
      margin: 0,
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
      },
      "& span": {
        fontSize: "18px",
        lineHeight: "23px",
      },
    },
    "& > h3": {
      marginTop: "64px",
      fontSize: "30px",
      lineHeight: "104.5%",
      marginBottom: "16px",
    },
    "& .infinite-scroll-component": {
      overflow: "visible !important",
    },
    [theme.breakpoints.down(1800)]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      maxWidth: (props: any) => (props.openSideBar ? 480 : 700),
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "362px !important",
    },
  },
  titleBar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      maxWidth: (props: any) => (props.openSideBar ? 480 : 700),
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  titleSection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    maxWidth: 1280,
    [theme.breakpoints.down(1800)]: {
      flexDirection: "column",
      alignItems: "flex-start",
      maxWidth: (props: any) => (props.openSideBar ? 1000 : 1280),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 480,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 350,
    },
  },
  title: {
    fontFamily: "GRIFTER",
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
    textAlign: "left",
    [theme.breakpoints.down(950)]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 8,
      fontSize: 24,
    },
  },
  subTitle: {
    maxWidth: 750,
    fontFamily: "GRIFTER",
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    marginTop: 10,
    textAlign: "center",
    lineHeight: "20.9px",
    [theme.breakpoints.down(950)]: {
      fontSize: "14px",
      lineHeight: "120%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 8,
    },
  },
  headerButtonGroup: {
    display: "flex",
    alignItems: "center",
    marginTop: 0,
    [theme.breakpoints.down("lg")]: {
      marginTop: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  primaryButton: {
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    borderRadius: "5px !important",
    fontFamily: "GRIFTER",
    fontWeight: "bold",
    fontSize: "16px important",
    color: "#212121 !important",
    border: "none !important",
    padding: "2px 24px !important",
    [theme.breakpoints.down("sm")]: {
      height: "39px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
      width: "100% !important",
    },
  },
  gamePlayButton: {
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    borderRadius: "100px !important",
    fontFamily: "GRIFTER",
    fontWeight: "bold",
    fontSize: "16px important",
    color: "#212121 !important",
    border: "none !important",
    padding: "2px 24px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      height: "33px !important",
      marginTop: "20px",
    },
  },
  gameslider: {
    height: 720,
    maxWidth: 1280,
    width: "100%",
    marginTop: 38,
    position: "relative",
    border: "2px solid transparent",
    borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0) 42%, #E9FF26 100%)",
    borderImageSlice: "30%",
    [theme.breakpoints.down(1800)]: {
      maxWidth: (props: any) => (props.openSideBar ? 1000 : 1280),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 480,
      maxHeight: 300,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 350,
      maxHeight: 400,
    },
  },
  gameContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "30px 105px 100px 105px",
    backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(255,0,0,0))",
    [theme.breakpoints.down("sm")]: {
      padding: "18px",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "12px",
    },
  },
  gameBgImage: {
    position: "absolute",
    zIndex: -1,
  },
  sliderFooter: {
    position: "absolute",
    bottom: "-38px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      bottom: "-20px"
    },
  },
  sliderLeft: {
    position: "absolute",
    bottom: "100px",
    left: "-110px",
  },
  sliderRight: {
    position: "absolute",
    top: "90px",
    right: "-110px",
  },
  sliderRect: {
    position: "absolute",
    bottom: 0,
    right: "-59px",
  },
  NFTSection: {
    width: "100%",
    marginTop: 46,
    maxWidth: 1280,
    [theme.breakpoints.down(1800)]: {
      maxWidth: (props: any) => (props.openSideBar ? 1040 : 1280),
    },
  },
  topGamesWrapper: {
    paddingTop: "50px",
    [theme.breakpoints.down(1200)]: {
      paddingTop: "30px",
    },
  },
  topGamesTitle: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "25px",
    "& span": {
      fontFamily: "GRIFTER",
      fontSize: 34,
      fontWeight: 700,
      background: "linear-gradient(#B7FF5C, #EEFF21)",
      "-webkit-text-fill-color": "transparent",
      "-webkit-background-clip": "text",
      lineHeight: "40.8px",
      marginRight: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },
    "& img": {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "12px",
    },
  },
  carouselNav: {
    cursor: "pointer",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "8px",
    width: 74,
    height: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      border: "2px solid #E9FF26",
      "& path": {
        stroke: "#E9FF26",
        opacity: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: 55,
      height: 32,
    },
  },
  topNFTContent: {
    display: "flex",
    background: "transparent",
    paddingBottom: 20,
    position: "relative",
    [theme.breakpoints.down(769)]: {
      marginBottom: 0,
      paddingBottom: 0,
    },
    "& button.rec-arrow-left": {
      position: "absolute",
      top: -100,
      right: 200,

      [theme.breakpoints.down(1200)]: {
        right: 60,
      },
      [theme.breakpoints.down(769)]: {},
    },
    "& button.rec-arrow-right": {
      position: "absolute",
      top: -100,
      right: 140,

      [theme.breakpoints.down(1200)]: {
        right: 0,
      },
      [theme.breakpoints.down(769)]: {
        display: "none",
      },
    },
    "& .rec-slider-container": {
      margin: "0px -12px",
      width: "calc(100% + 24px)",
      "& .rec-carousel-item": {
        "& > .rec-item-wrapper": {
          "& > div": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  allNFTSection: {
    width: "100%",
    marginBottom: 40,
  },
  allNFTWrapper: {
    padding: "50px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px 25px",
    },
  },
  fitContent: {
    maxWidth: 1600,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "32px !important",
    paddingRight: "32px !important",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px !important",
      paddingRight: "0px !important",
    },
  },
  allNFTTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 34,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "40.8px",
    paddingBottom: 25,
    "& span": {
      background: "linear-gradient(90deg, #EDFF1C, #ED7B7B)",
      "-webkit-text-fill-color": "transparent",
      "-webkit-background-clip": "text",
    },
    "& img": {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingBottom: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  showAll: {
    border: "2px solid rgba(255, 255, 255, 0.5) !important",
    borderRadius: "12px !important",
    background: "transparent !important",
    color: "#FFFFFF !important",
    padding: "0 30px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      padding: "0 24px !important",
    },
  },
  table: {
    width: "100%",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    color: "#FFFFFF",
    fontFamily: "Rany",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "18px",
    margin: 0,
  },
  titleImg: {
    width: 45,
    height: 45,
    borderRadius: 6,
    objectFit: "cover",
    margin: "0 20px",
  },
  whiteText: {
    color: "#FFFFFF",
    fontFamily: "Rany",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "22px",
    margin: 0,
  },
  viewButton: {
    backgroundColor: "transparent !important",
    border: "2px solid rgba(255,255,255,0.5) !important",
  },
  popularGames: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    fontFamily: "Rany",
    fontWeight: 700,
    fontSize: 20,
    color: "#151515",
    border: "2px solid rgba(21, 21, 21, 0.2)",
    padding: "8px 16px",

    "& svg": {
      marginRight: "13px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "4px 8px",
    },
  },
  gameInfoSection: {
    color: "#E9FF26",
    "&:first-child": {
      paddingLeft: 0,
    },

    "&:last-child": {
      borderRight: "none",
    },

    "& span:first-child": {
      fontWeight: 700,
      fontSize: 34,
      lineHeight: "35.53px",
      fontFamily: "Rany",
    },
    "& span:last-child": {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "21px",
      fontFamily: "Rany",
      opacity: 0.6,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 48px",
      "& span:first-child": {
        fontSize: 18,
      },
      "& span:last-child": {
        fontSize: 12,
        lineHeight: "14px",
        textAlign: "left"
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 24px",
      alignItems: "flex-start",
      "& span:first-child": {
        fontSize: 18,
      },
      "& span:last-child": {
        fontSize: 12,
        lineHeight: "14px",
        textAlign: "left"
      },
    },
  },
  listLoading: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "2px solid #F2C525",
    borderRadius: 16,
    padding: 12,
    background: "rgba(255, 255, 255, 0.1) !important",
    "& .MuiSkeleton-root": {
      backgroundColor: "#505050",
      borderRadius: 6,
    },
  },
  transactionItemGradientWrapper: {
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    padding: "2px",
    borderRadius: "8px",
    marginBottom: 16
  },
  transactionItemWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    borderRadius: "8px",
    background: "#151515"
  },
  typeTag: {
    borderRadius: 4,
    padding: "9px 8px 7.5px",
    fontSize: 10,
    fontFamily: "Grifter",
    fontWeight: 700,
    color: "#212121",
    height: 24,
  },
}));
