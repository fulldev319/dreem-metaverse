import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#222222",
    borderRadius: 12,
    padding: "24px",
    alignItems: "center",
  },
  tag: {
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "uppercase",
    color: "#151515",
    padding: "5px 12px 3px",
    background: "#00B4F6",
    borderRadius: 3,
    width: "fit-content",
  },
  activeVotingTag: {
    background: "#00B4F7"
  },
  validatedVotingTag: {
    background: "#8AE92C"
  },
  rejectedVotingTag: {
    background: "#FF6868"
  },
  typo1: {
    fontSize: 24,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo2: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo3: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Rany",
  },
}));
