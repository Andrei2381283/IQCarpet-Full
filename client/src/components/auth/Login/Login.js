import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";
import AuthSwitchBar from "../AuthSwitchBar";
import { useForm } from "react-hook-form";
import ErrorInput from "../ErrorInput";

import "./Login.css";

const Login = ({ login, isAuthenticated }) => {
  const hookForm = useForm();
  const {handleSubmit, trigger, setValue, formState: { errors } } = hookForm;
  const reghook = (ref, options) => {
    return {...hookForm.register(ref, options), maxLength: (options.maxLength && (options.maxLength.value || options.maxLength)) || -1};
  }


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValue(e.target.name, e.target.value);
    trigger(e.target.name);
  }

  const onSubmit = (e) => {
    /* e.preventDefault(); */
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form className="authorizingBlock" onSubmit={handleSubmit(onSubmit)}>
        <AuthSwitchBar mode={2} />
        <div className="authField">
          <span className="authFieldName">Enter your Email or Login</span>
          {/* <input
            className="authFieldInput"
            placeholder="Email or Login"
          ></input> */}
          <ErrorInput
            className="authFieldInput"
            type="text"
            placeholder="Email Address"
            /* name="email" */
            aria-invalid={!!errors.email + ""}
            {...reghook("email", { required: "Empty field", maxLength: 320, minLength: 1, pattern: /^[a-z0-9\.\$\%\#\,\-\+\=\_\(\)\{\}\!\"\'\|\;\:\<\>]+@[a-z0-9]+\.[a-z0-9]+$|^[a-z0-9]+$/i})}
            value={email}
            onChange={onChange}
            error={errors.email}
          />
        </div>
        <div className="authField">
          <span className="authFieldName">Repeat a Password</span>
          {/* <input className="authFieldInput" placeholder=" Password"></input> */}
          <ErrorInput
            className="authFieldInput"
            type="password"
            placeholder="Password"
            /* name="password" */
            aria-invalid={!!errors.password + ""}
            {...reghook("password", { required: "Empty field",  minLength: 6})}
            value={password}
            onChange={onChange}
            error={errors.password}
          />
          <div className="loginLastField">
            <Link to="password-recovery" className="forgotPassword">
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
