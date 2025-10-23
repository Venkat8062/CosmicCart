import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  // For now, use dummy data
  useEffect(() => {
    setProducts([
      { id: 1, name: "Galaxy Shirt", price: 25, imageURL: "https://via.placeholder.com/200" },
      { id: 2, name: "Star Mug", price: 15, imageURL: "https://via.placeholder.com/200" },
      { id: 3, name: "Rocket Cap", price: 20, imageURL: "https://via.placeholder.com/200" }
    ]);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

