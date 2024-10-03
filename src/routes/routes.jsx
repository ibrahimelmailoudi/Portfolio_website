import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Error404 from "../Pages/Error404";
import SplashScreen from "../components/SplashScreen";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/Portfolio_website/":
        document.title = "Ibrahim El Mailoudi | Home";
        break;
      case "/Portfolio_website/about":
        document.title = "Ibrahim El Mailoudi | About";
        break;
      case "/Portfolio_website/contact":
        document.title = "Ibrahim El Mailoudi | Contact";
        break;
      case "/Portfolio_website/projects":
        document.title = "Ibrahim El Mailoudi | Projects";
        break;
      default:
        document.title = "Ibrahim El Mailoudi | Page Not Found";
    }
  }, [location.pathname]);
  

  return (
    <Routes>
      <Route path="/Portfolio_website/" element={<Home />} />
      <Route path="/Portfolio_website/about" element={<About/>} />
      <Route path="/Portfolio_website/contact" element={<Contact />} />
      <Route path="/Portfolio_website/projects" element={<Projects />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );  
};

export default AppRoutes;
