import { apiProvider } from "lib/apiProvider";

export async function fetchMembers(memberUrls: string[], signal: AbortSignal) {
  try {
    const members = await Promise.all(
      memberUrls.map((url) => apiProvider.fetchCharacterDetails(url, signal))
    );
    return members;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Fetch operation was aborted.");
      } else {
        console.error("Error fetching members:", error);
      }
    }
    return [];
  }
}
