import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./Layout/header/Header";
import CartProvider from "./store/CartProvider";
import Body from "./Layout/body/Body";
import AuthContext from "./store/auth/auth-context";
import cartContext from "./store/cart-context";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const authCtx=useContext(AuthContext)
  console.log(authCtx);
  const cartCtx=useContext(cartContext)
  console.log(cartCtx);


  const plainEmail = authCtx.email.replace(/[^a-zA-Z0-9 ]/g, "");




  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <header className="App-header">
          {cartIsShow && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
        </header>
        <Body/>
      </CartProvider>
    </div>
  );
}

export default App;
