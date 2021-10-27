// Import Engine
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSellersCards } from "../../actions/profile";

// Import Components
import SearchBlock from "../searchBlock/SearchBlock";
import BackButton from "../backButton/BackButton";
import Filter from "../filter/Filter";
import SumField from "../filter/SumField";
import FilterField from "../filter/FilterField";
import SellerCard from "./sellerCard/SellerCard";
import Spinner from "../layout/Spinner";

// Import Styles
import "./Sellers.css";
import SellerCardTestIcon from "../../img1/sellerCardTestIcon.png";

const Sellers = ({ getSellersCards, profile: { profiles, loading } }) => {
  useEffect(() => {
    getSellersCards();
  }, [getSellersCards]);

  const [input, setInput] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    profiles = profiles.filter((i) => {
      return i.companyName.toLowerCase().match(input);
    });
  }

  return (
    <Fragment>
      <SearchBlock onChange={onChange} value={input} headerName="Sellers" />
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
        {loading ? (
          <Spinner />
        ) : (
          <div className="sellersListDiv">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <SellerCard
                  key={profile._id}
                  img={SellerCardTestIcon}
                  name={profile.companyName}
                  country={profile.location}
                  profilePrice={profile.carpets.length}
                  link={`/company/${profile.user}`}
                />
              ))
            ) : (
              <h1>No Profiles Found...</h1>
            )}
          </div>
        )}
      </div>
      <div className="sellersPagesDiv">
        <Link to="">1</Link>
      </div>
    </Fragment>
  );
};

Sellers.propTypes = {
  getSellersCards: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getSellersCards })(Sellers);
