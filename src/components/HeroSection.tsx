import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    class: 'Economy',
  });

  const backgroundImages = [
    '/images/flights/flight-1.jpg',
    '/images/flights/flight-2.jpg',
    '/images/flights/flight-3.jpg',
    '/images/flights/flight-4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search-results', { state: searchParams });
  };

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-[#212F3C]/90 to-[#717D7E]/80 hero-clip-path">
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#212F3C]/80 via-[#212F3C]/70 to-[#717D7E]/75" />
      <div className="container mx-auto px-4 pt-24 pb-40 md:pt-32 md:pb-56 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            We Take Care <br />
            <span className="relative inline-block">
              of Your Trip
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#717D7E]/60 rounded-full"></span>
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover amazing destinations and book your perfect flight with SkyReserve.
            We make your travel experience seamless and memorable.
          </p>
        </div>
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto w-full border border-[#717D7E]/10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">From</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] placeholder-[#717D7E]/60 transition-all duration-200"
                    placeholder="City or Airport"
                    value={searchParams.from}
                    onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">To</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] placeholder-[#717D7E]/60 transition-all duration-200"
                    placeholder="City or Airport"
                    value={searchParams.to}
                    onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">Departure Date</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] transition-all duration-200"
                    value={searchParams.departDate}
                    onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">Return Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] transition-all duration-200"
                    value={searchParams.returnDate}
                    onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">Passengers</label>
                <div className="relative">
                  <select
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] appearance-none transition-all duration-200"
                    value={searchParams.passengers}
                    onChange={(e) => setSearchParams({ ...searchParams, passengers: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#212F3C]/90 uppercase tracking-wide">Class</label>
                <div className="relative">
                  <select
                    className="mt-1 block w-full rounded-xl border-[#717D7E]/15 shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 pl-4 pr-10 py-3 text-[#212F3C] appearance-none transition-all duration-200"
                    value={searchParams.class}
                    onChange={(e) => setSearchParams({ ...searchParams, class: e.target.value })}
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-[#717D7E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#212F3C]/90 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-[#212F3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#212F3C]/70 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Search Flights
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/85 backdrop-blur-md shadow-xl flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm md:text-base text-[#717D7E]/90">Starting at</p>
            <p className="text-2xl md:text-4xl font-bold text-[#212F3C]/90">₹3,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
