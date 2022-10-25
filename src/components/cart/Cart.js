import React, { useContext, useState, useEffect} from "react";
import cartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import cls from "./Cart.module.css";
import CartItem from "./CartItem";
import icon from '../../../src/assets/images/icons8-shopping-cart.gif'
import AuthContext from "../../store/auth/auth-context";

const Cart = (props) => {
  const authCtx = useContext(AuthContext)
  // console.log(authCtx.email);
  const cartCtx =useContext(cartContext)
  console.log(cartCtx);

  const [itm, setItm] = useState("");
  
  
  const plainEmail = authCtx.email.replace(/[^a-zA-Z0-9]/g,"")
  console.log(plainEmail);
  

  useEffect(() => {

      fetch(`https://crudcrud.com/api/8701daad413f471fbb63120ab55485c3/cart${plainEmail}`,
      {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
      }
      ).then((res)=>res.json().then(data=>{
        console.log('this was sent', data)
        setItm(()=> data)
    
      }))

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
          {!itm && <div className={cls["cart-icon-container"]}><img src={icon} alt='cart loading...' width='50' height='50'></img><p>Loading...</p></div>}
          {itm &&
            itm.map((itm) => {
              console.log(itm);
              return <>
              <CartItem key={itm._id} itm={itm}/>

              </>
            })}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
