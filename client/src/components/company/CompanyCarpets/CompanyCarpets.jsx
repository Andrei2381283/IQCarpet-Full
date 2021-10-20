import React from "react";

import "./CompanyCarpets.css";

import FilterMenuImage from "../../../img1/filterMenuImage_24.png";
import CarpetsSwipeLeftImage from "../../../img1/carpetsSwipeLeft.png";
import CarpetsSwipeRightImage from "../../../img1/carpetsSwipeRight.png";
import CarpetCard from "../../carpetCard/CarpetCard";
import { Link } from "react-router-dom";

const CompanyCarpets = () => {
  return (
    <div className="companyCarpetsBlock">
      <div className="companyCarpetsHeaderDiv">
        <h2 className="companyCarpetsHeader">Our caprets (100+)</h2>
        <img className="companyCarpetsFilter" src={FilterMenuImage} />
        <Link className="companyCarpetsAll" to="/carpets">
          View all
        </Link>
      </div>
      <div className="carpetListContent">
        <button className="carpetsSwipeButton carpetsSwipeButtonL">
          <img
            className="carpetsSwipeButtonImage"
            src={CarpetsSwipeLeftImage}
          />
        </button>
        <div className="carpetList">
          <div className="moreInfoCarpets">
            {/* moreInfoCarpets.scroll(268*(elementIndex - 0.5) - moreInfoCarpets.width/2, 0) */}
            <CarpetCard about="Machine, 500x250 sm(16,4x8,20 ft), modern, wool, rectangular, $145" />
            <CarpetCard about="Machine, 500x250 sm(16,4x8,20 ft), modern, wool, rectangular, $145" />
            <CarpetCard about="Machine, 500x250 sm(16,4x8,20 ft), modern, wool, rectangular, $145" />
            <CarpetCard about="Machine, 500x250 sm(16,4x8,20 ft), modern, wool, rectangular, $145" />
            <CarpetCard about="Machine, 500x250 sm(16,4x8,20 ft), modern, wool, rectangular, $145" />
          </div>
          <div className="carpetsImages">
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage1.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage2.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage4.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage5.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage4.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage5.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
            <Link to="" className="carpetImage">
              <img src="images/carpetImage3.png" />
            </Link>
          </div>
        </div>
        <button className="carpetsSwipeButton carpetsSwipeButtonR">
          <img
            className="carpetsSwipeButtonImage"
            src={CarpetsSwipeRightImage}
          />
        </button>
      </div>
    </div>
  );
};

export default CompanyCarpets;
