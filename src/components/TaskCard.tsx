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
            <Button variant="outline" size="icon" onClick={onDelete}>
              <Trash />
            </Button>
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
