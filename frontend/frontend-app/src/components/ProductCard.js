import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={product.imageURL} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button style={{
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
