import React, { useEffect, useState } from "react";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import Swal from "sweetalert2";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //add to cart

  const addToCart = (selectedCart) => {
    const newCart = [...cart, selectedCart];
    if (newCart.length < 5) {
      setCart(newCart);
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "You can not select more than 4 items!",
      });
    }
  };

  //Choose One cart function

  const chooseOneCart = () => {
    const randomItem = chooseOneCartRandomly();
    const randomProduct = cart.filter((item) => item === randomItem);
    setCart(randomProduct);
  };

  //Choose Random cart function

  const chooseOneCartRandomly = (selectedItem) => {
    const newCart = [...cart, selectedItem];
    newCart.pop();
    return newCart[Math.floor(Math.random() * newCart.length)];
  };

  //Choose Again

  const chooseAgain = () => {
    setCart([]);
  };

  return (
    <div className="p-3">
      <h3 className="header">Choose Your Own Watch!!</h3>
      <div className="cart-container">
        <div className="d-flex justify-content-end">
          <button
            class="btn btn-color"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className="">
              <small className="counter bg-danger">{cart.length}</small>
            </p>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel" class="mx-auto text-info">
                Review Order
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              {cart.map((product, id) => (
                <Cart key={id} product={product} />
              ))}

              <div className="d-flex justify-content-between">
                <button
                  className="border-0 rounded-3 p-2 fw-bold light-pink text-white"
                  onClick={chooseOneCart}
                >
                  Choose 1
                </button>
                <button
                  className="border-0 rounded-3 p-2 fw-bold light-green text-white"
                  onClick={chooseAgain}
                >
                  Choose Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="product-container p-5">
          {products.map((product) => (
            <Product key={product.id} addToCart={addToCart} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
