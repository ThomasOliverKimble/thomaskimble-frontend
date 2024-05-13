import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "../../App.css";
import FeaturedProject from "./FeaturedProject";

const fallbackResponsePath = "/fallback_api_responses/featured_projects.json";

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const { mediaPath } = useTheme();

  useEffect(() => {
    async function fetchProjects() {
      let fetchedProjects;

      try {
        const response = await fetch("https://api.example.com/projects");
        if (!response.ok) throw new Error("Network response failure.");
        const data = await response.json();
        fetchedProjects = data.projects; // Correctly access the projects array from the response
      } catch (error) {
        console.warn(
          "API not set up or failed, using fallback data from local JSON:",
          error
        );
        // Fetch fallback data from local JSON file if the API fails
        try {
          const fallbackResponse = await fetch(fallbackResponsePath);
          if (!fallbackResponse.ok)
            throw new Error("Fallback response failure.");
          const fallbackData = await fallbackResponse.json();
          fetchedProjects = fallbackData.projects;
        } catch (fbError) {
          console.error("Failed to fetch fallback JSON data:", fbError);
          fetchedProjects = []; // Set to an empty array if even the fallback fetch fails
        }
      }

      // Append the media path to the imagePath for each project
      const updatedProjects = fetchedProjects.map((project) => ({
        ...project,
        imagePath: `/projects/featured/${mediaPath}/${project.imagePath}`,
      }));
      setProjects(updatedProjects);
    }

    fetchProjects();
  }, [mediaPath]);

  return (
    <div id="featured-projects" className="w-full overflow-hidden whitespace-nowrap">
      <div
        id="featured-projects-container"
        className="inline-block animate-caroussel"
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
      <div
        id="featured-projects-container"
        className="inline-block animate-caroussel"
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
    </div>
  );
}

export default FeaturedProjects;
