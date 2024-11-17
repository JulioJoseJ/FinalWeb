import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Models from './Components/ModelsManagement';
import PhotoSale from './Components/PhotoSales';
import MembershipPage from './Components/Membership';
import { Products } from './Components/Products';
import EventList from './Components/EventList';

function App() {
const ApiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Models' element={<Models/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Events' element={<EventList/>}/>
        <Route path='/PhotoSale' element={<PhotoSale/>}/>
        <Route path='/Membership' element={<MembershipPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
