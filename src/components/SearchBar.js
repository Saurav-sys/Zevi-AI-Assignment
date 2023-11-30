import React from "react";
import zevi_logo from "../themes/SVGs/zevi_logo_svg.svg";
import "../styles/SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={zevi_logo} alt="" />
    </div>
  );
};

export default SearchBar;
