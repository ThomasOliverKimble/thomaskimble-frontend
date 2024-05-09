import "../../App.css";
import { FeaturedProjects } from "../projects";
import { Page } from ".";
import Hero from "../Hero";

function Home() {
  return (
    <Page id="home-page">
      <div id="home-page-landing" className="flex flex-col justify-between h-[calc(100svh-13rem)] 2xl:h-[calc(100svh-7rem)]">
        <Hero></Hero>
        <FeaturedProjects/>
      </div>
    </Page>
  );
}

export default Home;
