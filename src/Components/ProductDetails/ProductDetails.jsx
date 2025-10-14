import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FallingLines } from "react-loader-spinner";


export default function ProductDetails() {
  let { id } = useParams();
  function getProductDetails(productId) {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}`
    );
  }
  let { data, isLoading } = useQuery("productDetails", () =>
    getProductDetails(id)
  );
  let product = data?.data.data;
  return (
    <>
      <div className="row">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <FallingLines
              color="#4fa94d"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        ) : (
          <>
            {" "}
            <div className="col-md-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                {product.images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className="w-100"
                        src={img}
                        alt={product.title}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-md-8 d-flex justify-content-center flex-column">
              <h2 className="text-success">{product.title}</h2>
              <p className="text-black-50">{product.description}</p>
              <p>{product.category.name}</p>
              <p className="d-flex justify-content-between">
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
                  )}{" "}
                  EGP
                </span>
                <span>
                  {product.ratingsAverage}
                  <i className="gold fa-solid fa-star mx-1"></i>
                  Reviews: {product.ratingsQuantity}
                </span>
              </p>
              <button className="btn btn-success">Add To Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
