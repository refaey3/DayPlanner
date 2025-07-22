import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Catt = styled("div")`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding-bottom: 20px;
`;

const H4 = styled("h4")`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  background-color: hsl(194.21deg 86.36% 56.86%);
  padding: 10px;
  width: 100%;
`;

const ChartContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const COLORS = {
  work: "#0000FF",
  personal: "#008000",
  health: "#FF0000",
  study: "#FFD700",
  other: "#A9A9A9",
};

export default function TaskChar({ tasks }) {
  const categoryCount = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(categoryCount).map(([key, value]) => ({
    name: key,
    value,
    color: COLORS[key],
  }));

  return (
    <Catt>
      <H4>Time Distribution</H4>
      <ChartContainer>
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(COLORS).map((cat) => (
            <span
              key={cat}
              style={{
                backgroundColor: COLORS[cat],
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </ChartContainer>
    </Catt>
  );
}
