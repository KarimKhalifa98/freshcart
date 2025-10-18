import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";

function CategorySlider() {
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  let { isLoading, data } = useQuery({
    queryKey: ["categorySlider"],
    queryFn: getCategories
  });

  return (
    <div>
      <h2 className="mb-4">Categories</h2>
      <Swiper
        className="pb-4"
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 7,
          },
        }}
      >
        {isLoading ? (
          <FallingLines
            color="#4fa94d"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        ) : (
          <>
            {data?.data.data.map((category) => (
              <>
                <SwiperSlide key={category._id}>
                  <Link to="/">
                    <img
                      className="w-100"
                      height={150}
                      src={category.image}
                      alt={category.name}
                    />
                    <h6 className="text-center">{category.name}</h6>
                  </Link>
                </SwiperSlide>
              </>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
