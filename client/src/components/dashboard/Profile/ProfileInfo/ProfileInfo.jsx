import { useState } from "react";

import "./ProfileInfo.css";
import ButtonBackArrow from "../../../../img1/buttonBackArrow.png";
import DefaultAvatar from "../../../../img11/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";

const ProfileInfo = ({
  avatar,
  fullname,
  iAmSeller,
  openProfileSettings,
  displayEditProfile,
  logout,
  setMobileInfoHidden,
  mobileInfoHidden = true,
  login,
  birthDay,
  email,
  location,
  phoneNumber
}) => {
  return (
    <div className="profileInfo" active={!mobileInfoHidden + ""}>
      {avatar ? (
        <img className="profileImage" src={avatar?.url} alt="No Photo" />
      ) : (
        <img
          className="profileImage"
          src={DefaultAvatar}
          alt="No Photo"
        />
      )}
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
            isseller={iAmSeller + ""}
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
        <div className="profileMoreInfo" isseller={iAmSeller + ""}>
          <div className="profileMoreInfoDiv">
            {!iAmSeller && <div className="profMoreInfoBlock">
              <span className="profInfoHeader">Birthday</span>
              <span className="profInfoContent">{birthDay}</span>
            </div>}
            <div
              className={`profMoreInfoBlock ${!iAmSeller && "profMoreInfoBlock2"} ${iAmSeller ? "profMobileHiddenBlock1" : "profMobileHiddenBlock2"}`}
              isseller={iAmSeller + ""}
              active={!mobileInfoHidden + ""}
            >
              <span className="profInfoHeader">E-mail</span>
              <span className="profInfoContent">{email}</span>
              <label className="profEmailHowLogin">
                <input type="checkbox" />
                <span>Use how login</span>
              </label>
            </div>
          </div>
          <div className="profileMoreInfoDiv">
            {!iAmSeller && <div className="profMoreInfoBlock">
              <span className="profInfoHeader">Country</span>
              <span className="profInfoContent">{location}</span>
            </div>}
            <div
              className={`profMoreInfoBlock ${!iAmSeller && "profMoreInfoBlock2"} ${iAmSeller ? "profMobileHiddenBlock2" : "profMobileHiddenBlock1"}`}
              isseller={iAmSeller + ""}
              active={!mobileInfoHidden + ""}
            >
              <span className="profInfoHeader">Mobile number</span>
              <span className="profInfoContent">{phoneNumber}</span>
            </div>
          </div>
          <div
            className="profileMoreInfoDiv passwordContentDiv"
            isseller={iAmSeller + ""}
            active={!mobileInfoHidden + ""}
          >
            <span className="profInfoHeader">Password</span>
            <input className="passwordText" readOnly value="* * * * * * *" />
            <button className="profChangePassButton">Change your Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
