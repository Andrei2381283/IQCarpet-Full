import React, { Fragment } from "react";

import "./PasswordRecovery.css";

const PasswordRecovery = () => {
  const codeSended = false;

  return (
    <Fragment>
      <div className="authorizingBlock">
        <span className="passRecoveryHeader">Password Recovery</span>
        <div className="authField">
          <span className="authFieldName">Enter Your Login or Email </span>
          <input
            className="authFieldInput"
            placeholder="Login or Email"
          ></input>
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
          <button className="submitButton">Confirm</button>
        </div>
      </div>
    </Fragment>
  );
};

export default PasswordRecovery;
