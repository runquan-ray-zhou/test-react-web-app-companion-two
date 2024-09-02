import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import arLogo from "../../assets/arLogo.svg"
import heroImage from "../../assets/heroImage.svg"
import { september28thPresentations } from "../../assets/data"
import Sessions from "../../Components/Sessions/Sessions"
import "./Index.css"

export default function Index() {

  const [showMenu, setShowMenu] = useState(false)
  const [todaySessions, setTodaySessions] = useState(september28thPresentations)

  const navigate = useNavigate()

  const handleMenu = () => {
      setShowMenu(!showMenu)
  }

  return (
    <div className="Index">
      <div className="Index-container">
        <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={() => navigate("/sessions")}>Full Session List</li>
            <li onClick={() => navigate("/scanner")}>Information Scan</li>
            <li>Event Map</li>
          </ul>
        </div>
          <nav>
            <div className="Index-logo">
              <img src={heroImage} alt="index-heroImage" />
              <div className="searchbar-container">
                <form>
                  <input type="text" name="search" id="search" placeholder="Search" autoComplete='off'/>
                    <button>
                    {' '}
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
              </div>
            </div>
            <div className={`Index-hamburger ${showMenu ? "active": ""}`} onClick={handleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        <div className="Index-sessions">
          <Sessions todaySessions={todaySessions}/>
        </div>
        <div className="Index-scanner-button">
          <button onClick={() => navigate("/scanner")}>
            <img src={arLogo} alt="scanner-arLogo" />
          </button>
        </div>
      </div> 
    </div>
  )
}