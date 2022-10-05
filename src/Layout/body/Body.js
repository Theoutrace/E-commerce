import React from "react";
import { Route } from "react-router-dom";
import { productsArr } from "../../assets/ProductsData";
import About from "../../components/pages/About";
import AvailableItems from "./AvailableItems";
import cls from "./Body.module.css";


const Body = () => {
  return (
    <div>
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]}>The Generics</h1>
      </div>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/store">
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
      </Route>
    </div>
  );
};

export default Body;
