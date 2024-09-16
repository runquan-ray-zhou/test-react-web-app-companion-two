import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arLogo from "../../assets/arLogo.svg";
import NavBar from "../../Components/NavBar/NavBar";
import {
  september28thPresentations,
  september27thPresentations,
  september29thPresentations,
} from "../../assets/data";
import Sessions from "../../Components/Sessions/Sessions";
import "./Index.css";

export default function Index() {
  const [todaySessions, setTodaySessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTodaySessions(september27thPresentations);
  }, []);

  useEffect(() => {
    setFilteredSessions([...todaySessions]);
  }, [todaySessions.length]);

  const handleTextChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    const filteredSessions = searchTerm.length
      ? filterSessions(searchTerm, todaySessions)
      : todaySessions;
    setFilteredSessions(filteredSessions);
  };

  function filterSessions(searchTerm, allSessions) {
    return allSessions.filter((session) => {
      if (!session.presenters || !Array.isArray(session.presenters)) {
        return false;
      }
      return session.presenters.some((presenter) =>
        presenter.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  function handleDateChange(date) {
    let newSessions;
    if (date === "Fri, 09/27") {
      newSessions = september27thPresentations;
    } else if (date === "Sat, 09/28") {
      newSessions = september28thPresentations;
    } else if (date === "Sun, 09/29") {
      newSessions = september29thPresentations;
    }
    setTodaySessions(newSessions);
    setFilteredSessions(newSessions);
    setSearchQuery("");
  }
  return (
    <div className="Index">
      <div className="Index-container">
        <NavBar />
        <div className="searchbar-container">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              autoComplete="off"
              onChange={handleTextChange}
            />
            <button>
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="Index-content">
          <div className="Index-sessions-dates">
            <button
              style={
                todaySessions === september27thPresentations
                  ? { backgroundColor: "#002f88", color: "#ffffff" }
                  : { backgroundColor: "#ffffff", color: "#000000" }
              }
              className="Index-sessions-date"
              onClick={() => handleDateChange("Fri, 09/27")}
            >
              Fri, 09/27
            </button>
            <button
              style={
                todaySessions === september28thPresentations
                  ? { backgroundColor: "#002f88", color: "#ffffff" }
                  : { backgroundColor: "#ffffff", color: "#000000" }
              }
              className="Index-sessions-date"
              onClick={() => handleDateChange("Sat, 09/28")}
            >
              Sat, 09/28
            </button>
            <button
              style={
                todaySessions === september29thPresentations
                  ? { backgroundColor: "#002f88", color: "#ffffff" }
                  : { backgroundColor: "#ffffff", color: "#000000" }
              }
              className="Index-sessions-date"
              onClick={() => handleDateChange("Sun, 09/29")}
            >
              Sun, 09/29
            </button>
            <button className="Index-sessions-date">Mon, 09/30</button>
            <button className="Index-sessions-date">Tue, 10/01</button>
          </div>
          <div className="Index-sessions">
            <Sessions todaySessions={filteredSessions} />
          </div>
        </div>
        <div className="Index-scanner-button">
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
