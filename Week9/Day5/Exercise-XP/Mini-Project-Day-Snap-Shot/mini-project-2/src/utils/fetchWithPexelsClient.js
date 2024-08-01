import { createClient } from "pexels";

const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

export default async function fetchWithPexelsClient(
  type,
  query = "",
  setState,
  setError,
  setIsLoading,
  perPage = 30
) {
  setIsLoading(true);

  try {
    const response =
      type === "curated"
        ? await client.photos.curated({ per_page: 60 })
        : await client.photos.search({ query, per_page: perPage });
    setState(response.photos);
  } catch (error) {
    console.error("Error fetching images from Pexels:", error);
    setError("Failed to fetch images.");
  } finally {
    setIsLoading(false);
  }
}
