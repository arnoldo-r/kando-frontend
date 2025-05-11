import { useQuery } from "@tanstack/react-query";
import { fetchTasks, fetchTaskSummary } from "./api";
import { Task, TaskStatusSummary } from "@/types/task";

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}

export function useTaskStatusSummary() {
  return useQuery<TaskStatusSummary>({
    queryKey: ["taskStatusSummary"],
    queryFn: fetchTaskSummary,
  });
}
