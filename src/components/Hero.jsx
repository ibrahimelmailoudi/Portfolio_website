import React, { useEffect, useRef, useContext, useState } from "react";
import image from "../assets/Logo/ibrahim_icon.png";
import {
  BsCaretDownFill,
  BsFillPatchCheckFill,
  BsInstagram,
} from "react-icons/bs";
import Typed from "typed.js";
import Lottie from "lottie-react";
import devAnimation from "../assets/Animation/Animation - 1719798504786.json";
import mouseAnimation from "../assets/Animation/Animation - 1719841389869.json";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ThemeContext } from "../Context/ThemeContext";
import background1 from "../assets/background/controls-1853330_1920.jpg";
import Tooltip from "@mui/material/Tooltip";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const typedRef = useRef(null);
  const mouseAnimationRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(".element", {
      strings: [
        "Welcome To my Portfolio website",
        "Hope you enjoy exploring",
        "my work experience",
      ],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (mouseAnimationRef.current) {
      gsap.fromTo(
        mouseAnimationRef.current,
        { scale: 0, y: 20 },
        { scale: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".social-media",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, []);

  const linkedClass = `opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${theme === "dark" ? "border-white text-white" : "border-black text-black"
    }`;

  return (
    <>
      <div
        className={`relative flex flex-col items-center p-4 mb-4 ${theme === "dark" ? "text-white" : "text-black"
          }`}
      >
        <div className="xl:px-16 xl:py-14 lg:px-16 lg:py-10 md:px-8 md:py-6 sm:px-4 sm:py-2 relative flex xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-4 items-center">
          {/* Photo profile */}
          <div className="md:mb-5 sm:mb-5 image-container rounded-full relative flex justify-center transition-all duration-300">
            {" "}
            <img
              src={image}
              alt="Ibrahim el Mailoudi's Profile Image"
              className="select-none hero-image cursor-pointer rounded-full 2xl:w-[71rem] xl:w-[70rem] lg:w-[65rem] md:w-40 sm:w-20 "
            />
            <BsFillPatchCheckFill className="animate-pulse absolute mt-4 top-full left-1/2 transform -translate-x-1/2 text-blue-400 xl:text-base lg:text-base md:text-sm sm:text-sm" />
          </div>

          {/* Description and icons */}
          <div className="flex flex-col select-none">
            <h1 className="font-Poppins text-wrap xl:text-left lg:text-left md:text-center sm:text-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-base sm:text-sm">
              <span className="animate-pulse font-bold">
                React.js Front-End Developer
              </span>{" "}
              Crafting Your Modern Web Applications
              <span
                className={`${theme === "dark" ? "text-yellow-300" : "text-blue-400"
                  } block py-1`}
              >
                Making the Impossible, Possible Is MY ROLE
              </span>
            </h1>
            <div className="flex flex-nowrap w-full xl:flex-row lg:flex-row sm:flex-col items-center gap-5 mt-4">
              {/* Social media icons */}
              <div className="social-media flex xl:flex-col lg:flex-col sm:flex-row items-center justify-center gap-4">
                <Tooltip title="Facebook" arrow placement="right">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <FaFacebookF />
                  </a>
                </Tooltip>
                <Tooltip title="Instagram" arrow placement="top">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <BsInstagram />
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow placement="top">
                  <a
                    href="https://www.linkedin.com/in/ibrahimelmailoudi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <FaLinkedinIn />
                  </a>
                </Tooltip>
                <Tooltip title="GitHub" arrow placement="right">
                  <a
                    href="https://github.com/ibrahimelmailoudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>

              {/* Description profile */}
              <div>
                <h2 className="font-Raleway xl:flex lg:flex md:flex sm:hidden xl:text-justify lg:text-justify xl:text-wrap lg:text-wrap md:text-wrap md:text-center sm:text-center sm:text-sm md:text-sm lg:text-lg">
                  As a skilled React.js front-end developer, I create dynamic,
                  responsive web applications focused on delivering seamless
                  user experiences. With expertise in HTML, CSS, JavaScript,
                  Tailwind CSS, and Redux, I ensure every project is visually
                  appealing and functionally robust. I also bring back-end
                  development experience, working with Node.js, Express, and
                  RESTful APIs to build scalable, efficient systems. This
                  full-stack knowledge allows me to build cohesive,
                  high-performance web applications.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl xl:flex lg:flex md:flex sm:hidden sm:text-2xl lg:text-4xl font-bold mb-16">
            <span className="select-none element font-SpaceGrotesk"></span>
          </h1>
        </div>
      </div>
      {/* <img
        src={background1}
        alt="background"
        loading="lazy"
        className="select-none pointer-events-none absolute top-0 right-0 -z-10 opacity-10 object-cover"
      /> */}
    </>
  );
};

export default Hero;
