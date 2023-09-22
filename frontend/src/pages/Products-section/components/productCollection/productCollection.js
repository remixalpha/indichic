import React, { useState } from "react";
import ProductCard from "../productCard/productCard";
import FilterBar from "../filterbar/filterBar";
import { RxArrowLeft } from "react-icons/rx";
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
            <div className="  border-dashed border-black border-b-2 rounded-t-primary relative h-80 w-full overflow-hidden  bg-white  group-hover:opacity-75 lg:h-80 lg:w-72 ">
              <img
                src={collection.imageSrc}
                alt={collection.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="  rounded-b-primary bg-white relative  flex flex-col items-center justify-center w-72 mx-auto  ">
              <div className=" relative flex flex-row space-x-[15rem] -top-[2rem] ">
                <div className=" bg-black  h-14 w-14 rounded-full  " />
                <div className=" bg-black  h-14 w-14 rounded-full " />
              </div>

              <div className="flex flex-col items-center justify-center relative -top-[2rem] ">
                <h3 className="text-3xl font-bold text-black ">
                  <a href={collection.href}>
                    <span className="absolute inset-0" />
                    {collection.productName}
                  </a>
                </h3>
                {/* <a
                  href={collection.href}
                  className=" relative font-medium text-[20px] text-gray-700  "
                >
                  <span
                    className="absolute inset-0 z-10  "
                    aria-hidden="true"
                  />
                  {collection.des}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
