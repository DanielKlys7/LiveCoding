import { useEffect } from "react";
import { useQueryClient } from "../contexts/QueryClient/useQueryClient";

type UseQueryParams<T> = {
  key: string;
  fetcher: () => Promise<T>;
};

export const useQuery = <T>({ key, fetcher }: UseQueryParams<T>) => {
  const { data, isLoading, error, setIsLoading, setData, setError } =
    useQueryClient();

  const handleFetch = async (keyArg: string) => {
    setIsLoading(true);
    try {
      if (data?.has(keyArg)) {
        return;
      }

      const response = await fetcher();
      setData(new Map(data?.set(keyArg, response)));
    } catch {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
      console.log("finished", keyArg, data);
    }
  };

  useEffect(() => {
    handleFetch(key);
  }, [key]);

  return { data: data?.get(key) as T, error, isLoading };
};
