import React, { useEffect, useState } from "react";

import "./Filter.css";

const Filter = ({ children = "" }) => {
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    var shadow = document.getElementById("shadow");
    console.log(shadow);
    if (!shadow) return;
    filterVisible
      ? shadow.classList.remove("hidden")
      : shadow.classList.add("hidden");
  }, [filterVisible]);

  return (
    <div className="filterBlock" visible={filterVisible.toString()}>
      <button
        id="filterOpenButton"
        onClick={() => setFilterVisible(!filterVisible)}
      />
      <span className="filterHeader">Filter</span>
      {children}
      <button className="filterSearchButton">Search</button>
    </div>
  );
};

export default Filter;
