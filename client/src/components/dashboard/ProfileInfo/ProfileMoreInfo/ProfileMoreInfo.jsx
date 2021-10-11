import React from "react";

import "./ProfileMoreInfo.css";

const ProfileMoreInfo = ({
  birthDay,
  email,
  location,
  phoneNumber,
  mobileInfoHidden = true
}) => {
  //   console.log(mobileInfoHidden);
  return (
    <div className="profileMoreInfo">
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Birthday</span>
          <span className="profInfoContent">{birthDay}</span>
        </div>
        <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock2"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">E-mail</span>
          <span className="profInfoContent">{email}</span>
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
        </div>
        <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock1"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">Mobile number</span>
          <span className="profInfoContent">{phoneNumber}</span>
        </div>
      </div>
      <div
        className="profileMoreInfoDiv passwordContentDiv"
        active={!mobileInfoHidden + ""}
      >
        <span className="profInfoHeader">Password</span>
        <input className="passwordText" readOnly value="* * * * * * *" />
        <button className="profChangePassButton">Change your Password</button>
      </div>
    </div>
  );
};

export default ProfileMoreInfo;
