import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { createProfile, getCurrentProfile } from "../../actions/profile";
import { editUserProfile, loadUser } from "../../../../actions/auth";

import "./ProfileMoreInfo.css";

const initialState = {
  fullname: "",
  login: "",
  birthDay: "",
  email: "",
  location: "",
  phoneNumber: ""
};

const ProfileMoreInfoSettings = ({
  auth: { user, loading },
  loadUser,
  mobileInfoHidden = true
}) => {
  //   console.log(mobileInfoHidden);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!user) loadUser();
    if (!loading && user) {
      const userData = { ...initialState };
      console.log({ ...initialState });
      for (const key in user) {
        if (key in userData) userData[key] = user[key];
      }
      setFormData(userData);
    }
  }, [loading, loadUser, user]);

  const { fullname, login, birthDay, email, location, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(editUserProfile());
    editUserProfile(formData);
  };

  return (
    <form className="profileMoreInfo" onSubmit={onSubmit}>
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Fullname</span>
          <span className="profInfoContent">{fullname}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="FullName"
            name="fullname"
            value={fullname}
            onChange={onChange}
          />
        </div>
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Login</span>
          <span className="profInfoContent">{login}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="login"
            name="login"
            value={login}
            onChange={onChange}
          />
        </div>
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Birthday111</span>
          <span className="profInfoContent">{birthDay}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="birthDay"
            name="birthDay"
            value={birthDay}
            onChange={onChange}
          />
        </div>
        <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock2"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">E-mail</span>
          <span className="profInfoContent">{email}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <div className="profEmailHowLogin">
            <input type="checkbox" />
            <span>Use how login</span>
          </div>
        </div>
      </div>
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Country</span>
          <span className="profInfoContent">{location}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock1"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">Mobile number</span>
          <span className="profInfoContent">{phoneNumber}</span>
          <input
            className="authFieldInput"
            type="text"
            placeholder="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>
      </div>
      <button type="submit" className="submitButton">
        Change Settings
      </button>
      <div
        className="profileMoreInfoDiv passwordContentDiv"
        active={!mobileInfoHidden + ""}
      >
        {/* <span className="profInfoHeader">Password</span>
        <input className="passwordText" readOnly value="* * * * * * *" />
        <button className="profChangePassButton">Change your Password</button> */}
      </div>
    </form>
  );
};

ProfileMoreInfoSettings.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  loadUser: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { editUserProfile, loadUser })(
  ProfileMoreInfoSettings
);
