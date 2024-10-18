import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Pages
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

//import components
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
