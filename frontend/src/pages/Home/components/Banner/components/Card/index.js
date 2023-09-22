import React from "react";
import "./style.css";

import data from "../../../../../../data/Home-page/content";

import { useTheme } from "../../../../../../context/ThemeContext";

export default function Card({ id }) {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "black" : "white";

  const product = data.products.find(
    (product) => product.widgetProductCard.id === id
  );

  return (
    <div className="flex space-x-4 cursor-pointer ">
      <div key={id}>
        <div className=" absolute top-[6rem] right-[5rem] h-[26rem] w-[20rem] overflow-hidden rounded-[88px] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 animate-bounce  ">
          <div className="absolute top-2 left-2 h-[19rem] w-[19rem] overflow-hidden rounded-[78px] bg-gray-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
            <img
              src={product.widgetProductCard.productImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <h1
            className={`flex flex-1  text-3xl font-bold leading-9 tracking-tight relative top-[21rem] left-2  mx-[4rem] text-black border border-gray-600 pb-2 pt-2  pr-2 pl-4 rounded-primary `}
          >
            {product.widgetProductCard.productName}
          </h1>
        </div>

        <div className=" z-50 absolute top-[26rem] right-[21rem] h-[8rem] w-[8rem] overflow-hidden rounded-[84px] bg-gray-500 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 animate-bounces flex justify-center items-center">
          <h1
            className={`flex text-4xl font-bold leading-9 tracking-tight ml-6 text-${textColor}`}
          >
            {product.widgetProductCard.discountText}
          </h1>
        </div>
      </div>
    </div>
  );
}
