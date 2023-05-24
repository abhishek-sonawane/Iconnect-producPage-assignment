import React, { useState } from "react";
import data from "../data.json";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

function ProductsListing() {
  const [productsData,setProductsData] = useState({})
  useEffect(() => {
    document.title = `products`;
    if(data){
      setProductsData(data)
    }
  }, []);
  return (
    <div>
      <h1>Checkout our Products</h1>
      <div className="product-list-wrapper">
        <div className="products-list">
          {productsData.products?productsData.products.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          }):<>loading...</>}
        </div>
      </div>
    </div>
  );
}

export default ProductsListing;
