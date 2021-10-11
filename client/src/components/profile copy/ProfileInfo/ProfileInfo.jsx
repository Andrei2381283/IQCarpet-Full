import React, { useState } from "react";

import "./ProfileInfo.css";
import ProfileMoreInfo from "./ProfileMoreInfo/ProfileMoreInfo";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

const ProfileInfo = () => {
  const [mobileInfoHidden, setMobileInfoHidden] = useState(false);

  return (
    <div className="profileInfo" active={!mobileInfoHidden + ""}>
      <img className="profileImage" src="" />
      <div className="profileInfoContent">
        <div className="nameAndButtonsDiv">
          <div className="nameAndRoleDiv">
            <span className="profileNameText">Gavrilova Hanna Igorevna</span>
            <span className="profileRoleText">Buyer</span>
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
        <span className="profileLogin">Hannah_Montana</span>
        <ProfileMoreInfo mobileInfoHidden={mobileInfoHidden} />
      </div>
    </div>
  );
};

export default ProfileInfo;
