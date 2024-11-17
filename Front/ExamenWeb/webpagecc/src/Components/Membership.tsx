import React from 'react';
import "./styles/Membership.css"
import { memberships, nonLegalServices } from '../assets/membershipData';

const MembershipPage: React.FC = () => {
  return (
    <div>
      <h1>Membership Plans</h1>
      <p>Choose from our membership plans to enjoy exclusive discounts and offers.</p>
      <div className="membership-container">
        {memberships.map((membership) => (
          <div key={membership.id} className="membership-item">
            <h2>{membership.name}</h2>
            <p>{membership.description}</p>
            <p><strong>Discount:</strong> {membership.discount}</p>
            <p><strong>Price:</strong> {membership.price}</p>
            <button onClick={() => alert('Sign-up functionality not yet implemented')}>
              Sign Up
            </button>
          </div>
        ))}
      </div>

      <h2>Non-Legal Services</h2>
      <p>Explore our range of exclusive services available to members.</p>
      <div className="services-container">
        {nonLegalServices.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><strong>Price:</strong> {service.price}</p>
            <button onClick={() => alert('Service booking functionality not yet implemented')}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;