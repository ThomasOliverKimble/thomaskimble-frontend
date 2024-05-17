import { useEffect } from "react";
import "../../App.css";
import ProjectCarousel from "../ProjectCarousel";
import Page from "../Page";
import Hero from "../Hero";

function Home() {
  useEffect(() => {
    document.title = "Home - Thomas Kimble";
  }, []);

  return (
    <Page pageType="page-home" id="home-page">
      <div
        id="home-page-landing"
        className="flex flex-col justify-between min-h-[800px] h-[calc(100svh-13rem)] 2xl:h-[calc(100svh-5rem)]"
      >
        <Hero></Hero>
        <ProjectCarousel />
      </div>
    </Page>
  );
}

export default Home;
