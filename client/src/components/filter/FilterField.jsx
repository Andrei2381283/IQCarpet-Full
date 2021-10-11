import React, { Fragment } from "react";

const FilterField = ({ name, params = [] }) => {
  return (
    <Fragment>
      <span className="filterFieldHeader">{name}</span>
      {params.map((value, index) => (
        <div key={index} className="filterCheckBox">
          <input type="checkbox" />
          {value}
        </div>
      ))}
    </Fragment>
  );
};

export default FilterField;
