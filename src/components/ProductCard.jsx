import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={item.id}>
      <div className="product-card">
        <img width="130" src={item.image} alt="" />
        <div className="product-card-text">
          <p>{item.name}</p>
          <p>{item.price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
