import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiShoppingCart } from "react-icons/ci";

import { useTheme } from "../../../../context/ThemeContext";

import cartProductsData from "../../../../data/Cart-products/cartProducts";

export default function Notification() {
  const [open, setOpen] = useState(true);

  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const textColor = theme === "dark" ? "black" : "white";
  const cartTextColor = theme === "dark" ? "white" : "black";
  const btnColor = theme === "dark" ? "black" : "white";
  const btnTextColor = theme === "dark" ? "white" : "black";

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
                          Notification
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
                            className={` rounded-[1rem] px-4 py-8 sm:grid sm:grid-cols-1 xl:grid xl:grid-cols-1  gap-x-8  gap-y-4 `}
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
                                </div>
                              </li>
                            ))}
                          </div>
                        </div>
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
