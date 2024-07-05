import React, { createContext } from "react";

type QueryClientType = {
  data: Map<string, unknown> | null;
  error: string | null;
  isLoading: boolean | null;
  setData: React.Dispatch<React.SetStateAction<Map<string, unknown>>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const QueryClient = createContext<QueryClientType | null>(null);
