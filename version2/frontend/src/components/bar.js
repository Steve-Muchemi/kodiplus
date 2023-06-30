import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const cities = ['RENT', 'BUY', 'SELL', 'VALUE']

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
      <div className="city-data">
        <ul>
          {cities.map((city) => (
            <h3 key={city} onClick={() => handleCityClick(city)}>
              {city}
            </h3>
          ))}
        </ul>
      </div>
      <div className="content">
        <h3 className="challenges"> SOCIAL</h3>
        
      </div>
    </div>
  );
}

export default Sidebar;
