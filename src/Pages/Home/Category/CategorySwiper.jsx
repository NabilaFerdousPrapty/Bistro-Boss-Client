import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CategorySwiper = () => {
  return (
    <div>
       <SectionTitle heading={'ORDER ONLINE'} subHeading={"---From 11:00am to 10:00pm---"}
        text={"Explore our menu and never got lost"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="w-[90%]" />
          <h3 className="-mt-16 uppercase text-2xl text-center text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="w-[90%]" />
          <h3 className="-mt-16 uppercase text-2xl text-center text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="w-[90%]" />
          <h3 className="-mt-16 uppercase text-2xl text-center text-white">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="w-[90%]" />
          <h3 className="-mt-16 uppercase text-2xl text-center text-white">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="w-[90%] text-white"/>
          <h3 className="-mt-16 uppercase text-2xl text-center">
            Cakes
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
