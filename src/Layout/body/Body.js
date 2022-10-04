import React from "react";
import { productsArr } from "../../assets/ProductsData";
import AvailableItems from "./AvailableItems";
import cls from "./Body.module.css";

const Body = () => {
  return (
    <div >
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]}>The Generics</h1>
      </div>
      <div className={cls["products-container"]}>
      <div className={cls["products"]}>
        {productsArr.map((item) => {

          return (
            <div className={cls["single-products"]}>
              <AvailableItems key={item.id} item={item} />
            </div>
          );
        })}
      </div>
      </div>

    </div>
  );
};

export default Body;
