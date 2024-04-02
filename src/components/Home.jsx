import React, { useState, useEffect } from "react";
import { boxData, tileData } from "../data";
import Box from "./Box";
import Tile from "./Tile";

const Home = () => {
  const [homeData, setHomeData] = useState({ boxData, tileData });
  const tilesInFirstRow = 5;

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        console.log("Fetching home data...");
        const response = await fetch("/api/home");
        console.log("Response received:", response);
        if (response.ok) {
          const data = await response.json();
          console.log("Data received:", data);
          setHomeData(data);
        } else {
          console.error("Error fetching home data:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Home Page</h2>
      {/* Box Data */}
      <div className="box-container">
        {homeData.boxData.map((box) => (
          <Box key={box.id} title={box.title} content={box.content} />
        ))}
      </div>

      <div className="tile-container">
        {homeData.tileData.slice(0, tilesInFirstRow).map((tile, index) => (
          <Tile
            key={tile.id}
            title={tile.title}
            imagePath={tile.imagePath}
            description={tile.description}
            className="large-tile"
          />
        ))}
        {homeData.tileData.slice(tilesInFirstRow).map((tile, index) => (
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
