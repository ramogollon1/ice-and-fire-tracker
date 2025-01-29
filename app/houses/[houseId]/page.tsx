import { SwornMembersList } from "components/SwornMembersList";
import { apiProvider } from "lib/apiProvider";
import Link from "next/link";

interface HouseDetailsPageProps {
  params: { houseId: string };
}

export default async function HouseDetailsPage({
  params,
}: HouseDetailsPageProps) {
  const { houseId } = await params;
  const selectedHouse = await apiProvider.fetchHouseDetails(houseId);
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {selectedHouse?.name || "Unnamed House"}
        </h1>

        <div className="text-center mb-6">
          <Link href="/houses" className="text-blue-500 hover:underline">
            ← Back to Houses List
          </Link>
        </div>

        <div className="border-t pt-6">
          <SwornMembersList memberUrls={selectedHouse?.swornMembers || []} />
        </div>
      </div>
    </main>
  );
}
