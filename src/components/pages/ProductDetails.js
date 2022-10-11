import React from "react";
// import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = (props) => {
  // const params = useParams(); //returns params object, we store in a constant
  //   console.log(params);
  console.log(props.itemForDetails);

  return (
    <>
      <h2>Product Details</h2>
      <section className="single-product-container-product-details">
        <div className="product-details-image">
          <div className="product-additional-images-container">
            {props.itemForDetails.otherImgs.map((imgs) => {
              return (
                <div className="additional-images">
                  <img src={imgs.imageSrc} alt=""></img>
                </div>
              );
            })}
          </div>

          <div className="large-image-container-product">
            <ReactImageMagnify
              className="image-ab-ab"
              {...{
                smallImage: {
                  alt: "",
                  isFluidWidth: true,
                  src: `${props.itemForDetails.imageUrl}`,
                },
                largeImage: {
                  src: `${props.itemForDetails.imageUrl}`,
                  width: 1200,
                  height:1000,
                },
                enlargedImageContainerDimensions: {
                  width: "250%",
                  height: "150%",
                },
                shouldUsePositiveSpaceLens: true
              }}
            />
          </div>
        </div>
        <div className="product-details-details">
          <div>
            <h3>{props.itemForDetails.title}</h3>
          </div>
          <div>ratings</div>
          <div> Price: ${props.itemForDetails.price}</div>
          <div>
            <button className="btn-product-details">Add to cart</button>
            <button className="btn-product-details">Buy Now</button>
          </div>
          <div>
            <h4 className="reviews-text">Reviews</h4>
            <div className="reviews-container">
              {props.itemForDetails.reviews.map((rev) => {
                return (
                  <>
                    <div className="reviews-and-image-container">
                      <div className="review-image-profile">
                        <img
                          className="review-image-profile-image"
                          src={rev.userProfile}
                          alt=""
                        ></img>
                      </div>
                      <p>{rev.review}</p>
                    </div>
                    
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
