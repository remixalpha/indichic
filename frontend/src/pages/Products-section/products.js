import { useState } from "react";
import "./style.css";
import { Popover } from "@headlessui/react";
import { CiShoppingCart } from "react-icons/ci";
import { PiBellSimpleLight } from "react-icons/pi";

import { useTheme } from "../../context/ThemeContext";

import productData from "../../data/Product-page/productData";

import DiscountBanner from "./components/Discount-Banner/discountBanner";
import SearchBar from "./components/search/search";
import ShoppingCart from "./components/cart/cart";
import Notification from "./components/Notification/notification";
import ProductCollection from "./components/productCollection/productCollection";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Product() {
  const [open, setOpen] = useState(true);
  const [openNotification, setOpenNotification] = useState(true);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(0);

  const handleToggleOpenCart = () => {
    setOpen(!open);
  };
  const handleToggleOpenNotification = () => {
    setOpenNotification(!openNotification);
  };
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const cartBackgroundColor = theme === "dark" ? "black" : "white";
  const textColor = theme === "dark" ? "black" : "white";
  const cartTextColor = theme === "dark" ? "white" : "black";

  return (
    <div name="productSection" className={`bg-${backgroundColor} relative  `}>
      {/* Banner */}
      <div>
        <DiscountBanner />
      </div>

      <div className="mx-auto max-w-screen  px-4 sm:px-6  lg:px-8">
        <div className="flex flex-1 justify-center h-16  items-center">
          <div className=" lg:ml-8  lg:block lg:self-stretch">
            <div className="flex   h-full space-x-8  cursor-pointer ">
              {productData.categories.map((category, index) => (
                <Popover key={category.id} className="flex ">
                  {({ open }) => (
                    <>
                      <div className="relative flex  ">
                        <div
                          key={category.id}
                          onClick={() => setOpenCategoryIndex(index)}
                          className={classNames(
                            open || index === openCategoryIndex
                              ? `bg-${cartBackgroundColor}  text-${cartTextColor} `
                              : `border-transparent text-${textColor}  hover:text-gray-800 p-4 my-8`,
                            `relative z-10 border border-${textColor}    flex items-center rounded-xl p-4 my-8  text-sm font-medium transition-colors duration-200 ease-out`
                          )}
                        >
                          {category.name}
                        </div>
                      </div>
                      {index === openCategoryIndex && (
                        <div
                          className={`fixed inset-0 overflow-y-scroll bg-${backgroundColor} top-[8rem] `}
                        >
                          <div className="mx-auto max-w-screen  px-4 sm:px-6 lg:px-0  ">
                            <div className="mx-auto min-w-screen py-16 sm:py-24 lg:max-w-none lg:py-10   ">
                              <div className="px-8  lg:grid lg:grid-cols-6 lg:gap-x-4 lg:gap-y-8 ">
                                {category.collection.map((collection) => (
                                  <ProductCollection
                                    key={collection.id}
                                    collection={collection}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Popover>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-8 ">
            {/* Search */}
            <div className="flex  ">
              <SearchBar />
            </div>

            {/* Notification */}
            <div
              className="ml-4 flow-root lg:ml-6"
              onClick={handleToggleOpenNotification}
            >
              <button className="group -m-2 flex items-center p-2">
                <PiBellSimpleLight
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  2
                </span>
              </button>
            </div>

            {/* Cart */}
            <div
              className="ml-4 flow-root lg:ml-6"
              onClick={handleToggleOpenCart}
            >
              <button className="group -m-2 flex items-center p-2">
                <CiShoppingCart
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  2
                </span>
              </button>
            </div>
            <div className="flex -space-x-2 overflow-hidden relative ">
              <img
                className="inline-block h-8 w-8 rounded-full "
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          {open && <ShoppingCart />}
          {openNotification && <Notification />}
        </div>
      </div>
    </div>
  );
}
