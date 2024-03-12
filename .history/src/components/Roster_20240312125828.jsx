import React from "react";
import MetricDisplay from "./MetricDisplay";
import BarChart from "./BarChart";
import Table from "./Table";
import Dropdown from "./Dropdown";
import Button from "./Button";

import {
  rosterFilterOptions,
  placeholderTableData,
  rosterBarChartData,
} from "../data";

const Roster = () => {
  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      { Header: "Location", accessor: "location" },
      { Header: "Email", accessor: "email" },
      // ... more columns
    ],
    []
  );

  const firstRowOptions = rosterFilterOptions.slice(0, 6);
  const secondRowOptions = rosterFilterOptions.slice(6, 12);

  const handleFilterChange = (selectedOptions) => {
    console.log(selectedOptions);
  };

  const handleUpdateFilters = () => {
    // Logic to update filters
    console.log("Update Filters clicked");
  };

  const handleClearFilters = () => {
    // Logic to clear filters
    console.log("Clear Filters clicked");
  };

  return (
    <div className="roster-container">
      <div className="roster-row">
        <div className="metric-display">
          <MetricDisplay title="Personnel" value="45" />
        </div>
        <div className="bar-chart">
          <BarChart data={rosterBarChartData} />
        </div>
      </div>

      {/* First row of filters */}
      <div className="filter-row1">
        {firstRowOptions.map((option) => (
          <div className="multi-select-filter" key={option.id}>
            <Dropdown
              options={firstRowOptions}
              label={option.label}
              onChange={handleFilterChange}
            />
          </div>
        ))}
      </div>

      {/* Second row of filters */}
      <div className="filter-row2">
        {secondRowOptions.map((option) => (
          <div className="multi-select-filter" key={option.id}>
            <Dropdown
              options={secondRowOptions}
              label={option.label}
              onChange={handleFilterChange}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="button-row">
        <Button
          label="Update Filters"
          onClick={handleUpdateFilters}
          color="blue"
        />
        <Button
          label="Clear Filters"
          onClick={handleClearFilters}
          color="red"
        />
      </div>

      {/* Table */}
      <div className="roster-table">
        <Table columns={columns} data={placeholderTableData} />
      </div>
    </div>
  );
};

export default Roster;
