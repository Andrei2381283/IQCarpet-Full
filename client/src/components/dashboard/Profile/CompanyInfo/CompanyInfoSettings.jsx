// Import Engine
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editUserProfile, loadUser } from "../../../../actions/auth";

// Import Styles
import "./CompanyInfo.css";

const initialState = {
  fullname: "",
  birthDay: "",
  email: "",
  location: "",
  about: "",
  phoneNumber: ""
};

const CompanyInfoSettings = ({
  auth: { user, loading },
  loadUser,
  editUserProfile,
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

  const { fullname, birthDay, email, location, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(editUserProfile);
    editUserProfile(formData);
  };

  return (
    <form className="profileMoreInfo" onSubmit={onSubmit}>
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Fullname</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="FullName"
            name="fullname"
            value={fullname}
            onChange={onChange}
          />
        </div>
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Login</span>
          {/* <input
            className="profInfoInput"
            type="text"
            placeholder="login"
            name="login"
            value={login}
            onChange={onChange}
          /> */}
        </div>
        {/* <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Birthday111</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="birthDay"
            name="birthDay"
            value={birthDay}
            onChange={onChange}
          />
        </div> */}
        {/* <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock2"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">E-mail</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <label className="profEmailHowLogin">
            <input type="checkbox" />
            <span>Use how login</span>
          </label>
        </div> */}
      </div>
      <div className="profileMoreInfoDiv">
        <div className="profMoreInfoBlock">
          <span className="profInfoHeader">Country</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="profMoreInfoBlock profMoreInfoBlock2">
          <span className="profInfoHeader">About us</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="about"
            name="about"
            value={location}
            onChange={onChange}
          />
        </div>
        {/* <div
          className="profMoreInfoBlock profMoreInfoBlock2 profMobileHiddenBlock1"
          active={!mobileInfoHidden + ""}
        >
          <span className="profInfoHeader">Mobile number</span>
          <input
            className="profInfoInput"
            type="text"
            placeholder="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </div> */}
      </div>
      <div className="companyLinksBlock companyLinksBlockMoreInfo">
        <div className="companyInfoMobileHideDiv companyInfoMobileHideDiv2" active={!mobileInfoHidden + ""}>
          <span className="companyLinksHeader">Contacts</span>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage1_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            {/* <span className="contactLinkText">+7 (996) 053 81 10</span> */}
            <input
              className="profInfoInput contactLinkText"
              type="text"
              placeholder="phone"
              name="linkPhone"
              value="+7 (996) 053 81 10"
              onChange={onChange}
            />
          </div>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage4_20" />
            <div className="companyLinkImg contactLinkImage2 companyLinkPhone" />
            {/* <span className="contactLinkText">+7 (996) 053 81 10</span> */}
            <input
              className="profInfoInput contactLinkText"
              type="text"
              placeholder="phone"
              name="linkPhone2"
              value="+7 (996) 053 81 10"
              onChange={onChange}
            />
          </div>
          <div className="companyLinkDiv">
            <Link to="" className="companyLinkImg contactsLinkImage3_20" />
            <span className="companyLinkImg contactLinkImage2">M</span>
            <input
              className="profInfoInput contactLinkText"
              type="text"
              placeholder="email"
              name="linkEmail"
              value="http://www.iselectrics.com"
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="submitButton">
          Change Settings
        </button>
      </div>
      {/* <div
        className="profileMoreInfoDiv passwordContentDiv"
        active={!mobileInfoHidden + ""}
      >
        <span className="profInfoHeader">Password</span>
        <input className="passwordText" readOnly value="* * * * * * *" />
        <button className="profChangePassButton">Change your Password</button>
      </div> */}
    </form>
  );
};

CompanyInfoSettings.propTypes = {
  auth: PropTypes.object.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  editUserProfile,
  loadUser
})(CompanyInfoSettings);
