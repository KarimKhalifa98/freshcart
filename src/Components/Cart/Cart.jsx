import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { data } from "react-router-dom";

export default function Cart() {
  let headers = {
    token: localStorage.getItem("userToken"),
  };
  const [cart, setCart] = useState(null);
  async function getCart() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers,
      }
    );
    console.log(data);
    setCart(data);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="bg-light p-4 shadow">
        <h2>Shop Cart:</h2>
        <p className="h3 text-success">{"Items: " + cart?.numOfCartItems}</p>
        <p className="text-success mb-4 h3 d-flex justify-content-between">
          Total Price: {cart?.data.totalCartPrice}
          {" EGP"}
          <button className="btn btn-danger">Clear All</button>
        </p>
        {cart?.data.products.map((product) => {
          return (
            <div
              className="row mb-4 border-bottom p-3"
              key={product?.product.id}
            >
              <img
                className="col-md-2"
                src={product?.product.imageCover}
                alt={product?.product.title}
                width={100}
              />
              <div className="col-md-8 px-4 ">
                <h3>{product?.product.title}</h3>
                <p className="h4 text-success">
                  {"Price: " + product?.price + " EGP"}
                </p>
                <button className="btn btn-danger">
                  <i className="fas fa-trash"></i>{" "}
                </button>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <button className="btn btn-outline-success px-3">+</button>
                <span className="mx-3 h4">{product?.count}</span>
                <button className="btn btn-outline-success px-3">-</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
