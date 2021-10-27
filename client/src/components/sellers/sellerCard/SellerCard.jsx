import React from "react";
import { Link } from "react-router-dom";

import "./SellerCard.css";

const SellerCard = ({ img, name, country, profilePrice, link }) => {
  return (
    <div className="sellerCardBlock">
      <img className="sellerCardImg" src={img} />
      <span className="sellerCardName">{name}</span>
      <span className="sellerCardCountry">{country}</span>
      <span className="sellerCardPrice">{profilePrice}</span>
      <Link to={link} className="sellerCardButton">
        Open a profile
      </Link>
    </div>
  );
};

export default SellerCard;
