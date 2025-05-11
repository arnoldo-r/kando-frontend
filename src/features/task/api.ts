import { Task } from "@/types/task";

const apiUrl = process.env.NEXT_PUBLIC_KANDO_API_URL;

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(`${apiUrl}/task`);
  if (!response.ok) throw new Error("EFailed to fetch tasks");
  return response.json();
}
