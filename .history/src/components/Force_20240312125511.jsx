import React from "react";
import MetricDisplay from "./MetricDisplay"; // Adjust the import path as necessary
import BarChart from "./BarChart"; // Adjust the import path as necessary
import Dropdown from "./Dropdown";
import Button from "./Button";
import Map from "./Map";
import Table from "./Table";

import { mapFilterOptions, placeholderTableData, forceBarChartData1, forceBarChartData2} from "../data";

const Force = () => {
  const metric1 = { title: "Personnel Count", value: "1000" };
  const metric2 = { title: "Country Count", value: "500" };

  const handleFilterChange = (selectedOptions) => {
    console.log(selectedOptions);
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

  const handleUpdateFilters = () => {
    // Logic to update filters
    console.log("Update Filters clicked");
  };

  const handleClearFilters = () => {
    // Logic to clear filters
    console.log("Clear Filters clicked");
  };

  return (
    <div className="force-container">
      <div className="force-row">
        {/* Metrics */}
        <div className="metric-display-container">
          <MetricDisplay title={metric1.title} value={metric1.value} />
          <MetricDisplay title={metric2.title} value={metric2.value} />
        </div>

        {/* Bar Charts */}
        <div className="bar-chart-container">
          <BarChart data={forceBarChartData1} />
          <BarChart data={forceBarChartData2} />
        </div>
      </div>

      {/* Row 2 with Dropdowns */}
      <div className="force-row">
        <div className="dropdowns-row">
          {mapFilterOptions.slice(0, 5).map((option) => (
            <Dropdown
              key={option.id}
              options={[option]}
              label={option.label}
              onChange={handleFilterChange}
            />
          ))}
        </div>
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

      {/* New Row for the Map */}
      <div className="map-container">
        <Map />
      </div>

      {/* Table */}
      <div className="roster-table">
        <Table columns={columns} data={placeholderTableData} />
      </div>
    </div>
  );
};

export default Force;
