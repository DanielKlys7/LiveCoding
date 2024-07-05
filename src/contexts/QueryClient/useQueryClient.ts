import { useContext } from "react";
import { QueryClient } from ".";

export const useQueryClient = () => {
  const queryClient = useContext(QueryClient);

  if (!queryClient) {
    throw new Error("useQueryClient must be used within a QueryClientProvider");
  }

  return queryClient;
};
