import React from "react";
import "../styles/ProductsNavBar.css";
import zevi_logo from "../themes/SVGs/zevi_logo_svg.svg";
import { RiSearch2Line } from "react-icons/ri";

const ProductsNavBar = () => {
  return (
    <div className="products-navbar">
      <div></div>
      <form className="input-container">
        <input type="text" className="home-input" placeholder="Search..." />
        <button className="search-icon-container">
          <RiSearch2Line size="24" />
        </button>
      </form>
      <img src={zevi_logo} alt="" />
    </div>
  );
};

export default ProductsNavBar;
