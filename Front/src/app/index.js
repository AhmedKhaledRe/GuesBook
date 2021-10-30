import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import App from "./App";
import { authRequest, getUser } from "../auth/state/actions";
import Loading from "../common/components/loading";
import { withRouter } from "react-router";

const AppContainer = ({ auth, user, authRequest, getUser, history }) => {
  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, []);

  const renderApp = () => {
    return !auth.loading ? <App /> : <Loading errors={auth.error} />;
  };

  return <>{user ? renderApp() : <Suspense fallback={<Loading errors={["Loading..."]} />}>{history.push("/login")}</Suspense>}</>;
};

const mapStateToProps = ({ auth }) => ({ user: auth.user, auth });

export default connect(mapStateToProps, { getUser, authRequest })(withRouter(AppContainer));
