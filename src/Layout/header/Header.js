import React from "react";
import NavBar from "./navbar/NavBar";
import cls from "./Header.module.css";
import CartIconCounter from "../../components/cart/CartIconCounter";


const Header = (props) => {


  return (
    <div className={cls["header"]}>
      <NavBar />
      <div className={cls['cart-btn-container']}>
        <button onClick={props.onShowCart} className={cls['cart-btn']}>🛒 Cart </button>
        <CartIconCounter/>
      </div>
    </div>
  );
};

export default Header;
