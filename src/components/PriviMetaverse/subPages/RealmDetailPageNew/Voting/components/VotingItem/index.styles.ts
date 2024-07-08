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
  skeleton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px 24px 70px",
    width: "100%",
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
}));
