import React from 'react';
import { photoSales } from '../assets/eventData';
import './styles/PhotoSales.css'

const PhotoSale: React.FC = () => {
  return (
    <div>
      <h1>Photo Sale</h1>
      <p>Browse and purchase high-quality photos of your favorite models.</p>
      <div className="photo-sale-container">
        {photoSales.map((photo) => (
          <div key={photo.id} className="photo-sale-item">
            <img
              src={photo.image}
              alt={photo.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <h2>{photo.title}</h2>
            <p>{photo.description}</p>
            <p>Price: {photo.price}</p>
            <button onClick={() => alert('Purchase functionality not yet implemented')}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSale;
