import { makeStyles } from "@material-ui/core/styles";
import { whiteColor, blackColor, maxWidth, borderColor, tertiaryColor } from "../../assets/jss/appStyles";

export const useStyles = makeStyles(
  (theme) => ({
    appBar: {
      width: maxWidth,
      backgroundColor: whiteColor,
      boxShadow: "rgba(53, 64, 82, 0.05) 0px 0px 14px 0px",
      height: 50,
    },
    header: {
      backgroundColor: whiteColor,
      color: blackColor,
      width: "100%",
      "&.MuiToolbar-root": {
        borderBottomStyle: "inset",
      },
    },
    header__items: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    link: {
      border: `1px ${borderColor} solid`,
      borderRadius: "6px",
      padding: "6px 3px",
      margin: "0px 3px",
      "&:hover": {
        backgroundColor: tertiaryColor,
        color: whiteColor,
      },
    },
    avatar: {
      // color: iconColor,
      color: "#02353a",
      fontSize: "1.5rem",
    },
  }),
  { index: 1 }
);
