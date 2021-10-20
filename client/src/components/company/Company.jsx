// Import Engine
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSellerCardByUserId } from "../../actions/profile";

// Import Components
import BackButton from "../backButton/BackButton";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CompanyWhatMake from "./CompanyWhatMake/CompanyWhatMake";
import CompanyCarpets from "./CompanyCarpets/CompanyCarpets";
import Spinner from "../layout/Spinner";

// Import Styles
import "./Company.css";

const CompanyProfile = ({
  getSellerCardByUserId,
  profile: { profile },
  match,
}) => {
  useEffect(() => {
    getSellerCardByUserId(match.params.id);
  }, [getSellerCardByUserId, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <BackButton link="/sellers" />
          <CompanyInfo profile={profile} />
          <CompanyWhatMake profile={profile} />
          <CompanyCarpets />
        </Fragment>
      )}
    </Fragment>
  );
};

CompanyProfile.propTypes = {
  getSellerCardByUserId: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getSellerCardByUserId })(
  CompanyProfile
);
