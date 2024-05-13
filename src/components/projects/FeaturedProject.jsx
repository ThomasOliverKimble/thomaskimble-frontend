import React from "react";
import "../../App.css";

function FeaturedProject({ name, imagePath, title }) {
  return (
    <div id={`featured-project-${name}`} className="inline-block">
      <div
        id={`featured-project-${name}-container`}
        className="flex flex-none w-96 h-40 border-4 border-primary rounded-sm mr-4"
      >
        <div
          id={`featured-project-${name}-hover`}
          className="absolute bg-primary opacity-0 w-[23.5rem] h-[9.5rem] hover:cursor-pointer hover:opacity-30"
        />
        <div
          id={`featured-project-${name}-image-container`}
          className="w-3/5 border-r-4 border-primary"
        >
          <img
            src={imagePath}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          id={`featured-project-${name}-title-container`}
          className="w-2/5 bg-primary p-4 whitespace-normal"
        >
          <h2 className="text-fond font-extrabold text-4xl text-right break-words">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
