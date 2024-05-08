import React, { useState, useEffect } from "react";
import "../../App.css";
import Page from "./Page";
import Hero from "../Hero";
// import FeaturedProject from "../FeaturedProject";

const projectsJson = [
  {
    id: '1',
    name: 'swarm',
    imagePath: '/projects/featured/swarm.png',
    title: 'drone swarms'
  },
  {
    id: '2',
    name: 'friendship',
    imagePath: '/projects/featured/friendship.png',
    title: 'friend prediction'
  },
  {
    id: '3',
    name: 'butterfly',
    imagePath: '/projects/featured/butterfly.png',
    title: 'butterfly shelf'
  },
  {
    id: '4',
    name: 'intent',
    imagePath: '/projects/featured/intent.png',
    title: 'chatbot intent'
  }
];

function Home() {
  const [projects, setProjects] = useState([]);
  console.log(projects)

  useEffect(() => {
    document.title = "Home - Thomas Kimble";
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.example.com/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log('API not set up, using hardcoded data');
        setProjects(projectsJson);
      }
    }

    fetchProjects();
  }, []);

  return (
    <Page id="home-page">
      <Hero></Hero>
      {/* <div className="grid grid-cols-4 gap-4 p-4">
        {projects.map((project) => (
          <FeaturedProject
            key={project.id}
            name={project.name}
            imagePath={project.imagePath}
            title={project.title}
          />
        ))}
      </div> */}
    </Page>
  );
}

export default Home;
