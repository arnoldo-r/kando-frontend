import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "./api";
import { Task } from "@/types/task";

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}
