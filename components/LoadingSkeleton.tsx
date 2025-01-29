export const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 animate-pulse h-6 w-full rounded"
      ></div>
    ))}
  </div>
);
