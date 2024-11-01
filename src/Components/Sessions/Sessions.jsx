import "./Sessions.css";
import Session from "../Session/Session";

export default function Sessions({ todaySessions }) {
  // Define the time slots as strings matching the format in your data
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Helper function to convert time to a comparable format
  const convertTimeToComparable = (timeStr) => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    // Convert 12-hour format to 24-hour for easier comparison
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes; // Convert to total minutes for easier comparison
  };

  // Function to check if a session overlaps with a specific time slot
  const sessionOverlapsSlot = (sessionTime, slot) => {
    const [range] = sessionTime.split(" US CDT");
    const [start, end] = range.split(" – ");

    const slotStartMinutes = convertTimeToComparable(slot);
    const slotEndMinutes = slotStartMinutes + 60; // Each slot is an hour
    const startMinutes = convertTimeToComparable(start);
    const endMinutes = convertTimeToComparable(end);

    // Check if the session starts or ends within the slot or if it fully overlaps the slot
    return (
      (startMinutes >= slotStartMinutes && startMinutes < slotEndMinutes) || // Starts within slot
      (endMinutes > slotStartMinutes && endMinutes <= slotEndMinutes) || // Ends within slot
      (startMinutes <= slotStartMinutes && endMinutes >= slotEndMinutes) // Fully overlaps slot
    );
  };

  return (
    <div className="Sessions">
      <div className="Sessions-list">
        {timeSlots.map((slot) => {
          // Filter sessions that overlap with this time slot
          const sessionsForHour = todaySessions.filter((session) =>
            sessionOverlapsSlot(session.time, slot)
          );

          // Only render the slot if there are sessions
          if (sessionsForHour.length === 0) return null;

          return (
            <div className="Sessions-pm" key={slot}>
              <div className="Sessions-time">
                <p>{slot}</p>
              </div>
              {sessionsForHour.map((session, index) => (
                <Session key={index} session={session} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
