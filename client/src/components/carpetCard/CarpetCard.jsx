import React from "react";
import { Link } from "react-router-dom";

import "./CarpetCard.css";
import NoPhoto from "../../img11/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";

const CarpetCard = ({ img = "", about = "" }) => {
  return (
    <Link to="" className="carpetCardDiv">
      <img className="carpetCardImage" src={NoPhoto} />
      <span className="carpetCardHeader">About this carpet</span>
      <span className="carpetCardText">{about.nameCarpet}</span>
    </Link>
  );
};

export default CarpetCard;
