"use client";

import { useTasks } from "@/features/task/hook";
import { TaskStatus } from "@/enums/task-status.enum";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "@/types/task";

const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "Por hacer",
  in_progress: "En progreso",
  completed: "Completadas",
};

interface TaskListProps {
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onChangeStatus: (task: Task, status: TaskStatus) => void;
}

export function TaskList({ onEdit, onDelete, onChangeStatus }: TaskListProps) {
  const { data: tasks = [], isLoading, error } = useTasks();
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(
    TaskStatus.TODO
  );

  let content;
  if (isLoading) {
    content = <div className="text-center py-8">Cargando...</div>;
  } else if (error) {
    content = (
      <div className="text-center py-8">Error en la obtención de tareas</div>
    );
  } else {
    const filteredTasks = tasks.filter(
      (task) => task.status === selectedStatus
    );

    content = filteredTasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task)}
        onChangeStatus={(status) => onChangeStatus(task, status)}
      />
    ));
  }

  return (
    <Tabs
      value={selectedStatus}
      className="w-full max-w-xl mx-auto"
      onValueChange={(val: string) => setSelectedStatus(val as TaskStatus)}
    >
      <TabsList className="grid grid-cols-3 w-full h-full rounded-lg mb-2">
        {Object.entries(STATUS_LABELS).map(([status, label]) => (
          <TabsTrigger
            key={status}
            value={status}
            className="py-3 font-bold uppercase"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(STATUS_LABELS).map(([status]) => (
        <TabsContent key={status} value={status} className="space-y-2">
          <div className="flex flex-col gap-4">{content}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
