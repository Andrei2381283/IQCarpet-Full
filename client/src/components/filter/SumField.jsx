import React, { Fragment } from "react";

const SumField = () => {
  return (
    <Fragment>
      <span className="filterFieldHeader sumFieldHeader">Sum($)</span>
      <div className="sumValuesDiv">
        <div className="sumFromDiv">
          <span>From</span>
          <input defaultValue="0" />
        </div>
        <div className="sumToDiv">
          <span>To</span>
          <input defaultValue="3000" />
        </div>
        {/* TODO: Double slider */}
      </div>
    </Fragment>
  );
};

export default SumField;
