import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ product }) => {
  const { name, picture, price } = product;
  return (
    <div>
      <ul className="p-0">
        <li className="d-flex justify-content-between border p-2">
          <img className="w-25" src={picture} alt="" />
          <div className="mx-3">
            <h4 className="pink-color">{name}</h4>
            <h5> price: ${price}</h5>
          </div>
          <p className="mt-4 fs-2 text-danger border p-1">
            <FontAwesomeIcon icon={faDeleteLeft} />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
