import matchers from "@testing-library/jest-dom/matchers";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./auth/auth-context";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const authCtx = useContext(AuthContext);
  const plainEmail = authCtx.email.replace(/[^a-zA-Z0-9 ]/g, "");

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/dab6ef0ab3ac4c1f9b77badece8b8287/cart${plainEmail}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setCartItems(() => data);
      })
    );
  }, [cartItems.length]);

  const addItemToCartHandler = (item) => {
    console.log(item);

    //fetch the cart items chek if item is already present in the items
    //if present then collect the id of that item and update (increase the qty) post.

    //fetching the cart item
    fetch(
      `https://crudcrud.com/api/dab6ef0ab3ac4c1f9b77badece8b8287/cart${plainEmail}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) =>
      res.json().then((data) => {
        console.log(item.title);
        console.log("received cartItem to check duplicate", data);
        const idx = data.findIndex((itm) => item.title === itm.title);

        console.log(idx);

        if (idx === -1) {
          item = { ...item, quantity: 1 };

          fetch(
            `https://crudcrud.com/api/dab6ef0ab3ac4c1f9b77badece8b8287/cart${plainEmail}`,
            {
              method: "POST",
              body: JSON.stringify(item),
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) =>
            res
              .json()
              .then((data) => setCartItems((previous) => [...previous, data]))
          );
        } else {
          console.log("this item id is duplicate", data[idx]._id);
          console.log("duplicate item details", data[idx]);

          // constructing item because put method doesnt take id in the object

          item = {
            imageUrl: data[idx].imageUrl,
            price: data[idx].price,
            productId: data[idx].productId,
            quantity: data[idx].quantity + 1,
            title: data[idx].title,
          };

          // item = {...item, quantity: data[idx].quantity+1}
          console.log("increased or not", item);
          fetch(
            `https://crudcrud.com/api/dab6ef0ab3ac4c1f9b77badece8b8287/cart${plainEmail}/${data[idx]._id}`,
            {
              method: "PUT",
              body: JSON.stringify(item),
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) =>
            res.json().then((data) =>
              // console.log('sent item with increased quantity: ',data)
              setCartItems((previous) => [...previous, data])
            )
          );
        }
      })
    );
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
