import React, { useState } from "react";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  // console.log(cartContext);
  const [items, setItems] = useState(cartContext._currentValue.items);

  const addItemToCartHandler = (item) => {
    // console.log(items);
    const idx = items.findIndex((itm) =>  itm.item.id === item.id);
    

    if (idx === -1) {
      setItems((previous) => [...previous, { item }]);
    }else{
        // console.log(items[idx].item.quantity);
        items[idx].item.quantity = items[idx].item.quantity + 1
        
    }
  };

  const removeItemFromCartHandler = (id) => {};

  const cartcontext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
