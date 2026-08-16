// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importar estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400?random=1"
            alt="Slide 1"
            style={{ width: "100%", display: "block" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400?random=2"
            alt="Slide 2"
            style={{ width: "100%", display: "block" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400?random=3"
            alt="Slide 3"
            style={{ width: "100%", display: "block" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}