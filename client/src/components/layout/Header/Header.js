// Import Engine
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

import HeaderMobileMenu from "./HeaderMobileMenu";

// Import Styles
import iQcarpetLogo from "../../../img1/iQcarpet.png";
import "./Header.css";

const Header = ({ auth: { isAuthenticated, user }, logout }) => {
  const authLinks = (
    <Link className="headerUserMenu" to="/dashboard">
      <span className="headerUserName">{user && user.login}</span>
      <img className="headerUserImage" src="" />
      <div className="headerUserArrow" src="" />
    </Link>
  );

  const guestLinks = (
    <Fragment>
      {/* <Link to="/profiles">Developers</Link> */}

      <Link to="/register" className="signupbutton">
        Sign Up
      </Link>
      <Link to="/login" className="loginbutton">
        Log In
      </Link>
    </Fragment>
  );

  return (
    <nav className="header">
      <div className="headerLeftSide">
        <img className="headerLogo" src={iQcarpetLogo} />

        <Link to="/" className="headerChapter">
          Home
        </Link>
        <Link to="/sellers" className="headerChapter">
          Sellers
        </Link>
        <Link to="/how-it-works" className="headerChapter">
          How it works
        </Link>
        <Link to="/support" className="headerChapter">
          Support
        </Link>
      </div>
      <div className="headerCentre">
        <HeaderMobileMenu />
      </div>
      <div className="headerRightSide">
        {isAuthenticated ? authLinks : guestLinks}
        <select className="languageSelection">
          <option>ENG</option>
        </select>
      </div>
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
