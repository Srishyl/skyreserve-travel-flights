import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../hooks/useLocation';

const destinations = [
  {
    id: 1,
    name: 'Goa',
    image: '/destinations/goa.jpg',
    description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese charm',
    startingPrice: 4999,
    nearestAirport: 'Goa',
  },
  {
    id: 2,
    name: 'Kerala',
    image: '/destinations/kerala.jpg',
    description: 'Serene backwaters, lush greenery, and ayurvedic retreats',
    startingPrice: 5999,
    nearestAirport: 'Kochi',
  },
  {
    id: 3,
    name: 'Rajasthan',
    image: '/destinations/rajasthan.jpg',
    description: 'Royal palaces, desert safaris, and rich cultural heritage',
    startingPrice: 6499,
    nearestAirport: 'Jaipur',
  },
  {
    id: 4,
    name: 'Ladakh',
    image: '/destinations/ladakh.jpg',
    description: 'Himalayan beauty, Buddhist monasteries, and adventure sports',
    startingPrice: 8999,
    nearestAirport: 'Leh',
  },
  {
    id: 5,
    name: 'Andaman Islands',
    image: '/destinations/andaman.jpg',
    description: 'Crystal clear waters, coral reefs, and pristine beaches',
    startingPrice: 9999,
    nearestAirport: 'Port Blair',
  },
  {
    id: 6,
    name: 'Varanasi',
    image: '/destinations/varanasi.jpg',
    description: 'Spiritual ghats, ancient temples, and cultural experiences',
    startingPrice: 5499,
    nearestAirport: 'Varanasi',
  }
];

const FeaturedDestinations = () => {
  const navigate = useNavigate();
  const { city, loading, error } = useLocation();

  const handleDestinationClick = (destination: typeof destinations[0]) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];

    navigate('/search-results', {
      state: {
        from: city || 'Mumbai', // Use detected city or fallback to Mumbai
        to: destination.nearestAirport,
        departDate: formattedDate,
        passengers: '1',
        class: 'Economy'
      }
    });
  };

  return (
    <section className="py-16 bg-[#717D7E]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212F3C] mb-4">
            Popular Destinations in India
          </h2>
          <p className="text-lg text-[#717D7E] max-w-2xl mx-auto">
            {loading ? (
              'Detecting your location...'
            ) : error ? (
              'Discover the incredible diversity of India'
            ) : (
              `Explore amazing destinations with flights from ${city}`
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#717D7E]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#212F3C] mb-2">
                  {destination.name}
                </h3>
                <p className="text-[#717D7E] mb-4">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#717D7E]">
                      {loading ? (
                        'Detecting location...'
                      ) : (
                        `Flights from ${city || 'your city'}`
                      )}
                    </p>
                    <p className="font-semibold text-[#212F3C]">
                      ₹{destination.startingPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDestinationClick(destination)}
                    className="px-4 py-2 bg-[#212F3C] text-white rounded-md hover:bg-[#212F3C]/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
