import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoSettings from "./ProfileInfo/ProfileInfoSettings";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CompanyInfoSettings from "./CompanyInfo/CompanyInfoSettings";
import CompanyWhatMake from "../../company/CompanyWhatMake/CompanyWhatMake";
import CompanyWhatMakeSettings from "./CompanyWhatMakeSettings.jsx";

import "./Profile.css";

const Profile = ({
  avatar,
  fullname,
  login,
  birthDay,
  email,
  location,
  phoneNumber,
  iAmSeller,
  user,
  profileCompanyName,
  profileEmailOne,
  profilePhoneNumberOne,
  logout
}) => {
  console.log(avatar);

  const [mobileInfoHidden, setMobileInfoHidden] = useState(false);

  const [displayEditProfile, toggleEditProfile] = useState(false);

  const openProfileSettings = () => toggleEditProfile(!displayEditProfile);

  const [displayEditCompanyInfo, toggleEditCompanyInfo] = useState(false);

  const openCompanySettings = () =>
    toggleEditCompanyInfo(!displayEditCompanyInfo);

  const [displayEditWhatMake, toggleEditWhatMake] = useState(false);

  const openWhatMakeSettings = () => toggleEditWhatMake(!displayEditWhatMake);

  const editProfile = (
    <ProfileInfoSettings 
      setMobileInfoHidden={setMobileInfoHidden}
      mobileInfoHidden={mobileInfoHidden} 
      logout={logout}
      iAmSeller={iAmSeller}
      openProfileSettings={openProfileSettings}
      displayEditProfile={displayEditProfile}
    />
  );

  const editCompanyInfo = (
    <CompanyInfoSettings mobileInfoHidden={mobileInfoHidden} />
  );

  const myProfile = (
    <ProfileInfo
      avatar={avatar}
      fullname={fullname}
      iAmSeller={iAmSeller}
      openProfileSettings={openProfileSettings}
      displayEditProfile={displayEditProfile}
      setMobileInfoHidden={setMobileInfoHidden}
      mobileInfoHidden={mobileInfoHidden}
      logout={logout}
      login={login}
      birthDay={birthDay}
      email={email}
      location={location}
      phoneNumber={phoneNumber}
    />
  );

  const infoCompany = (
    <CompanyInfo
      companyName={profileCompanyName}
      location={location}
      emailOne={profileEmailOne}
      phoneNumberOne={profilePhoneNumberOne}
      mobileInfoHidden={mobileInfoHidden}
    />
  );

  return (
    <Fragment>
      {displayEditProfile ? editProfile : myProfile}
      {iAmSeller && (
        <div className="companyProfile" active={!mobileInfoHidden + ""}>
          <img className="profileImage" src="" />
          <div className="profileInfoContent">
            <div className="nameAndButtonsDiv">
              <div className="nameAndRoleDiv">
                <span className="profileNameText">{profileCompanyName}</span>
                <span className="profileRoleText">
                  {/* {profile.iAmSeller && "Company"} */}
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
                <button onClick={openCompanySettings} className="editButton">
                  {displayEditCompanyInfo ? "Cancel" : "Edit"}
                </button>
                <button onClick={logout} className="exitButton">
                  Exit
                </button>
              </div>
            </div>
            {/* <span className="profileLogin">{login}</span> */}
            {displayEditCompanyInfo ? editCompanyInfo : infoCompany}
          </div>
        </div>
      )}
      {iAmSeller && (
        <div>
          <button
            onClick={openWhatMakeSettings}
            className="editButton whatWeMakeEditButton"
          >
            {displayEditWhatMake ? "Cancel" : "Edit"}
          </button>
          {displayEditWhatMake ? (
            <CompanyWhatMakeSettings data={{ country: location }} />
          ) : (
            <CompanyWhatMake data={{ country: location }} />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
