import { fetchWithAbort } from "utils/fetch";

class APIProvider {
  async fetchHouses(page: number = 1, signal?: AbortSignal, pageSize?: number) {
    const url = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/houses?page=${page}&pageSize=${pageSize ?? 10}`;
    return fetchWithAbort(url, signal);
  }

  async fetchCharacterDetails(url: string, signal?: AbortSignal) {
    return fetchWithAbort(url, signal);
  }

  async fetchHouseDetails(houseId: string, signal?: AbortSignal) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/houses/${houseId}`;
    return fetchWithAbort(url, signal);
  }
}

export const apiProvider = new APIProvider();
