import React, { useRef, useState } from "react";

import CustomNavbar from "../../components/Navbar";
import Banner from "./components/Banner";
import Promo from "./components/Promos/promo";

import { useTheme } from "../../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "white" : "black";

  return (
    <div className={`bg-${backgroundColor} flex flex-col `}>
      <div className="">
        <CustomNavbar />
      </div>
      <Banner />
      <div>
        <Promo />
      </div>
    </div>
  );
}
