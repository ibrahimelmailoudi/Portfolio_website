import React, { useEffect, useRef, useContext, useState } from "react";
import image1 from "../assets/images/cropped_image-removebg-preview.png";
import image2 from "../assets/images/P01.png";
import CV from "../assets/document/CV_Ibrahim_El_Mailoudi.pdf";
import {
  BsFillPatchCheckFill,
  BsInstagram,
} from "react-icons/bs";
import Typed from "typed.js";
import { FaDownload, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ThemeContext } from "../Context/ThemeContext";
import Tooltip from "@mui/material/Tooltip";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const typedRef = useRef(null);
  const elementRef = useRef(null);
  const imageRef = useRef(null);
  const [ishover, setIshover] = useState(false);

  useEffect(() => {
    let observer;
    if (elementRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !typedRef.current) {
            typedRef.current = new Typed(".element", {
              strings: [
                "Welcome to my professional portfolio",
                "I am passionate about building great <br/>user experiences",
                "Explore my projects and work journey",
                "Bringing creativity and technology <br/>together",
                "Let's build the future, one line of code <br/>at a time",
              ],
              typeSpeed: 30,
              backSpeed: 50,
              loop: true,
              smartBackspace: true,
              showCursor: false,
            });
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });
    timeline
      .fromTo(
        ".image-profile",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          onStart: () => {
            if (imageRef.current) {
              imageRef.current.src = image1;
            }
          },
        }
      )
      .fromTo(".check", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(".job", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(".name", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(".element", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(".social-media-btndol", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      if (ishover) {
        gsap.to(imageRef.current, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            if (imageRef.current) {
              imageRef.current.src = image2;
              gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
            }
          },
        });
      } else {
        gsap.to(imageRef.current, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            if (imageRef.current) {
              imageRef.current.src = image1;
              gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
            }
          },
        });
      }
    }
  }, [ishover]);

  const linkedClass = `opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${theme === "dark" ? "border-primary text-primary" : "border-black text-black"
    }`;

  return (
    <div
      className={`relative flex flex-col items-center p-4 mb-4 ${theme === "dark" ? "text-white" : "text-black"
        }`}
    >
      <div className="xl:px-16 xl:py-14 lg:px-16 lg:py-10 md:px-8 md:py-6 sm:px-4 sm:py-2 relative flex xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-4 items-center">
        {/* Description and icons */}
        <div className="flex flex-col gap-2 h-96 select-none">
          <h1
            ref={elementRef}
            className="job font-Zilla font-medium text-wrap xl:text-left lg:text-left md:text-center sm:text-center 2xl:text-2xl xl:text-xl lg:text-md md:text-base sm:text-sm"
          >
            Front-End Developer
          </h1>
          <div>
            <h1 className="name font-Spline text-5xl">
              Hello I'm <br /> <span className={`font-Spline ${theme === "dark" ? "text-primary" : "text-primary"}`}>Ibrahim El Mailoudi</span>
            </h1>
          </div>
          <div className="flex flex-nowrap w-full xl:flex-col lg:flex-col sm:flex-col gap-5 mt-4">
            <div>
              <h1 className="flex items-center h-14 text-xl xl:flex lg:flex md:flex sm:hidden sm:text-2xl lg:text-2xl">
                <span className="element select-none font-Chakra"></span>
              </h1>
            </div>
            <div className="social-media-btndol flex flex-row align-middle items-center gap-9 py-4">
              {/*Button*/}
              <a
                href={CV} // Replace with the actual path to your file
                download="CV_Ibrahim_El_Mailoudi.pdf" // Replace with the desired download file name
              >
                <button className="flex cursor-pointer opacity-70 text-primary hover:opacity-100 hover:scale-110 border-opacity-50 transition transform duration-200 items-center justify-center gap-2 h-12 w-48 rounded-full border-1.8 border-primary">
                  <span className="p-0 font-Poppins text-base">DOWNLOAD CV</span>
                  <FaDownload />
                </button>
              </a>
              {/* Social media icons */}
              <div className="flex flex-row items-center justify-center gap-4">
                <Tooltip title="Facebook" arrow placement="top">
                  <a
                    href="#facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <FaFacebookF />
                  </a>
                </Tooltip>
                <Tooltip title="Instagram" arrow placement="top">
                  <a
                    href="#instagram"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
                  >
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        {/* Photo profile */}
        <div
          className={`md:mb-5 rounded-full sm:mb-5 relative flex justify-center transition-all duration-300`}
          onMouseEnter={() => setIshover(true)}
          onMouseLeave={() => setIshover(false)}
        >
          <img
            ref={imageRef}
            src={image1}
            alt="Ibrahim el Mailoudi's Profile Image"
            loading="lazy"
            className="cursor-pointer image-profile select-none shadow-sm drop-shadow-sm 2xl:w-[30rem] xl:w-96 lg:w-96 md:w-20 sm:w-10 "
          />
          <BsFillPatchCheckFill className="check absolute mt-4 top-full left-1/2 transform -translate-x-1/2 text-primary xl:text-base lg:text-base md:text-sm sm:text-sm" />
        </div>
      </div>
    </div >
  );
};

export default Hero;
