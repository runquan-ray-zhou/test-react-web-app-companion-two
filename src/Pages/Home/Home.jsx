import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arLogo from "../../assets/arLogo.svg";
import Carousel from "../../Components/Carousel/Carousel";
import navHero from "../../assets/navHero.svg";
import "./Home.css";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Home">
      <div className="Home-container">
        <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/sessions")}>Full Session List</li>
            <li onClick={() => navigate("/scanner")}>Information Scan</li>
            <li>Event Map</li>
          </ul>
        </div>
        <nav>
          <div className="Home-logo">
            <img src={navHero} alt="home-navHero" />
          </div>
          <div
            className={`Home-hamburger ${showMenu ? "active" : ""}`}
            onClick={handleMenu}
          >
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="Home-container">
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
            <button onClick={() => navigate("/scanner")}>
              <img src={arLogo} alt="scanner-arLogo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
