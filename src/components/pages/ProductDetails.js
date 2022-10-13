import React from 'react'
import './ProductDetails.css'
import { useParams, useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const paramsLink = useParams()
    const location = useLocation().state
    console.log(location);
  return (
    <div>
      {paramsLink.productId}
    </div>
  )
}

export default ProductDetails
