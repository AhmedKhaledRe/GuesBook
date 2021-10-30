import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles, Grid, Paper, Typography, IconButton } from "@material-ui/core";
import { fetchMessagesReq, fetchMessagesInit, resetMessageErrors, deleteMessageReq } from "../state/actions";
import { prettifyDate } from "../../../common/helper";
import { borderColor, cardShadow, dangerColor, primaryColor, successColor } from "../../../common/assets/jss/appStyles";
import { Edit, Delete } from "@material-ui/icons";
import Loading from "../../../common/components/loading";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "5px 0px",
  },
  mainGrid: {},
  nestedGrid: {
    border: `2px solid ${borderColor}`,
    boxShadow: cardShadow,
    minHeight: 150,
    padding: "5px",
    margin: "15px 2px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    position: "relative",
  },
  editable: {
    color: primaryColor,
    position: "absolute",
    top: "0px",
    right: "0px",
    "& svg": {
      fontSize: "20px",
    },
  },
  delete: {
    color: dangerColor,
    position: "absolute",
    top: "0px",
    right: "25px",
    "& svg": {
      fontSize: "20px",
    },
  },
  userName: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0px 0px 0px 2px",
    color: successColor,
    fontWeight: 600,
  },
  Message: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));

const MessageListing = ({ messages, fetchMessagesReq, user, history, fetchMessagesInit, location, resetMessageErrors, deleteMessageReq }) => {
  const classes = useStyles();
  const isManage = location.pathname.includes("manage");

  useEffect(() => {
    resetMessageErrors();
    fetchMessagesInit();
    fetchMessagesReq(isManage);
    return () => {
      resetMessageErrors();
    };
    //eslint-disable-next-line
  }, [location.pathname]);

  const deleteFunction = (e, message) => {
    deleteMessageReq(message._id, () => {
      toast.success("Message Deleted Successfully", 5000);
      fetchMessagesInit();
      fetchMessagesReq(isManage);
    });
  };

  const renderMessages = () => {
    return (
      <Paper elevation={3} className={classes.container}>
        <Grid className={classes.mainGrid} alignItems="center" container justifyContent="space-around" wrap="wrap">
          {messages?.data.length > 0 ? (
            messages?.data?.map((message) => (
              <Grid
                key={message._id}
                item
                xs={12}
                sm={5}
                md={3}
                className={classes.nestedGrid}
                style={
                  (message?.user?.username ? user === message.user.username : user)
                    ? { backgroundColor: "#7ff1e1" }
                    : { backgroundColor: "#33ff86e2" }
                }
              >
                {(message?.user?.username ? user === message.user.username : user) && (
                  <>
                    <IconButton
                      color="primary"
                      aria-label="edit"
                      size="small"
                      component="span"
                      className={classes.editable}
                      onClick={() => history.push(`messages/${message._id}/edit`)}
                    >
                      <Edit />
                    </IconButton>
                    {isManage && (
                      <IconButton
                        color="primary"
                        aria-label="edit"
                        size="small"
                        component="span"
                        className={classes.delete}
                        onClick={(e) => deleteFunction(e, message)}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  </>
                )}
                <Typography className={classes.userName} variant="subtitle1">
                  {message?.user?.username ? message.user.username : user}
                </Typography>
                <div style={{ wordBreak: "break-word", maxWidth: "95%", margin: "10px 0px", display: "flex", alignItems: "center" }}>
                  <Typography className={classes.Message} variant="h6">
                    {message.description}
                  </Typography>
                </div>
                <Typography style={{ position: "absolute", bottom: 0 }} variant="subtitle2">
                  <b>Created at</b> {prettifyDate(message.createdAt)}
                </Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No Messages Exist!!!
            </Typography>
          )}
        </Grid>
      </Paper>
    );
  };

  return <>{messages.loading ? <Loading /> : renderMessages()}</>;
};

const mapStateToProps = ({ messages, auth }) => ({ messages: messages.messages, user: auth.user });

export default connect(mapStateToProps, { fetchMessagesReq, fetchMessagesInit, resetMessageErrors, deleteMessageReq })(withRouter(MessageListing));
