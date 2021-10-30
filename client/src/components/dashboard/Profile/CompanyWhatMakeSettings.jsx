import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCarpet } from "../../../actions/carpet";

const initialState = {
  nameCarpet: "",
  binding: "",
  sizeTo: "",
  category: "",
  forms: "",
  country: "",
  material: "",
  price: ""
};

const CompanyWhatMakeSettings = ({ data = {}, createCarpet }) => {
  const [formData, setFormData] = useState(Object.assign(initialState, data));

  const {
    nameCarpet,
    binding,
    sizeTo,
    category,
    forms,
    country,
    material,
    price
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createCarpet({
      nameCarpet,
      workCarpet: binding,
      size: sizeTo,
      category,
      formCarpet: forms,
      country,
      carpetMaterial: material,
      price
    });
  };

  return (
    <form onSubmit={onSubmit} className="companyWhatMakeBlock">
      <h2 className="companyWhatMakeHeader">What we make</h2>
      <div className="companyWhatMakeContent">
        <div className="companyMakeDiv">
          <div className="companyMakeCategory1">
            <span className="companyMakeCategHeader">Name Carpet</span>
            <input
              className="companyMakeCategText profInfoInput"
              value={nameCarpet}
              name="nameCarpet"
              onChange={onChange}
            />
          </div>
          <div className="companyMakeCategory1">
            <span className="companyMakeCategHeader">Type of binding</span>
            <input
              className="companyMakeCategText profInfoInput"
              value={binding}
              name="binding"
              onChange={onChange}
            />
          </div>
          <div className="companyMakeCategory1 companyMakeCategory2">
            <span className="companyMakeCategHeader">Size</span>
            {/* <span className="companyMakeCategText profInfoInput">{sizeFrom}</span> */}
            {/* <input
              className="companyMakeCategText profInfoInput"
              value={sizeFrom}
              name="sizeFrom"
              onChange={onChange}
            /> */}
            {/* <span className="companyMakeCategText profInfoInput">{sizeTo}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={sizeTo}
              name="sizeTo"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="companyMakeDiv">
          <div className="companyMakeCategory1">
            <span className="companyMakeCategHeader">Category</span>
            {/* <span className="companyMakeCategText profInfoInput">{category}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={category}
              name="category"
              onChange={onChange}
            />
          </div>
          <div className="companyMakeCategory1 companyMakeCategory2">
            <span className="companyMakeCategHeader">Form</span>
            {/* <span className="companyMakeCategText profInfoInput">{forms}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={forms}
              name="forms"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="companyMakeDiv">
          <div className="companyMakeCategory1">
            <span className="companyMakeCategHeader">Country</span>
            {/* <span className="companyMakeCategText profInfoInput">{country}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={country}
              name="country"
              onChange={onChange}
            />
          </div>
          <div className="companyMakeCategory1 companyMakeCategory2">
            <span className="companyMakeCategHeader">Material</span>
            {/* <span className="companyMakeCategText profInfoInput">{material}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={material}
              name="material"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="companyMakeDiv">
          <div className="companyMakeCategory1">
            <span className="companyMakeCategHeader">Price</span>
            {/* <span className="companyMakeCategText profInfoInput">{price}</span> */}
            <input
              className="companyMakeCategText profInfoInput"
              value={price}
              name="price"
              onChange={onChange}
            />
          </div>
          <div className="companyMakeCategory1 makeOrderDiv">
            <button className="companyMakeOrderButton">Make an Order</button>
          </div>
        </div>
      </div>
    </form>
  );
};

CompanyWhatMakeSettings.propTypes = {
  createCarpet: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createCarpet })(
  CompanyWhatMakeSettings
);
