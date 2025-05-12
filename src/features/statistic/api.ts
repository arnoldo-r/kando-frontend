import { Item } from "@/types/statistic";

const apiBaseUrl = `${process.env.NEXT_PUBLIC_KANDO_API_URL}/statistics`;

export async function fetchStatisticStatus(): Promise<Item[]> {
  const response = await fetch(`${apiBaseUrl}/status`);
  if (!response.ok) throw new Error("Failed to fetch statistic status");
  return response.json();
}
