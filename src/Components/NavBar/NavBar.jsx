import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/sessions")}>Full Session List</li>
          <li onClick={() => navigate("/scanner")}>Information Scan</li>
          <li onClick={() => navigate("/map")}>
            {/* <a
              id="map-link"
              href="https://drive.google.com/file/d/1xjbPthXP7aVpwq841k5uZkJL3huLmaU2/view"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            Event Map
            {/* </a> */}
          </li>
        </ul>
      </div>
      <nav>
        <Link to="/home">
          <div className="NavBar-logo">
            <img src={navHero} alt="home-navHero" />
          </div>
        </Link>
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
