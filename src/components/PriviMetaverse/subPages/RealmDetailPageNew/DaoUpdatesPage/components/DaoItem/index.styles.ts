import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "linear-gradient(276.63deg, rgba(0, 0, 0, 0) 29.1%, #000000 67.92%, #08BCFF 97.25%, #08BCFF 106.51%), rgba(0, 0, 0, 0.6)",
    borderRadius: 8,
    padding: "24px",
    alignItems: "center",
  },
  tag: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "14px",
    "lineHeight": "100%",
    "letterSpacing": "0.02em",
    "textTransform": "uppercase",
    "color": "#FFFFFF",
    "opacity": "0.5"
  },
  typo1: {
    fontSize: 24,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo2: {
    "fontFamily": "Rany",
    "fontStyle": "normal",
    "fontWeight": "normal",
    "fontSize": "16px",
    "lineHeight": "155%",
    "color": "#FFFFFF",
    "opacity": "0.8"
  },
}));
