"use client";

import { useStatisticStatus } from "@/features/statistic/hook";
import { Chart } from "@/components/Chart";

export default function StatisticPage() {
  const { data: statuses, isLoading, error } = useStatisticStatus();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar datos</div>;
  if (!statuses) return <div>No hay datos</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Estadística</h1>
      <div className="w-full max-w-md">
        <Chart data={statuses} />
      </div>
    </div>
  );
}
