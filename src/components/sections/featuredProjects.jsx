import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const FeaturedProjects = () => {
    const { theme } = useContext(ThemeContext);

  const btnBox = `flex flex-col justify-center ${
    theme === "dark" ? "bg-3p border border-2 border-4.5p" : "bg-5p border border-2 border-4p"
  } rounded-xl p-[1px]`;

  const projects = [
    {
      id: 1,
      img: img1,
      title: "Project 1",
      description: "Description for project 1",
    },
    {
      id: 2,
      img: img1,
      title: "Project 2",
      description: "Description for project 2",
    },
    {
      id: 3,
      img: img1,
      title: "Project 3",
      description: "Description for project 3",
    },
    {
      id: 4,
      img: img1,
      title: "Project 4",
      description: "Description for project 4",
    },
    {
      id: 5,
      img: img1,
      title: "Project 5",
      description: "Description for project 5",
    }
  ];

  return (
    <div className="flex flex-col w-full p-6 items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Lastest Projects</h2>
      <div className="h-auto flex flex-wrap justify-center w-full p-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className={btnBox}>
            <img src={project.img} alt="img" className="w-52 rounded-tl-xl rounded-tr-xl" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
