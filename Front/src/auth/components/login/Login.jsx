import React, { useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Field, reduxForm } from "redux-form";
// Actions
import { authRequest, signIn, cleanErrors } from "../../state/actions";
// @Material-UI
import { CircularProgress, Typography, Button } from "@material-ui/core";
// Assets
import { validate } from "../../../common/helper/validate";
import LoginInput from "./LoginInput";
// Styles
import { useStyles } from "./loginStyles";

const Login = ({ handleSubmit, signIn, history, location, auth, authRequest, cleanErrors }) => {
  const classes = useStyles();
  const user = localStorage.getItem("GuestUser");

  useEffect(() => {
    if (location?.state?.successRegister === true) toast.success("Registration Success", { autoClose: 5000 });
    return () => {
      cleanErrors();
    };
    //eslint-disable-next-line
  }, []);

  const submit = (values) => {
    authRequest();
    signIn(values, () => history.push("/"));
  };

  const renderLogin = () => (
    <div className={classes.container}>
      <div className={classes.auth__box}>
        <Typography variant="h6" align="center">
          Welcome To My Guest Book
        </Typography>
        <form onSubmit={handleSubmit((values) => submit(values))}>
          <Field name="email" type="email" placeholder={"Email"} label={"Email"} component={LoginInput} />
          <Field name="password" type="password" placeholder={"Password"} label={"Password"} component={LoginInput} />
          <div className="btn_wrapper">
            <Button disabled={auth.loading} type="submit" variant="contained" className={classes.auth__submit}>
              Login
            </Button>
            {auth.loading && <CircularProgress size={24} className="btn_progress" />}
          </div>
        </form>
        <div className={classes.auth__redirect}>
          a new user? {"  "}
          <Button variant="contained" onClick={() => history.push("/register")}>
            Go To Register
          </Button>
        </div>
      </div>
    </div>
  );

  const redirect = () => history.push("/");

  return <div>{user ? redirect() : renderLogin()}</div>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default compose(reduxForm({ form: "login", validate }), connect(mapStateToProps, { signIn, authRequest, cleanErrors }))(Login);
