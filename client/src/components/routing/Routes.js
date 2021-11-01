// Import Engine
import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Import Components
import Alert from "../layout/Alert";
import NotFound from "../layout/NotFound";
import HowItWorksPage from "../howItWorksPage/HowItWorksPage";
import Sellers from "../sellers/Sellers";
import MyProfile from "../dashboard/MyProfile";
import Company from "../company/Company";
import Support from "../support/Support";
import Chats from "../chats/Chats";
import Orders from "../orders/Orders";
import NewOrder from "../newOrder/NewOrder";
import Auth from "../auth/Auth";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Auth} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/password-recovery" component={Auth} />
        <Route exact path="/new-password" component={Auth} />
        <PrivateRoute exact path="/dashboard" component={MyProfile} />
        <Route exact path="/how-it-works" component={HowItWorksPage} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/company/:id" component={Company} />
        <Route exact path="/support" component={Support} />
        <PrivateRoute exact path="/chats" component={Chats} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/new-order/:id" component={NewOrder} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
