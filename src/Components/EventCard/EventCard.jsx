import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./EventCard.css";

const colorObj = {
  "Leadership and Direction": "#BE1E2D",
  "Facility and Exhibit Design": "#F58220",
  "Trends and Innovation": "#E27FA5",
  "Education and Events": "#EC008C",
  "Organizational Culture and Workforce": "#1471B9",
  "Audience, Diversity, and Inclusion": "#00AEEF",
  "Operations and Development": "#E5A665",
  "Community and Partnerships": "#39B54A",
  "Lightning Session": "#000000",
};

export default function EventCard({ event }) {
  const colorKey = (event.track || event.type || "").trim();
  const buttonColor = colorObj[colorKey] || "#CCCCCC";
  console.log("Event Type:", event.type);
  console.log("Event Track:", event.track);

  return (
    <Link to={`/sessions/${event.id}`} className="EventCard-link">
      <div className="EventCard">
        <div className="EventCard-time">
          <p>{event.time}</p>
        </div>
        <div className="EventCard-info">
          <div className="Event-name">
            <p>{event.title}:</p>
          </div>
          <div className="EventCard-presenter">
            <p>Presenter:</p>
            <p>
              {event.presenters?.[0]?.split("–")[0] ||
                event.sessionLeader?.split("–")[0] ||
                "N/A"}
            </p>
          </div>
          <div className="EventCard-location">
            <p>Location:</p>
            <p>{event.location || "TBD"}</p>
          </div>
        </div>
        <div className="EventCard-button">
          <button
            style={{
              background: buttonColor,
            }}
          >
            {event.track ? event.track : event.type}
          </button>
        </div>
      </div>
    </Link>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    time: PropTypes.string,
    title: PropTypes.string,
    presenters: PropTypes.arrayOf(PropTypes.string),
    sessionLeader: PropTypes.string,
    location: PropTypes.string,
    type: PropTypes.string,
    track: PropTypes.string,
  }).isRequired,
};
