import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

import "./PasswordRecovery.css";

const PasswordRecovery = () => {
  const hookForm = useForm();
  const {handleSubmit, setValue, trigger, formState: { errors } } = hookForm;
  const reghook = hookForm.register;

  const codeSended = false;

  const onSubmit = () => {

  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="authorizingBlock">
        <span className="passRecoveryHeader">Password Recovery</span>
        <div className="authField">
          <span className="authFieldName">Enter Your Login or Email </span>
          <input
            className="authFieldInput"
            placeholder="Login or Email"
            aria-invalid={!!errors.login + ""}
            {...reghook("login", { required: true, maxLength: 320, minLength: 1, pattern: /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$|^[a-z0-9]+$/i})}
            onChange={(e) => {
              /* setFormData({ ...formData, [e.target.name]: e.target.value }); */
              setValue(e.target.name, e.target.value);
              trigger(e.target.name);
            }}
          />
          <ErrorMessage error={errors.login} message={"Wrong"} />
        </div>
        <span className="passRecInfoCode">
          We will send to you a confirmation code
        </span>
        <div className="submitButtonDiv">
          <button className="submitButton">Confirm</button>
        </div>
      </div>
      <div className="authorizingBlock passRecoveryBlock">
        <div className="authField confirmCodeField">
          <span className="authFieldName">Enter a confirmation code</span>
          <input
            className="authFieldInput confirmCodeInput"
            placeholder="Code"
          ></input>
          <span className="repeatSending" sended={codeSended.toString()}>
            Repeat sending
          </span>
          <span className="sendTimer" sended={codeSended.toString()}>
            2:34
          </span>
        </div>
        <div className="submitButtonDiv">
          <button type="submit" className="submitButton">Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default PasswordRecovery;
