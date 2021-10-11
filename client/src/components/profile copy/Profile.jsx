import React, { Fragment } from "react";

import "./Profile.css";

import BackButton from "../backButton/BackButton";
import ChatsButton from "../chatsButton/ChatsButton";
import OrderCard from "../orderCard/OrderCard";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Fragment>
      <div className="contentHeaderButtonsDiv">
        <BackButton />
        <ChatsButton />
      </div>
      <span className="profileHeader profileAboutMeText">About me</span>
      <ProfileInfo />
      <div className="profileHeaderDiv">
        <span className="profOrdersText">My orders(4)</span>
        <Link className="profOrdersLink" to="/orders">
          View all
        </Link>
      </div>
      <div className="profileOrdersDiv">
        <OrderCard isSent img="" name="Favorit-Capret" />
        <OrderCard isSent img="" name="Favorit-Capret" />
        <OrderCard img="" name="Favorit-Capret" />
        <OrderCard img="" name="Favorit-Capret" />
      </div>
    </Fragment>
  );
};

export default Profile;
