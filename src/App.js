import logo from "./logo.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <MapContainer
      center={[37.482178, 127.015983]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.482178, 127.015983]}>
        <Popup>NsoneSoft</Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
