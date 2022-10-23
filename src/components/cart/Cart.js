import React, { useContext, useState, useEffect} from "react";
import cartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import cls from "./Cart.module.css";
import CartItem from "./CartItem";
import icon from '../../../src/assets/images/icons8-shopping-cart.gif'

const Cart = (props) => {
  const cartCtx =useContext(cartContext)
  console.log(cartCtx.items);
  const [cartItems, setCartItems] = useState("");
  

  useEffect(() => {
    console.log('running useEffect cart');
    console.log(cartCtx);
    setCartItems(()=>cartCtx.items)

  }, [cartCtx.items])


  return (
    <Modal>
      <div className={cls["cart"]}>
        <div className={cls["cart-text"]}>
          <div>Cart</div>
          <button onClick={props.onClose} className={cls["close-cart-btn"]}>
            X
          </button>
        </div>

        <div>
          {!cartItems && <div className={cls["cart-icon-container"]}><img src={icon} alt='cart loading...' width='50' height='50'></img><p>Loading...</p></div>}
          {cartItems &&
            cartItems.map((itm) => {
              return <>
              <CartItem key={itm.productId} itm={itm}/>

              </>
            })}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
