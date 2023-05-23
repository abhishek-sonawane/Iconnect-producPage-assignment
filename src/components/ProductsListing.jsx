import React from 'react'
import data from '../data.json'
import ProductCard from './ProductCard'


function ProductsListing() {
  return (
    <div>
         {data.products.map(item=>{
          return <ProductCard key={item.id} item={item}  />
        })}
    </div>
  )
}

export default ProductsListing