import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiShoppingCart } from "react-icons/ci";

import { useTheme } from "../../../../context/ThemeContext";

import cartProductsData from "../../../../data/Cart-products/cartProducts";

export default function Cart() {
  const [open, setOpen] = useState(true);

  // For the price set with the qty value
  const [selectedQty, setSelectedQty] = useState(1);

  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const textColor = theme === "dark" ? "black" : "white";
  const cartTextColor = theme === "dark" ? "white" : "black";
  const btnColor = theme === "dark" ? "black" : "white";
  const btnTextColor = theme === "dark" ? "white" : "black";

  // For the price withe the value selected in qty
  // Calculate the total price based on the selected quantity
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartProductsData.products.forEach((product) => {
      const productPrice = selectedQty * parseFloat(product.discountedPrice); // Multiply by selectedQty and use discountedPrice
      totalPrice = productPrice;
    });

    return totalPrice.toFixed(2);
  };

  // Function to handle quantity selection change
  const handleQtyChange = (event) => {
    const newQty = parseInt(event.target.value);
    setSelectedQty(newQty);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-800"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[60rem]  ">
                  <div
                    className={`xl:flex xl:flex-col h-full sm:grid sm:grid-cols-2 overflow-y-scroll bg-${backgroundColor} bg-opacity-80  shadow-xl  rounded-[2rem]  `}
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title
                          className={`text-xl font-medium text-${textColor}`}
                        >
                          Cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className={`relative -m-2 p-2 text-${textColor} hover:text-gray-500`}
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8  ">
                        <div className=" ">
                          <div
                            role="list"
                            className={` bg-lightPrimary rounded-[1rem] px-4 py-8 sm:grid sm:grid-cols-1 xl:grid xl:grid-cols-2  gap-x-8  gap-y-4 `}
                          >
                            {cartProductsData.products.map((product) => (
                              <li
                                key={product.id}
                                className=" flex py-6  rounded-primary px-4  bg-white hover:scale-105 transition-all duration-300 "
                              >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden ">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div
                                      className={`flex justify-between text-base font-medium text-${cartTextColor}`}
                                    >
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="relative -m-2 p-2 text-black hover:text-gray-500"
                                          onClick={() => setOpen(false)}
                                        >
                                          <span className="absolute -inset-0.5" />
                                          <span className="sr-only">
                                            Close panel
                                          </span>
                                          <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex flex-row space-x-4 items-center justify-center ">
                                      <div>
                                        <p className="text-gray-500">Qty</p>
                                      </div>
                                      <div className="sm:col-span-3">
                                        <div className="mt-2">
                                          <select
                                            id="qty"
                                            name="qty"
                                            autoComplete="qty-no"
                                            className="block w-full rounded-md border-0 py-1.5 bg-white text-black shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={handleQtyChange}
                                            value={selectedQty}
                                          >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="ml-4">
                                      ${calculateTotalPrice()}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-10 sm:px-6 p ">
                      <div
                        className={`flex justify-between text-base font-medium text-${textColor} p-4 `}
                      >
                        <p>Total</p>
                        <p>${calculateTotalPrice()}</p>
                      </div>

                      <div className="mt-6 group ">
                        <a
                          href="#"
                          className={`flex items-center justify-center rounded-[1rem] border border-transparent bg-${btnColor} px-6 py-3 text-base font-medium  shadow-sm hover:bg-black `}
                        >
                          <div
                            className={`text-2xl text-${btnTextColor}  group-hover:text-white`}
                          >
                            <CiShoppingCart />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
