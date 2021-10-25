// Import Engine
import React, { Fragment } from "react"

import HomePageIntroBlock from "./homePageIntroBlock/HomePageIntroBlock"
import HowItWorks from "../howItWorks/HowItWorks";
import HomePageWhyUsBlock from "./homePageWhyUsBlock/HomePageWhyUsBlock";
import HomePageAdvantagesBlock from "./homePageAdvantagesBlock/HomePageAdvantagesBlock";
import HomePageClientsBlock from "./homePageClientsBlock/HomePageClientsBlock";
import HomePageAdvantages2Block from "./homePageAdvantages2Block/HomePageAdvantages2Block";

// Import Styles
import "./HomePage.css";

function HomePage(){
    return (
        <Fragment>
            <HomePageIntroBlock />
            <HowItWorks />
            <HomePageWhyUsBlock />
            <HomePageAdvantagesBlock />
            <HomePageClientsBlock />
            <HomePageAdvantages2Block />
        </Fragment>
    )
}

export default HomePage