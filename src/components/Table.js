import React from "react";

const Table = ({ tableData }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {/* Map your table headers dynamically based on your data */}
          {Object.keys(tableData[0]).map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Map your table rows dynamically based on your data */}
        {tableData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
