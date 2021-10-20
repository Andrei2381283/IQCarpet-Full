import React from "react";
import { Link } from "react-router-dom";

const AuthSwitchBar = ({ mode = 1 }) => {
    return (
        <div className="authSwitchBar" mode={mode}>
            <Link className={mode == 1 ? "selectedSwitchButton" : ""} to="/register">Registration</Link>
            <Link className={mode == 2 ? "selectedSwitchButton" : ""} to="/login">Login</Link>
            <div />
        </div>
    )
}

export default AuthSwitchBar 