import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./config/state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./auth/components/login";
import Register from "./auth/components/Register";
import { theme } from "./common/assets/jss/appStyles";
import "react-toastify/dist/ReactToastify.css";
// app styles
import "./common/assets/index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/" component={App} />
          </Switch>
        </Suspense>
      </Provider>
      <ToastContainer
        hideProgressBar={true}
        // limit={10}
        icon={false}
        closeButton={true}
      />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
