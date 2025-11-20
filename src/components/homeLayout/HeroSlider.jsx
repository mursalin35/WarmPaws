import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Images + slogans 
const sliderData = [
  {
    image: "https://i.ibb.co.com/DPHQqxqp/pet-1.jpg",
    slogan: ["Keep your furry friend cozy", "this winter ❄️"],
  },
  {
    image: "https://i.ibb.co.com/FQmDtbR/pet-2.jpg",
    slogan: ["Warm hearts,", "warm paws ❤️"],
  },
  {
    image: "https://i.ibb.co.com/0pZ6T87n/pet-6.png",
    slogan: ["Style and comfort", "for every pet 🐾"],
  },
];

const HeroSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between w-11/12 mx-auto gap-8 md:gap-6 py-8 md:py-12">
      {/* Left Content Section */}
      <div className="md:col-span-5 text-center md:text-left">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6">
          Winter pet platform for local care, clothing, grooming, and safety tips
        </h1>
        <button className="btn bg-[#A47C55] hover:bg-[#8B5E3B] border-none text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-base sm:text-lg">
          Learn More
        </button>
      </div>

      {/* Right Slider Section */}
      <div className="md:col-span-7 border-2 border-[#A47C55] rounded-xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-white/70 daisyui-dot",
            bulletActiveClass: "swiper-pagination-bullet-active bg-red-500",
          }}
          className="mySwiper w-full h-64 sm:h-80 md:h-96 relative"
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Image with slogan overlay */}
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`Pet Winter Wear Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay slogan (2-line) */}
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-2 sm:px-4">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg leading-snug">
                    {slide.slogan[0]} <br /> {slide.slogan[1]}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-next custom-swiper-nav text-white text-2xl sm:text-3xl">❯</div>
          <div className="swiper-button-prev custom-swiper-nav text-white text-2xl sm:text-3xl">❮</div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
