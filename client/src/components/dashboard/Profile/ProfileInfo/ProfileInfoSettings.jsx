// Import Engine
import React, { useState, useEffect, Fragment, createRef } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  editUserProfile,
  editUserProfileAndUploadAvatar,
  loadUser
} from "../../../../actions/auth";

// Import Styles
import "./ProfileInfo.css";
import ButtonBackArrow from "../../../../img1/buttonBackArrow.png";
import DefaultAvatar from "../../../../img11/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
import Spinner from "../../../layout/Spinner";
import ErrorMessage from "../../../auth/ErrorMessage";
import ErrorInput from "../../../auth/ErrorInput";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const initialState = {
  fullname: "",
  birthDay: "1",
  birthMonth: "1",
  birthYear: "2021",
  email: "",
  location: "",
  phoneNumber: "",
  login: "",
  avatar: ""
};

const ProfileInfoSettings = ({
  auth: { user, loading },
  loadUser,
  editUserProfile,
  editUserProfileAndUploadAvatar,
  mobileInfoHidden = true,
  setMobileInfoHidden,
  logout,
  iAmSeller,
  openProfileSettings,
  displayEditProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const avatarForm = useForm({ mode: "all" });

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    reset,
    formState: { submitCount, touchedFields, errors, isDirty }
  } = useForm({ mode: "all", defaultValues: formData });

  useEffect(() => {
    if (avatarForm.getValues("avatar").length > 0)
      avatarForm.handleSubmit(onSubmitFile)();
  }, [avatarForm.watch("avatar")]);

  useEffect(() => {
    if (!user) loadUser();
    if (!loading && user) {
      const userData = { ...initialState };
      console.log({ ...initialState });
      for (const key in user) {
        if (key in userData) userData[key] = user[key];
      }
      setFormData(userData);
      reset(userData);
    }
  }, [loading, loadUser, user]);

  const {
    fullname,
    birthDay,
    birthMonth,
    birthYear,
    email,
    location,
    phoneNumber,
    login,
    avatar
  } = formData;

  const [avatarIsLoading, setAvatarLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    /* e.preventDefault(); */
    console.log(formData);
    console.log(editUserProfile);
    if (isDirty) editUserProfile(formData);
  };

  const onSubmitFile = async (e) => {
    console.log(e.avatar[0]);

    const data = new FormData();
    data.append("file", e.avatar[0]);
    setAvatarLoading(true);
    editUserProfileAndUploadAvatar(data);
  };

  useEffect(() => {
    setAvatarLoading(false);
  }, [avatar]);

  return (
    <Fragment>
      <div className="profileInfo" active={!mobileInfoHidden + ""}>
        <form
          className="profileImageDiv"
          onSubmit={avatarForm.handleSubmit(onSubmitFile)}
          action="#"
          encType="multipart/form-data"
        >
          {!avatarIsLoading && (
            <div className="donloadImgBg">Click for download image</div>
          )}
          {avatarIsLoading ? (
            <Spinner />
          ) : avatar && avatar?.url ? (
            <img className="profileImage" src={avatar?.url} alt="No Photo" />
          ) : (
            <img className="profileImage" src={DefaultAvatar} alt="No Photo" />
          )}
          <input
            type="file"
            id="file"
            {...avatarForm.register("avatar", {
              required: true,
              validate: {
                fileType: (files) =>
                  files[0]?.type == "image/jpeg" ||
                  files[0]?.type == "image/png" ||
                  "Image type can be only PNG and JPEG",
                fileSize: (files) =>
                  files[0]?.size / 1024 / 1024 <= 10 || "Image size > 10mb"
              }
            })}
            accept="image/jpeg,image/png"
          />
          {/* <input type="submit" value="Save" /> */}
          <ErrorMessage
            error={avatarForm.formState.errors.avatar}
            message={avatarForm.formState.errors.avatar?.message}
          />
        </form>
        <form className="profileInfoContent" onSubmit={handleSubmit(onSubmit)}>
          <div className="nameAndButtonsDiv">
            <div className="nameAndRoleDiv">
              {/* <span className="profileNameText">{fullname}</span> */}
              <ErrorInput
                className="profileNameText profInfoInput"
                type="text"
                placeholder="Name"
                /* name="fullname" */
                aria-invalid={!!errors.fullname + ""}
                {...register("fullname", {
                  required: "Empty field",
                  maxLength: { value: 30, message: "Length more than 30" },
                  minLength: 1,
                  pattern: /^[a-z0-9]+(|\s([a-z0-9]+)|-([a-z0-9]+))$/i,
                  onChange: onChange
                })}
                value={fullname}
                errorStyle={{ marginTop: "-24px", marginLeft: "-6px" }}
                error={errors.fullname}
              />
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
              {!iAmSeller && (
                <div className="profMoreInfoBlock">
                  <span className="profInfoHeader">Birthday</span>
                  <div
                    className="profBirthDiv" /* aria-invalid={(currentYear - birthYear < 18 && (submitCount > 0 || dateDivTouched)) + ""} */ /* onClick={() => setDateTouched(true)} */
                  >
                    <select
                      name="birthDay"
                      className="profBirthSelect authFieldSelect birthdaySelect birthdaySelectDay"
                      value={birthDay}
                      onChange={onChange}
                    >
                      {[
                        ...(function* () {
                          for (
                            var k = 1;
                            k <= new Date(birthYear, birthMonth, 0).getDate();
                            k++
                          ) {
                            yield <option key={k}>{k}</option>;
                          }
                        })()
                      ]}
                    </select>
                    <select
                      name="birthMonth"
                      className="profBirthSelect authFieldSelect birthdaySelect birthdaySelectMonth"
                      value={birthMonth}
                      onChange={onChange}
                    >
                      {monthList.map((value, index) => (
                        <option value={index + 1} key={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                    <select
                      name="birthYear"
                      className="profBirthSelect authFieldSelect birthdaySelect birthdaySelectYear"
                      value={birthYear}
                      onChange={onChange}
                    >
                      {[
                        ...(function* () {
                          for (
                            var k = new Date().getFullYear();
                            k >= 1920;
                            k--
                          ) {
                            yield <option key={k}>{k}</option>;
                          }
                        })()
                      ]}
                    </select>
                  </div>
                </div>
              )}
              <div
                className={`profMoreInfoBlock ${
                  !iAmSeller && "profMoreInfoBlock2"
                } ${
                  iAmSeller
                    ? "profMobileHiddenBlock1"
                    : "profMobileHiddenBlock2"
                }`}
                isseller={iAmSeller + ""}
                active={!mobileInfoHidden + ""}
              >
                <span className="profInfoHeader">E-mail</span>
                <ErrorInput
                  className="profInfoInput"
                  type="text"
                  placeholder="Email"
                  aria-invalid={!!errors.email + ""}
                  {...register("email", {
                    required: "Empty field",
                    maxLength: {
                      value: 320,
                      message: "Email greater than 320"
                    },
                    minLength: 1,
                    pattern:
                      /^[a-z0-9\.\$\%\#\,\-\+\=\_\(\)\{\}\!\"\'\|\;\:\<\>]+@[a-z0-9]+\.[a-z0-9]+$/i,
                    onChange: onChange
                  })}
                  value={email}
                  error={errors.email}
                />
                <div className="profEmailHowLogin">
                  <input type="checkbox" />
                  <span>Use how login</span>
                </div>
              </div>
            </div>
            <div className="profileMoreInfoDiv" isseller={iAmSeller + ""}>
              {!iAmSeller && (
                <div className="profMoreInfoBlock">
                  <span className="profInfoHeader">Country</span>
                  <ErrorInput
                    className="profInfoInput"
                    type="text"
                    placeholder="Sity & Country"
                    aria-invalid={!!errors.location + ""}
                    {...register("location", {
                      required: "Empty field",
                      maxLength: 30,
                      minLength: 1,
                      pattern: /^[a-z0-9]+(|\s([a-z0-9]+)|-([a-z0-9]+))$/i,
                      onChange: onChange
                    })}
                    value={location}
                    error={errors.location}
                  />
                </div>
              )}
              <div
                className={`profMoreInfoBlock ${
                  !iAmSeller && "profMoreInfoBlock2"
                } ${
                  iAmSeller
                    ? "profMobileHiddenBlock2"
                    : "profMobileHiddenBlock1"
                }`}
                isseller={iAmSeller + ""}
                active={!mobileInfoHidden + ""}
              >
                <span className="profInfoHeader">Mobile number</span>
                <ErrorInput
                  className="profInfoInput"
                  type="text"
                  placeholder=""
                  aria-invalid={!!errors.phoneNumber + ""}
                  {...register("phoneNumber", {
                    required: "Empty field",
                    maxLength: { value: 12, message: "Length is not 12" },
                    minLength: { value: 12, message: "Length is not 12" },
                    pattern: /^\+[0-9]+$/i,
                    onChange: onChange
                  })}
                  value={phoneNumber}
                  error={errors.phoneNumber}
                />
              </div>
              <button
                type="submit"
                className="submitButton profileChangeButton"
                active={!mobileInfoHidden + ""}
                isseller={iAmSeller + ""}
              >
                Change Settings
              </button>
            </div>
            <div
              className="profileMoreInfoDiv passwordContentDiv"
              isseller={iAmSeller + ""}
              active={!mobileInfoHidden + ""}
            >
              <span className="profInfoHeader">Password</span>
              <input className="passwordText" readOnly value="* * * * * * *" />
              <button className="profChangePassButton">
                Change your Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

ProfileInfoSettings.propTypes = {
  auth: PropTypes.object.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  editUserProfileAndUploadAvatar: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  editUserProfile,
  editUserProfileAndUploadAvatar,
  loadUser
})(ProfileInfoSettings);
