import "./Map.css";
import NavBar from "../../Components/NavBar/NavBar";
import mapImage from "../../assets/ASTC 2024 Annual Conference Floor Plan.pdf.png"; // Adjust the path as necessary

export default function Map() {
  return (
    <div className="Map">
      <div className="Map-container">
        <NavBar />
        <h1>This is the Map Page</h1>
        <div className="map-image-container">
          <img src={mapImage} alt="Map" className="map-image" />
        </div>
      </div>
    </div>
  );
}
