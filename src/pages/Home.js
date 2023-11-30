import React, { useState } from "react";
import "../pages/pages-styles/Home.css";
import { useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import home_bg from "../themes/PNGs/home_bg.png";
import SearchBar from "../components/SearchBar";
import { fetchLatestTrendData, fetchSuggestionData } from "../FakerData/FakerData.js";

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [latestTrendsData, setLatestTrendsData] = useState([]);
  const [suggestionData, setSuggestionData] = useState([]);
  const navigate = useNavigate();

  const getBoxProducts = async () => {
    setShowSuggestionBox((prev) => !prev);
    setLatestTrendsData(await fetchLatestTrendData());
    setSuggestionData(await fetchSuggestionData());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  const navigateToProductsPage = () => {
    navigate("/products");
  };

  return (
    <div style={{ backgroundImage: `url(${home_bg})` }} className="home">
      <SearchBar />
      <div className="home-content">
        <form className="input-container" onSubmit={(e) => onSubmitHandler(e)}>
          <input
            onClick={() => getBoxProducts()}
            type="text"
            className="home-input"
            placeholder="Search..."
          />
          <button className="search-icon-container">
            <RiSearch2Line size="24" />
          </button>
        </form>
        {showSuggestionBox && (
          <div className="latest-trend-and-suggestion-box">
            <div className="latest-trend-box">
              <div className="category-title">Latest Trends</div>
              <div className="latest-trend-products">
                {latestTrendsData.map((product, i) => (
                  <div
                    key={i}
                    className="latest-trend-product"
                    onClick={navigateToProductsPage}
                  >
                    <img src={product.productImg} alt="" />
                    <div>{product.productName}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="category-title">Popular Suggestion</div>
              <div>
                {suggestionData.map((product, i) => (
                  <div
                    key={i}
                    className="suggestion-product"
                    onClick={navigateToProductsPage}
                  >
                    {product.productName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
