import "./Session.css"

export default function Session({session}) {
    return (
      <div className="Session">
          <div className="Session-icon">
            <span>
              <i className="fa-regular fa-calendar"></i>
            </span>
          </div>
          <div className="Session-info">
            <p className="Session-info-title">{session.title}</p>
            <p className="Session-info-time">{session.time}</p>
            <p className="Session-info-leader">Session Leader: {session.sessionLeader ? session.sessionLeader.split(" – ")[0] : null}</p>
            <p className="Session-info-presenters">Session Presenters: <br></br>{session.presenters ? session.presenters.map(presenter => <p className="Session-info-presenter">{presenter.split(" – ")[0]}</p>) : null}</p>
            <p className="Session-info-location">Location: {session.location}</p>
          </div>
        <div className="Session-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    )
}