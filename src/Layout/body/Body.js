import React, { useContext, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { productsArr } from "../../assets/ProductsData";
import Home from "../../components/pages/Home";
import Footer from "../footer/Footer";
import cls from "./Body.module.css";
import Login from "../../components/pages/Login/Login";
import AuthContext from "../../store/auth/auth-context";

const Body = () => {
  const authCtx = useContext(AuthContext);

  const About = React.lazy(() => import("../../components/pages/About"));
  const ContactUs = React.lazy(() =>
    import("../../components/pages/ContactUs")
  );
  const ProductDetails = React.lazy(() =>
    import("../../components/pages/ProductDetails")
  );
  const AvailableItems = React.lazy(() => import("./AvailableItems"));

  return (
    <div>
      <div className={cls["heading"]}>
        <h1 className={cls["heading-text"]}>The Generics</h1>
      </div>
      <div>
        <Suspense fallback={<p>Loading....</p>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/contact_us">
              <ContactUs />
            </Route>
            <Route path="/store/:productId">
              <ProductDetails />
            </Route>
            {authCtx.isLoggedIn && (
              <Route exact path="/store">
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
            )}
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
