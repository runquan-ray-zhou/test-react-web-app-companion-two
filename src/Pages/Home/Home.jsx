import { useNavigate } from "react-router-dom";
import arLogo from "../../assets/arLogo.svg";
import Carousel from "../../Components/Carousel/Carousel";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home-container">
        <NavBar />
        <div className="Home-main">
          <div className="Home-info">
            <div className="Home-title">
              <h2>Welcome To ASTC Chicago 2024!</h2>
            </div>
            <div className="Home-featured-title">
              <h3>Explore Featured Events</h3>
            </div>
            <div className="Home-date">
              <div className="Session-icon">
                <span>
                  <i className="fa-regular fa-calendar"></i>
                </span>
              </div>
              <h4>{Date().slice(0, 15)}</h4>
            </div>
          </div>
          <div className="Home-carousel">
            <Carousel />
          </div>
          <div className="Home-scanner-button">
            <button>
              <img
                onClick={() => navigate("/scanner")}
                src={arLogo}
                alt="scanner-arLogo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
