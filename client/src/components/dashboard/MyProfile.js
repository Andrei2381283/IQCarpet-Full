// Import Engine
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { loadUser } from "../../actions/auth";

import BackButton from "../backButton/BackButton";
import ChatsButton from "../chatsButton/ChatsButton";
import OrderCard from "../orderCard/OrderCard";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// Import Styles
import "./MyProfile.css";

const MyProfile = ({
  // getCurrentProfile,
  loadUser,
  // deleteAccount,
  auth: { user }
  // profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className="contentHeaderButtonsDiv">
        <BackButton />
        <ChatsButton />
      </div>
      <span className="profileHeader profileAboutMeText">About me</span>
      <ProfileInfo
        fullname={user && user.fullname}
        login={user && user.login}
        birthDay={user && user.birthDay}
        email={user && user.email}
        location={user && user.location}
        phoneNumber={user && user.phoneNumber}
        iAmSeller={user && user.iAmSeller}
      />
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
      {/* {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )} */}
    </Fragment>
  );
};

MyProfile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  // deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
  // profile: state.profile
});

export default connect(mapStateToProps, { loadUser })(MyProfile);
