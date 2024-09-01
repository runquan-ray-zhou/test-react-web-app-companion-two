import "./EventCard.css"

export default function EventCard({event} ) {
  return (
        <div className="EventCard">
            <div className="EventCard-time">
                <p>{event.time}</p>
            </div>
            <div className="EventCard-info">
                <div className="Event-name">
                    <p>{event.name}:</p>
                </div>
                <div className="EventCard-description">
                    <p>{event.description}</p>
                </div>
                <div className="EventCard-presenter">
                    <p>Presenter:</p><p>{event.presenter}</p>
                </div>
                <div className="EventCard-location">
                    <p>Location:</p><p>{event.location}</p>
                </div>
                <div className="EventCard-button">
                    <button>Leadership and Direction</button>
                </div>
            </div>
        </div>
  )
}