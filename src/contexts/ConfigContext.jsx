import React, { createContext, useContext } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const config = {
    apiBaseUrl: "https://api.thomaskimble.com",
    fallbackBasePath: "/fallback/api_responses",
    storageBaseUrl: "https://storage.thomaskimble.com",
  };

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
