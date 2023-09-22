import React from "react";
import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import CountUp from "react-countup";

import data from "../../../../data/Home-page/content";
import background from "../../../../assets/images/background.jpg";

import { useTheme } from "../../../../context/ThemeContext";

import Card from "./components/Card";

export default function Banner() {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const textColor = theme === "dark" ? "black" : "white";
  const btnColor = theme === "dark" ? "black" : "white";
  const btnTextColor = theme === "dark" ? "white" : "black";

  const widgetContent = data.content[0];

  return (
    <div className={`bg-${backgroundColor} `}>
      <div className="mx-auto py-20">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-[10rem] lg:flex-auto lg:py-32 lg:text-left lg:scale-150">
            <div>
              <div>
                <h1
                  className={`text-4xl font-bold tracking-tight text-black sm:text-5xl leading-10 text-${textColor} `}
                >
                  {widgetContent.title}
                </h1>
                <p className="mt-6 text-md leading-6 text-gray-700 ">
                  {widgetContent.description}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start cursor-pointer ">
                <Link
                  to="/product"
                  className={`bg-${btnColor} text-${btnTextColor} font-bold rounded-[1.3rem]  px-4 py-4 text-sm font-poppins  shadow-md hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  Get started
                </Link>
                <a
                  href={widgetContent.playLink}
                  className="text-sm font-semibold leading-6 text-black"
                >
                  <div
                    className={` text-${btnColor} cursor-pointer relative text-4xl`}
                  >
                    <BsPlayCircle />
                  </div>
                </a>
              </div>
              <div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                  {widgetContent.stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                      <dt className="text-[10px] leading-7 text-gray-700">
                        {stat.name}
                      </dt>
                      <dd
                        className={`text-4xl font-bold leading-9 tracking-tight text-${textColor}`}
                      >
                        <CountUp
                          start={0}
                          end={parseInt(`${stat.value}`)}
                          duration={8}
                        />
                        <a className="ml-1">+</a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div>
            <div className="relative isolate lg:pt-0">
              <div className="relative top-[8rem] h-[35rem] w-[55rem] overflow-hidden rounded-[150px] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 transition-all duration-300">
                <img
                  src={background}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <Card id={1} />
              </div>
              <div className="absolute right-[28rem] top-5 scale-75">
                <Card id={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
