import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../store/cart-context";
import cls from "./AvailableItems.module.css";

const AvailableItems = (props) => {
<<<<<<< HEAD
  const cartCtx = useContext(cartContext);

  const itemAddToCartHandler = () => {
    // console.log(props.item);
    cartCtx.addItem(props.item);
  };
  return (
    <div>
      <div className={cls["single-products-image-cart-price"]}>
        <span>{props.item.title}</span>
        <Link to={`/store/${props.item.id}`} state={{from:'occupation'}}>
          <img
            className={cls["product-image"]}
            src={props.item.imageUrl}
            alt={props.item.title}
            width="170"
            height="200"
          ></img>
=======
  const cartCtx = useContext(cartContext)

  const clickItemForDetailsHandler=()=>{
    // console.log(props.item);
    props.onClickForDetails(props.item)
  }


const itemAddToCartHandler = () =>{
  // console.log(props.item);
  cartCtx.addItem(props.item)
}
  return (
    <div>
      <div className={cls["single-products-image-cart-price"]}>
      <span>{props.item.title}</span>
        <Link to={`/store/${props.item.id}`}><img onClick={clickItemForDetailsHandler}
          className={cls["product-image"]}
          src={props.item.imageUrl}
          alt={props.item.title}
          width="170"
          height="200"
        ></img>
>>>>>>> d09a6183c8ec3f9efbcebd3328f4488f6e3b3341
        </Link>
        <div className={cls["price-to-cartbtn-container"]}>
          <h4 className={cls["price-text"]}>${props.item.price}</h4>
          <button onClick={itemAddToCartHandler}>🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableItems;
