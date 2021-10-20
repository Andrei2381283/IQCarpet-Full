import React from "react";
import { Link } from "react-router-dom";

import "./CarpetCard.css";

const CarpetCard = ({img = "", about = ""}) => {
    return (
        <Link to="" className="carpetCardDiv">
            <img className="carpetCardImage" src={img} />
            <span className="carpetCardHeader">About this carpet</span>
            <span className="carpetCardText">{about}</span>
        </Link>
    )
}

export default CarpetCard;