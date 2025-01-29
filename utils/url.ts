export function generateHouseLink(url: string): string {
  const houseId = url.split("/").pop() || "";
  return `/houses/${encodeURIComponent(houseId)}`;
}
