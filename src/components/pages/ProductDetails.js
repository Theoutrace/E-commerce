import React from "react";
import "./ProductDetails.css";
import { useParams, useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  const param = useParams();
  const location = useLocation().state;
  // console.log(location);
  return (
    <div key={param} className="outerMost-product-container">
      <div className="inside outerMost-product-container ">
        <div className="all-Images-container">
          <div className="all-additionalImages-container">
            {location.stateParam.otherImgs.map((itm) => {
              return (
                <div className="additionalImages">
                  <img src={itm.imageSrc} alt="" width="50" height="50"></img>
                </div>
              );
            })}
          </div>
          <div className="main-Image-product">
            <ReactImageMagnify
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: `${location.stateParam.imageUrl}`,
                },

                largeImage: {
                  src: `${location.stateParam.imageUrl}`,
                  width: 1200,
                  height: 1000,
                },

                enlargedImageContainerDimensions: {
                  width: "270%",
                  height: "170%",
                },

                shouldUsePositiveSpaceLens: true,
              }}
            ></ReactImageMagnify>
            {/* <img src={location.stateParam.imageUrl} alt=""></img> */}
          </div>
        </div>
        <div className="product-deatails-container">
          <div className="product-deatails-container-inner">
            <div className="title-text-container">{location.stateParam.title}</div>
            <div className="price-text-container">Price: $ {location.stateParam.price}</div>
            <div className="btn-container-product-details">
              <button className="productDetails-buy-add-btn buyNow-btn">Buy Now</button>
              <button className="productDetails-buy-add-btn">Add to cart</button>
            </div>
          </div>

          <div className="reviews-container">
            <h3>Reviews</h3>
            {location.stateParam.reviews.map((itm) => {
              return (
                <div className="single-reviews-container">
                  <div className="single-reviewsimage">
                    <img
                      src={itm.userProfile}
                      alt=""
                      width="30"
                      height="30"
                    ></img>
                  </div>
                  <div>{itm.review}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
