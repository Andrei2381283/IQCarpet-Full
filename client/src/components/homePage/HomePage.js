import "./HomePage.css";

import { Fragment } from "react"
import HomePageIntroBlock from "./homePageIntroBlock/HomePageIntroBlock"
import HowItWorks from "../howItWorks/HowItWorks";
import HomePageWhyUsBlock from "./homePageWhyUsBlock/HomePageWhyUsBlock";
import HomePageAdvantagesBlock from "./homePageAdvantagesBlock/HomePageAdvantagesBlock";
import HomePageClientsBlock from "./homePageClientsBlock/HomePageClientsBlock";
import HomePageAdvantages2Block from "./homePageAdvantages2Block/HomePageAdvantages2Block";

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