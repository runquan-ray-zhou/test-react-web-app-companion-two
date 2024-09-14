import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arLogo from "../../assets/arLogo.svg";
import NavBar from "../../Components/NavBar/NavBar";
import { september28thPresentations } from "../../assets/data";
import Sessions from "../../Components/Sessions/Sessions";
import "./Index.css";

export default function Index() {
  const [todaySessions, setTodaySessions] = useState(
    september28thPresentations
  );
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTodaySessions(september28thPresentations);
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
              placeholder="Search Presenter"
              autoComplete="off"
              onChange={handleTextChange}
            />
            <button>
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="Index-sessions">
          <Sessions todaySessions={filteredSessions} />
        </div>
        <div className="Index-scanner-button">
          <button onClick={() => navigate("/scanner")}>
            <img src={arLogo} alt="scanner-arLogo" />
          </button>
        </div>
      </div>
    </div>
  );
}
