import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

// Functional component for toggling the UI theme
function ThemeButton() {
  const [swipe, setSwipe] = useState(false);
  const [nextTheme, setNextTheme] = useState(null);
  const { primaryColor, getRandomTheme, changeTheme } = useTheme();

  // Function to handle theme toggle
  const toggleTheme = () => {
    const newTheme = getRandomTheme(primaryColor);
    setNextTheme(newTheme);
    setSwipe(true);

    setTimeout(() => {
      changeTheme(newTheme.color, newTheme.mediaPath);
    }, 150);

    setTimeout(() => {
      setSwipe(false);
    }, 1000);
  };

  return (
    <>
      <button
        id="theme-button"
        onClick={toggleTheme}
        disabled={swipe}
        className={`fixed right-4 z-20 top-[calc(100vh-3rem)] md:top-[calc(100vh-4rem)] md:right-6 lg:top-8 lg:right-7 font-bold py-1 px-2 md:py-1.5 md:px-3 rounded shadow bg-primary hover:bg-primary_highlight text-fond`}
      >
        <FontAwesomeIcon icon={faPaintBrush} />
      </button>
      {swipe && (
        <div
          id="theme-button-color-swipe"
          className="color-swipe"
          style={{ backgroundColor: nextTheme.color }}
        ></div>
      )}
    </>
  );
}

export default ThemeButton;
