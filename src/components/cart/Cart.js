import React from "react";
import Modal from "../Modal/Modal";
import cls from "./Cart.module.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <Modal>
      <div className={cls["cart"]}>
        <div className={cls["cart-text"]}>
          <div >Cart</div>
          <button onClick={props.onClose} className={cls['close-cart-btn']}>X</button>
        </div>

        {cartElements.map((item) => {
          return (
            <div className={cls["cart-single-item"]}>
              <div className={cls["image-title"]}>
                <div className={cls["image"]}>
                  <img
                    className={cls["item-image"]}
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
                <span className={cls["title"]}>{item.title}</span>
              </div>
              <div className={cls["price"]}>
                <span>${item.price}</span>
              </div>
              <span className={cls["price"]}>{item.quantity}</span>
              <button >Remove</button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default Cart;
