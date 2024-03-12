import React from "react";

const Box = ({ title, content }) => {
  // Check if content is an array and render accordingly
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <div key={index}>
          <span>{item.label}: </span>
          <span>{item.value}</span>
        </div>
      ));
    }
    return <p>{content}</p>;
  };

  return (
    <div className="box">
      <h1>{title}</h1>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Box;
