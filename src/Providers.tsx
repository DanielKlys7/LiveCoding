import { ReactNode } from "react";
import { QueryClient } from "./contexts/QueryClient";
import { useQueryClientData } from "./contexts/QueryClient/queryClient";

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClientInitialData = useQueryClientData();

  return (
    <QueryClient.Provider value={queryClientInitialData}>
      {children}
    </QueryClient.Provider>
  );
};
