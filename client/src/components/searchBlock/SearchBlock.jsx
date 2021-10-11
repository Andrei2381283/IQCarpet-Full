import React from "react";

import "./SearchBlock.css";

const SearchBlock = ({ headerName }) => {
  return (
    <div className="searchBlock">
      <span className="searchHeader">{headerName}</span>
      <input className="searchInput" placeholder="Search" />
    </div>
  );
};

export default SearchBlock;
