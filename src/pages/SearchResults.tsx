import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { UserProfile } from '../components/UserProfile';
import { Link } from 'react-router-dom';

interface SearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  passengers: number;
  class: string;
}

// Simple mapping of city/airport codes to lat/lng
const cityCoords: Record<string, { lat: number; lng: number }> = {
  'Mumbai': { lat: 19.0896, lng: 72.8656 },
  'Delhi': { lat: 28.5562, lng: 77.1000 },
  'Bangalore': { lat: 13.1986, lng: 77.7066 },
  'Chennai': { lat: 12.9941, lng: 80.1709 },
  'Kolkata': { lat: 22.6547, lng: 88.4467 },
  'Goa': { lat: 15.3800, lng: 73.8317 },
  'Kochi': { lat: 10.1510, lng: 76.4019 },
  'Jaipur': { lat: 26.8242, lng: 75.8122 },
  'Leh': { lat: 34.1357, lng: 77.5465 },
  'Port Blair': { lat: 11.6410, lng: 92.7297 },
  'Varanasi': { lat: 25.4524, lng: 82.8593 },
};

// Haversine formula to calculate distance in km
function getDistanceKm(from: string, to: string): number {
  const R = 6371; // Earth radius in km
  const fromCoord = cityCoords[from] || cityCoords['Mumbai'];
  const toCoord = cityCoords[to] || cityCoords['Delhi'];
  const dLat = (toCoord.lat - fromCoord.lat) * Math.PI / 180;
  const dLng = (toCoord.lng - fromCoord.lng) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(fromCoord.lat * Math.PI / 180) *
      Math.cos(toCoord.lat * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Professional price calculation
function calculatePrice(from: string, to: string, flightClass: string): number {
  const distance = getDistanceKm(from, to);
  const baseFare = 2000; // INR
  const perKmRate = 6.5; // INR per km
  let multiplier = 1;
  switch (flightClass) {
    case 'Premium Economy':
      multiplier = 1.3;
      break;
    case 'Business':
      multiplier = 2;
      break;
    case 'First':
      multiplier = 3;
      break;
    default:
      multiplier = 1;
  }
  return Math.round((baseFare + distance * perKmRate) * multiplier);
}

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state as SearchParams;
  const { user } = useAuth();

  // Dummy flight data with dynamic prices
  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      flightNumber: '6E123',
      departure: searchParams.from,
      arrival: searchParams.to,
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      duration: '2h',
      price: calculatePrice(searchParams.from, searchParams.to, searchParams.class),
      stops: 0,
    },
    {
      id: 2,
      airline: 'Air India',
      flightNumber: 'AI456',
      departure: searchParams.from,
      arrival: searchParams.to,
      departureTime: '2:00 PM',
      arrivalTime: '4:30 PM',
      duration: '2h 30m',
      price: calculatePrice(searchParams.from, searchParams.to, searchParams.class) + 500, // Slightly higher for variety
      stops: 1,
    },
    {
      id: 3,
      airline: 'Vistara',
      flightNumber: 'UK789',
      departure: searchParams.from,
      arrival: searchParams.to,
      departureTime: '7:00 AM',
      arrivalTime: '9:15 AM',
      duration: '2h 15m',
      price: calculatePrice(searchParams.from, searchParams.to, searchParams.class) - 300, // Slightly lower for variety
      stops: 0,
    },
    // Add more dummy flights as needed
  ];

  // Function to format price in Indian currency
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  const handleSelectFlight = (flight: typeof flights[0]) => {
    navigate('/booking-summary', {
      state: {
        flightDetails: flight,
        searchParams: searchParams
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#717D7E]/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-[#717D7E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-[#717D7E]">Sky</span>
                <span className="text-[#212F3C]">Reserve</span>
              </span>
            </Link>
            {user ? (
              <UserProfile />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-[#212F3C]/90 hover:text-[#212F3C]"
                >
                  Sign in
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-[#212F3C]/90 hover:bg-[#212F3C] transition-all duration-200"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Search Summary */}
      <div className="bg-gradient-to-r from-[#212F3C] to-[#717D7E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center text-white">
            <div>
              <h2 className="text-xl font-semibold">
                {searchParams.from} → {searchParams.to}
              </h2>
              <p className="text-white/80">
                {searchParams.departDate} • {searchParams.passengers} Passengers • {searchParams.class}
              </p>
            </div>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-white/90 text-[#212F3C] rounded-xl hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Modify Search
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-[#717D7E]/10"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-[#212F3C]">{flight.airline}</span>
                    <span className="text-sm text-[#717D7E]">
                      Flight {flight.flightNumber}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-8">
                    <div>
                      <p className="text-2xl font-bold text-[#212F3C]">{flight.departureTime}</p>
                      <p className="text-sm text-[#717D7E]">{flight.departure}</p>
                    </div>
                    <div className="flex-1 border-t-2 border-[#717D7E]/20 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-[#717D7E]">
                        {flight.duration}
                      </span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#212F3C]">{flight.arrivalTime}</p>
                      <p className="text-sm text-[#717D7E]">{flight.arrival}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-sm text-[#717D7E]">
                      {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}
                    </span>
                    <span className="text-sm text-[#717D7E]">
                      Distance: {getDistanceKm(flight.departure, flight.arrival).toLocaleString()} km
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-[#212F3C]">
                    {formatPrice(flight.price)}
                  </p>
                  <button 
                    onClick={() => handleSelectFlight(flight)}
                    className="mt-3 w-full px-6 py-3 bg-[#212F3C]/90 text-white rounded-xl hover:bg-[#212F3C] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResults; 