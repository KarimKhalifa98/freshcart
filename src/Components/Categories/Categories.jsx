import axios from "axios";
import React from "react";
import Styles from "./Categories.module.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet";


export default function Categories() {
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  let { isLoading, data } = useQuery("categories", getCategories);

  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <div className={`${Styles.categories}`}>
        {isLoading ? (
          <FallingLines
            color="#4fa94d"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        ) : (
          <>
            {data?.data.data.map((category) => {
              return (
                <Link to="/" key={category._id}>
                  <div className="card shadow p-3">
                    <img
                      className="card-img-top"
                      height={350}
                      src={category.image}
                      alt={category._id}
                    />
                    <div className="card-body">
                      <h3 className="text-center text-success">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
