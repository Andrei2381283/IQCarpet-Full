import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  resetPasswordSendCode,
  resetPasswordConfirmCode
} from "../../../actions/auth";
import ErrorInput from "../ErrorInput";

import "./PasswordRecovery.css";

const PasswordRecovery = ({
  authConfirmCode,
  dataFormForResetPassword,
  resetPasswordSendCode,
  resetPasswordConfirmCode,
  history
}) => {
  const hookForm = useForm();
  const {
    handleSubmit,
    setValue,
    trigger,
    formState: { errors }
  } = hookForm;
  const reghook = (ref, options) => {
    return {...hookForm.register(ref, options), maxLength: (options.maxLength && (options.maxLength.value || options.maxLength)) || -1};
  }

  const codeSended = false;

  const [formData, setFormData] = useState({
    email: "",
    code: ""
  });

  const { email, code } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValue(e.target.name, e.target.value);
    trigger(e.target.name);
  };

  const onSubmit = async (e) => {
    /* e.preventDefault(); */
    console.log("Ok");
    resetPasswordSendCode({
      email
    });
  };

  const onSubmitCode = async (e) => {
    /* e.preventDefault(); */
    console.log("Ok");
    resetPasswordConfirmCode(
      { email: dataFormForResetPassword.email, code },
      history
    );
  };

  const formConfirmCode = (
    <form
      onSubmit={handleSubmit(onSubmitCode)}
      className="authorizingBlock passRecoveryBlock"
    >
      <div className="authField confirmCodeField">
        <span className="authFieldName">Enter a confirmation code</span>
        <ErrorInput
          onChange={onChange}
          value={code}
          className="authFieldInput confirmCodeInput"
          placeholder="Code"
          aria-invalid={!!errors.code + ""}
          {...reghook("code", {
            required: authConfirmCode ? "Empty field" : false,
            maxLength: {value: 4, message: "Code great than 6"},
            minLength: {value: 4, message: "Code less than 6"},
            pattern: /^[0-9]+$/i
          })}
          error={errors.code}
        />
        <span className="repeatSending" sended={codeSended.toString()}>
          Repeat sending
        </span>
        <span className="sendTimer" sended={codeSended.toString()}>
          2:34
        </span>
      </div>
      <div className="submitButtonDiv">
        <button type="submit" className="submitButton">
          Confirm
        </button>
      </div>
    </form>
  );

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="authorizingBlock">
        <span className="passRecoveryHeader">Password Recovery</span>
        <div className="authField">
          <span className="authFieldName">Enter Your Login or Email </span>
          <ErrorInput
            className="authFieldInput"
            placeholder="Login or Email"
            aria-invalid={!!errors.email + ""}
            {...reghook("email", {
              required: "Empty field",
              maxLength: 320,
              minLength: 1,
              pattern: /^[a-z0-9\.\$\%\#\,\-\+\=\_\(\)\{\}\!\"\'\|\;\:\<\>]+@[a-z0-9]+\.[a-z0-9]+$|^[a-z0-9]+$/i
            })}
            value={email}
            onChange={onChange}
            error={errors.email}
          />
        </div>
        <span className="passRecInfoCode">
          We will send to you a confirmation code
        </span>
        <div className="submitButtonDiv">
          <button type="submit" className="submitButton">Confirm</button>
        </div>
      </form>
      {authConfirmCode ? formConfirmCode : null}
    </Fragment>
  );
};

PasswordRecovery.propTypes = {
  resetPasswordSendCode: PropTypes.func.isRequired,
  resetPasswordConfirmCode: PropTypes.func.isRequired,
  authConfirmCode: PropTypes.bool,
  dataFormForResetPassword: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  authConfirmCode: state.auth.authConfirmCode,
  dataFormForResetPassword: state.auth.dataFormForResetPassword
});

export default connect(mapStateToProps, {
  resetPasswordSendCode,
  resetPasswordConfirmCode
})(PasswordRecovery);
