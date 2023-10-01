import React, { useState } from "react";
import ProductCard from "../productCard/productCard";
import FilterBar from "../filterbar/filterBar";
import { RxArrowLeft } from "react-icons/rx";
import Img from "../../../../assets/images/bar.png";
export default function Collection({ collection }) {
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackClick = () => {
    setSelectedCollection(null);
  };

  return (
    <div>
      {selectedCollection ? (
        <div>
          <div className="absolute inset-x-0 top-[9rem] text-sm text-gray-500">
            <div
              className={`absolute inset-0 top-1/2 bg-black shadow ${
                selectedCollection ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />

            <div
              className={`bg- relative -top-8 ${
                selectedCollection ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 1 }}
            >
              <div className="mx-auto bg-black  min-h-screen relative -top-[5rem] ">
                <button
                  onClick={handleBackClick}
                  className="text-white text-2xl cursor-pointer ml-20 relative top-8 "
                  style={{ zIndex: 2 }}
                >
                  <RxArrowLeft />
                </button>
                <div className="grid grid-cols-2 gap-x-[75rem] gap-y-1 py-20 ">
                  <div className="col-start-1 grid grid-cols-2 lg:grid-cols-4 gap-x-[24rem] gap-y-[5rem] mx-20 animate-images-move-up  ">
                    {selectedCollection.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  <div className="col-start-2 mx-20 z-10 ">
                    <FilterBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            key={collection.id}
            className={`group relative cursor-pointer hover:scale-95 transition-all duration-300  ${
              selectedCollection === collection ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleCollectionClick(collection)}
          >
            <div className=" border-dashed border-black border-b-2 border-spacing-5 rounded-t-primary relative h-80 w-full overflow-hidden  bg-white  group-hover:opacity-75 lg:h-80 lg:w-72 ">
              <img
                src={collection.imageSrc}
                alt={collection.imageAlt}
                className="h-full w-full object-cover object-center  "
                style={{ filter: "blur(1px)" }}
              />
            </div>

            <div
              className="  h-80 w-full  top-0 left-0 right-0 absolute bg-gray-800 opacity-30 rounded-xl  transition-all duration-300"
              style={{ backdropFilter: "blur(10px)" }}
            />
            {/* <div className="absolute bg-black h-10 w-10 rounded-full -top-[1.3rem] flex mx-[8rem]  " /> */}
            <div className="rounded-b-primary bg-white relative  flex flex-col items-center justify-center lg:w-[18rem]  h-[7rem]  ">
              <div className=" absolute flex flex-row space-x-[15rem] -top-[1.3rem] ">
                <div className=" bg-black h-10 w-10 rounded-full  " />
                <div className=" bg-black  h-10 w-10 rounded-full " />
              </div>

              <div className=" items-start justify-center relative -top-[3rem]  ">
                <h3
                  className="text-3xl font-bold text-black  "
                  style={{
                    fontSize: "50px",
                    color: "rgba(255, 255, 255, 0)",
                    WebkitTextStroke: "1.1px white   ",
                  }}
                >
                  <a href={collection.href}>
                    <span className="absolute inset-0 " />
                    {collection.productName}
                  </a>
                </h3>
              </div>
              {/* Barcode */}
              <div className="absolute h-[4rem] w-[5rem] left-0 top-0  flex flex-shrink-0 mx-2 my-6  items-center justify-center transform rotate-90">
                <img
                  src={Img}
                  alt=""
                  className="h-[8rem] w-[8rem] object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start relative -top-4 left-4  p-2 h-full w-44 ">
                <p className=" font-bold text-[15px] text-gray-600  truncate">
                  UP TO
                </p>
                <a
                  href={collection.href}
                  className=" font-bold text-[34px] text-black  truncate"
                >
                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                  {collection.des}{" "}
                  <span className=" font-serif text-[2rem] ">%</span>
                </a>
                <p className=" font-light text-[20px] text-black ">OFF</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
