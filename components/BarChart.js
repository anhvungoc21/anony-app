import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

export default function DataVisualization() {
  const [data, setData] = useState([
    { company: "Google", count: 30 },
    { company: "Facebook", count: 40 },
  ]);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`N = ${value}`}</text>
    );
  };

  // FETCH DATA FROM DATABASE ON PAGELOAD HERE
  useEffect(() => {}, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="company" />
      <YAxis tickCount={data.length + 1} />
      <Bar
        dataKey="count"
        barSize={40}
        fill="#ffdbcc"
        label={renderCustomBarLabel}
      />
    </BarChart>
  );
}
