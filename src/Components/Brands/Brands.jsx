import axios from "axios";
import React from "react";
import Styles from "./Brands.module.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Brands() {
  function getBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  let { isLoading, data } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands
  });

  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      <div className={`${Styles.brands}`}>
        {isLoading ? (
          <FallingLines
            color="#4fa94d"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        ) : (
          <>
            {data?.data.data.map((brand) => {
              return (
                <Link to="/" key={brand._id}>
                  <div className="card shadow p-3">
                    <img
                      className="card-img-top"
                      height={200}
                      src={brand.image}
                      alt={brand._id}
                    />
                    <div className="card-body">
                      <h3 className="text-center text-success">{brand.name}</h3>
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
