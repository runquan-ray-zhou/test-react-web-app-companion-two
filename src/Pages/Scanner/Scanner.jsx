import NavBar from "../../Components/NavBar/NavBar";
import "./Scanner.css";

export default function Scanner() {
  return (
    <div className="Scanner">
      <div className="Scanner-container">
        <NavBar />
        <div className="Scanner-iframe">
          <iframe
            style={{ border: "none" }}
            src="https://test-ar-marker-react.netlify.app/"
            allow="camera"
          ></iframe>
        </div>
        <div className="Scanner-message">
          <p>
            Point your camera at a QR code, then click the 3D image that appears
            to view location information!
          </p>
        </div>
        {/* <div className="Scanner-button">
          <button onClick={() => navigate("/scanner")}>
            <img src={arLogo} alt="scanner-arLogo" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
