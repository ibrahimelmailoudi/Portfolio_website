import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Container = ({ children, direction = "column", gap, maxWidth = "lg", width = "full", height = "full" }) => {
  const { theme } = useContext(ThemeContext);

  // Define Tailwind CSS classes for gap sizes
  const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
  };

  // Select the gap class based on the provided prop, default to gap-4
  const gapClass = gapClasses[gap] || "gap-4";

  // Define height classes for custom values
  const heightClasses = {
    auto: "h-auto",
    short: "h-24",
    medium: "h-48",
    tall: "h-72",
    full: "h-full",
    default: "h-[88vh]",
  };

  // Select the height class based on the provided prop, default to 88vh
  const heightClass = heightClasses[height] || heightClasses["default"];

  // Define max-width classes for responsive widths similar to Material UI
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  // Default max width is lg
  const maxWidthClass = maxWidthClasses[maxWidth] || maxWidthClasses["lg"];

  // Define width classes for custom values
  const widthClasses = {
    auto: "w-auto",
    narrow: "w-1/4",
    half: "w-1/2",
    wide: "w-3/4",
    full: "w-full",
    default: "w-auto",
  };

  // Select the width class based on the provided prop, default to auto
  const widthClass = widthClasses[width] || widthClasses["default"];

  return (
    <div
      className={`container ${maxWidthClass} ${widthClass} mx-auto flex p-2 m-4 ${direction === "row" ? "flex-row" : "flex-col"} ${gapClass} ${heightClass}`}
    >
      {children}
    </div>
  );
};

export default Container;
