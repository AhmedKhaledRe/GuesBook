import React, { useEffect } from "react";
import { connect } from "react-redux";
import App from "./App";
import { authRequest, getUser } from "../auth/state/actions";
// import NoUserFound from "../common/components/noUserFound/NoUserFound";
import Loading from "../common/components/loading";
// import RegisterEnd from "../auth/components/registerationEnd/RegisterEnd";

const AppContainer = ({ auth, user, authRequest, getUser, history }) => {
  useEffect(() => {
    authRequest();
    getUser();
    //eslint-disable-next-line
  }, []);

  const renderApp = () => {
    return !auth.loading ? <App /> : <Loading errors={auth.error} />;
  };

  return <>{user ? renderApp() : () => history.push("/login")}</>;
};

const mapStateToProps = ({ auth }) => ({ user: auth.user, auth });

export default connect(mapStateToProps, { getUser, authRequest })(AppContainer);
