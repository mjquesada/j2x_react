import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09]; // Example coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A sample marker.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
