import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPassword } from "../../../actions/auth";
import ErrorInput from "../ErrorInput";

import "./NewPassword.css";

const NewPassword = ({
  dataFormForResetPassword,
  resetPassword,
  isAuthenticated
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

  const [formData, setFormData] = useState({
    password: "",
    password2: ""
  });

  const { password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValue(e.target.name, e.target.value);
    trigger(e.target.name);
  };

  const onSubmit = () => {
    /* e.preventDefault(); */
    console.log("Ok");
    resetPassword({
      email: dataFormForResetPassword.email,
      newPassword: password2,
      code: dataFormForResetPassword.code
    });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="authorizingBlock">
      <span className="newPassHeader">Password Recovery</span>
      <div className="authField newPassBlock1">
        <span className="authFieldName">Make a new Password</span>
        <ErrorInput
          className="authFieldInput"
          type="password"
          placeholder="Password"
          value={password}
          aria-invalid={!!errors.password + ""}
          {...reghook("password", { required: "Empty field", minLength: {value: 6, message: "Password less than 6"} })}
          onChange={onChange}
          error={errors.password}
        />
      </div>
      <div className="authField newPassBlock2">
        <span className="authFieldName">Repeat a new Password</span>
        <ErrorInput
          className="authFieldInput"
          type="password"
          placeholder="Password"
          value={password2}
          aria-invalid={!!errors.password2 + ""}
          {...reghook("password2", {
            required: "Empty field",
            validate: (value) => password == value || "Password mismatch"
          })}
          onChange={onChange}
          error={errors.password2}
        />
      </div>
      <div className="submitButtonDiv">
        <button type="submit" className="submitButton">
          Done
        </button>
      </div>
    </form>
  );
};

NewPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  dataFormForResetPassword: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  dataFormForResetPassword: state.auth.dataFormForResetPassword,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  resetPassword
})(NewPassword);
