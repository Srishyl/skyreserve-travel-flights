
import React from "react";
import DestinationCard from "./DestinationCard";
import { Plane } from "lucide-react";

const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
      country: "USA",
      city: "San Francisco",
      price: "$745",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      country: "Spain",
      city: "Barcelona",
      price: "$522",
      flag: "https://flagcdn.com/w20/es.png",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      country: "Brazil",
      city: "Rio de Janeiro",
      price: "$942",
      flag: "https://flagcdn.com/w20/br.png",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <div className="flex items-center">
            <div className="h-10 w-0.5 bg-accent mr-3"></div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Destinations</h2>
          </div>
          <div className="ml-auto">
            <div className="relative">
              <Plane className="text-accent/70 animate-float" />
              <div className="absolute top-0 left-0 border-2 border-dashed border-accent/20 w-16 h-10 rounded-full transform -translate-x-6 -translate-y-1"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              country={destination.country}
              city={destination.city}
              price={destination.price}
              flag={destination.flag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
