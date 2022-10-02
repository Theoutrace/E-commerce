import React from "react";
import { productsArr } from "../../assets/ProductsData";
import cls from "./Body.module.css";

const Body = () => {
  return (
    <div>
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]} >
          The Generics
        </h1>
      </div>

      <div className={cls["products"]}>
        {productsArr.map((item) => {
          return (
            <div className={cls["single-products"]}>
              <div className={cls["single-products-image-cart-price"]}>
                <img
                  className={cls["product-image"]}
                  src={item.imageUrl}
                  alt={item.title}
                  width="170"
                  height="200"
                ></img>
                <div className={cls["price-to-cartbtn-container"]}>
                  <a4 className={cls["price-text"]}>${item.price}</a4>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
