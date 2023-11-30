import React, { useEffect, useState } from 'react';
import "../styles/ProductsResults.css";
import ProductItem from "./ProductItem";
import { fetchProducts } from '../FakerData/FakerData';

const ProductsResults = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {products === null ? (
        <div>Loading...</div>
      ) : products.length === 0 ? (
        <div className="no-results">No Results Found !!!</div>
      ) : (
        <div className="product-results-container">
          {products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsResults;
