import React from "react";
import CarpetForms from "./CarpetForms/CarpetForms";

import "./CompanyWhatMake.css";

const CompanyWhatMake = ({ data = {} }) => {

    const {binding, sizeFrom, sizeTo, category, forms, country, material, price} = data;

    return (
        <div className="companyWhatMakeBlock">
            <h2 className="companyWhatMakeHeader">What we make</h2>
            <div className="companyWhatMakeContent">
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Type of binding</span>
                        <span className="companyMakeCategText">{binding}</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Size</span>
                        <span className="companyMakeCategText">{sizeFrom}</span>
                        <span className="companyMakeCategText">{sizeTo}</span>
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Category</span>
                        <span className="companyMakeCategText">{category}</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Form</span>
                        <span className="companyMakeCategText">{forms}</span>
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Country</span>
                        <span className="companyMakeCategText">{country}</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Material</span>
                        <span className="companyMakeCategText">{material}</span>
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Price</span>
                        <span className="companyMakeCategText">{price}</span>
                    </div>
                    <div className="companyMakeCategory1 makeOrderDiv">
                        <button className="companyMakeOrderButton">Make an Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyWhatMake;