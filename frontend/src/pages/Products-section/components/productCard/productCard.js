import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.css";

import { CiBookmark, CiShoppingCart } from "react-icons/ci";
import { GoBookmarkFill } from "react-icons/go";
import { useTheme } from "../../../../context/ThemeContext";

export default function ProductCard({ product }) {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const cartBackgroundColor = theme === "dark" ? "black" : "white";

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHoverImageIndex, setActiveHoverImageIndex] = useState(0);

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  useEffect(() => {
    let interval;
    if (isHovered && product.hoverImages && product.hoverImages.length > 1) {
      interval = setInterval(() => {
        setActiveHoverImageIndex(
          (prevIndex) => (prevIndex + 1) % product.hoverImages.length
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHovered, product.hoverImages]);

  return (
    <>
      <div
        key={product.id}
        className={`group z-50 cursor-pointer items-center justify-center relative text-base sm:text-sm bg-white border border-black  p-4 rounded-[55px] w-[20rem] h-[29rem] hover:scale-105 transition-all duration-300 `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveHoverImageIndex(0);
        }}
      >
        <div
          className=" text-black cursor-pointer relative text-3xl ml-4 mb-4 "
          onClick={toggleBookmark}
        >
          {isBookmarked ? <GoBookmarkFill /> : <CiBookmark />}
        </div>
        <div
          className={` z-20 absolute -top-2 -right-6 h-[5rem] w-[5rem] overflow-hidden rounded-[84px] bg-${backgroundColor} sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  group-hover:shadow-lg transition-all duration-300  flex justify-center items-center`}
        />

        <div
          className={` z-30 absolute top-0 -right-4 h-[4rem] w-[4rem] overflow-hidden rounded-full bg-${cartBackgroundColor} sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 cursor-pointer  flex justify-center items-center`}
        >
          <div className={`text-2xl text-${backgroundColor}`}>
            <CiShoppingCart />
          </div>
        </div>

        <div className="h-[18rem] w-[18rem]  aspect-h-1 aspect-w-1 overflow-hidden rounded-[40px] bg-gray-100  product-image ">
          {isHovered &&
          product.hoverImages &&
          product.hoverImages.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => {
                swiper.on("paginationRender", () => {
                  setActiveHoverImageIndex(swiper.realIndex);
                });
              }}
              className="h-full w-full"
            >
              {product.hoverImages.map((hoverImage, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={hoverImage}
                    alt={product.imageAlt}
                    className="object-cover object-center h-full w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover object-center h-full w-full"
            />
          )}
        </div>

        <div className=" relative flex flex-col p-2 pl-4 mx-4 my-2  rounded-primary  border  border-gray-700   ">
          <a
            href={product.href}
            className={`mt-2 mr-4 relative font-medium text-xl text-black `}
          >
            <span className="absolute inset-0 z-10   " aria-hidden="true" />
            {product.name}
          </a>
          <a
            href={product.href}
            className="mt-2 relative font-medium text-[12px] text-gray-700  "
          >
            <span className="absolute inset-0 z-10  " aria-hidden="true" />
            {product.des}
          </a>
        </div>
        <div className="z-10 relative -top-20 -right-[15rem] h-[6rem] w-[6rem]  overflow-hidden rounded-full bg-gray-500 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center text-white  ">
            <div className="text-2xl font-bold tracking-tight">
              {/* Original Price */}
              <div className="text-gray-900 text-sm line-through">
                Rs {product.originalPrice}
              </div>

              {/* Discounted Price */}
              <div>
                <span className="text-sm">Rs. </span>
                {product.discountedPrice}
              </div>
            </div>

            {/* Discount Percentage */}
            <div className="text-sm text-black">
              Save
              {(
                ((product.originalPrice - product.discountedPrice) /
                  product.originalPrice) *
                100
              ).toFixed(0)}
              %
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
