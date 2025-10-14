import React from "react";
import slide1 from "../../Assets/Images/slider-image-1.jpeg";
import slide2 from "../../Assets/Images/slider-image-2.jpeg";
import slide3 from "../../Assets/Images/slider-image-3.jpeg";
import slide4 from "../../Assets/Images/grocery-banner-1.jpeg";
import slide5 from "../../Assets/Images/grocery-banner-2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function MainSlider() {
  return (
    <div className="row gx-3">
      <div className="col-md-9 mb-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img className="w-100" height={400} src={slide1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" height={400} src={slide2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" height={400} src={slide3} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-md-3 d-flex flex-column gap-3 mb-3">
        <img src={slide4} className="w-100 h-50" alt="Slide 4" />
        <img src={slide5} className="w-100 h-50" alt="Slide 5" />
      </div>
    </div>
  );
}
