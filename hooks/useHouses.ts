import { useState, useEffect } from "react";
import { apiProvider } from "lib/apiProvider";

interface House {
  name: string;
  url: string;
}

export function useHouses(page: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [houseData, setHouseData] = useState<House[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const loadHouses = async () => {
      setIsLoading(true);
      try {
        const data = await apiProvider.fetchHouses(page, signal);
        setHouseData(data);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(`Failed to load houses: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadHouses();

    return () => {
      controller.abort();
    };
  }, [page]);

  return { isLoading, houseData, error };
}
