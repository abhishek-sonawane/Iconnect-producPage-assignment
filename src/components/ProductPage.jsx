import React from 'react'
import { useState,useEffect  } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import data from '../data.json'

function ProductPage() {
    const {productID} = useParams()
    const navigate = useNavigate()
    const [prod,setProd] = useState({})
    useEffect(()=>{
           const product = data.products.find(item=>item.id==productID)
           if(product!=undefined){
            setProd(product)
           }else{
            navigate('/404')
           }

    },[])

  return (
    <div>
        <p>{prod.name}</p>
        <p>{prod.price}</p>

        <button> <AiOutlineShoppingCart/>  Add to cart</button>

        <Link to='/' >go to home</Link>
    </div>
  )
}

export default ProductPage