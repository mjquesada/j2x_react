import React from 'react';

const MetricDisplay = ({ title, value }) => {
  return (
    <div className="metric-display-container">
      <h3 className="metric-title">{title}</h3>
      <p className="metric-value">{value}</p>
    </div>
  );
};

export default MetricDisplay;