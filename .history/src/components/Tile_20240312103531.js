import React from "react";

const Tile = ({ title, imagePath, content, size }) => {
  const tileClass = size === "large" ? "large-tile" : "small-tile";

  return (
    <div className={tileClass}>
      <h3>{title}</h3>
      <img src={image} alt={title} className="tile-image" />
      <div>{content}</div>
    </div>
  );
};

export default Tile;
