import { Link, useNavigate } from "react-router-dom"
import arLogo from "../../assets/arLogo.svg"
import "./Scanner.css"

export default function Scanner() {
    const navigate = useNavigate()
  return (
    <div className="Scanner">
        <div className="Scanner-container">
            <nav className="Scanner-container-nav">
                    <i onClick={() => navigate("/")} className="fa-solid fa-chevron-left"></i><h1>Scanner</h1>
            </nav>
            <div className="Scanner-iframe">
                <iframe
                    style={{border: "none"}}
                    src="https://test-ar-marker-react.netlify.app/"
                    allow="camera"
                ></iframe>
            </div>
            <div className="Scanner-button">
                <button onClick={() => navigate("/scanner")}>
                    <img src={arLogo} alt="scanner-arLogo" />
                </button>
            </div>
        </div>
    </div>
  )
}