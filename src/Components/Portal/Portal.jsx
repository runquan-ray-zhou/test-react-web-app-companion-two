import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import onboarding from "../../assets/onboarding.svg"
import logo from "../../assets/logo.svg"
import heroImage from "../../assets/heroImage.svg"
import arLogo from "../../assets/arLogo.svg"
import "./Portal.css"

export default function Portal() {

    const navigate = useNavigate()

    const [onboardingPage, setOnboardingPage] = useState("firstOnboardigPage")

  return (
    <div className="Portal">
        <div className="onboarding-container">
            {onboardingPage === "firstOnboardigPage" && (
                <div className="onboarding-page">
                    <div className="onboarding-page-logo">
                        <img src={logo} alt="onboarding-logo" />
                    </div>
                    <h1>AeroGuide</h1>
                    <div className="onboarding-page-buttons">
                        <button onClick={() => setOnboardingPage("secondOnboardingPage")}>Lets Fly!</button>
                    </div>
                </div>
            )}
            {onboardingPage === "secondOnboardingPage" && (
                <div className="onboarding-page">
                    <div className="onboarding-page-status-bar">

                    </div>
                    <div className="secondOnboarding-page-heading">
                        <h1>Welcome to AeroGuide for ASTC Chicago!</h1>
                    </div>
                    <div className="secondOnboarding-page-logo">
                        <img src={heroImage} alt="onboarding-heroImage" />
                    </div>
                    <div className="secondOnboarding-page-text">
                        <p>Unlock a new way to experience the event with AR.</p>
                    </div>
                    <div className="onboarding-page-buttons">
                        <button id="onboarding-page-buttons-skip1" onClick={() => setOnboardingPage("fourthOnboardingPage")}>Skip</button>
                        <button onClick={() => setOnboardingPage("thirdOnboardingPage")}>Next</button>
                    </div>
                </div>
            )}
            {onboardingPage === "thirdOnboardingPage" && (
                <div className="onboarding-page">
                    <div className="onboarding-page-status-bar">

                    </div>
                    <div className="thirdOnboarding-page-heading">
                        <h1>Discover More with AR</h1>
                    </div>
                    <div className="thirdOnboarding-page-logo">
                        <img src={onboarding} alt="onboarding-logo2" />
                    </div>
                    <div className="thirdOnboarding-page-text">
                        <p>Click on the log to scan a QR code or event sign and instantly learn more about speaker sessions.</p>
                    </div>
                    <div className="onboarding-page-buttons">
                        <button id="onboarding-page-buttons-skip2" onClick={() => setOnboardingPage("fourthOnboardingPage")}>Skip</button>
                        <button onClick={() => setOnboardingPage("fourthOnboardingPage")}>Next</button>
                    </div>
                </div>
            )}
            {onboardingPage === "fourthOnboardingPage" && (
                <div className="onboarding-page">
                    <div className="fourthOnboarding-page-heading">
                        <h1>You're All Set</h1>
                    </div>
                    <div className="fourthOnboarding-page-logo">
                        <img src={arLogo} alt="onboarding-arLogo" />
                    </div>
                    <div className="fourthOnboarding-page-text">
                        <p>Click the Logo above to start scanning or enter the AeroGuide</p>
                    </div>
                    <div className="onboarding-page-buttons">
                        <button onClick={() => navigate("/landing")}>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}