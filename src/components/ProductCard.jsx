import React from 'react'
import { Link } from 'react-router-dom'


function ProductCard({item}) {
  return (
   <Link to={item.id} >
     <div className='product-card'>
        <p>{item.name}</p>
        <p>{item.price}</p>
    </div>
   </Link>
  )
}

export default ProductCard