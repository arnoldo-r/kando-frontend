"use client";

import { useStatisticStatus } from "@/features/statistic/hook";
import { Chart } from "@/components/Chart";

export default function StatisticPage() {
  const { data: statuses, isLoading, error } = useStatisticStatus();

  let content;
  if (isLoading) content = <div>Cargando...</div>;
  else if (error) content = <div>Error al cargar datos</div>;
  else if (!statuses) content = <div>No hay datos</div>;
  else content = <Chart data={statuses} />;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">Estadística</h1>
      <div className="w-full">{content}</div>
    </div>
  );
}
