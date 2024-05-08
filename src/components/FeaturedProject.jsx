import React from "react";
import "../App.css";

function FeaturedProject({ name, imagePath, title }) {
  return (
    <div id={`featured-project-${name}`} className="flex justify-center items-center border-2 border-blue-500 hover:bg-blue-500 transition-colors duration-300">
      <img src={imagePath} alt={`${title}`} />
      <h2>{title}</h2>
    </div>
  );
}

export default FeaturedProject;
