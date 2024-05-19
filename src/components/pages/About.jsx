import React, { useEffect } from "react";
import { useUtils } from "../../hooks/utils";
import Page from "../Page";
import Loading from "../Loading";
import "../../App.css";

function About() {
  const { getImageSource, useFetchData } = useUtils();

  const endpoint = "about_page_content";
  const { data, error, isLoading } = useFetchData(endpoint);

  // Set document title on component mount
  useEffect(() => {
    document.title = "About - Thomas Kimble";
  }, []);

  if (isLoading) return <Loading />;

  if (error) {
    console.error("Failed to fetch data:", error);
    return (
      <Page id="about-page">
        <p>Error loading content. Please try again later.</p>
      </Page>
    );
  }

  console.log(data);
  const { bodyClass, sections } = data;

  return (
    <Page id="about-page" pageType={bodyClass}>
      {sections.map((section, index) => {
        // Render different components based on the section type
        switch (section.type) {
          case "title":
            return <h1 key={index}>{section.title}</h1>;
          case "header":
            return <h3 key={index}>{section.content}</h3>;
          case "text":
            return <p key={index}>{section.content}</p>;
          case "image":
            return (
              <div
                key={index}
                className="bg-primary rounded-3xl overflow-hidden p-2 my-10 mx-0 lg:mx-20"
              >
                <div className="bg-fond rounded-2xl overflow-hidden p-1">
                  <img
                    className="rounded-xl"
                    src={getImageSource(section.src)}
                    alt="thomaskimble_full"
                  />
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </Page>
  );
}

export default About;
