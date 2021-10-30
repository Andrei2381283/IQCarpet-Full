// Import Engine
import React, { createRef, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import AuthSwitchBar from "../AuthSwitchBar";
import ErrorMessage from "../ErrorMessage";

// Import Styles
import "./Register.css";
import showPasswordImage from "../../../img1/showPassword.png";
import selectArrow from "../../../img1/selectArrow.png";
import ErrorInput from "../ErrorInput";

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const countries = {
  Russia: {
    cities: [],
    code: "+7"
  },
  USA: {
    cities: [],
    code: "+1"
  },
  Ukraine: {
    cities: [],
    code: "+380"
  }
}

const currentYear = (new Date()).getFullYear();

const Register = ({ setAlert, register, isAuthenticated }) => {
  const query = new URLSearchParams(useLocation().search);

  const hookForm = useForm({mode: "all"});
  const {handleSubmit, trigger, setValue, formState: { submitCount, touchedFields, errors, dirtyFields } } = hookForm;
  const reghook = (ref, options) => {
    return {...hookForm.register(ref, options), maxLength: (options.maxLength && (options.maxLength.value || options.maxLength)) || -1};
  }
  /* console.log(watch("fullname")) */
  console.log(errors);

  const [countryListVisible, setCountryListVisible] = useState(false);
  const [dateDivTouched, setDateTouched] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    iAmSeller: !!query.get("isseller"),
    companyName: "",
    birthDay: "1",
    birthMonth: "1",
    birthYear: "2021",
    location: "",
    country: "",
    city: "",
    phoneMask: "+7",
    phoneNumber: "",
    login: "",
    email: "",
    password: "",
    password2: "",
    useHowLogin: false
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
    country,
    city,
    phoneMask,
    phoneNumber,
    login,
    email,
    password,
    password2,
    useHowLogin
  } = formData;

  useEffect(() => {
    trigger(submitCount > 0 ? undefined : Object.keys(touchedFields));
  }, [iAmSeller]);

  useEffect(() => {
    if(touchedFields.login || dirtyFields.login){
      setValue("login", useHowLogin ? email : login);
      trigger("login");
    }
  }, [useHowLogin])
  
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    /* setValue(e.target.name, e.target.value);
    trigger(e.target.name);
    touchedFields[e.target.name] = true; */
  }

  const onSubmit = async (e) => {
    /* e.preventDefault(); */
    console.log("Ok");
    register({
      fullname,
      iAmSeller,
      companyName,
      birthDay: `${("0" + birthDay).slice(-2)}.${("0" + birthMonth).slice(-2)}.${birthYear}`,
      location,
      phoneNumber: phoneMask + phoneNumber,
      login: !useHowLogin ? login : email,
      email,
      password
    });
  };

  const companyField = (
    <div className="authField">
      <span className="authFieldName">Enter a Company's name</span>
      <ErrorInput
        className="authFieldInput"
        type="text"
        placeholder="Company's name"
        /* name="companyName" */
        aria-invalid={!!errors.companyName + ""}
        {...reghook("companyName", { 
          required: {value: iAmSeller, message: "Empty field"}, 
          maxLength: {value: 320, message: "Company name greater than 320"}, 
          minLength: 1, 
          pattern: /^[a-z0-9]+(|\s([a-z0-9]+)|-([a-z0-9]+))$/i,
          onChange: onChange
        })}
        value={companyName}
        error={errors.companyName}
      />
    </div>
  );

  const phoneField = (
    <div className="authField">
      <span className="authFieldName">Enter a phone number</span>
      <div className="phoneFieldDiv">
        <input
          className="authFieldInput phoneMask"
          /* name="phoneMask" */
          aria-invalid={!!errors.phoneMask + ""}
          {...reghook("phoneMask", { 
            required: "Empty field",
            onChange: onChange
          })}
          size={phoneMask ? phoneMask.length - 1 || 1 : 1}
          value={phoneMask}
        ></input>
        <input
          className="authFieldInput phoneNum"
          type="text"
          placeholder=""
          /* name="phoneNumber" */
          aria-invalid={!!errors.phoneNumber + ""}
          {...reghook("phoneNumber", { 
            required: "Empty field", 
            maxLength: {value: 10, message: "Length is not 10"}, 
            minLength: {value: 10, message: "Length is not 10"}, 
            pattern: /^[0-9]+$/i,
            onChange: onChange
          })}
          value={phoneNumber}
        />
        {/* <input className="authFieldInput phoneNum"></input> */}
      </div>
      <ErrorMessage error={errors.phoneNumber} message={errors.phoneNumber && errors.phoneNumber.message} />
    </div>
  );

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form className="authorizingBlock" onSubmit={handleSubmit(onSubmit)}>
        <AuthSwitchBar mode={1} />
        <div className="regFieldsBlock">
          <div className="regLeftBlock" iAmSeller={iAmSeller.toString()}>
            <div className="authField">
              <span className="authFieldName">
                Enter a your surname&name&patronymic
              </span>
              <ErrorInput
                className="authFieldInput"
                type="text"
                placeholder="Name"
                /* name="fullname" */
                aria-invalid={!!errors.fullname + ""}
                {...reghook("fullname", { 
                  required: "Empty field", 
                  maxLength: {value: 30, message: "Length more than 30"}, 
                  minLength: 1, 
                  pattern: /^[a-z0-9]+(|\s([a-z0-9]+)|-([a-z0-9]+))$/i,
                  onChange: onChange
                })} /* TODO: Сделать поддержку других языков  */
                value={fullname}
                error={errors.fullname}
              />
              <div className="checkBoxDiv">
                <input
                  type="checkbox"
                  name="iAmSeller"
                  defaultChecked={iAmSeller}
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
              </div>
            </div>
            {iAmSeller && companyField}
            <div className="authField">
              <span className="authFieldName">Enter a your BirthDay</span>
              <div className="regBirthDaySelectDiv" aria-invalid={(currentYear - birthYear < 18 && (submitCount > 0 || dateDivTouched)) + ""} onClick={() => setDateTouched(true)} >
                <select name="birthDay" className="authFieldSelect birthdaySelect birthdaySelectDay" value={birthDay} onChange={onChange}>
                  {
                    [...(function*(){
                      for(var k = 1; k <= new Date(birthYear, birthMonth, 0).getDate(); k++){
                        yield <option key={k}>{k}</option>;
                      }
                    })()]
                  }
                </select>
                <select name="birthMonth" className="authFieldSelect birthdaySelect birthdaySelectMonth" value={birthMonth} onChange={onChange}>
                  {
                    monthList.map((value, index) => <option value={index + 1} key={index}>{value}</option>)
                  }
                </select>
                <select name="birthYear" className="authFieldSelect birthdaySelect birthdaySelectYear" value={birthYear} onChange={onChange}>
                  {
                    [...(function*(){
                      for(var k = new Date().getFullYear(); k >= 1920; k--){
                        yield <option key={k}>{k}</option>;
                      }
                    })()]
                  }
                </select>
              </div>
              <ErrorMessage className="regBirthDayError" error={(currentYear - birthYear < 18 && (submitCount > 0 || dateDivTouched)) ? {} : null} message={currentYear - birthYear < 18 && (submitCount > 0 || dateDivTouched) && "You must be 18 years old"} />
            </div>
            <div className="authField">
              <span className="authFieldName">Choose a your location</span>
              <ErrorInput
                className="authFieldInput authFieldSelect regLocSelect"
                opened={countryListVisible + ""}
                type="text"
                placeholder="Sity & Country"
                /* name="location" */
                aria-invalid={!!errors.location + ""}
                {...reghook("location", { 
                  required: "Empty field", 
                  maxLength: 30, 
                  minLength: 1, 
                  pattern: /^[a-z0-9]+(|\s([a-z0-9]+)|-([a-z0-9]+))$/i,
                  onChange: (e) => {
                    onChange(e);
                    setCountryListVisible(true);
                  }
                })}
                value={location}
                onClick={() => setCountryListVisible(!countryListVisible)}
                error={errors.location}
              />
              <div className={`datalistOfCountries ${countryListVisible ? "" : "hidden"}`}>
                {
                  Object.keys(countries).map((value, index) => <div className="datalistSelect" key={index} 
                  onClick={() => {
                    console.log(value);
                    setFormData({...formData, country: value, location: value, phoneMask: countries[value].code});
                    setValue("phoneMask", countries[value].code);
                    setValue("location", value);
                    trigger(Object.keys(touchedFields));
                    setCountryListVisible(false);
                  }}>
                    {value}
                    <img className="countriesSelectArrow" src={selectArrow}></img>
                  </div>)
                }
              </div>
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
              <ErrorInput
                className="authFieldInput"
                type="text"
                placeholder="Login"
                /* name="login" */
                aria-invalid={!!errors.login + ""}
                {...reghook("login", useHowLogin ? {
                  required: "Empty field", 
                  maxLength: 320, 
                  minLength: 1, 
                  pattern: /.+/gi/* /^[a-z0-9\.\$\%\#\,\-\+\=\_\(\)\{\}\!\"\'\|\;\:\<\>]+@[a-z0-9]+\.[a-z0-9]+$/i */,
                  onChange: onChange
                } : { 
                  required: "Empty field", 
                  maxLength: 30, 
                  minLength: 1, 
                  pattern: /^[a-z0-9]+$/i,
                  onChange: onChange
                })}
                value={useHowLogin ? email : login}
                disabled={useHowLogin}
                error={errors.login}
              />
            </div>
            <div className="authField">
              <span className="authFieldName">Make a your Password</span>
              <span className="authFieldSubName">At least 6 characters</span>
              <input
                className="authFieldInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                /* name="password" */
                aria-invalid={!!errors.password + ""}
                {...reghook("password", { 
                  required: "Empty field", 
                  minLength: {value: 6, message: "Password less than 6"},
                  onChange: onChange
                })}
                value={password}
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="regShowPassword"
                src={showPasswordImage}
              />
              <ErrorMessage error={errors.password} message={errors.password && errors.password.message} />
            </div>
            <div className="authField">
              <span className="authFieldName">Repeat a Password</span>
              <input
                className="authFieldInput"
                type={showPassword2 ? "text" : "password"}
                placeholder="Password"
                /* name="password2" */
                aria-invalid={!!errors.password2 + ""}
                {...reghook("password2", { 
                  required: "Empty field", 
                  validate: {
                    value: (value) => password == value || "Password mismatch"
                  },
                  onChange: onChange
                })
                }
                value={password2}
              />
              <img
                onClick={() => setShowPassword2(!showPassword2)}
                className="regShowPassword"
                src={showPasswordImage}
              />
              <ErrorMessage error={errors.password2} message={errors.password2 && errors.password2.message} />
            </div>
            <div className="authField">
              <span className="authFieldName">Enter your Email</span>
              {/* <input className="authFieldInput" placeholder="Email"></input> */}
              <ErrorInput
                className="authFieldInput"
                type="email"
                placeholder="Email"
                /* name="email" */
                aria-invalid={!!errors.email + ""}
                {...reghook("email", { 
                  required: "Empty field", 
                  maxLength: {value: 320, message: "Email greater than 320"}, 
                  minLength: 1, 
                  pattern: /^[a-z0-9\.\$\%\#\,\-\+\=\_\(\)\{\}\!\"\'\|\;\:\<\>]+@[a-z0-9]+\.[a-z0-9]+$/i,
                  onChange: (e) => {
                    onChange(e);
                    if(useHowLogin){
                      setValue("login", e.target.value);
                      trigger("login");
                    }
                  }
                })}
                value={email}
                error={errors.email}
              />
              <div className="checkBoxDiv">
                <input type="checkbox"
                  name="useHowLogin"
                  onChange={(e) => {
                    setFormData({ ...formData, useHowLogin: e.target.checked });
                  }}
                />
                <span>Use how login</span>
              </div>
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
