import React, { useState, useEffect } from "react";
import { Page } from ".";
import ReactMarkdown from "react-markdown";
import "../../App.css";

const fallbackResponsePath = "/fallback_api_responses/about_path.json";

function About() {
  const [markdownPath, setMarkdownPath] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    document.title = "About - Thomas Kimble";
  }, []);

  useEffect(() => {
    async function fetchMarkdownPath() {
      try {
        const response = await fetch(`https://api.example.com/about`);
        if (!response.ok) throw new Error("Network response failure.");
        const data = await response.json();
        setMarkdownPath(data.about.path);
      } catch (error) {
        console.warn("API not set up or failed, using fallback data from local JSON:", error);
        try {
          const fallbackResponse = await fetch(fallbackResponsePath);
          if (!fallbackResponse.ok)
            throw new Error("Fallback response failure.");
          const fallbackData = await fallbackResponse.json();
          setMarkdownPath(fallbackData.about.path);
        } catch (fbError) {
          console.error("Failed to fetch fallback path:", fbError);
          setMarkdownPath("");
        }
      }
    }

    fetchMarkdownPath();
  }, []);

  useEffect(() => {
    async function fetchMarkdown() {
      if (markdownPath) {
        try {
          const response = await fetch(markdownPath);
          if (!response.ok) throw new Error("Failed to fetch markdown content.");
          const text = await response.text();
          setMarkdownContent(text);
        } catch (error) {
          console.error("Error fetching markdown content:", error);
          setMarkdownContent("# Error loading content");
        }
      }
    }

    fetchMarkdown();
  }, [markdownPath]); // Depend on markdownPath

  return (
    <Page id="about-page">
      {markdownContent ? (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </Page>
  );
}

export default About;
