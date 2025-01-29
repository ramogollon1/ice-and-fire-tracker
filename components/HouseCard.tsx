import Link from "next/link";
import { generateHouseLink } from "utils/url";

interface HouseCardProps {
  name: string;
  url: string;
}

export const HouseCard = ({ name, url }: HouseCardProps) => (
  <li className="mb-3">
    <Link
      href={generateHouseLink(url)}
      className="text-blue-500 hover:underline text-lg"
    >
      {name || "Unnamed House"}
    </Link>
  </li>
);
