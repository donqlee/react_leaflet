import React from "react";
import logo from "./logo.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import teslaData from "./data/tesla-sites.json";

function App() {
  const filteredStations = teslaData.filter(
    (tsla) => tsla.address.country === "South Korea"
  );
  return (
    <MapContainer
      center={[37.482178, 127.015983]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredStations.map((tsla) => (
        <Marker
          key={tsla.id}
          position={[tsla.gps.latitude, tsla.gps.longitude]}
        >
          <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
            <div>
              <h2>{"Name: " + tsla.name}</h2>
              <p>{"Status: " + tsla.status}</p>
              <p>{"Number of Charging Stations: " + tsla.stallCount}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
