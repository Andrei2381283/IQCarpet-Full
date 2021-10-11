import React, { useState } from "react";

import "./ProfileInfo.css";
import ProfileMoreInfo from "./ProfileMoreInfo/ProfileMoreInfo";
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

  return (
    <div className="profileInfo" active={!mobileInfoHidden + ""}>
      <img className="profileImage" src="" />
      <div className="profileInfoContent">
        <div className="nameAndButtonsDiv">
          <div className="nameAndRoleDiv">
            <span className="profileNameText">{fullname}</span>
            <span className="profileRoleText">
              {iAmSeller === false ? "Customer" : "Buyer"}
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
            <button className="editButton">Edit</button>
            <button className="exitButton">Exit</button>
          </div>
        </div>
        <span className="profileLogin">{login}</span>
        <ProfileMoreInfo
          birthDay={birthDay}
          email={email}
          location={location}
          phoneNumber={phoneNumber}
          mobileInfoHidden={mobileInfoHidden}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
