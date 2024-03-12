import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  return (
    <div className="bar-chart-container">
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;