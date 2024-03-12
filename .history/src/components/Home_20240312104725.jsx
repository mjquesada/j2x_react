import React from "react";
import { boxData, tileData } from "../data";
import Box from "./Box";
import Tile from "./Tile";

const Home = () => {
  const tilesInFirstRow = 5;

  return (
    <div className="home-container">
      <h2 className="home-title">Home Page</h2>
      {/* Box Data */}
      <div className="box-container">
        {boxData.map((box) => (
          <Box key={box.id} title={box.title} content={box.content} />
        ))}
      </div>

      <div className="tile-container">
        {tileData.slice(0, tilesInFirstRow).map((tile, index) => (
          <Tile
            key={tile.id}
            title={tile.title}
            imagePath={tile.imagePath}
            description={tile.description}
            className="large-tile"
          />
        ))}
        {tileData.slice(tilesInFirstRow).map((tile, index) => (
          <Tile
            key={tile.id}
            title={tile.title}
            imagePath={tile.imagePath}
            description={tile.description}
            className="small-tile"
          />
        ))}
      </div>
      <p className="refresh-date">Date of Last Refresh: 2024-01-12</p>
    </div>
  );
};

export default Home;
