import { HouseList } from "components/HouseList";

export default async function HousesPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const { page } = (await searchParams) || {};

  const currentPage = parseInt(page || "1", 10);

  return (
    <main className="p-4">
      <HouseList page={currentPage} />
    </main>
  );
}
