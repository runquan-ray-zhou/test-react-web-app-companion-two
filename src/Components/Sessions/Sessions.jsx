import "./Sessions.css";
import Session from "../Session/Session";

export default function Sessions({ todaySessions }) {
  return (
    <div className="Sessions">
      <div className="Sessions-list">
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>9:00 AM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 9;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>10:00 AM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 10;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>11:00 AM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 11;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>12:00 PM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 12;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>1:00 PM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 1;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>2:00 PM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 2;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>3:00 PM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 3;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
        <div className="Sessions-pm">
          <div className="Sessions-time">
            <p>4:00 PM</p>
          </div>
          {todaySessions
            .filter((session) => {
              const sessionHour = parseInt(session.time.split(":")[0]);
              return sessionHour === 4;
            })
            .map((session, index) => (
              <Session key={index} session={session} />
            ))}
        </div>
      </div>
    </div>
  );
}
