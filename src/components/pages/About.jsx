import React, { useState, useEffect } from "react";
import { Page } from ".";
import "../../App.css";

const fallbackResponsePath = "/fallback/api_responses/about_path.json";

function About() {
  const [bodyClass, setBodyClass] = useState("");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    document.title = "About - Thomas Kimble";
  }, []);

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const response = await fetch(
          "https://api.thomaskimble.com/about_page_content"
        );
        if (!response.ok) throw new Error("Network response failure.");
        const data = await response.json();
        setBodyClass(data.bodyClass);
        setSections(data.sections);
      } catch (error) {
        console.warn(
          "API not set up or failed, using fallback data from local JSON:",
          error
        );
        try {
          const fallbackResponse = await fetch(fallbackResponsePath);
          if (!fallbackResponse.ok)
            throw new Error("Fallback response failure.");
          const fallbackData = await fallbackResponse.json();
          setBodyClass(fallbackData.bodyClass);
          setSections(fallbackData.sections);
        } catch (fbError) {
          console.error("Failed to fetch fallback data:", fbError);
          setBodyClass("");
          setSections([]);
        }
      }
    }

    fetchAboutData();
  }, []);

  return (
    <Page id="about-page" className={bodyClass}>
      {sections.length ? (
        sections.map((section, index) => {
          switch (section.type) {
            case "title":
              return <h1 key={index}>{section.title}</h1>;
            case "header":
              return <h3 key={index}>{section.content}</h3>;
            case "text":
              return <p key={index}>{section.content}</p>;
            case "image":
              return (
                <img
                  key={index}
                  src={`https://storage.thomaskimble.com${section.src}`}
                  alt=""
                />
              );
            default:
              return null;
          }
        })
      ) : (
        <p>Loading...</p>
      )}
    </Page>
  );
}

export default About;
