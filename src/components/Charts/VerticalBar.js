import React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Text, Label } from "recharts";
import { ChartWrapper, Colors } from "./ChartWrapper";
const ChartComponent = ({ title, data, xLabel, yLabel, nameKey, dataKey }) => {
  return (
    <ChartWrapper>
      <h2>{title}</h2>
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 50,
          bottom: 25,
        }}
      >
        <XAxis
          dataKey={nameKey}
          textAnchor="end"
          scaleToFit="true"
          interval={0}
          tick={<CustomizedTickLabel />}
        >
          <Label
            value={xLabel}
            offset={-10}
            position="insideBottom"
            fill="#617D98"
          />
        </XAxis>

        <YAxis>
          <Label
            value={yLabel}
            offset={0}
            position="insideLeft"
            fill="#617D98"
            angle={-90}
          />
        </YAxis>

        <Tooltip />
        <Bar dataKey={dataKey} fill={Colors[1]} />
      </BarChart>
    </ChartWrapper>
  );
};
const CustomizedTickLabel = ({ x, y, payload }) => {
  const truncatedString =
    payload.value.length < 10
      ? payload.value
      : `${payload.value.substring(0, 10)}...`;
  return (
    <Text x={x} y={y + 3} fill="#617D98" fontSize={11} textAnchor="middle">
      {truncatedString}
    </Text>
  );
};
export default ChartComponent;
