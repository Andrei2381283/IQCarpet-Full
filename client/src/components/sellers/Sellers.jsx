// Import Engine
import React, { Fragment } from "react";

import "./Sellers.css";
import SellerCardTestIcon from "../../img1/sellerCardTestIcon.png";

import SearchBlock from "../searchBlock/SearchBlock";
import BackButton from "../backButton/BackButton";
import Filter from "../filter/Filter";
import SumField from "../filter/SumField";
import FilterField from "../filter/FilterField";
import SellerCard from "./sellerCard/SellerCard";
import { Link } from "react-router-dom";

const Sellers = () => {
  return (
    <Fragment>
      <SearchBlock headerName="Sellers" />
      <BackButton />
      <span className="sellersHeader">All sellers</span>
      <div className="sellersContentDiv">
        <Filter>
          <SumField />
          <FilterField name="Type of binding" params={["Machine", "Manual"]} />
          <FilterField name="Category" params={["Modern", "Eastern"]} />
          <FilterField name="Country" params={["Modern", "Eastern"]} />
          <FilterField
            name="Material"
            params={["Woole", "Silk", "Cotton", "Jute"]}
          />
          <FilterField
            name="Form"
            params={["Rectangle", "Square", "Oval", "Circle"]}
          />
        </Filter>
        <div className="sellersListDiv">
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
          <SellerCard
            img={SellerCardTestIcon}
            name="CaprePerfect"
            country="India"
            price="From $24 to $32"
            link="."
          />
        </div>
      </div>
      <div className="sellersPagesDiv">
        <Link to="">1</Link>
      </div>
    </Fragment>
  );
};

export default Sellers;
