import React from "react";

import "./NewPassword.css";

const NewPassword = () => {
  return (
    <div className="authorizingBlock">
      <span className="newPassHeader">Password Recovery</span>
      <div className="authField newPassBlock1">
        <span className="authFieldName">Make a new Password</span>
        <input
          className="authFieldInput"
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div className="authField newPassBlock2">
        <span className="authFieldName">Repeat a new Password</span>
        <input
          className="authFieldInput"
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div className="submitButtonDiv">
        <button className="submitButton">Done</button>
      </div>
    </div>
  );
};

export default NewPassword;
