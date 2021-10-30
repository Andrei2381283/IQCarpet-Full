import React from "react";

import { Link } from "react-router-dom";

import "./CompanyInfo.css";

const CompanyInfo = ({
  companyName,
  emailOne,
  location,
  phoneNumberOne,
  mobileInfoHidden = true
}) => {
  //   console.log(mobileInfoHidden);
  return (
    <div className="profileMoreInfo">
      {/* <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">companyName</span>
          <span className="profInfoContent">{companyName}</span>
        </div>
        <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock2"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">E-mail</span>
          <span className="profInfoContent">{emailOne}</span>
          <label className="profEmailHowLogin">
            <input type="checkbox" />
            <span>Use how login</span>
          </label>
        </div>
      </div> */}
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Country</span>
          <span className="profInfoContent">{location}</span>
        </div>
        <div className="profMoreInfoBlock profMoreInfoBlock2">
          <span className="profInfoHeader">About us</span>
          <span className="profInfoContent">{location}</span>
        </div>
        {/* <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock1"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">Mobile number</span>
          <span className="profInfoContent">{phoneNumberOne}</span>
        </div> */}
      </div>
      <div className="companyLinksBlock companyLinksBlockMoreInfo">
        <div className="companyInfoMobileHideDiv companyInfoMobileHideDiv2" active={!mobileInfoHidden + ""}>
          <span className="companyLinksHeader">Contacts</span>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage1_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            <span className="contactLinkText">+7 (996) 053 81 10</span>
          </div>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage4_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            <span className="contactLinkText">+7 (996) 053 81 10</span>
          </div>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage3_20" />
            <span className="companyLinkImg contactLinkImage2">M</span>
            <span className="contactLinkText">http://www.iselectrics.com</span>
          </div>
        </div>
      </div>
      {/* <div
        className="profileMoreInfoDiv passwordContentDiv"
        active={!mobileInfoHidden + ""}
      >
        <span className="profInfoHeader">Password</span>
        <input className="passwordText" readOnly value="* * * * * * *" />
        <button className="profChangePassButton">Change your Password</button>
      </div> */}
    </div>
  );
};

export default CompanyInfo;
