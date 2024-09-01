import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './RestaurantList.css'; // Add this line to import PropTypes

const RestaurantList = ({ cuisine, latitude, longitude }) => {
  // Add 'latitude' to the props validation
  RestaurantList.propTypes = {
    cuisine: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  };
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/restaurants', {
          params: { cuisine, longitude, latitude },
        });
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, [cuisine, latitude, longitude]);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
          <p>{restaurant.cuisine}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
