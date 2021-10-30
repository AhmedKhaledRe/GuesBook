import React, { useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
// Actions
import { authRequest, register, cleanErrors } from "../../state/actions";
// @Material-UI
import { CircularProgress, Typography, Button } from "@material-ui/core";
// Assets
import { validate } from "../../../common/helper/validate";
import RegisterInput from "./RegisterInput";
// Styles
import { useStyles } from "./registerStyles";

const Register = ({ handleSubmit, register, history, location, auth, authRequest, cleanErrors }) => {
  const classes = useStyles();
  const user = localStorage.getItem("GuestUser");

  useEffect(() => {
    return () => {
      cleanErrors();
    };
    //eslint-disable-next-line
  }, []);

  const registerUser = (userData) => {
    authRequest();
    register(userData, () => history.push({ pathname: "/login", state: { successRegister: true } }));
  };

  const renderRegister = () => (
    <div className={classes.container}>
      <div className={classes.auth__box}>
        <Typography variant="h6" align="center">
          Welcome To My Guest Book
        </Typography>
        <form onSubmit={handleSubmit((values) => registerUser(values))}>
          <Field name="username" type="text" placeholder="Username" label="Username" component={RegisterInput} />
          <Field name="email" type="email" placeholder="Email" label="Email" component={RegisterInput} />
          <Field name="password" type="password" placeholder="Password" label="Password" component={RegisterInput} />
          <Field
            name="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            label="Password Confirmation"
            component={RegisterInput}
          />
          <div className="btn_wrapper">
            <Button disabled={auth.loading} type="submit" variant="contained" className={classes.auth__submit}>
              Register
            </Button>
            {auth.loading && <CircularProgress size={24} className="btn_progress" />}
          </div>
        </form>
        <div className={classes.auth__redirect}>
          have an account?{"  "}
          <Button variant="contained" onClick={() => history.push("/login")}>
            Go To Login
          </Button>
        </div>
      </div>
    </div>
  );

  const redirect = () => history.push("/");

  return <div>{user ? redirect() : renderRegister()}</div>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default compose(
  reduxForm({ form: "register", validate }),
  connect(mapStateToProps, { register, authRequest, cleanErrors })
)(withRouter(Register));
