import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        id="header"
        className="fixed z-10 h-[6rem] transform -translate-y-4 md:translate-y-0 2xl:-translate-y-full w-full visible opacity-100 2xl:invisible 2xl:opacity-0 transition-opacity duration-500 ease-in-out"
      >
        <span
          id="header-background"
          className="absolute h-full bg-fond w-full"
        />
        <span
          id="header-border"
          className="absolute top-[100%] h-[3px] w-full bg-primary invisible opacity-0 [&.scroll]:visible [&.scroll]:opacity-100 transition-opacity duration-500 ease-in-out"
        />
        <div
          id="header-text"
          className="relative m-auto h-fit w-60 transform translate-y-9 md:translate-y-7 invisible opacity-0 md:visible md:opacity-100 lg:invisible lg:opacity-0 [&.not-scroll]:invisible [&.not-scroll]:opacity-0 transition-opacity duration-500 ease-in-out not-scroll"
        >
          <img
            id="header-text-logo"
            src="/media/text/color/text_thomaskimble.svg"
            alt="thomaskimble-color"
            className="relative"
          />
        </div>
        <nav
          id="header-navbar"
          className="flex invisible opacity-0 lg:visible lg:opacity-100 2xl:invisible 2xl:opacity-0 absolute right-0 top-0 h-full items-center pr-10 text-3xl font-extrabold transition-opacity duration-500 ease-in-out"
        >
          <ul className="flex space-x-12">
            <li>
              <Link to="/" className="text-primary hover:text-primary_highlight">
                home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-primary hover:text-primary_highlight"
              >
                projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-primary hover:text-[#AAAAFF]">
                about
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary hover:text-[#AAAAFF]"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
