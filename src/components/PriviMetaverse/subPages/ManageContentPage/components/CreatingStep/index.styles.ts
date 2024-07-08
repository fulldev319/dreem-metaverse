import { makeStyles } from "@material-ui/core/styles";

export const useModalStyles = makeStyles(theme => ({
  stepBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    height: '35px',
    marginTop: '10px',
    marginBottom: '50px',
    // [theme.breakpoints.down("xs")]: {
    //   width: 82,
    //   height: 103,
    // },
    "& .step": {
      width: '34.76px',
      height: '34.76px',
      border: '1px solid #FFFFFF',
      borderRadius: '100%',
      position: 'relative',
      cursor: "pointer",
      "& .inside": {
        width: '30.83px',
        height: '30.83px',
        position: 'absolute',
        top: '1px',
        left: '1px',
        background: 'transparent',
        borderRadius: '100%',
        color: '#FFF',
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: "GRIFTER",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      "&.active .inside": {
        background: '#E9FF26',
        color: '#212121',
      },
      "&.inactive .inside": {
        background: '#FF6868',
        color: '#212121',
      },
      "&.finished .inside": {
        opacity: 0.8,
      }
    },
    "& .statusIcon": {
      position: 'absolute',
      top: '-17px'
    },
    "& .line": {
      posistion: 'static',
      top: 'calc(50% - 0px/2 - 0px)',
      left: 'calc(50% - 81.65px/2 - 116.41px)',
      width : '81.65px',
      height: '0px',
      border: '1px solid #FFFFFF',
      "&.hidden": {
        display: "none"
      },
      [theme.breakpoints.down("xs")]: {
        width: 38,
      },
    }
  },
  boxContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "& .label": {
      position: 'absolute',
      top: '50px'
    }
  }
}));
