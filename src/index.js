
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import Landing from "layouts/Landing.js";
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/Admin`} component={AdminLayout} />
      <Route path={`/landing`} component={Landing} />      
      <Redirect from={`/`} to="/auth/landing" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
