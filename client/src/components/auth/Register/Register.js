// Import Engine
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";

// Import Styles
import "./Register.css";
import showPasswordImage from "../../../img1/showPassword.png";
import AuthSwitchBar from "../AuthSwitchBar";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    iAmSeller: "",
    companyName: "",
    birthDay: "1",
    birthMonth: "1",
    birthYear: "1920",
    location: "",
    phoneMask: "",
    phoneNumber: "",
    login: "",
    email: "",
    password: "",
    password2: ""
  });

  // const [iAmSeller, setiAmSeller] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const {
    fullname,
    iAmSeller,
    companyName,
    birthDay,
    birthMonth,
    birthYear,
    location,
    phoneMask,
    phoneNumber,
    login,
    email,
    password,
    password2
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        fullname,
        iAmSeller,
        companyName,
        birthDay: `${("0" + birthDay).slice(-2)}.${("0" + birthMonth).slice(-2)}.${birthYear}`,
        location,
        phoneNumber: phoneMask + phoneNumber,
        login,
        email,
        password
      });
    }
  };

  const companyField = (
    <div className="authField">
      <span className="authFieldName">Enter a Company's name</span>
      {/* <input className="authFieldInput" placeholder="Company's name"></input> */}
      <input
        className="authFieldInput"
        type="text"
        placeholder="companyName"
        name="companyName"
        value={companyName}
        onChange={onChange}
      />
    </div>
  );

  const phoneField = (
    <div className="authField">
      <span className="authFieldName">Enter a phone number</span>
      <div className="phoneFieldDiv">
        <input
          className="authFieldInput phoneMask"
          name="phoneMask"
          size={phoneMask ? phoneMask.length - 1 || 1 : 1}
          value={phoneMask}
          onChange={onChange}
        ></input>
        <input
          className="authFieldInput phoneNum"
          type="text"
          placeholder="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {/* <input className="authFieldInput phoneNum"></input> */}
      </div>
    </div>
  );

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form className="authorizingBlock" onSubmit={onSubmit}>
        <AuthSwitchBar mode={1} />
        <div className="regFieldsBlock">
          <div className="regLeftBlock" iAmSeller={iAmSeller.toString()}>
            <div className="authField">
              <span className="authFieldName">
                Enter a your surname&name&patronymic
              </span>
              {/* <input className="authFieldInput" placeholder="Name"></input> */}
              <input
                className="authFieldInput"
                type="text"
                placeholder="FullName"
                name="fullname"
                value={fullname}
                onChange={onChange}
              />
              <label className="checkBoxDiv">
                <input
                  type="checkbox"
                  name="iAmSeller"
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.checked
                    });
                    // console.log(setFormData({ iAmSeller: true }));
                    console.log(event.target.checked);
                  }}
                />
                <span>I am seller</span>
              </label>
            </div>
            {iAmSeller && companyField}
            <div className="authField">
              <span className="authFieldName">Enter a your BirthDay</span>
              <div className="regBirthDaySelectDiv">
                <select name="birthDay" className="authFieldSelect birthdaySelect birthdaySelectDay" value={birthDay} onChange={onChange}>
                  <option>1</option>
                </select>
                <select name="birthMonth" className="authFieldSelect birthdaySelect birthdaySelectMonth" value={birthMonth} onChange={onChange}>
                  <option value="1">January</option>
                </select>
                <select name="birthYear" className="authFieldSelect birthdaySelect birthdaySelectYear" value={birthYear} onChange={onChange}>
                  <option>1920</option>
                </select>
                {/* <input
                  type="text"
                  placeholder="birthDay"
                  name="birthDay"
                  value={birthDay}
                  onChange={onChange}
                /> */}
              </div>
            </div>
            <div className="authField">
              <span className="authFieldName">Choose a your location</span>
              {/* <input
                className="authFieldInput authFieldSelect"
                placeholder="Name"
              ></input> */}
              <input
                className="authFieldInput authFieldSelect"
                type="text"
                placeholder="location"
                name="location"
                value={location}
                onChange={onChange}
              />
            </div>
            {!iAmSeller && phoneField}
            <div className="authField">
              <span className="authFieldName">Download a your photo</span>
              <span className="authFieldSubName">Png/Jpeg & up to 10 MB</span>
              {/* <label className="regDownloadImageDiv">
                <div className="regDownloadImageBG">Tap for download</div>
                <input
                  className="regDownloadImageInput"
                  type="file"
                  accept="image/*"
                ></input>
              </label> */}
            </div>
          </div>
          <div className="regRightBlock" iAmSeller={iAmSeller.toString()}>
            {iAmSeller && phoneField}
            <div className="authField">
              <span className="authFieldName">Make a your login</span>
              <span className="authFieldSubName">
                Latin letters and numbers without spaces
              </span>
              {/* <input className="authFieldInput" placeholder="Login"></input> */}
              <input
                className="authFieldInput"
                type="text"
                placeholder="login"
                name="login"
                value={login}
                onChange={onChange}
              />
            </div>
            <div className="authField">
              <span className="authFieldName">Make a your Password</span>
              <span className="authFieldSubName">At least 6 characters</span>
              {/* <input
                className="authFieldInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              ></input> */}
              <input
                className="authFieldInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="regShowPassword"
                src={showPasswordImage}
              />
            </div>
            <div className="authField">
              <span className="authFieldName">Repeat a Password</span>
              {/* <input
                className="authFieldInput"
                type={showPassword2 ? "text" : "password"}
                placeholder="Password"
              ></input> */}
              <input
                className="authFieldInput"
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
              />
              <img
                onClick={() => setShowPassword2(!showPassword2)}
                className="regShowPassword"
                src={showPasswordImage}
              />
            </div>
            <div className="authField">
              <span className="authFieldName">Enter your Email</span>
              {/* <input className="authFieldInput" placeholder="Email"></input> */}
              <input
                className="authFieldInput"
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label className="checkBoxDiv">
                <input type="checkbox" />
                <span>Use how login</span>
              </label>
            </div>
          </div>
        </div>
        <div className="submitButtonDiv">
          <button type="submit" className="submitButton">
            Go
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
