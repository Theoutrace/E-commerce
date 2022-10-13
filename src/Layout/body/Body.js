<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> d09a6183c8ec3f9efbcebd3328f4488f6e3b3341
import { Route, Switch } from "react-router-dom";
import { productsArr } from "../../assets/ProductsData";
import Home from "../../components/pages/Home";
import About from "../../components/pages/About";
import AvailableItems from "./AvailableItems";
import Footer from "../footer/Footer";
import cls from "./Body.module.css";
import ContactUs from "../../components/pages/ContactUs";
import ProductDetails from "../../components/pages/ProductDetails";

const Body = () => {
<<<<<<< HEAD


=======
  const [detailPage,setDetailPage]=useState('')
  const [proId, setProId]=useState('')


  const itemForItemDetails = (product) =>{
    // console.log(product.id);
    setDetailPage(product)
    setProId(product.id)
  }

>>>>>>> d09a6183c8ec3f9efbcebd3328f4488f6e3b3341
  return (
    <div>
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]}>The Generics</h1>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact_us">
            <ContactUs />
          </Route>
<<<<<<< HEAD
          <Route path="/store/:productId">
            <ProductDetails/>
=======
          <Route path={`/store/*:${proId}`}>
            <ProductDetails key={proId} itemForDetails = {detailPage}/>
>>>>>>> d09a6183c8ec3f9efbcebd3328f4488f6e3b3341
          </Route>
          <Route exact path="/store">
            <div className={cls["products-container"]}>
              <div className={cls["products"]}>
                {productsArr.map((item) => {
                  return (
                    <div className={cls["single-products"]}>
<<<<<<< HEAD
                      <AvailableItems key={item.id} item={item}/>
=======
                      <AvailableItems key={item.id} item={item} onClickForDetails={itemForItemDetails}/>
>>>>>>> d09a6183c8ec3f9efbcebd3328f4488f6e3b3341
                    </div>
                  );
                })}
              </div>
            </div>
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default Body;
