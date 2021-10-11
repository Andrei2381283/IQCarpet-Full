// Import Engine
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HowItWorksElement from "../howItWorks/HowItWorks";
import BackButton from "../backButton/BackButton";

import "./HowItWorksPage.css";

const HowItWorksPage = () => (
  <Fragment>
    <BackButton className="hiw_backButtonDiv" />
    <HowItWorksElement />
    <div className="newOrderButton">
      <Link to="/newOrder">
        <button>Make an Order</button>
      </Link>
    </div>
  </Fragment>
);

export default HowItWorksPage;
