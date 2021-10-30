import { makeStyles } from "@material-ui/core";

export const uselayoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: "100%",
    // flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
