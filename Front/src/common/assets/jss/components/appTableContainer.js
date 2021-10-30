import { makeStyles } from "@material-ui/core/styles";
import {
  maxWidth,
  fontColor,
  whiteColor,
  primaryColor,
} from "../appStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    textTransform: "capitalize",
  },
  tabs: {
    margin: "auto",
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
    },
  },
  table: {
    maxWidth: 900,
    margin: "auto",
  },
  adminStudents: {
    width: "100%",
    margin: "0 auto 25px",
  },
  tableContainer: {
    maxWidth: maxWidth,
    margin: "auto",
    minHeight: 500,
  },
  tableNameCell: {
    color: fontColor,
    [theme.breakpoints.down("xs")]: {
      textAlign: "cetner",
    },
  },
  link: {
    paddingLeft: 10,
    position: "relative",
    bottom: 5,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      paddingTop: 5,
    },
  },
  tableHead: {
    fontWeight: "700",
    color: fontColor,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },

  icon: {
    color: primaryColor,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      margin: "auto",
    },
  },
  export: {
    backgroundColor: "#175834",
    textTransform: "capitalize",
    color: whiteColor,
    marginRight: 5,
    marginBottom: 5,
    "&:hover": {
      backgroundColor: "#337d54",
    },
  },
}));
