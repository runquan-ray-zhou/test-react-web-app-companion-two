import "./Carousel.css"
import { events } from "../../assets/data"
import EventCard from "../EventCard/EventCard"

export default function Carousel() {
  return (
    <div className="Carousel">
            {events.map((event) => 
                <EventCard event={event} key={event.id} />
            )}
    </div>
  )
}