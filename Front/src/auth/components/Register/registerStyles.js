import { makeStyles } from "@material-ui/core";
import { mainBlue, mainBlue_hover, whiteColor, darkBlue, borderColor } from "../../../common/assets/jss/appStyles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f6ff",
  },
  auth__box: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 350,
    maxWidth: 450,
    borderRadius: 4,
    padding: 25,
    backgroundColor: whiteColor,
    "webkit-box-shadow": "0px 10px 20px 0px rgba(50, 50, 50, 0.52)",
    "-moz-box-shadow": "0px 10px 20px 0px rgba(50, 50, 50, 0.52)",
    boxShadow: "0px 2px 4px 0px rgba(50, 50, 50, 0.52)",
  },
  auth__submit: {
    backgroundColor: mainBlue,
    textTransform: "capitalize",
    width: "100%",
    color: whiteColor,
    marginTop: 20,
    "&:hover": {
      backgroundColor: mainBlue_hover,
    },
  },
  auth__redirect: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    "& button": {
      color: whiteColor,
      backgroundColor: darkBlue,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: borderColor,
      },
    },
  },
}));
