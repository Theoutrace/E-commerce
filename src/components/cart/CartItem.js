import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import cls from "./Cart.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState(props.itm.item.quantity);
  console.log(cartCtx.items);
  console.log(props.itm);

  const idx = cartCtx.items.findIndex(
    (itm) => itm.item.title === props.itm.item.title
  );

  console.log(cartCtx.items[idx].item.quantity);

  console.log("items ran");

  const itemDetails = props.itm.item;

  const addItemFromCarthandler = () => {
    const itmeObj = {
      imageUrl: itemDetails.imageUrl,
      title: itemDetails.title,
      price: itemDetails.price,
      quantity: itemDetails.quantity,
      _id: itemDetails._id,
      productId: itemDetails.productId,
    };
    cartCtx.addItem(itmeObj);
    setQty(() => cartCtx.items[idx].item.quantity);
  };

  return (
    <>
      <div className={cls["cart-single-item"]}>
        <div className={cls["image-title"]}>
          <div className={cls["image"]}>
            <img
              className={cls["item-image"]}
              src={itemDetails.imageUrl}
              alt={itemDetails.title}
            />
          </div>
          <span className={cls["title"]}>{itemDetails.title}</span>
        </div>
        <div className={cls["price"]}>
          <span>${itemDetails.price}</span>
        </div>
        <span className={cls["price"]}>{qty}</span>
        <div className={cls["quantity-text-and-button"]}>
          QTY
          <button>-</button>
          <button onClick={addItemFromCarthandler}>+</button>
        </div>

        <div>
          <button className={cls["remove-btn-single-itm"]}>X</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
