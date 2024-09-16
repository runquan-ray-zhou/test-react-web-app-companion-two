import { useState, useEffect } from "react";
import "./Carousel.css";
import {
  september28thPresentations,
  september27thPresentations,
  september29thPresentations,
  september30thPresentations,
} from "../../assets/data";
import EventCard from "../EventCard/EventCard";

export default function Carousel() {
  const [events, setEvents] = useState([]);

  const getRandomEvents = () => {
    const allPresentations = [
      september27thPresentations,
      september28thPresentations,
      september29thPresentations,
      september30thPresentations,
    ];

    // Select a random array of presentations
    const randomPresentationArray =
      allPresentations[Math.floor(Math.random() * allPresentations.length)];

    // Shuffle the selected array
    const shuffled = [...randomPresentationArray].sort(
      () => 0.5 - Math.random()
    );

    // Get the first 5 items (or fewer if the array is smaller)
    return shuffled.slice(0, 5);
  };

  // Use it in your useEffect
  useEffect(() => {
    setEvents(getRandomEvents());
  }, []);

  return (
    <div className="Carousel">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}
