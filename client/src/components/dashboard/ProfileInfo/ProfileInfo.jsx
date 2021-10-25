import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";

import "./ProfileInfo.css";

import ProfileMoreInfo from "./ProfileMoreInfo/ProfileMoreInfo";
import ProfileMoreInfoSettings from "./ProfileMoreInfo/ProfileMoreInfoSettings";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

import CompanyMoreInfo from "./CompanyInfo/CompanyMoreInfo";
import CompanyMoreInfoSettings from "./CompanyInfo/CompanyMoreInfoSettings";
import CompanyWhatMake from "../../company/CompanyWhatMake/CompanyWhatMake";
import CompanyWhatMakeSettings from "./CompanyWhatMakeSettings.jsx";

const ProfileInfo = ({
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
  const [mobileInfoHidden, setMobileInfoHidden] = useState(false);

  const [displayEditProfile, toggleEditProfile] = useState(false);

  const openProfileSettings = () => toggleEditProfile(!displayEditProfile);

  const [displayEditCompanyInfo, toggleEditCompanyInfo] = useState(false);

  const openCompanySettings = () =>
    toggleEditCompanyInfo(!displayEditCompanyInfo);

  const [displayEditWhatMake, toggleEditWhatMake] = useState(false);

  const openWhatMakeSettings = () => toggleEditWhatMake(!displayEditWhatMake);

  const editProfile = (
    <ProfileMoreInfoSettings mobileInfoHidden={mobileInfoHidden} />
  );

  const editCompanyInfo = (
    <CompanyMoreInfoSettings mobileInfoHidden={mobileInfoHidden} />
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

  const infoCompany = (
    <CompanyMoreInfo
      companyName={profileCompanyName}
      location={location}
      emailOne={profileEmailOne}
      phoneNumberOne={profilePhoneNumberOne}
      mobileInfoHidden={mobileInfoHidden}
    />
  );

  return (
    <Fragment>
      <div className="profileInfo" active={!mobileInfoHidden + ""}>
        <img className="profileImage" src={avatar?.url} alt="No Photo" />
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
                {displayEditProfile ? "Cancel" : "Edit"}
              </button>
              <button onClick={logout} className="exitButton">
                Exit
              </button>
            </div>
          </div>
          <span className="profileLogin">{login}</span>
          {displayEditProfile ? editProfile : myProfile}
        </div>
      </div>
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

export default ProfileInfo;
