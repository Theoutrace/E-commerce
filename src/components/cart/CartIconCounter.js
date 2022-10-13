import React, { useContext, useState, useEffect } from 'react'
import cartContext from '../../store/cart-context'


const CartIconCounter = () => {
  const [count,setCount]=useState(0)
  const cartCtx=useContext(cartContext)

  useEffect(()=>{
    setCount(()=>cartCtx.items.length)
  },[cartCtx.items.length])
  
 

  

  return (
    <div>
      {count}
    </div>
  )
}

export default CartIconCounter
