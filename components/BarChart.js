import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

export default function Chart({ data }) {
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

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="company" />
      <YAxis />
      <Bar
        dataKey="count"
        barSize={40}
        fill="#ffdbcc"
        label={renderCustomBarLabel}
      />
    </BarChart>
  );
}
