import { useState } from "react";

export const useQueryClientData = () => {
  const [data, setData] = useState<Map<string, unknown>>(new Map());
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  return {
    data,
    setData,
    error,
    setError,
    isLoading,
    setIsLoading,
  };
};
