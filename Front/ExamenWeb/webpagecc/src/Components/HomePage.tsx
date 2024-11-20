import React from 'react';
import './styles/HomePage.css';
import Header from './Header';
import  Organs  from './Products';
import ModelList from './ModelsManagement';
import EventList from './EventList';
import PhotoSale from './PhotoSales';
import MembershipPage from './Membership';
import ContactUs from './ContactUs';
import Users from './userComponent';
const HomePage: React.FC = () => {

  return (
    <div>
      <Header />
      <Organs/>
      <Users/>
      <ModelList/>
      <EventList/>
      <PhotoSale/>
      <MembershipPage/>
      <ContactUs/>
    </div>
  );
};

export default HomePage;
