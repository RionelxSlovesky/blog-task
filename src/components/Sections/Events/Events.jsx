import SectionTitle from "../../SectionTitle/SectionTitle";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="py-16">
      <SectionTitle title="Events"></SectionTitle>

      <Flicking
        className="pt-4"
        align="prev"
        circular={true}
        onMoveEnd={() => {}}
      >
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[0]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[0]?.title}</h4>
          <p>Event Date: {events[0]?.date}</p>
          <p>{events[0]?.description}</p>
        </div>
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[1]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[1]?.title}</h4>
          <p>Event Date: {events[1]?.date}</p>
          <p>{events[1]?.description}</p>
        </div>
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[2]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[2]?.title}</h4>
          <p>Event Date: {events[2]?.date}</p>
          <p>{events[2]?.description}</p>
        </div>
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[3]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[3]?.title}</h4>
          <p>Event Date: {events[3]?.date}</p>
          <p>{events[3]?.description}</p>
        </div>
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[4]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[4]?.title}</h4>
          <p>Event Date: {events[4]?.date}</p>
          <p>{events[4]?.description}</p>
        </div>
        <div className="min-h-96 w-80 p-4 rounded bg-gray-100 mr-5">
          <img
            className="w-80 h-72 rounded object-cover"
            src={events[5]?.image}
            alt=""
          />
          <h4 className="text-3xl">{events[5]?.title}</h4>
          <p>Event Date: {events[5]?.date}</p>
          <p>{events[5]?.description}</p>
        </div>
        
      </Flicking>
    </section>
  );
};

export default Events;
