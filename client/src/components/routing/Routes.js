import React from "react";
import { Route, Switch } from "react-router-dom";
/* import Register from "../auth/Register/Register";
import Login from "../auth/Login/Login"; */
import Alert from "../layout/Alert";
// import ProfileForm from "../profile-forms/ProfileForm";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
// import Profiles from "../profiles/Profiles";
// import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";

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
        {/* <Route exact path="/profiles" component={Profiles} /> */}
        {/* <Route exact path="/profile/:id" component={Profile} /> */}
        <PrivateRoute exact path="/dashboard" component={MyProfile} />
        <Route exact path="/how-it-works" component={HowItWorksPage} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/company/:id" component={Company} />
        <Route exact path="/support" component={Support} />
        <PrivateRoute exact path="/chats" component={Chats} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/new-order/:id" component={NewOrder} />
        {/* <PrivateRoute exact path="/create-profile" component={ProfileForm} /> */}
        {/* <PrivateRoute exact path="/edit-profile" component={ProfileForm} /> */}
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
