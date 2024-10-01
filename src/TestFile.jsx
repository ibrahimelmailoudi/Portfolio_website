import {
  BsCaretDownFill,
  BsFillPatchCheckFill,
  BsInstagram,
} from "react-icons/bs";
import image from "./assets/Logo/ibrahim_icon.png";
import Tooltip from "@mui/material/Tooltip";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaClosedCaptioning,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";

const Test = () => {
  const { theme } = useContext(ThemeContext);
  const [showProfile, setShowProfile] = useState(false);
  const profileInfoRef = useRef();

  useEffect(() => {
    if (profileInfoRef.current) {
      if (showProfile) {
        // Animation for opening the profile
        gsap.fromTo(
          profileInfoRef.current,
          { scale: 0.2, opacity: 0 }, // Start small and invisible
          { scale: 1, opacity: 1, duration: 0.5 } // End normal size and visible
        );
      } else {
        // Animation for closing the profile
        gsap.to(profileInfoRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
        });
      }
    }
  }, [showProfile]);

  const linkedClass = `opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${
    theme === "dark" ? "border-white text-white" : "border-black text-black"
  }`;

  return (
    <>
      <div className="p-16 relative flex flex-row gap-4 items-center">
        {/* Photo profile */}
        <div
          className="image-container rounded-full relative flex justify-center transition-all duration-300"
          onClick={() => setShowProfile((prev) => !prev)} // Toggle on click
        >
          <BsCaretDownFill className="animate-bounce-slow absolute bottom-full left-1/2 transform mb-2 -translate-x-1/4  text-2xl" />
          <img
            src={image}
            alt="Ibrahim"
            className="hero-image animate-pulse cursor-pointer rounded-full sm:w-80"
          />
          <BsFillPatchCheckFill className="absolute top-full left-1/2 transform -translate-x-1/2 text-blue-400 mt-4 text-base cursor-pointer" />
        </div>

        {/* Description and icons */}
        <div className="flex flex-col">
          <h1 className="font-Poppins sm:text-sm md:text-base lg:text-2xl">
            <span className="animate-pulse">React.js Front-End Developer</span>{" "}
            Crafting Your Modern Web Applications
            <span className="text-yellow-300 block py-1 animate-bounce-slow">
              Making the Impossible, Possible Is MY ROLE
            </span>
          </h1>
          <div className="flex flex-nowrap w-full flex-row items-center gap-5 mt-4">
            {/* Social media icons */}
            <div className="social-media flex flex-col items-center justify-center gap-4">
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
            <div className="max-w-[75rem]">
              <h2 className="font-Raleway text-justify sm:text-sm md:text-base lg:text-lg">
                As a skilled React.js front-end developer, I create dynamic,
                responsive web applications focused on delivering seamless user
                experiences. With expertise in HTML, CSS, JavaScript, Tailwind
                CSS, and Redux, I ensure every project is visually appealing and
                functionally robust. I also bring back-end development
                experience, working with Node.js, Express, and RESTful APIs to
                build scalable, efficient systems. This full-stack knowledge
                allows me to build cohesive, high-performance web applications.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Profile overlay */}
      {showProfile && (
        <div
          ref={profileInfoRef}
          className={`profile-info fixed z-50  rounded-3xl shadow-lg ${
            theme === "dark" ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centering transformation
            width: 800,
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)", // Shadow for visibility
          }}
        >
          <IoClose
            className="text-gray-200 text-[2.5rem] absolute top-5 right-5 cursor-pointer hover:text-white transform duration-300"
            onClick={() => setShowProfile(false)}
          />
          <p>Ibrahim's Profile</p>
        </div>
      )}
    </>
  );
};

export default Test;
