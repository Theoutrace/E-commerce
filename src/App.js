import "./App.css";
import React, {  useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./Layout/header/Header";
import CartProvider from "./store/CartProvider";
import Body from "./Layout/body/Body";


function App() {
  const [cartIsShow, setCartIsShow] = useState(false);




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
