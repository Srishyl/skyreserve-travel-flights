
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold gradient-text">
            <span className="text-accent">Sky</span>
            <span className="text-primary">Reserve</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/discover" className="text-gray-700 hover:text-accent transition-colors duration-300">Discover</Link>
          <Link to="/deals" className="text-gray-700 hover:text-accent transition-colors duration-300">Special Deals</Link>
          <Link to="/about" className="text-gray-700 hover:text-accent transition-colors duration-300">About Us</Link>
          <Link to="/community" className="text-gray-700 hover:text-accent transition-colors duration-300">Community</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:block">
            Sign In
          </Button>
          <Button className="bg-accent hover:bg-accent/90">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
