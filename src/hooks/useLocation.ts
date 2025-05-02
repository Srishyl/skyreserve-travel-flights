import { useState, useEffect } from 'react';

interface LocationState {
  city: string;
  loading: boolean;
  error: string | null;
}

const INDIAN_CITIES = {
  // Mapping of coordinates to major Indian cities
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Delhi': { lat: 28.6139, lng: 77.2090 },
  'Bangalore': { lat: 12.9716, lng: 77.5946 },
  'Chennai': { lat: 13.0827, lng: 80.2707 },
  'Kolkata': { lat: 22.5726, lng: 88.3639 },
  'Hyderabad': { lat: 17.3850, lng: 78.4867 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Ahmedabad': { lat: 23.0225, lng: 72.5714 },
};

const findNearestCity = (userLat: number, userLng: number): string => {
  let nearestCity = 'Mumbai'; // Default city
  let minDistance = Number.MAX_VALUE;

  Object.entries(INDIAN_CITIES).forEach(([city, coords]) => {
    const distance = Math.sqrt(
      Math.pow(userLat - coords.lat, 2) + Math.pow(userLng - coords.lng, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  });

  return nearestCity;
};

export const useLocation = () => {
  const [state, setState] = useState<LocationState>({
    city: 'Mumbai', // Default to Mumbai initially
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        city: 'Mumbai',
        loading: false,
        error: 'Geolocation is not supported by your browser'
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearestCity = findNearestCity(
          position.coords.latitude,
          position.coords.longitude
        );
        setState({
          city: nearestCity,
          loading: false,
          error: null
        });
      },
      (error) => {
        console.error('Geolocation error:', error);
        setState({
          city: 'Mumbai',
          loading: false,
          error: 'Unable to access location. Showing flights from Mumbai.'
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }, []);

  return state;
}; 