import React, { useEffect } from "react";
import { useUtils } from "../hooks/utils";
import ProjectCard from "./ProjectCard";
import "../App.css";

function ProjectCarousel() {
  const { getImageSource, useFetchData } = useUtils();

  // Fetch and cache data
  const endpoint = "featured_projects";
  const { data, error, isLoading } = useFetchData(endpoint);

  useEffect(() => {
    document.title = "Featured Projects - Thomas Kimble";
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.error("Failed to fetch data:", error);
    return (
      <div>
        <p>Error loading content. Please try again later.</p>
      </div>
    );
  }

  const projects = data.projects.map((project) => ({
    ...project,
    imagePath: getImageSource(
      `media/illustrations/color/featured_projects/${project.imagePath}`
    ),
  }));

  return (
    <div
      id="featured-projects"
      className="w-full overflow-hidden whitespace-nowrap"
    >
      <div
        id="featured-projects-container"
        className="inline-block animate-caroussel"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            imagePath={project.imagePath}
            title={project.title}
          />
        ))}
      </div>
      <div
        id="featured-projects-container"
        className="inline-block animate-caroussel"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            imagePath={project.imagePath}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
