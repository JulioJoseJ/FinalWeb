import React from 'react';
import './styles/Products.css';
import { productos } from '../assets/productoAsset';

export const Products = () => {
  
  return (
    <div className="producto" id="menuProd">
      <h1>Our Products</h1>
      <p className="prodText">Choose from the best for the best</p>
      <div className="product-list">
        {productos.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.url} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
