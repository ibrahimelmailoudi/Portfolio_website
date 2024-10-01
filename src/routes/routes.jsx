import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Test from "../TestFile";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Test/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
);

export default AppRoutes;
