import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "../../App.css";
import FeaturedProject from "./FeaturedProject";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectsJson = [
  {
    id: "1",
    name: "swarm",
    imagePath: "swarm.png",
    title: "drone swarms",
  },
  {
    id: "2",
    name: "friendship",
    imagePath: "friendship.png",
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
    imagePath: "intent.png",
    title: "chatbot intent",
  },
  {
    id: "5",
    name: "thymio",
    imagePath: "thymio.png",
    title: "robot navigation",
  },
];

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const { mediaPath } = useTheme();

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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 5000,
    pauseOnFocus: false, 
    pauseOnHover: false,
    variableWidth: true,
    centerMode: true,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <div key={project.id}>
          <FeaturedProject
            name={project.name}
            imagePath={project.imagePath}
            title={project.title}
          />
        </div>
      ))}
    </Slider>
  );
}

export default FeaturedProjects;
