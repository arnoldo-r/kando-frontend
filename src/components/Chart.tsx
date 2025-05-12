import { Item } from "@/types/statistic";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#60a5fa", "#fbbf24", "#22c55e"];

interface StatisticChartProps {
  data: Item[];
}

export function Chart({ data }: StatisticChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ label, percent }) =>
            `${label}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          nameKey="label"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
