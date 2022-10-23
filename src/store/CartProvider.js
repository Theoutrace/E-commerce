import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./auth/auth-context";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const authCtx = useContext(AuthContext);
  // console.log(authCtx);
  const plainEmail = authCtx.email.replace(/[^a-zA-Z0-9 ]/g, "");
  // console.log('mail is: ',plainEmail);

  useEffect(() => {
    console.log("cart provider effect ");
    if (plainEmail) {
      fetch(
        `https://crudcrud.com/api/39009373719e40a4ad1527698a5dcd81/cart${plainEmail}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        res.json().then((data) => {
          // console.log("data received against email", data);
          if (data.length !== 0) {
            console.log(data);
            console.log(
              "database non empty and cartItem in context",
              cartItems
            );
            // console.log(data[0]);
            // console.log(data[0].cartItemsArr);
            if (data[0].cartItemsArr.length === 0) {
              // console.log("cloud cart is empty", data[0].cartItemsArr);
              
              const id = data[0]._id;
              console.log(id);
              if (id) {
                // we need to replace this empty array with our filled array.
                console.log(cartItems);
                console.log(id);
                console.log(plainEmail);
                fetch(
                  `https://crudcrud.com/api/39009373719e40a4ad1527698a5dcd81/cart${plainEmail}/${id}`,
                  {
                    method: 'PUT',
                    body: JSON.stringify({ "cartItemsArr": cartItems }),
                    headers: { "Content-Type": "application/json" },
                  }
                ).then((res) =>
                  res
                    .json()
                    .then((data) =>
                      console.log("this was sent as first cart: ", data)
                    )
                );
              }
            } else {
              console.log("cloud has something", data[0].cartItemsArr);
              // collect the _id here and make a put request here replace the old array.
              // we need to get the data out and show in the cart.
            }
          } else {
            // console.log("online database is empty, add the items");

            fetch(
              `https://crudcrud.com/api/39009373719e40a4ad1527698a5dcd81/cart${plainEmail}`,
              {
                method: "POST",
                body: JSON.stringify({ "cartItemsArr": cartItems }),
                headers: { "Content-Type": "application/json" },
              }
            ).then((res) =>
              res.json().then((data) => console.log("this was uploaded", data))
            );
          }
        });
      });
    }

    //
  }, [cartItems, plainEmail]);


  const addItemToCartHandler = (item) => {
    item = { ...item, quantity: 1 };
    // console.log(item);
    console.log(cartItems);

    // checking for duplicates
    const idx = cartItems.findIndex((itm) => itm.item.title === item.title);

    console.log(idx);
    if (idx === -1) {
      setCartItems((previous) => [...previous, { item }]);
    } else {
      console.log("matching item increase qty");
      console.log(cartItems[idx]);
      console.log("similar", cartItems[idx].item.quantity);

      const nItem = { ...item, quantity: cartItems[idx].item.quantity + 1 };

      console.log(cartItems);
      cartItems[idx] = { item: nItem };
      console.log("replaced", cartItems);
      setCartItems(() => cartItems);
    }
  };

  const removeItemFromCartHandler = (id) => {};

  console.log(cartItems);
  const cartcontext = {
    items: cartItems,
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
