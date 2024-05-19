import React from "react";
import { ConfigProvider, ThemeProvider, UIProvider } from "../contexts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Provider({ children }) {
  return (
    <ThemeProvider>
      <UIProvider>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider>{children}</ConfigProvider>
        </QueryClientProvider>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Provider;
