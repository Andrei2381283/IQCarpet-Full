// Import Engine
import React from 'react';

import './HomePageIntroBlock.css';

import HomePageIntroImage from '../../../img1/homepageIntroImage.png';
import HomePageIntroImageM from '../../../img1/homepageIntroImageM.png';
import { Link } from 'react-router-dom';

function HomePageIntroBlock() {
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
          <Link to="/register" className="registerBuyer">
            Register as a buyer
          </Link>
          <Link to="/register" className="registerSeller">
            Register as a seller
          </Link>
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

export default HomePageIntroBlock;
