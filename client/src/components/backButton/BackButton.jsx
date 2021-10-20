import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

const BackButton = ({ className = "", link }) => (
  <Link to={link} className={"backButton " + className}>
    <button>Back</button>
  </Link>
);

export default BackButton;
