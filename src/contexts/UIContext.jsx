import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

// Context creation for UI management across the application
const UIContext = createContext();

// Custom hook for accessing UIContext
export const useUI = () => useContext(UIContext);

// List of DOM element IDs that will be toggled with 'active' class
const elementIds = [
  "sidebar",
  "sidebar-background",
  "sidebar-logo",
  "sidebar-logo-container-creme",
  "sidebar-logo-container-color",
  "sidebar-menu",
  "sidebar-text",
  "hamburger-top",
  "hamburger-middle",
  "hamburger-bottom",
  "backdrop",
];

// List of DOM element IDs affected by scrolling behavior
const scrollToggleElements = [
  "header-background",
  "header-border",
  "header-text",
];

// Provider component to manage UI state and behaviors
export const UIProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  // Toggle 'active' class on specific elements and 'no-scroll' on the body
  const updateElementsClass = useCallback((add) => {
    document.body.classList.toggle("no-scroll", add);
    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.toggle("active", add);
      }
    });
  }, []);

  // Toggle 'scroll' and 'not-scroll' classes based on scroll position
  const updateScrollToggleElements = useCallback((add) => {
    scrollToggleElements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.toggle("scroll", add);
        element.classList.toggle("not-scroll", !add);
      }
    });
  }, []);

  // Main toggle function for UI changes
  const toggleUI = useCallback(() => {
    if (window.innerWidth >= 1536) {
      // Ignore in 2xl screensize
      return;
    }
    setIsActive((current) => {
      const newState = !current;
      updateElementsClass(newState);
      return newState;
    });
  }, [updateElementsClass]);

  // Handle resize events, and conditionally toggle UI based on active state
  useEffect(() => {
    const handleResize = () => {
      if (isActive) {
        toggleUI();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive, toggleUI]);

  // Handle scroll events to toggle UI elements
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeActive = window.scrollY > 0;
      updateScrollToggleElements(shouldBeActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollToggleElements]);

  // Context provider to wrap the application or component tree
  return (
    <UIContext.Provider value={{ isActive, toggleUI }}>
      {children}
    </UIContext.Provider>
  );
};
