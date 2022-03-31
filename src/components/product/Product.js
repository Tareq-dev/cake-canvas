import React from "react";
import "./Product.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faInfoCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Product = ({ product, addToCart }) => {
  const { name, price, picture } = product;

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <button
          className="border-0 rounded-3 cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>

        <div>
          <button
            onClick={openModal}
            className="border-0 rounded-3 detail-btn mt-2 mx-4"
          >
            Detail <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="d-flex justify-content-between">
              <h2
                className="text-info mb-2"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                {name}
              </h2>
              <button className="border-0 bg-white" onClick={closeModal}>
                <FontAwesomeIcon
                  className="text-danger fs-1"
                  icon={faTimesCircle}
                />
              </button>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={picture} alt="img" />
              </div>
              <div className="col-6 px-2 d-flex align-items-center">
                <div>
                  <h4>{name}</h4>
                  <h5>Price : ${price}</h5>
                  <div className="mt-3 mb-3 star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    <span className="text-secondary px-2">(4.5)</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Product;
