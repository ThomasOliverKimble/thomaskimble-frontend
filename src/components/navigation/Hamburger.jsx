import React from "react";
import { useUI } from "../../contexts/UIContext";
import "./Hamburger.css";

function Hamburger() {
  const { toggleUI } = useUI();

  // Component for a hamburger icon that toggles the UI context state
  return (
    <div
      id="hamburger"
      onClick={toggleUI}
      className="fixed pointer-events-auto z-30 right-0 h-10 w-10 m-5 cursor-pointer visible opacity-100 transition-opacity duration-500 ease-in-out md:-translate-x-2 md:translate-y-2 lg:pointer-events-none lg:invisible lg:opacity-0"
    >
      <span id="hamburger-top" />
      <span id="hamburger-middle" />
      <span id="hamburger-bottom" />
    </div>
  );
}

export default Hamburger;
