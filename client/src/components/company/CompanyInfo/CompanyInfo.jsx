// Import Engine
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "./CompanyInfo.css";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

const CompanyInfo = ({ profile }) => {
  const [mobileInfoHidden, setMobileInfoHidden] = useState(true);

  return (
    <div className="companyProfile">
      <div className="companyMainInfoDiv">
        <img className="companyImg" src="images/sellerProfileImage.png" />
        <div className="companyInfoBlock">
          <h1 className="companyName">{profile.companyName}</h1>
          <div
            className="companyInfoDiv companyInfoMobileHideDiv companyInfoMobileHideDiv1"
            active={!mobileInfoHidden + ""}
          >
            <div className="companyCountryMobileHideDiv">
              <span className="companyInfoHeader">Country</span>
              <span className="companyInfoContent">{profile.location}</span>
            </div>
          </div>
          <div>
            <div className="companyInfoDiv companyInfoDiv2">
              <span className="companyInfoHeader">About us</span>
              <span className="companyInfoContent">
                {profile.about
                  ? profile.about
                  : "Пока что, Компания не написала"}
              </span>
            </div>
            <span
              className="companyMoreDetailsText"
              active={!mobileInfoHidden + ""}
              onClick={() => setMobileInfoHidden(!mobileInfoHidden)}
            >
              More details
              <img src={ButtonBackArrow} />
            </span>{" "}
            {/* TODO: Replace to compponent */}
          </div>
        </div>
      </div>
      <div className="companyLinksBlock">
        <div
          className="companyInfoMobileHideDiv companyInfoMobileHideDiv2"
          active={!mobileInfoHidden + ""}
        >
          <span className="companyLinksHeader">Contacts</span>
          <div className="companyLinkDiv">
            <div className="companyLinkImg contactsLinkImage1_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            <span className="contactLinkText">{profile.phoneNumberOne}</span>
          </div>
          <div className="companyLinkDiv">
            <div className="companyLinkImg contactsLinkImage4_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            <span className="contactLinkText">
              {profile.phoneNumberTwo ? profile.phoneNumberTwo : "No"}
            </span>
          </div>
          <div className="companyLinkDiv">
            <div className="companyLinkImg contactsLinkImage3_20" />
            <span className="companyLinkImg contactLinkImage2">M</span>
            <span className="contactLinkText">
              {profile.site ? profile.site : "No"}
            </span>
          </div>
        </div>
        <div className="companyContactBtns" active={!mobileInfoHidden + ""}>
          <Link className="companyContactBtn1">Send Message</Link>
          {/* <button className="companyContactBtn2">Make an Order</button> */}
          <Link
            to={`/new-order/${profile.user}`}
            className="companyContactBtn2"
          >
            Make an Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
