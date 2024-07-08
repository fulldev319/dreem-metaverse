import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(180deg, rgba(255, 191, 78, 0) 73.82%, rgba(255, 181, 53, 0.2) 100%), rgba(241, 188, 172, 0.06)",
    borderRadius: 4,
    padding: "29px 31px 56px",
    width: "100%",
    maxHeight: 319,
    [theme.breakpoints.down("xs")]: {
      padding: "29px 12px 32px",
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: "Grifter",
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    width: "fit-content",
  },
  typo1: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: "Grifter",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  typo2: {
    fontSize: 14,
    fontWeight: 800,
    fontFamily: "Grifter",
    color: "#ffffff50",
  },
  typo3: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: "Grifter",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
}));
