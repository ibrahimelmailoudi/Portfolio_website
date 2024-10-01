import { Link, useLocation } from "react-router-dom";
import {
  BsHouse,
  BsInfoCircle,
  BsEnvelopeAt,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const SideNavBar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const [page, setPage] = useState(location.pathname); // State to track active link

  useEffect(() => {
    setPage(location.pathname);
  }, [location.pathname]);

  const setActiveLink = (path) => {
    return location.pathname === path
      ? `${
          theme === "dark"
            ? "border-b-2 border-white"
            : "border-b-2 border-black"
        }`
      : "";
  };

  const linkClass =
    theme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-black hover:text-gray-700";

  return (
      <div
        className={`p-4 ${
          theme === "dark"
            ? "bg-gray-800 shadow-gray-700"
            : "bg-white shadow-gray-300"
        } flex flex-col items-center justify-center w-12 ml-5 gap-8 text-sm h-72 rounded-full drop-shadow-lg`}
      >
        <img src={img2} alt="img2" className="w-6 absolute top-0" />
        <Link
          to="/"
          className={`${linkClass} ${setActiveLink("/")}`}
          onClick={() => setPage("/")}
        >
          <BsHouse className="text-xl" />
        </Link>
        <Link
          to="/about"
          className={`${linkClass} ${setActiveLink("/about")}`}
          onClick={() => setPage("/about")}
        >
          <BsInfoCircle className="text-xl" />
        </Link>
        <Link
          to="/contact"
          className={`${linkClass} ${setActiveLink("/contact")}`}
          onClick={() => setPage("/contact")}
        >
          <BsEnvelopeAt className="text-xl" />
        </Link>
      </div>
  );
};

export default SideNavBar;
