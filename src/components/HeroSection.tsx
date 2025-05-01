
import React from "react";
import SearchForm from "./SearchForm";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-800 to-sky-700 hero-clip-path">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/8cd01f13-e319-4bf7-a8ef-e9fd9a103219.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-48 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
            We Take Care <br />
            <span className="relative inline-block">
              of Your Trip
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full"></span>
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Discover amazing destinations and book your perfect flight with SkyReserve.
            We make your travel experience seamless and memorable.
          </p>
        </div>
        <SearchForm />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-500">Starting at</p>
            <p className="text-xl md:text-3xl font-bold text-accent">$199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
