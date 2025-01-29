export async function fetchWithAbort(url: string, signal?: AbortSignal) {
  const controller = new AbortController();
  const fetchSignal = signal || controller.signal;

  const response = await fetch(url, { signal: fetchSignal });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return response.json();
}
