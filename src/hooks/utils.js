import { useConfig, useTheme } from "../contexts";
import { useQuery } from "react-query";

export const useUtils = () => {
  const { apiBaseUrl, fallbackBasePath, storageBaseUrl } = useConfig();
  const { mediaPath } = useTheme();

  const fetchData = async (endpoint) => {
    const wrongEndpoint = endpoint + "error"; // Force an error
    try {
      const response = await fetch(`${apiBaseUrl}/${wrongEndpoint}`);
      if (!response.ok) throw new Error("Network response failure.");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchData error:", error);
      throw error;
    }
  };

  const fetchFallbackData = async (endpoint) => {
    try {
      const fallbackResponse = await fetch(
        `${fallbackBasePath}/${endpoint}.json`
      );
      if (!fallbackResponse.ok) throw new Error("Fallback response failure.");
      const data = await fallbackResponse.json();
      return data;
    } catch (error) {
      console.error("fetchFallbackData error:", error);
      throw error;
    }
  };

  const getImageSource = (endpoint) => {
    const colorEndpoint = endpoint.replace("/color/", `/${mediaPath}/`);
    return `${storageBaseUrl}/${colorEndpoint}`;
  };

  const useFetchData = (endpoint) => {
    return useQuery(
      endpoint,
      () =>
        fetchData(endpoint).catch((error) => {
          console.error(
            "Failed to fetch primary data, trying fallback:",
            error
          );
          return fetchFallbackData(endpoint);
        }),
      {
        retry: false,
        staleTime: 600000, // Data stays fresh for 10 minutes
        cacheTime: 900000, // Data is cached for 15 minutes after it becomes stale
        onError: (fallbackError) =>
          console.error("Failed to fetch fallback content.", fallbackError),
      }
    );
  };

  return {
    getImageSource,
    useFetchData,
  };
};
