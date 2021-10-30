// Import Engine
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Import Styles
import "./HomePageIntroBlock.css";
import HomePageIntroImage from "../../../img1/homepageIntroImage.png";
import HomePageIntroImageM from "../../../img1/homepageIntroImageM.png";

function HomePageIntroBlock({ isAuthenticated, auth: { user } }) {
  return (
    <div className="homePageIntroBlock">
      <img className="homePageIntroImage1" src={HomePageIntroImage} />
      <div className="slogDiv">
        <span className="slogtext1">FIND YOUR BEST CARPET</span>
        <span className="slogtext1 slogtext2">
          USING OUR INNOVATIVE SEARCH PLATFORM
        </span>
        <img className="homePageIntroImage1M" src={HomePageIntroImageM} />
        <div className="registerButtonsDiv">
          {isAuthenticated ? (
            <h1>Welcome {user && user.login}</h1>
          ) : (
            <Fragment>
              <Link to="/register" className="registerBuyer">
                Register as a buyer
              </Link>
              <Link 
              to={{
                pathname: "/register",
                search: "?isseller=true"
              }} 
              className="registerBuyer">
                Register as a seller
              </Link>
            </Fragment>
          )}
        </div>
        <div className="authButtonsDiv">
          <Link to="/login" className="logInButton">
            Log In
          </Link>
          <Link to="/register" className="signUpButton">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

HomePageIntroBlock.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HomePageIntroBlock);
