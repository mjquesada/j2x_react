import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
 const series = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
 ];

 const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      title: {
        text: 'Sales',
      },
    },
    fill: {
      opacity: 1,
    },
 };

 return (
    <div className="bar-chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
 );
};

export default BarChart;