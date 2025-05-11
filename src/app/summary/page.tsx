"use client";

import { useTaskStatusSummary } from "@/features/task/hook";
import { Chart } from "@/components/Chart";

export default function SummaryPage() {
  const { data: summary, isLoading, error } = useTaskStatusSummary();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar datos</div>;
  if (!summary) return <div>No hay datos</div>;

  const chartData = [
    { name: "Por hacer", value: summary.todo },
    { name: "En progreso", value: summary.in_progress },
    { name: "Completadas", value: summary.completed },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Resumen de tareas</h1>
      <div className="w-full max-w-md">
        <Chart data={chartData} />
      </div>
    </div>
  );
}
