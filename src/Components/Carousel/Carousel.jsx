import { useState, useEffect } from "react";
import "./Carousel.css";
import {
  september28thPresentations,
  september29thPresentations,
  september30thPresentations,
} from "../../assets/data";
import EventCard from "../EventCard/EventCard";

export default function Carousel() {
  const [events, setEvents] = useState([]);

  const getRandomEvents = () => {
    const allPresentations = [
      september28thPresentations,
      september29thPresentations,
      september30thPresentations,
    ];

    const randomPresentationArray =
      allPresentations[Math.floor(Math.random() * allPresentations.length)];

    const shuffled = [...randomPresentationArray].sort(
      () => 0.5 - Math.random()
    );

    return shuffled.slice(0, 5);
  };

  const getSixEvents = () => {
    const allPresentations = [...september28thPresentations.slice(0, 5)];
    return allPresentations;
  };

  useEffect(() => {
    setEvents(getRandomEvents());
  }, []);

  return (
    <div className="Carousel">
      {events.map((event) => (
        <EventCard event={event} key={`${event.id}`} />
      ))}
    </div>
  );
}
