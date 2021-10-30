import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../common/components/loading";
import MessageListing from "./Messages/components/MessageListing.jsx";
import MessageCreate from "./Messages/components/MessageCreate.jsx";
import MessageUpdate from "./Messages/components/MessageUpdate.jsx";
import { uselayoutStyles } from "../common/assets/jss/components/layout";
import Header from "../common/components/header/Header";

function App() {
  const defaultRoute = `/messages`;
  const classes = uselayoutStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Header />
      </div>
      <div className={classes.content}>
        <main>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/messages" component={MessageListing} />
              <Route exact path="/messages/new" component={MessageCreate} />
              <Route exact path="/messages/:id/edit" component={MessageUpdate} />
              <Route exact path="/messages/manage" component={MessageListing} />
              <Redirect from="/" to={defaultRoute} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
