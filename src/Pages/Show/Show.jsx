import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arLogo from "../../assets/arLogo.svg";
import SessionDetails from "../../Components/SessionDetails/SessionDetails";
import NavBar from "../../Components/NavBar/NavBar";
import "./Show.css";

export default function Show() {
  const navigate = useNavigate();

  return (
    <div className="Show">
      <div className="Show-container">
        <div
          className="Show-container-back"
          onClick={() => navigate("/sessions")}
        >
          <i className="fa-solid fa-chevron-left"></i>
          <span>Back</span>
        </div>
        <NavBar />
        <div className="Show-container-details">
          <SessionDetails />
        </div>
        <div className="Show-scanner-button">
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
  );
}
