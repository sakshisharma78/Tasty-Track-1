import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantList from '../RestaurantList/RestaurantList';
import './Home.css';

const Home = () => {
  const [cuisine, setCuisine] = useState('Italian');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.error('Error fetching location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <div className="home-container">
      <video autoPlay muted loop id="myVideo">
        <source src="/background video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome to Tasty-Track</h1>
        <p>Discover the best cuisine-specific restaurant recommendations tailored just for you!</p>
      <div className="content-overlay">
        <h2>Choose a Cuisine:</h2>
        <button onClick={() => setCuisine('Italian')}>Italian</button>
        <button onClick={() => setCuisine('Chinese')}>Chinese</button>
        <button onClick={() => setCuisine('Indian')}>Indian</button>
        <button onClick={() => setCuisine('Mexican')}>Mexican</button>
        <button onClick={() => setCuisine('American')}>American</button>
        {latitude && longitude && (
          <RestaurantList cuisine={cuisine} latitude={latitude} longitude={longitude} />
        )}
      </div>
    </div>
    </div>
  );
};

export default Home;
