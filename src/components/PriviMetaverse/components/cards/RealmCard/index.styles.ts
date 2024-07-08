import { makeStyles } from "@material-ui/core/styles";

export const realmCardStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    background: "inherit",
    border: (props: any) => (props.isFeature ? undefined : "2px solid #EDFF1C"),
    borderRadius: (props: any) => (props.isFeature ? 0 : 12),
    height: (props: any) => (props.isFeature ? 680 : 369),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: (props: any) => (props.isFeature ? 473 : 297),
    },
    [theme.breakpoints.down("xs")]: {
      height: (props: any) => (props.isFeature ? 359 : 297),
    },
    "&:hover": {
      transform: (props: any) => (props.disableEffect ? undefined : "scale(1.02)"),
    },
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: (props: any) => (props.isFeature ? "100%" : "80%"),
  },
  info: {
    position: (props: any) => (props.isFeature ? "absolute" : undefined),
    bottom: (props: any) => (props.isFeature ? 0 : undefined),
    background: (props: any) => (props.isFeature ? "rgba(0, 0, 0, 0.2)" : "#151515"),
    width: (props: any) => (props.isFeature ? "100%" : undefined),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: (props: any) => (props.isFeature ? "36px 24px" : "22px 24px"),
    [theme.breakpoints.down("xs")]: {
      padding: (props: any) => (props.isFeature ? "21px 0" : "17px 19px"),
    },
    [theme.breakpoints.down("xs")]: {
      padding: (props: any) => (props.isFeature ? "12px 12px" : "14px 15px"),
    },
  },
  name: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: (props: any) => (props.isFeature ? 28 : 20),
    lineHeight: (props: any) => (props.isFeature ? "33px" : "24px"),
    textTransform: "uppercase",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      fontSize: (props: any) => (props.isFeature ? 20 : 16),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: (props: any) => (props.isFeature ? 15 : 14),
      lineHeight: (props: any) => (props.isFeature ? "22px" : "24px"),
    },
  },
  description: {
    fontFamily: "Rany",
    fontSize: (props: any) => (props.isFeature ? 16 : 14),
    lineHeight: (props: any) => (props.isFeature ? "28px" : "24px"),
    color: "white",
    opacity: (props: any) => (props.isFeature ? undefined : 0.6),
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      fontSize: (props: any) => (props.isFeature ? 14 : 12),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: (props: any) => (props.isFeature ? 14 : 13),
      lineHeight: (props: any) => (props.isFeature ? "18px" : "24px"),
    },
  },
  skeleton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "30px 72px 70px",
    height: "100%",
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
  extensionTag: {
    display: "flex",
    background: "#E85300",
    borderRadius: 4,
    padding: "8px 17px 4px",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "uppercase",
  },
  realmTag: {
    display: "flex",
    background: "#E9FF26",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: 4,
    padding: "8px 18px 4px",
    color: "#151515",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "uppercase",
  },
}));
