// Import Engine
import React from "react";
import { Link } from "react-router-dom";

// Import Styles
import iQcarpetLogo from "../../../img1/iQcarpet.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent1">
        <div className="footerContent1Block1">
          <div className="footerHeaderDiv">
            <img className="footerHeaderImage" src={iQcarpetLogo}></img>
            <p className="footerText">
              Maecenas nec rutrum odio. Sed scelerisque urna eget augue laoreet,
              eget ultrices nisi aliquet.
            </p>
            <p className="footerSubText">Connect with community</p>
          </div>
          <div className="footerCommunityLinks">
            <a className="footerCommunityLink footerCommunityLink1" href=""></a>
            <a className="footerCommunityLink footerCommunityLink2" href=""></a>
            <a className="footerCommunityLink footerCommunityLink3" href=""></a>
          </div>
        </div>
        <div className="footerContent1Block2">
          <p className="signUpForMessages">Sign up for our message</p>
          <div className="sendEmailDiv">
            <input
              className="signUpForMessagesEmail"
              placeholder="Enter your e-mail"
            ></input>
            <button className="sendEmailButton">SEND</button>
          </div>
        </div>
      </div>
      <div className="footerLine"></div>
      <div className="footerContent2">
        <div className="footerContent2Block1">
          {/* TODO: Разобраться с тем, чтобы при переходах из Footer страница полностью поднималась вверх */}
          <Link to="/" className="footerNavigationText">
            Home
          </Link>
          <Link to="/sellers" className="footerNavigationText">
            Sellers
          </Link>
          <Link to="/how-it-works" className="footerNavigationText">
            How it works
          </Link>
          <Link to="/support" className="footerNavigationText">
            Support
          </Link>
        </div>
        <div className="footerContent2Block2">
          <span className="companyEmail">Meil@kom.iuo</span>
          <span className="copyrights">© 2021 Rochacoin</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
