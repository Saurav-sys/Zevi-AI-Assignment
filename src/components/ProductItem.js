import { useState } from "react";
import "../styles/ProductItem.css";
import { ratingBox } from "../Utilities/utilities.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="product-img-container">
        <div className="wishlist-icon-container">
          {isInWishlist ? (
            <AiFillHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          )}
        </div>
        <img
          className="product-img"
          src={product.productImg}
          alt=""
          onMouseOver={() => setShowViewProduct(true)}
          onMouseOut={() => setShowViewProduct(false)}
        />
        {showViewProduct && (
          <div
            onMouseOver={() => setShowViewProduct(true)}
            onMouseOut={() => setShowViewProduct(false)}
            className="view-product"
            onClick={() => navigate("/")}
          >
            View Product
          </div>
        )}
      </div>
      <div className="product-details">
        <div className="product-name">{product.productName}</div>
        <div>
          <span className="original-price">Rs. {product.productOrgPrice} </span>
          <span className="discount-price">Rs. {product.productDisPrice} </span>
        </div>
        <div className="rating-and-reviews-container">
          {ratingBox(product.productRating)} ({product.productsReviews})
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
