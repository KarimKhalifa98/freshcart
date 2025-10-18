import axios from "axios";
import React, { useContext } from "react";
import Styles from "./Products.module.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { cartContext } from "../../CartContext/CartContext";
import { Helmet } from "react-helmet";

export default function Products() {
  async function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  let { isLoading, data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    await addToCart(productId);
  }

  return (
    <>
      {window.location.pathname === "/products" ? (
        <Helmet>
          <title>Products</title>
        </Helmet>
      ) : (
        ""
      )}

      <h2 className="mb-4">
        {window.location.pathname === "/products"
          ? "All Products"
          : "Featured Products"}
      </h2>
      <div className={`${Styles.products}`}>
        {isLoading ? (
          <FallingLines
            color="#4fa94d"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        ) : (
          <>
            {data?.data.data.map((product) => {
              return (
                <div
                  className="card shadow p-3 overflow-hidden position-relative"
                  key={product.id}
                >
                  <Link to={`/productdetails/${product.id}`} key={product._id}>
                    <img
                      src={product.imageCover}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body p-0 pb-5">
                      <h5 className="card-title text-success">
                        {product.category.name}
                      </h5>
                      <h5 className="card-title">
                        {product.title.split(" ", 2).join(" ")}
                      </h5>
                      <div className="card-text d-flex justify-content-between ">
                        <span>
                          {product.priceAfterDiscount ? (
                            <>
                              <span className="line-through">
                                {product.price}
                              </span>{" "}
                              <span>{product.priceAfterDiscount}</span>
                            </>
                          ) : (
                            <span>{product.price}</span>
                          )}
                          {" EGP"}
                        </span>
                        <span>
                          {product.ratingsAverage}
                          <i className="gold fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="add-to px-3 d-flex justify-content-center align-items-center w-100">
                    <button
                      type="text"
                      className="btn btn-success flex-grow-1 me-3"
                      onClick={() => addProduct(product.id)}
                    >
                      Add To Cart
                    </button>
                    <i className="fa-regular fa-heart fa-2xl"></i>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
