import usasoc from "./images/USASOC.png";
import nsw from "./images/NSW.png";
import socom from "./images/SOCOM.png";
import marsoc from "./images/MARSOC.png";
import afsoc from "./images/AFSOC.png";
import soccent from "./images/SOCCENT.png";
import socsouth from "./images/SOCSOUTH.png";
import socnorth from "./images/SOCNORTH.png";
import socpac from "./images/SOCPAC.png";
import sockor from "./images/SOCKOR.png";
import soceur from "./images/SOCEUR.png";
import socaf from "./images/SOCAF.png";

export const boxData = [
  {
    id: 1,
    title: "Personnel Count",
    content: 1500,
  },
  {
    id: 2,
    title: "AoR Breakdown",
    content: [
      { label: "AFRICOM", value: 700 },
      { label: "EUCOM", value: 800 },
      { label: "SOCCOM", value: 900 },
    ],
  },
];

export const tileData = [
  {
    id: 1,
    title: "USASOC",
    imagePath: usasoc,
    description: "Description for Tile 1",
  },
  {
    id: 2,
    title: "NSW",
    imagePath: nsw,
    description: "Description for Tile 2",
  },
  {
    id: 3,
    title: "SOCOM",
    imagePath: socom,
    description: "Description for Tile 3",
  },
  {
    id: 4,
    title: "MARSOC",
    imagePath: marsoc,
    description: "Description for Tile 4",
  },
  {
    id: 5,
    title: "AFSOC",
    imagePath: afsoc,
    description: "Description for Tile 5",
  },
  {
    id: 6,
    title: "SOCCENT",
    imagePath: soccent,
    description: "Description for Tile 6",
  },
  {
    id: 7,
    title: "SOCSOUTH",
    imagePath: socsouth,
    description: "Description for Tile 7",
  },
  {
    id: 8,
    title: "SOCNORTH",
    imagePath: socnorth,
    description: "Description for Tile 8",
  },
  {
    id: 9,
    title: "SOCPAC",
    imagePath: socpac,
    description: "Description for Tile 9",
  },
  {
    id: 10,
    title: "SOCKOR",
    imagePath: sockor,
    description: "Description for Tile 10",
  },
  {
    id: 11,
    title: "SOCEUR",
    imagePath: soceur,
    description: "Description for Tile 11",
  },
  {
    id: 12,
    title: "SOCAF",
    imagePath: socaf,
    description: "Description for Tile 12",
  },
];

export const rosterFilterOptions = [
  { label: "Org", value: "value", id: 1 },
  { label: "Location", value: "value", id: 2 },
  { label: "Branch", value: "value", id: 3 },
  { label: "Group", value: "value", id: 4 },
  { label: "Type", value: "value", id: 5 },
  { label: "SOF", value: "value", id: 6 },
  { label: "AoR", value: "value", id: 7 },
  { label: "Deploy", value: "value", id: 8 },
  { label: "Service", value: "value", id: 9 },
  { label: "Country", value: "value", id: 10 },
  { label: "Waiver", value: "value", id: 11 },
  { label: "FTN", value: "value", id: 12 },
];

export const mapFilterOptions = [
  { label: "Option 1", value: "option1", id: 1 },
  { label: "Option 2", value: "option2", id: 2 },
  // Add more options as needed
];

// data.js
export const placeholderTableData = [
  { id: 1, name: "John Doe", age: 28, location: "City A" },
  { id: 2, name: "Jane Smith", age: 35, location: "City B" },
  // Add more data as needed
];

export const rosterBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      // Other dataset properties
    },
  ],
  options: {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    yaxis: {
      title: {
        text: "Sales",
      },
    },
    fill: {
      opacity: 1,
    },
  },
};

export const forceBarChartData1 = {
  labels: [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
  ],
  datasets: [
    {
      label: "Force 1 Data",
      data: [25, 15, 30, 20, 10],
      // Other dataset properties
    },
  ],
  options: {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Category A",
        "Category B",
        "Category C",
        "Category D",
        "Category E",
      ],
    },
    yaxis: {
      title: {
        text: "Force 1 Data",
      },
    },
    fill: {
      opacity: 1,
    },
  },
};

export const forceBarChartData2 = {
  labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  datasets: [
    {
      label: "Force 2 Data",
      data: [10, 12, 8, 15, 18],
      // Other dataset properties
    },
  ],
  options: {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
    yaxis: {
      title: {
        text: "Force 2 Data",
      },
    },
    fill: {
      opacity: 1,
    },
  },
};
