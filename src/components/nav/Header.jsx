import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

function Header() {
  const { mediaPath } = useTheme();

  // Renders a header with navigation links and dynamic visibility based on scroll and viewport size
  return (
    <header
      id="header"
      className="fixed z-10 h-[6rem] transform -translate-y-4 w-full transition-opacity duration-300 ease-in-out md:translate-y-0 2xl:-translate-y-full 2xl:invisible 2xl:opacity-0"
    >
      <span id="header-background" className="absolute h-full bg-fond w-full" />
      <span
        id="header-border"
        className="absolute top-[100%] h-[4px] w-full bg-primary invisible opacity-0 transition-opacity duration-300 ease-in-out [&.scroll]:visible [&.scroll]:opacity-100"
      />
      <div
        id="header-text"
        className="relative m-auto h-fit w-60 transform transition-opacity duration-300 ease-in-out translate-y-7 opacity-0 invisible [&.scroll]:md:opacity-100 [&.scroll]:md:visible [&.scroll]:lg:invisible [&.scroll]:lg:opacity-0"
        >
        <img
          id="header-text-logo"
          src={`/media/text/${mediaPath}/text_thomaskimble.svg`}
          alt="thomaskimble-color"
          className="relative"
        />
      </div>
      <nav
        id="header-navbar"
        className="flex absolute right-0 top-0 h-full items-center pr-[7.5rem] text-3xl font-extrabold invisible opacity-0 transition-opacity duration-300 ease-in-out lg:visible lg:opacity-100 2xl:invisible 2xl:opacity-0"
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
            <Link
              to="/about"
              className="text-primary hover:text-primary_highlight"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-primary hover:text-primary_highlight"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
