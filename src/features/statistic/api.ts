import { Item } from "@/types/statistic";

const apiUrl = process.env.NEXT_PUBLIC_KANDO_API_URL;

export async function fetchStatisticStatus(): Promise<Item[]> {
  const response = await fetch(`${apiUrl}/statistics/status`);
  if (!response.ok) throw new Error("Failed to fetch statistic status");
  return response.json();
}
