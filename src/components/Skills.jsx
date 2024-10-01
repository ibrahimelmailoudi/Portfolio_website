import { FaPaintBrush } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import img1 from "../assets/images/tool_11513208.png";
import { useContext } from "react";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  // Common styles for the boxes
  const boxClass = `border border-solid rounded-2xl h-52 w-52`;

  // Conditional styles based on the theme
  const boxThemeClass =
    theme === "dark" ? "border-3p text-white" : "border-5p text-black";

  return (
    <div className={`p-2 w-full ${boxThemeClass}`}>
      <div className="w-full flex flex-col text-center align-middle items-center gap-6">
        <h1 className="text-4xl">Skills</h1>
        <div className="w-full flex flex-row gap-10 justify-center items-center">
          <div className={`${boxClass} ${boxThemeClass} text-[8rem]`}>
          </div>
          <div className={`${boxClass} ${boxThemeClass}`}></div>
          <div className={`${boxClass} ${boxThemeClass}`}></div>
          <div className={`${boxClass} ${boxThemeClass}`}></div>
          <div className={`${boxClass} ${boxThemeClass}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
