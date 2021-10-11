// Import Engine
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

// Import Styles
import iQcarpetLogo from '../../../img1/iQcarpet.png';
import './Header.css';

const Header = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    // <ul>
    //   <li>
    //     <Link to="/profiles">Developers</Link>
    //   </li>
    //   <li>
    //     <Link to="/posts">Posts</Link>
    //   </li>
    //   <li>
    //     <Link to="/dashboard">
    //       <i className="fas fa-user" />{' '}
    //       <span className="hide-sm">Dashboard</span>
    //     </Link>
    //   </li>
    //   <li>
    //     <a onClick={logout} href="#!">
    //       <i className="fas fa-sign-out-alt" />{' '}
    //       <span className="hide-sm">Logout</span>
    //     </a>
    //   </li>
    // </ul>
    <div className="headerUserMenu">
      <Link to="/profiles">Developers</Link>
      <Link to="/dashboard">
        <i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
      </Link>
      <Link to="/posts">Posts</Link>
      <span className="headerUserName">Hannah_Montana</span>
      <img className="headerUserImage" src="" />
      <div className="headerUserArrow" src="" />
      <a onClick={logout} href="#!">
        <i className="fas fa-sign-out-alt" /> //{' '}
        <span className="hide-sm">Logout</span>{' '}
      </a>
    </div>
  );

  // const userMenu = (
  //   <div className="headerUserMenu">
  //     <span className="headerUserName">Hannah_Montana</span>
  //     <img className="headerUserImage" src="" />
  //     <div className="headerUserArrow" src="" />
  //   </div>
  // );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register" className="signupbutton">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="loginbutton">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    // <nav className="navbar bg-dark">
    //   <h1>
    //     <Link to="/">
    //       <i className="fas fa-code" /> DevConnector
    //     </Link>
    //   </h1>
    //   <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    // </nav>
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
        <select className="headerNavigation">
          <option>Home</option>
          <option>Sellers</option>
          <option>How it works</option>
          <option>Support</option>
          <option>My Profile</option>
          <option>Chats</option>
          <option>Terms of use</option>
          <option>Privacy Policy</option>
          <option>Help</option>
        </select>
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
