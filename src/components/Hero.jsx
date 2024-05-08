import React from "react";
import "../App.css";

function Hero() {
  return (
    <>
      <div id="hero" className="h-fit pb-10">
        <h1 className="text-primary text-6xl font-extrabold w-full md:w-3/4 max-w-[50rem]">
          welcome to my space
        </h1>
        <p className="text-primary text-xl font-normal text-justify md:text-left w-full md:w-3/4 max-w-[50rem] mt-4">
          Explore my world, where robotics, data and software engineering meet
          creativity and design. Discover projects that blend technology with
          creativity and learn about my studies, my hobbies, my career, and
          beyond. Feel free to reach out to discuss ideas, collaborate, or
          simply learn more about my work.
        </p>
      </div>
    </>
  );
}

export default Hero;
