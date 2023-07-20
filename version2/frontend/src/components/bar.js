import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const handleCityClick = (city) => {
    console.log(`Clicked on ${city}`);
    // Handle the city click event
  };

  const handleViewContentClick = () => {
    console.log('Clicked on View Content');
    // Handle the view content click event
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleCityClick('Rent')}>Rent</li>
        <li onClick={() => handleCityClick('BnB\'s')}>BnB's</li>
        <li onClick={() => handleCityClick('Luxury')}>Luxury</li>
        <li onClick={() => handleCityClick('Buy')}>Buy</li>
      </ul>
    </div>
  );
}

export default Sidebar;
