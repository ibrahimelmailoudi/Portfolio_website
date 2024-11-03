import blackIcon from "../assets/images/maintenance-black.svg";
import whiteIcon from "../assets/images/maintenance-01-01.svg";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const StillInDev = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="w-screen h-screen">
            <div className="p-20 flex flex-col gap-10 items-center justify-center ">
                {theme === "dark" ?
                    <img src={whiteIcon} alt="Still in Development" className="w-72 animate-spin-slow" /> : <img src={blackIcon} alt="Still in Development" className="w-72 animate-spin-slow" />
                }
                <p className="font-Oxanium font-bold text-4xl animate-pulse">Still in developement</p>
            </div>
        </div>
    );
}

export default StillInDev;