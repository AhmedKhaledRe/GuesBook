import React, { useState, useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { compose } from "recompose";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import MuiTextField from "../../../common/components/muiTextField/MuiTextField.jsx";

const useStyles = makeStyles((theme) => ({
  TextArea: {
    margin: "5px 0px",
  },
  Paper: {
    width: "100%",
    minHeight: 300,
    padding: "5px 10px",
  },
  Button: {
    margin: "5px",
  },
  Edit: {
    margin: "5px 5px 30px 5px",
  },
  divTypography: {
    wordBreak: "break-word",
    maxWidth: "95%",
    margin: "30px 5px 5px 5px",
    display: "flex",
    alignItems: "center",
  },
}));

const MessageEdit = ({ entity, entityField, updateEntity, rows, initialValues, handleSubmit }) => {
  const [state, setState] = useState({ isActive: false, originValue: undefined });
  const classes = useStyles();

  const setOriginValue = () => {
    setState({
      originValue: entity[entityField],
      isActive: false,
    });
  };

  const disableEdit = () => setState({ ...state, isActive: false });

  const enableEdit = () => setState({ ...state, isActive: true });

  useEffect(() => {
    setOriginValue();
    return () => {};
    // eslint-disable-next-line
  }, []);

  const update = (values) => {
    if (values[entityField] !== state.originValue) {
      updateEntity({ [entityField]: values[entityField] });
      setState({ ...state, isActive: false, originValue: values[entityField] });
    }
  };

  return state.isActive ? (
    <div className={classes.Container}>
      <form onSubmit={handleSubmit((values) => update(values))}>
        <Field name="description" required type="text" label="Description" multiline rows={rows} component={MuiTextField} />
        <Button className={classes.Button} type="submit" variant="outlined" color="primary">
          Save
        </Button>
        <Button className={classes.Button} variant="outlined" color="secondary" onClick={() => disableEdit()}>
          Close
        </Button>
      </form>
    </div>
  ) : (
    <div className={classes.Container}>
      <div className={classes.divTypography}>
        <Typography className={classes.Message} variant="h6">
          {entity[entityField]}
        </Typography>
      </div>
      <Button className={classes.Edit} variant="outlined" color="primary" onClick={() => enableEdit()}>
        Edit
      </Button>
    </div>
  );
};

const mapStateToProps = ({ form, auth }) => ({ form, user: auth.user });

export default compose(reduxForm({ form: "updateMessage", destroyOnUnmount: true }), connect(mapStateToProps, {}))(MessageEdit);
