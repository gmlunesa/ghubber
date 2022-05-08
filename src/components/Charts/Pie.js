import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { ChartWrapper, Colors } from "./ChartWrapper";
const ChartComponent = ({
  title,
  data,
  nameKey,
  dataKey,
  isDoughnut = false,
}) => {
  return (
    <ChartWrapper>
      <h2>{title}</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          innerRadius={!isDoughnut ? 0 : 40}
          nameKey={nameKey}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartWrapper>
  );
};

export default ChartComponent;
