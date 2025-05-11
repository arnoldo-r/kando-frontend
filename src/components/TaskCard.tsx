"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { TaskStatus } from "@/enums/task-status.enum";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onChangeStatus: (status: TaskStatus) => void;
}

export function TaskCard({
  task,
  onEdit,
  onDelete,
  onChangeStatus,
}: TaskCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="font-semibold">{task.title}</span>
          <span className="flex gap-2">
            <Button variant="outline" size="icon" onClick={onEdit}>
              <Pencil />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Trash />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    ¿Seguro que quieres eliminar esta tarea?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <p>Esta acción no se puede deshacer.</p>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={onDelete}>
                    Eliminar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div>{task.description}</div>
        <div className="flex justify-end mt-6">
          <Select
            value={task.status}
            onValueChange={(value) => onChangeStatus(value as TaskStatus)}
          >
            <SelectTrigger className="w-[140px]">Estado</SelectTrigger>
            <SelectContent>
              <SelectItem value={TaskStatus.TODO}>Por hacer</SelectItem>
              <SelectItem value={TaskStatus.IN_PROGRESS}>
                En progreso
              </SelectItem>
              <SelectItem value={TaskStatus.COMPLETED}>Completada</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
