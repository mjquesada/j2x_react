import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
