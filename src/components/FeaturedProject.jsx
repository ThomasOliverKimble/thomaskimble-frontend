import React from "react";
import "../App.css";

function FeaturedProject({ name, imagePath, title }) {
  return (
    <div id={`featured-project-${name}`} className="h-full">
      <img src={imagePath} alt={`${title}`} />
      <h2>{title}</h2>
    </div>
  );
}

export default FeaturedProject;
