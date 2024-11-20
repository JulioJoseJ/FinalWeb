import React, { useEffect, useState } from 'react';
import './styles/Products.css';
import { productos } from '../assets/productoAsset';
import api from '../api'

interface Organ{
  id: number;
  
  type: string;
 
  status: string;

  donor: string;

  client: string;
}

const Organs: React.FC =() =>{
  const[organs,setOrgans] =useState<Organ[]>([])

  useEffect(()=>{
    const fetchOrgans =async () => {
      try{
        const response = await api.get('/organs')
        setOrgans(response.data)
      }catch(error){
        console.error('Error fetching Organs: ',error)
      }
    };
    fetchOrgans();
  },[]);



  
  return (
    <div className="producto" id="menuProd">
      <h1>Our Products</h1>
      <p className="prodText">Choose from the best for the best</p>
      <div className="product-list">
        {productos.map((organs) => (
          <div key={organs.type} className="product-item">
            <p>{organs.name}{organs.price}{organs.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Organs
