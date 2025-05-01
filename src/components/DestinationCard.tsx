
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  image: string;
  country: string;
  city: string;
  price: string;
  flag: string;
  className?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  image, 
  country, 
  city, 
  price, 
  flag,
  className
}) => {
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", className)}>
      <div className="relative h-48">
        <img
          src={image}
          alt={`${city}, ${country}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm py-1 px-2 rounded-full flex items-center gap-1.5">
          <img src={flag} alt={country} className="w-4 h-4" />
          <span className="text-sm font-medium">{country}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{city}</h3>
          <span className="font-bold text-accent">{price}</span>
        </div>
        
        <Button variant="outline" className="w-full group">
          <span>Explore Now</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
