// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBaE-jbdWSuI9BajrRMvcijlnK8GBxdCrA', // Replace with your actual key
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      center={location}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default MapComponent;
