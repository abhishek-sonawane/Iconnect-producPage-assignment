import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import { ImPlus, ImMinus } from "react-icons/im";

import data from "../data.json";

function ProductPage() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [prod, setProd] = useState({});
  const [counter, setCounter] = useState(1);

  const counterChange = (e) => {
    if (e.target.id == "increment") {
      setCounter((prev) => prev + 1);
    }
    if (e.target.id == "decrement" && counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const product = data.products.find((item) => item.id == productID);
    if (product != undefined) {
      setProd(product);
      document.title = product.name;
    } else {
      navigate("/404");
    }
  }, []);

  return (
    <div className="product-details-container">
      <Link id="home-link" to="/">
        {" "}
        <AiOutlineArrowLeft /> Continue shopping
      </Link>
      <div className="product-details">
        <div className="product-details-img">
          <img src={prod.image} alt="" />
        </div>

        <div className="product-content">
          <p className="product-title">{prod.name}</p>
          <div className="dash"></div>
          <p className="product-price">{prod.price}$</p>

          <div>
            <span className="counter-wrapper">
              <button onClick={counterChange}>
                <ImMinus className="counter-btn" id="decrement" />
              </button>
              <input
                disabled
                id="counter-btn"
                value={counter}
                type="text"
                min="0"
              />
              <button onClick={counterChange}>
                {" "}
                <ImPlus className="counter-btn" id="increment" />
              </button>
            </span>
          </div>

          <button className="cart-button">
            {" "}
            <AiOutlineShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
