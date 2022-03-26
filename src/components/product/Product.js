import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const Product = ({product,addToCart}) => {
  const {name,price,picture} = product;
  return (
    <div className="product row border">
      <div className="col-6">
        <img className="mx-auto d-block" src={picture} alt="" />
      </div>
      <div className="col-6 card-content mt-4">
        <h4>{name}</h4>
        <h5>Price : ${price}</h5>
        <div className="mt-3 mb-3 star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <p className="text-secondary">Rating - (4.5)</p>
        </div>
        <button className="border-0 rounded-3 cart-btn p-2" onClick={() => addToCart(product)}>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;