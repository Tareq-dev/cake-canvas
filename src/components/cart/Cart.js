import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { handleDelete, product } = props;
  const { name, picture, price } = props.product;
  return (
    <div>
      <ul className="p-0">
        <li className="d-flex justify-content-between border p-2">
          <img className="w-25" src={picture} alt="" />
          <div className="mx-3">
            <h4 className="pink-color">{name}</h4>
            <h5> price: ${price}</h5>
          </div>
          <button className="m-2 fs-2 text-danger bg-white border p-1" onClick={()=>handleDelete(product)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
