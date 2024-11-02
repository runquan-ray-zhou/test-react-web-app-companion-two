import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import onboarding from "../../assets/onboarding.svg";
import logo from "../../assets/logo.svg";
import heroImage from "../../assets/Hero.png";
import arLogo from "../../assets/arLogo.svg";
import "./Portal.css";

export default function Portal() {
  const navigate = useNavigate();

  const [onboardingPage, setOnboardingPage] = useState("firstOnboardingPage"); // Corrected typo

  return (
    <div className="Portal">
      <div className="onboarding-container">
        {onboardingPage === "firstOnboardingPage" && (
          <div className="onboarding-page">
            <div className="circles-container">
              <div className="circle outer-circle"></div>
              <div className="circle middle-circle"></div>
              <div className="circle inner-circle"></div>
              <div className="circle-content">
                <div className="onboarding-page-logo">
                  <img src={logo} alt="AeroGuide Logo" />
                </div>
                <h1>AeroGuide</h1>
                <div className="onboarding-page-buttons">
                  <button
                    onClick={() => setOnboardingPage("secondOnboardingPage")}
                    aria-label="Proceed to next onboarding page"
                  >
                    Let's Fly!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {onboardingPage === "secondOnboardingPage" && (
          <div className="onboarding-page">
            <div className="onboarding-page-status">
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
              <div className="onboarding-page-status-bar two">
                <hr />
              </div>
              <div className="onboarding-page-status-bar three">
                <hr />
              </div>
            </div>
            <div className="secondOnboarding-page-heading">
              <h1>Welcome to AeroGuide for ASTC Chicago!</h1>
            </div>
            <div className="secondOnboarding-page-logo">
              <img src={heroImage} alt="Hero for Onboarding" />
            </div>
            <div className="secondOnboarding-page-text">
              <p>Unlock a new way to experience the event with AR.</p>
            </div>
            <div className="onboarding-page-buttons">
              <button
                id="onboarding-page-buttons-skip1"
                onClick={() => setOnboardingPage("fourthOnboardingPage")}
                aria-label="Skip onboarding"
              >
                Skip
              </button>
              <button
                onClick={() => setOnboardingPage("thirdOnboardingPage")}
                aria-label="Proceed to next onboarding page"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {onboardingPage === "thirdOnboardingPage" && (
          <div className="onboarding-page">
            <div className="onboarding-page-status">
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
              <div className="onboarding-page-status-bar three">
                <hr />
              </div>
            </div>
            <div className="thirdOnboarding-page-heading">
              <h1>Discover more with AR</h1>
            </div>
            <div className="logo-overlay-container">
              <div className="thirdOnboarding-page-logo">
                <img src={onboarding} alt="Onboarding AR logo" />
              </div>
              <div className="thirdOnboarding-page-ar-logo">
                <img src={arLogo} alt="AR Logo" />
              </div>
            </div>
            <div className="thirdOnboarding-page-text">
              <p>
                Tap on the logo to scan a Marker and instantly learn more about
                speaker sessions.
              </p>
            </div>
            <div className="onboarding-page-buttons">
              <button
                id="onboarding-page-buttons-skip2"
                onClick={() => setOnboardingPage("fourthOnboardingPage")}
                aria-label="Skip onboarding"
              >
                Skip
              </button>
              <button
                onClick={() => setOnboardingPage("fourthOnboardingPage")}
                aria-label="Proceed to final onboarding page"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {onboardingPage === "fourthOnboardingPage" && (
          <div className="onboarding-page">
            <div className="onboarding-page-status">
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
              <div className="onboarding-page-status-bar">
                <hr />
              </div>
            </div>
            <div className="fourthOnboarding-page-heading">
              <h1>You're All Set</h1>
            </div>
            <div className="fourthOnboarding-page-logo">
              <Link to="/scanner" aria-label="Go to scanner">
                <img src={arLogo} alt="AR Onboarding Logo" />
              </Link>
            </div>
            <div className="fourthOnboarding-page-text">
              <p>Tap the Logo above to start scanning or enter the AeroGuide</p>
            </div>
            <div className="onboarding-page-buttons">
              <button
                onClick={() => navigate("/home")}
                aria-label="Get started with AeroGuide"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
