import { useState } from "react"
import { useNavigate } from "react-router-dom"
import arLogo from "../../assets/arLogo.svg"
import heroImage from "../../assets/heroImage.svg"
import Carousel from "../../Components/Carousel/Carousel"
import "./Home.css"

export default function Home() {

    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <div className="Home">
      <div className="Home-container">
            <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
                <ul>
                    <li onClick={() => navigate("/home")}>Home</li>
                    <li onClick={() => navigate("/speakers")}>Full Speaker List</li>
                    <li onClick={() => navigate("/scanner")}>Information Scan</li>
                    <li>Event Map</li>
                </ul>
            </div>
            <nav>
                <div className="Home-logo">
                    <img src={heroImage} alt="home-heroImage" />
                </div>
                <div className={`Home-hamburger ${showMenu ? "active": ""}`} onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className="Home-date">
                <h2>{Date().slice(0,15)}</h2>
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
  )
}