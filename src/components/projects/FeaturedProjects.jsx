import React from "react";
import "../../App.css";
import FeaturedProject from "./FeaturedProject";

function FeaturedProjects({ projects }) {
  return (
    <div
      id={`featured-projects`}
      className="bg-green-500 w-full h-fit grid grid-cols-4 gap-4 p-4"
    >
      {projects.map((project) => (
        <FeaturedProject
          key={project.id}
          name={project.name}
          imagePath={project.imagePath}
          title={project.title}
        />
      ))}
    </div>
  );
}

export default FeaturedProjects;
