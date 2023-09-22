// ThemeToggleButton.js
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end group">
        <a
          href="#"
          className="rounded-[1rem] bg-black border border-white px-4 py-3.5 text-sm font-poppins text-white shadow-md hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <div className="relative top-1 left-0.5 w-5 h-5 text-white cursor-pointer group-hover:right-1 transition-all duration-300 ">
            {theme === "dark" ? <FiMoon /> : <FiSun />}
          </div>
        </a>
      </div>
    </button>
  );
}

export default ThemeToggleButton;
