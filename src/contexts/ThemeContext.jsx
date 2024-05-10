import React, { createContext, useContext, useState, useMemo } from "react";

// Map of theme colors and associated media paths
const themeMap = {
  blue: { color: "#0000FF", mediaPath: "blue" },
  red: { color: "#FF0000", mediaPath: "red" },
  green: { color: "#008800", mediaPath: "green" },
  orange: { color: "#FFBB00", mediaPath: "orange" },
  purple: { color: "#9933EE", mediaPath: "purple" },
};

// Create a context for theme management with default values
const ThemeContext = createContext({
  primaryColor: "var(--primary)",
  primaryHighlightColor: "var(--primary_highlight)",
  mediaPath: "blue",
  changeTheme: () => {},
  getRandomTheme: () => {},
});

// Custom hook to simplify the use of ThemeContext in components
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider component to wrap application components and provide theme context
export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("var(--primary)");
  const [primaryHighlightColor, setPrimaryHighlightColor] = useState("var(--primary_highlight)");
  const [mediaPath, setMediaPath] = useState("blue");

  // Function to update the theme
  const changeTheme = (newColor, newMediaPath) => {
    const newHighlightColor = newColor + "90"
    document.documentElement.style.setProperty("--primary", newColor);
    document.documentElement.style.setProperty("--primary_highlight", newHighlightColor);
    setPrimaryColor(newColor);
    setPrimaryHighlightColor(newHighlightColor);
    setMediaPath(newMediaPath);
  };

  // Function to retrieve a random theme that is different from the current theme
  const getRandomTheme = (currentColor) => {
    let keys = Object.keys(themeMap);
    let newTheme;
    do {
      newTheme = themeMap[keys[Math.floor(Math.random() * keys.length)]];
    } while (newTheme.color === currentColor); // Ensure the new theme is different
    return newTheme;
  };

  // Memoize context values to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      primaryColor,
      primaryHighlightColor,
      mediaPath,
      changeTheme,
      getRandomTheme,
      themeMap,
    }),
    [primaryColor, primaryHighlightColor, mediaPath]
  );

  // Provide the theme context to children components
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};