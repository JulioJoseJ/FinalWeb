import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../assets/eventData';
import './styles/Events.css'

const EventList: React.FC = () => {
  return (
    <div className='EventMain'>
      <h1>Upcoming Fashion Events</h1>
       <ul className="EventList">
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`} className='EventDisplay'>
              {event.title} - {event.date} - {event.location}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: '150px', height: 'auto', marginRight: '20px' }}
                />
                <div>
                  <h2>{event.title}</h2>
                  <p>{event.date} - {event.location}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
       </ul>
    </div>
  );
};

export default EventList;