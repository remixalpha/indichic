import "./style.css";
import { RxArrowRight } from "react-icons/rx";

import promo1 from "../../../../assets/images/women/Cardigan/I Love Mr Mittens Fishermans Cardigan In Taupe _ ModeSens.jpeg";
import promo2 from "../../../../assets/images/women/pants/overalls outfit.jpeg";
import promo3 from "../../../../assets/images/women/shirt/The Brands With the Best Clothing-Recycling Programs.jpeg";
import promo4 from "../../../../assets/images/women/sweaters/𝗥𝗠.jpeg";
import promo5 from "../../../../assets/images/Men/jacket/_.jpeg";
import promo6 from "../../../../assets/images/Men/pants/Chinese Style Cotton and Linen Pants Striped 2.jpeg";
import promo7 from "../../../../assets/images/Men/shirt/OrcaJump - Mens Solid Color Street Button Short Sleeve Tops, Breathable & Comfortable Summer Shirts in Green, Blue & Khaki - Blue _ 3XL.jpeg";
import promo8 from "../../../../assets/images/Men/shorts/Men Flap Pocket Side Shorts.jpeg";

export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-black max-h-full ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Step into the world of indiChic
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              where we encourage you to break free from the ordinary and embrace
              your own unique fashion journey
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl  "
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="  group grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-images-scroll">
                      <div className=" h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] sm:opacity-0 lg:opacity-100   ">
                        <img
                          src={promo1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem]  ">
                        <img
                          src={promo2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] ">
                        <img
                          src={promo3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] ">
                        <img
                          src={promo4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-images-scroll ">
                      <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                        <img
                          src={promo5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                        <img
                          src={promo6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                        <img
                          src={promo7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                        <img
                          src={promo8}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/"
                className="inline-block rounded-primary border border-transparent bg-white px-14 py-5 text-center font-medium text-black "
              >
                <div className="text-black text-lg">
                  <RxArrowRight />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
