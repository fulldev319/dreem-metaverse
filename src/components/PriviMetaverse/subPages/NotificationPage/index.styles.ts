import { makeStyles } from "@material-ui/core";

export const notificationPageStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${require("assets/metaverseImages/background_body.png")})`,
    backgroundPosition: "left",
    backgroundSize: "cover",
  },
  background: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 9.5%, #17151A 69.7%)",
    padding: "160px 160px 64px",
    [theme.breakpoints.down("md")]: {
      padding: "160px 60px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "160px 46px 46px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "160px 26px 26px",
    },
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: 800,
    lineHeight: "39px",
    color: "#EEFF21",
    marginBottom: theme.spacing(2),
  },
}));
