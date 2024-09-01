import { useNavigate } from "react-router-dom"
import arLogo from "../../assets/arLogo.svg"
import heroImage from "../../assets/heroImage.svg"
import Carousel from "../../Components/Carousel/Carousel"
import "./Home.css"

export default function Home() {

    const navigate = useNavigate()

  return (
    <div className="Home">
      <div className="Home-container">
            <nav>
                <div className="Home-logo">
                    <img src={heroImage} alt="home-heroImage" />
                </div>
                <div className="Home-hamburger">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
            <div className="Home-date">
                <h1>{Date().slice(0,15)}</h1>
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