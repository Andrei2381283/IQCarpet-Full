// Import Engine
import React from "react";

// Import Styles
import "./SearchBlock.css";

const SearchBlock = ({ headerName, onChange, value }) => {
  return (
    <div className="searchBlock">
      <span className="searchHeader">{headerName}</span>
      <input
        onChange={onChange}
        value={value}
        name="value"
        className="searchInput"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBlock;
