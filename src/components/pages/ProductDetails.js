import React from 'react'
import './ProductDetails.css'
import { useParams, useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const paramsLink = useParams()
    const location = useLocation()
    const from = location.state

  return (
    <div>
      {paramsLink.productId, from}
      
    </div>
  )
}

export default ProductDetails
