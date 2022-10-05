import React, { Fragment } from "react";
import Body from "../../Layout/body/Body";
import Footer from "../../Layout/footer/Footer";


const Store = () => {
  return (
    <Fragment>
      <Body />
      <footer className="footer-container">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Store;
