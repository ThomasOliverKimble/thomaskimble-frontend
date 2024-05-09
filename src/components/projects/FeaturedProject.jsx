import React from "react";
import "../../App.css";

function FeaturedProject({ name, imagePath, title }) {
  return (
    <div
      id={`featured-project-${name}`}
      className="flex w-96 h-40 border-4 border-primary rounded-sm"
    >
      <div
        id={`featured-project-${name}-image-container`}
        className="w-3/5 border-r-4 border-primary"
      >
        <img
          src={imagePath}
          alt={`${title}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        id={`featured-project-${name}-title-container`}
        className="w-2/5 bg-primary p-4 overflow-visible"
      >
        <h2 className="text-fond font-extrabold text-4xl text-right whitespace-normal break-words">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default FeaturedProject;
