import React from "react";
import { Link } from "react-router-dom";
import { useUI } from "../../contexts/UIContext";

function Sidebar() {
  const { toggleUI } = useUI();

  // Sidebar component with navigation links and a responsive visibility
  return (
    <div
      id="sidebar"
      className="fixed z-30 w-60 h-full min-h-[40rem] invisible transition-all duration-500 ease-in-out 2xl:visible [&.active]:visible"
    >
      <div
        id="sidebar-background"
        className="absolute z-20 h-full w-full bg-primary -translate-x-full transition-all duration-500 ease-in-out 2xl:transform-none [&.active]:transform-none"
      />
      <nav
        id="sidebar-menu"
        className="relative pt-60 z-30 w-full h-max invisible opacity-0 transition-opacity duration-200 delay-200 ease-in-out 2xl:visible 2xl:opacity-100 [&.active]:visible [&.active]:opacity-100"
      >
        <ul
          id="sidebar-menu-items"
          className="text-right text-3xl text-fond font-extrabold"
        >
          <li className="py-5 hover:bg-fond_transparent">
            <Link onClick={toggleUI} to="/" className="pr-6 pl-20 py-6">
              Home
            </Link>
          </li>
          <li className="py-5 hover:bg-fond_transparent">
            <Link onClick={toggleUI} to="/projects" className="pr-6 pl-20 py-6">
              Projects
            </Link>
          </li>
          <li className="py-5 hover:bg-fond_transparent">
            <Link onClick={toggleUI} to="/about" className="pr-6 pl-20 py-6">
              About
            </Link>
          </li>
          <li className="py-5 hover:bg-fond_transparent">
            <Link onClick={toggleUI} to="/contact" className="pr-6 pl-20 py-6">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        id="sidebar-text"
        className="absolute z-30 bottom-0 h-fit w-full p-5 invisible opacity-0 transition-opacity duration-200 delay-200 ease-in-out 2xl:visible 2xl:opacity-100 [&.active]:visible [&.active]:opacity-100"
      >
        <img
          id="sidebar-text-logo"
          src="/media/text/creme/text_thomaskimble.svg"
          alt="thomaskimble-creme"
          className="relative"
        />
      </div>
    </div>
  );
}

export default Sidebar;
