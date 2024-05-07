import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

const elementIds = [
  "sidebar-background",
  "sidebar-logo",
  "sidebar-logo-container-creme",
  "sidebar-logo-container-blue",
  "sidebar-menu",
  "sidebar-text",
  "hamburger",
  "backdrop"
];

const scrollToggleElements = [
  "header-background",
  "header-border",
  "header-text"
];

export const UIProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const updateElementsClass = useCallback((add) => {
    document.body.classList.toggle("no-scroll", add);
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.toggle("active", add);
      }
    });
  }, []);

  const updateScrollToggleElements = useCallback((add) => {
    scrollToggleElements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.toggle("scroll", add);
        element.classList.toggle("not-scroll", !add);
      }
    });
  }, []);

  const toggleUI = () => {
    setIsActive(current => {
      const newState = !current;
      updateElementsClass(newState);
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeActive = window.scrollY > 0;
      updateScrollToggleElements(shouldBeActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollToggleElements]);

  return (
    <UIContext.Provider value={{ isActive, toggleUI }}>
      {children}
    </UIContext.Provider>
  );
};
