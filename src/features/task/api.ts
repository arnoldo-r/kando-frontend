import { TaskStatus } from "@/enums/task-status.enum";
import { Task } from "@/types/task";

const apiUrl = process.env.NEXT_PUBLIC_KANDO_API_URL;

export async function createTask(data: {
  title: string;
  description: string;
  status: TaskStatus;
}) {
  const response = await fetch(`${apiUrl}/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
}

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(`${apiUrl}/task`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
}

export async function updateTask(
  id: string,
  data: Partial<Pick<Task, "title" | "description" | "status">>
) {
  const response = await fetch(`${apiUrl}/task/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
}

export async function deleteTask(id: string) {
  const response = await fetch(`${apiUrl}/task/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to delete task");
  return true;
}
