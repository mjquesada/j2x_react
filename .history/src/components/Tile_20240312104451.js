import React from "react";

const Tile = ({ title, imagePath, content, className }) => {

  return (
    <div className={className}>
      <h3>{title}</h3>
      <img src={imagePath} alt={title} className="tile-image" />
      <div>{content}</div>
    </div>
  );
};

export default Tile;
