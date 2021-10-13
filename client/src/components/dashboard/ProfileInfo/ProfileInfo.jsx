import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ProfileInfo.css";
import ProfileMoreInfo from "./ProfileMoreInfo/ProfileMoreInfo";
import ProfileMoreInfoSettings from "./ProfileMoreInfo/ProfileMoreInfoSettings";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

const ProfileInfo = ({
  fullname,
  login,
  birthDay,
  email,
  location,
  phoneNumber,
  iAmSeller
}) => {
  const [mobileInfoHidden, setMobileInfoHidden] = useState(false);

  const [displayEditProfile, toggleEditProfile] = useState(false);

  const openProfileSettings = () => toggleEditProfile(!displayEditProfile);

  const editProfile = (
    <ProfileMoreInfoSettings mobileInfoHidden={mobileInfoHidden} />
  );

  const myProfile = (
    <ProfileMoreInfo
      birthDay={birthDay}
      email={email}
      location={location}
      phoneNumber={phoneNumber}
      mobileInfoHidden={mobileInfoHidden}
    />
  );

  return (
    <div className="profileInfo" active={!mobileInfoHidden + ""}>
      <img className="profileImage" src="" />
      <div className="profileInfoContent">
        <div className="nameAndButtonsDiv">
          <div className="nameAndRoleDiv">
            <span className="profileNameText">{fullname}</span>
            <span className="profileRoleText">
              {iAmSeller === false ? "Buyer" : "Seller"}
            </span>
          </div>
          <span
            className="moreDetailsText"
            active={!mobileInfoHidden + ""}
            onClick={() => setMobileInfoHidden(!mobileInfoHidden)}
          >
            More details
            <img src={ButtonBackArrow} />
          </span>
          <div className="editExitButtonsDiv">
            <button onClick={openProfileSettings} className="editButton">
              Edit
            </button>
            <button className="exitButton">Exit</button>
          </div>
        </div>
        <span className="profileLogin">{login}</span>
        {displayEditProfile ? editProfile : myProfile}
      </div>
    </div>
  );
};

export default ProfileInfo;
