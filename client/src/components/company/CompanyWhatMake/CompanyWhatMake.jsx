import React from "react";
import CarpetForms from "./CarpetForms/CarpetForms";

import "./CompanyWhatMake.css";

const CompanyWhatMake = () => {
    return (
        <div className="companyWhatMakeBlock">
            <h2 className="companyWhatMakeHeader">What we make</h2>
            <div className="companyWhatMakeContent">
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Type of binding</span>
                        <span className="companyMakeCategText">Machine, manual</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Size</span>
                        <span className="companyMakeCategText">From 40x40 to 300x300 in sm</span>
                        <span className="companyMakeCategText">From 1,3x1,3 to 9,8x9,8 in ft</span>
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Category</span>
                        <span className="companyMakeCategText">Modern, eastern</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Form</span>
                        <CarpetForms forms={["Rectangle", "Square", "Circle", "Oval"]} />
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Country</span>
                        <span className="companyMakeCategText">India</span>
                    </div>
                    <div className="companyMakeCategory1 companyMakeCategory2">
                        <span className="companyMakeCategHeader">Material</span>
                        <span className="companyMakeCategText">Wool, silk, cotton, jute</span>
                    </div>
                </div>
                <div className="companyMakeDiv">
                    <div className="companyMakeCategory1">
                        <span className="companyMakeCategHeader">Price</span>
                        <span className="companyMakeCategText">From $15 to $400</span>
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