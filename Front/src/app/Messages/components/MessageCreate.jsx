import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles, Paper, Typography, Button, Backdrop, CircularProgress } from "@material-ui/core";
import { createMessageReq, createMessageInit } from "../state/actions";
import { validate } from "../../../common/helper/validate";
import MuiTextField from "../../../common/components/muiTextField/MuiTextField";
import { whiteColor } from "../../../common/assets/jss/appStyles";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: 100,
    padding: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 999999,
    color: whiteColor,
  },
}));

const MessageCreate = ({ message, user, history, createMessageReq, createMessageInit, handleSubmit, pristine, submitting }) => {
  const classes = useStyles();

  const createMessageFun = (messageData) => {
    createMessageInit();
    createMessageReq(messageData, () => {
      toast.success("Message Created Successfully", 5000);
      history.push("/");
    });
  };

  return (
    <Paper elevation={3} className={classes.container}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Typography variant="h4">Create Message</Typography>
        <form onSubmit={handleSubmit(createMessageFun)}>
          <Field name="description" required type="text" label="Description" multiline rows="6" component={MuiTextField} />
          <Button variant="outlined" color="primary" type="submit" disabled={pristine || submitting}>
            Create Message
          </Button>
        </form>
      </div>
      <Backdrop className={classes.backdrop} open={message.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
};

const mapStateToProps = ({ messages, auth, form }) => ({ message: messages.message, user: auth.user, form });

export default compose(
  reduxForm({ form: "messageCreateForm", validate }),
  connect(mapStateToProps, { createMessageReq, createMessageInit })
)(withRouter(MessageCreate));
