import React, { useState, useEffect } from "react";
import "../../App.css";
import { useTheme } from "../../contexts/ThemeContext";
import { FeaturedProjects } from "../projects";
import { Page } from ".";
import Hero from "../Hero";

const projectsJson = [
  {
    id: "1",
    name: "swarm",
    imagePath: "butterfly.png",
    title: "drone swarms",
  },
  {
    id: "2",
    name: "friendship",
    imagePath: "butterfly.png",
    title: "friend prediction",
  },
  {
    id: "3",
    name: "butterfly",
    imagePath: "butterfly.png",
    title: "butterfly shelf",
  },
  {
    id: "4",
    name: "intent",
    imagePath: "butterfly.png",
    title: "chatbot intent",
  },
];

function Home() {
  const [projects, setProjects] = useState([]);
  const { mediaPath } = useTheme();
  console.log(projects);

  useEffect(() => {
    document.title = "Home - Thomas Kimble";
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      let fetchedProjects = [];

      try {
        const response = await fetch("https://api.example.com/projects");
        fetchedProjects = await response.json();
      } catch (error) {
        console.log("API not set up, using hardcoded data");
        fetchedProjects = projectsJson;
      }

      const updatedProjects = fetchedProjects.map((project) => ({
        ...project,
        imagePath: `/projects/featured/${mediaPath}/${project.imagePath}`,
      }));
      setProjects(updatedProjects);
    }

    fetchProjects();
  }, [mediaPath]);

  return (
    <Page id="home-page">
      <Hero></Hero>
      <FeaturedProjects projects={projects} />
    </Page>
  );
}

export default Home;
