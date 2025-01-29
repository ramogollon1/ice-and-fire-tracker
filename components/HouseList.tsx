"use client";

import { useHouses } from "hooks/useHouses";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { Pagination } from "./Pagination";
import { HouseCard } from "./HouseCard";

interface HouseListProps {
  page: number;
}

export function HouseList({ page }: HouseListProps) {
  const { isLoading, houseData, error } = useHouses(page);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Houses
        </h1>

        {isLoading ? (
          <LoadingSkeleton />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul>
            {houseData.map((house, index) => (
              <HouseCard
                key={`${house.name}-${index}`}
                name={house.name}
                url={house.url}
              />
            ))}
          </ul>
        )}
        <Pagination page={page} />
      </div>
    </div>
  );
}
