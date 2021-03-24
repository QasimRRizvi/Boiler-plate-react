// import libraries
import { makeStyles } from "@material-ui/core/styles";
// import images
import LoginBackgorund from "images/login_screen_background-2.svg";
// import colors
import * as ColorMap from "constants/colorMap";

export const useStyles = makeStyles({
  loginButton: {
    backgroundColor: `${ColorMap.ButtonBackgroundColor} !important`,
  },
  loginWrapper: {
    width: "100%",
    height: "100vh",
    backgroundColor: ColorMap.LoginWrapperBackgroundColor,
  },
  loginContainer: {
    width: "65%",
    height: "420px",
    margin: "0 auto",
    overflow: "auto",
    border: "1px solid #f5ece4",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px 0 rgb(84 71 66 / 10%)",
    borderRadius: 10,
    position: "fixed",
    top: "20%",
    left: "17%",
    display: "flex",
  },
  loginLeftPanel: {
    width: "30%",
    backgroundImage: `url(${LoginBackgorund})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "-60px",
    height: "100%",
  },
  loginRightPanel: {
    width: "calc(70% - 30px)",
    height: "100%",
    marginLeft: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  loginHeader: {
    "& > img": {
      width: "170px",
      marginLeft: "-20px",
    },
    "& > p": {
      marginTop: "8px",
      color: ColorMap.TextPrimaryColor,
      fontWeight: "600",
    },
  },
  loginBody: {
    marginTop: "10px",
    width: "70%",
    "& > form > div, & > form > button": {
      width: "100%",
      marginTop: "20px",
    },
  },
  loginFooter: {},
  passwordFieldContainer: {
    position: "relative",
  },
  showPasswordIcon: {
    position: "absolute",
    right: "0px",
    top: "-3px",
    color: ColorMap.TextPrimaryColor,
  },
});
