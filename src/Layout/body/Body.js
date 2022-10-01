import React from "react";
import { productsArr } from "../../assets/ProductsData";
import cls from "./Body.module.css";

const Body = () => {
  return (
    <div>
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]}>The Generics</h1>
      </div>
      <div className={cls['products']}>
        {productsArr.map((item) => {
          return (
            <div>
              <img src={item.imageUrl} alt={item.title}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
