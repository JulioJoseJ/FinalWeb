import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Models from './Components/ModelsManagement';
import PhotoSale from './Components/PhotoSales';
import MembershipPage from './Components/Membership';
import Organs from './Components/Products';
import EventList from './Components/EventList';
import Users from './Components/userComponent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Models' element={<Models/>}/>
        <Route path='/Products' element={<Organs/>}/>
        <Route path='/User' element={<Users/>}/>
        <Route path='/Events' element={<EventList/>}/>
        <Route path='/PhotoSale' element={<PhotoSale/>}/>
        <Route path='/Membership' element={<MembershipPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
