import { Item } from "@/types/statistic";
import { useQuery } from "@tanstack/react-query";
import { fetchStatisticStatus } from "./api";

export function useStatisticStatus() {
  return useQuery<Item[]>({
    queryKey: ["statisticStatus"],
    queryFn: fetchStatisticStatus,
  });
}
