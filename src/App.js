import "./App.css";
import React,{useState} from "react";
import Cart from "./components/cart/Cart";
import Body from "./Layout/body/Body";
import Footer from "./Layout/footer/Footer";
import Header from "./Layout/header/Header";

function App() {

  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler =() =>{
    setCartIsShow(true)
  }
  const hideCartHandler =() =>{
    setCartIsShow(false)
  }



  return (
    <div className="App">
      <header className="App-header">
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
      </header>
      <Body/>
      <footer className='footer-container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
