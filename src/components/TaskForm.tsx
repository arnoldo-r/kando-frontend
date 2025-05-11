"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Task } from "@/types/task";
import { TaskStatus } from "@/enums/task-status.enum";

interface TaskFormProps {
  initialData?: Partial<Task>;
  onSubmit: (data: {
    title?: string;
    description?: string;
    status?: TaskStatus;
  }) => void;
  loading?: boolean;
}

const statusOptions = [
  { value: TaskStatus.TODO, label: "Por hacer" },
  { value: TaskStatus.IN_PROGRESS, label: "En progreso" },
  { value: TaskStatus.COMPLETED, label: "Completada" },
];

export function TaskForm({
  initialData = {},
  onSubmit,
  loading,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [status, setStatus] = useState<TaskStatus>(
    initialData.status || TaskStatus.TODO
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: { title?: string; description?: string; status?: TaskStatus } =
      {};
    if (title.trim() !== (initialData.title || "")) data.title = title.trim();
    if (description.trim() !== (initialData.description || ""))
      data.description = description.trim();
    if (status !== initialData.status) data.status = status;

    if (!initialData.id) {
      data.title = title.trim();
      data.description = description.trim();
      data.status = status;
    }

    onSubmit(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
        required
        minLength={3}
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
        required
        minLength={5}
      />
      <Select
        value={status}
        onValueChange={(v) => setStatus(v as TaskStatus)}
        disabled={loading}
      >
        <SelectTrigger className="w-full">
          {statusOptions.find((opt) => opt.value === status)?.label}
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
