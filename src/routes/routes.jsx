import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Test from "../TestFile";
import Error404 from "../Pages/Contact copy";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
