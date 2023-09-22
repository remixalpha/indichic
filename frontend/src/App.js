import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import SignIn from "./pages/Signin/signin";
import Products from "./pages/Products-section/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
