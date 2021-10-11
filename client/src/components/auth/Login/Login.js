import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

import "./Login.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form className="authorizingBlock" onSubmit={onSubmit}>
        <div className="authField">
          <span className="authFieldName">Enter your Email or Login</span>
          {/* <input
            className="authFieldInput"
            placeholder="Email or Login"
          ></input> */}
          <input
            className="authFieldInput"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="authField">
          <span className="authFieldName">Repeat a Password</span>
          {/* <input className="authFieldInput" placeholder=" Password"></input> */}
          <input
            className="authFieldInput"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
          <div className="loginLastField">
            <label className="checkBoxDiv">
              <input type="checkbox" />
              <span>Im a Seller</span>
            </label>
            <Link to="password_recovery" className="forgotPassword">
              Forgot your Password?
            </Link>
          </div>
        </div>
        <div className="submitButtonDiv">
          <button className="submitButton" type="submit">
            Go
          </button>
        </div>
      </form>
      <div className="loginLinksDiv">
        <div className="loginLinksBlock1">
          <div className="loginLinksLine"></div>
          <span className="loginLinksHeader">Or</span>
          <div className="loginLinksLine"></div>
        </div>
        <div className="loginLinksBlock2">
          <a className="loginLink"></a>
          <a className="loginLink"></a>
          <a className="loginLink"></a>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
