import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Bar(chartRef.current, {
        data: data,
        options: options,
      });

      // Clean up function
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data, options]); // Dependencies to re-run the effect

  return <canvas ref={chartRef} />;
};

export default BarChart;
