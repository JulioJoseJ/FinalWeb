import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../assets/eventData';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((event) => event.id === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <h2>Participating Models</h2>
      <ul>
        {event.participatingModels.map((model, index) => (
          <li key={index}>
            {model.name} - {model.age} - {model.gender}
          </li>
        ))}
      </ul>
      <h2>Products Showcased</h2>
      <ul>
        {event.productsShowcased.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} - {product.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;