"use client";
import { useState } from "react";
import { TaskList } from "@/components/TaskList";
import { Task } from "@/types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, updateTask, deleteTask } from "@/features/task/api";
import { TaskForm } from "@/components/TaskForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TaskStatus } from "@/enums/task-status.enum";

export default function TaskPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      ...data
    }: {
      id: string;
      title?: string;
      description?: string;
      status?: TaskStatus;
    }) => updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setModalOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (task: Task) => deleteTask(task.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleAdd = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleDelete = (task: Task) => {
    deleteMutation.mutate(task);
  };

  const handleChangeStatus = (task: Task, status: TaskStatus) => {
    updateMutation.mutate({ id: task.id, status });
  };

  const handleSubmit = (data: {
    title?: string;
    description?: string;
    status?: TaskStatus;
  }) => {
    if (editingTask) {
      updateMutation.mutate({ id: editingTask.id, ...data });
    } else {
      createMutation.mutate(
        data as { title: string; description: string; status: TaskStatus }
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tareas</h1>
        <Button onClick={handleAdd}>Añadir</Button>
      </div>
      <TaskList
        onEdit={handleEdit}
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}
      />
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingTask ? "Editar tarea" : "Nueva tarea"}
            </DialogTitle>
          </DialogHeader>
          <TaskForm
            initialData={editingTask || {}}
            onSubmit={handleSubmit}
            loading={createMutation.isPending || updateMutation.isPending}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
