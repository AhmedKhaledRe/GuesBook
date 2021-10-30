import React, { useEffect } from "react";
import { connect } from "react-redux";
import MessageEdit from "./MessageEdit";
import { prettifyDate } from "../../../common/helper";
import { withRouter } from "react-router";
import {
  verifyMessageOwnerReq,
  updateMessageReq,
  resetMessageErrors,
  fetchMessageByIdReq,
  fetchMessageByIdInit,
  updateMessageRequest,
} from "../state/actions";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { dangerColor } from "../../../common/assets/jss/appStyles";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: "100%",
    minHeight: 300,
    padding: "5px 10px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  UserName: {
    margin: "0px 5px",
    position: "absolute",
    top: 0,
    left: 0,
    fontWeight: 600,
    color: dangerColor,
  },
  Created: {
    margin: "0px 5px",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
}));

const MessageUpdate = ({
  match,
  message,
  verifyMessageOwnerReq,
  updateMessageReq,
  resetMessageErrors,
  fetchMessageByIdReq,
  fetchMessageByIdInit,
  updateMessageRequest,
  history,
}) => {
  const { id } = match.params;
  const classes = useStyles();
  useEffect(() => {
    fetchMessageByIdInit();
    verifyMessageOwnerReq(id, () => fetchMessageByIdReq(id));
    return () => {};
    //eslint-disable-next-line
  }, []);

  const updateMessageFun = (messageData) => {
    updateMessageRequest();
    updateMessageReq(id, messageData, () => {
      toast.success("Message Updated Successfully", 5000);
      history.push("/");
    });
  };

  const resetMessageErrorsFun = () => resetMessageErrors();

  return (
    <Paper elevation={3} className={classes.Paper}>
      {!message?.loading ? (
        <div>
          <Typography className={classes.UserName} variant="subtitle1">
            {message?.data?.user && message?.data?.user.username}
          </Typography>
          <MessageEdit
            entity={message?.data}
            entityField={"description"}
            updateEntity={updateMessageFun}
            rows={6}
            resetErrors={resetMessageErrorsFun}
            initialValues={{ description: message?.data?.description }}
          />
          <Typography className={classes.Created} variant="subtitle1">
            <b>Created at</b> {prettifyDate(message?.data?.createdAt)}
          </Typography>
        </div>
      ) : (
        <Typography variant="h5" align="center">
          Loading...
        </Typography>
      )}
    </Paper>
  );
};

const mapStateToProps = ({ messages, auth }) => ({ message: messages.message, user: auth.user });

export default connect(mapStateToProps, {
  verifyMessageOwnerReq,
  updateMessageReq,
  resetMessageErrors,
  fetchMessageByIdReq,
  fetchMessageByIdInit,
  updateMessageRequest,
})(withRouter(MessageUpdate));
