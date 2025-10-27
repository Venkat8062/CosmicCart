import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Read backend base URL from environment variable or default to empty string
  const backendBaseURL = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    fetch(`${backendBaseURL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [backendBaseURL]);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div className="App">
      <h1>CosmicCart Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.imageURL} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
