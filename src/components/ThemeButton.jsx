import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useUI } from "../contexts/UIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

// Functional component for toggling the UI theme
function ThemeButton() {
  const [swipe, setSwipe] = useState(false);
  const [nextTheme, setNextTheme] = useState(null);
  const { primaryColor, getRandomTheme, changeTheme } = useTheme();
  const { isSidebarActive } = useUI();

  // Function to handle theme toggle
  const toggleTheme = () => {
    const newTheme = getRandomTheme(primaryColor);
    setNextTheme(newTheme);
    setSwipe(true);

    setTimeout(() => {
      changeTheme(newTheme.color, newTheme.mediaPath);
    }, 200);

    setTimeout(() => {
      setSwipe(false);
    }, 1000);
  };

  // Button is disabled during swipe animation or when sidebar is active
  const isDisabled = swipe || isSidebarActive;

  return (
    <>
      <button
        onClick={toggleTheme}
        disabled={isDisabled}
        className={`fixed bottom-5 right-5 z-50 font-bold py-2 px-4 rounded shadow transition-colors hover:bg-black ${isDisabled ? "opacity-70 bg-black" : "opacity-100 bg-primary"} text-white`}
      >
        <FontAwesomeIcon icon={faPaintBrush} />
      </button>
      {swipe && <div className="color-swipe" style={{ backgroundColor: nextTheme.color }}></div>}
    </>
  );
}

export default ThemeButton;
