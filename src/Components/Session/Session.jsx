export default function Session({session}) {
    return (
    <div className="Session">
        <p>{session.time}</p>
        <p>{session.title}</p>
        <p>{session.location}</p>
      </div>
    )
}