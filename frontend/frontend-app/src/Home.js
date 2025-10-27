import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const backendBaseURL = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    fetch(`${backendBaseURL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products:", err));
  }, [backendBaseURL]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map(product => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Home;
