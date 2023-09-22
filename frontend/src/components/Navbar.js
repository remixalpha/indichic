import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiChevronRight } from "react-icons/fi";

import DarkMode from "./DarkMode-Button/ ThemeToggleButton";

import { useTheme } from "../context/ThemeContext";

export default function CustomNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "";
  }, [mobileMenuOpen]);

  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";
  const textColor = theme === "dark" ? "black" : "white";
  const btnColor = theme === "dark" ? "black" : "white";
  const btnTextColor = theme === "dark" ? "white" : "black";

  return (
    <header className={`bg-${backgroundColor} scale-100`}>
      <nav
        className="flex lg:max-w-[100rem] p-5 lg:mx-auto items-center justify-between lg:px-[8rem] mx-8   border-b  border-gray-300   "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-6 w-6 text-${textColor} `}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-center lg:relative lg:right-[6rem] ">
          <a href="/" className="-m-1.5 p-1.5">
            <span className={`text-${textColor} font-bold text-4xl`}>
              indichic
            </span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-2 ">
          <div className="lg:flex lg:flex-1   lg:justify-end group">
            <DarkMode />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end group">
            <a
              href="/signin"
              className="rounded-[1rem] border border-white bg-black px-10 py-3.5 text-sm font-poppins text-white shadow-md hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign in
            </a>
            <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer group-hover:right-1 transition-all duration-300 ">
              <FiChevronRight />
            </div>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 max-w-[100vw]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-black font-bold ">indichic</span>
              {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
