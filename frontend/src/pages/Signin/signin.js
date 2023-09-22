import React, { useState } from "react";
import axios from "axios";
import { RxArrowLeft } from "react-icons/rx";

import { useTheme } from "../../context/ThemeContext";

import product1 from "../../assets/images/coat.jpg";
import product2 from "../../assets/images/shorts.jpg";
import product3 from "../../assets/images/Men/pants/Chinese Style Cotton and Linen Pants Striped 2.jpeg";
import product4 from "../../assets/images/women/sweaters/𝗥𝗠.jpeg";

const product = {
  images: [
    {
      src: product1,
      alt: "product",
    },
    {
      src: product2,
      alt: "product",
    },
    {
      src: product3,
      alt: "product",
    },
    {
      src: product4,
      alt: "product",
    },
  ],
};

export default function SignIn({ setIsSignedIn, setNotification }) {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <div
        className={`flex  min-h-screen flex-1 flex-col lg:grid lg:grid-cols-2 justify-center px-6  lg:px-8 bg-${backgroundColor} `}
      >
        <div className=" mx-auto my-5 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-4 lg:px-8 cursor-pointer">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-[2rem] lg:block    ">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center transform duration-300 hover:scale-110 "
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-[2rem]  ">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center transform duration-300 hover:scale-110 "
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-[2rem]  ">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center transform duration-300 hover:scale-110 "
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-[2rem] ">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center transform duration-300 hover:scale-110 "
            />
          </div>
        </div>

        <div className="relative  mx-auto  lg:max-w-7xl lg:min-h-screen w-full sm:mx-auto sm:w-full sm:max-w-sm bg-white p-[8rem]  ">
          <div className="absolute inset-0 z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M100 200V.5M.5 .5H200"
                    fill=" currentColor"
                    className="fill-amber-200"
                  />
                </pattern>
              </defs>

              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className=" relative z-50 -mt-20 ">
            <a
              href="/"
              className="flex flex-start text-left font-medium text-black "
            >
              <div className="text-black text-4xl">
                <RxArrowLeft />
              </div>
            </a>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center ">
              <span
                className={`text-black font-bold text-[8rem] antialiased  `}
              >
                indichic
              </span>
            </div>
            <form className="space-y-10 mt-10 " method="POST">
              <div className=" border-b-2 relative flex flex-col items-center justify-center ">
                <button
                  type="button"
                  class="text-white w-full  justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-[1rem] text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    class="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  class="text-white w-full mb-10 justify-center bg-black hover:bg-gray-800 font-medium rounded-[1rem]  text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 "
                >
                  <svg
                    class="mr-2 -ml-1 w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                  Sign in with Apple
                </button>
                <p className="text-black bg-white h-6 w-10 absolute mt-32 rounded-full flex justify-center ">
                  or
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full pl-5 border caret-black border-black rounded-md py-1.5 text-black shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-black hover:text-gray-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full pl-5 caret-black border bg-white border-black rounded-md py-1.5 text-black shadow-sm  placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex  w-full justify-center rounded-[1rem] bg-black px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // onClick={handleSignIn}
                >
                  Sign in
                </button>
                {error && <p>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
