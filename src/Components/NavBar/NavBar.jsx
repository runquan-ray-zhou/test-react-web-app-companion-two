import { useState } from "react";
import { useNavigate } from "react-router-dom";
import navHero from "../../assets/navHero.svg";
import "./NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="NavBar">
      <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/sessions")}>Full Session List</li>
          <li onClick={() => navigate("/scanner")}>Information Scan</li>
          <li>Event Map</li>
        </ul>
      </div>
      <nav>
        <div className="NavBar-logo">
          <img src={navHero} alt="home-navHero" />
        </div>
        <div
          className={`NavBar-hamburger ${showMenu ? "active" : ""}`}
          onClick={handleMenu}
        >
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
