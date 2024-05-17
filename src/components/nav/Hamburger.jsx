import React from "react";
import { useUI } from "../../contexts/UIContext";

function Hamburger() {
  const { toggleUI } = useUI();

  // Component for a hamburger icon that toggles the UI context state
  return (
    <div
      id="hamburger"
      onClick={toggleUI}
      className="fixed pointer-events-auto z-30 right-0 h-10 w-10 m-5 cursor-pointer visible opacity-100 transition-opacity duration-300 ease-in-out md:-translate-x-2 md:translate-y-2 lg:pointer-events-none lg:invisible lg:opacity-0"
    >
      <span id="hamburger-middle" className="absolute bg-primary w-full h-[0.25rem] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 visible transition-[transform,opacity] duration-300 [&.active]:invisible [&.active]:opacity-0"/>
      <span id="hamburger-top" className="absolute bg-primary w-full h-[0.25rem] rounded-full top-[calc(50%-10px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-300 [&.active]:-rotate-45 [&.active]:translate-y-[8px]"/>
      <span id="hamburger-bottom" className="absolute bg-primary w-full h-[0.25rem] rounded-full top-[calc(50%+10px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-300 [&.active]:rotate-45 [&.active]:-translate-y-[12px]"/>
    </div>
  );
}

export default Hamburger;
