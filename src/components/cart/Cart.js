import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import cls from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx =useContext(cartContext)
  

  return (
    <Modal>
      <div className={cls["cart"]}>
        <div className={cls["cart-text"]}>
          <div>Cart</div>
          <button onClick={props.onClose} className={cls["close-cart-btn"]}>
            X
          </button>
        </div>

        {cartCtx.items.map((item) => {
          
          return (
            <div className={cls["cart-single-item"]}>
              <div className={cls["image-title"]}>
                <div className={cls["image"]}>
                  <img
                    className={cls["item-image"]}
                    src={item.item.imageUrl}
                    alt={item.item.title}
                  />
                </div>
                <span className={cls["title"]}>{item.item.title}</span>
              </div>
              <div className={cls["price"]}>
                <span>${item.item.price}</span>
              </div>
              <span className={cls["price"]}>{item.item.quantity}</span>
              <button>Remove</button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default Cart;
