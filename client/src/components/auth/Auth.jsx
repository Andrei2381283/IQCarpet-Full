import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./Auth.css";

import AuthIllustration from "../../img1/illustration.png";

import Register from "./Register/Register";
import Login from "./Login/Login";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import NewPassword from "./NewPassword/NewPassword";

const Auth = () => {
  return (
    <Fragment>
      <img className="authIllustration" src={AuthIllustration} />
      <div className="authBlock">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password_recovery" component={PasswordRecovery} />
          <Route exact path="/new_password" component={NewPassword} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Auth;
