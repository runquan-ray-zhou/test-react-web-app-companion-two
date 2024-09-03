import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import arLogo from "../../assets/arLogo.svg"
import heroImage from "../../assets/heroImage.svg"
import "./Show.css"
import SessionDetails from '../../Components/SessionDetails/SessionDetails'

export default function Show() {

  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

  const handleMenu = () => {
      setShowMenu(!showMenu)
  }
  
  return (
    <div className="Show">
      <div className="Show-container">
        <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={() => navigate("/sessions")}>Full Session List</li>
            <li onClick={() => navigate("/scanner")}>Information Scan</li>
            <li>Event Map</li>
          </ul>
        </div>
            <nav>
                <div className="Show-logo">
                    <img src={heroImage} alt="show-heroImage" />
                    <div className="Show-h1">
                      <i onClick={() => navigate("/home")} className="fa-solid fa-chevron-left"></i><h1>Session Details</h1>
                    </div>
                </div>
                <div className={`Show-hamburger ${showMenu ? "active": ""}`} onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        <div className="Show-container-details">
          <SessionDetails />
        </div>
        <div className="Show-scanner-button">
          <button onClick={() => navigate("/scanner")}>
            <img src={arLogo} alt="scanner-arLogo" />
          </button>
        </div>
      </div> 
    </div>
  )
}