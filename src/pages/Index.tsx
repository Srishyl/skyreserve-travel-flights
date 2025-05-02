import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelTips from "@/components/TravelTips";
import Footer from "@/components/Footer";
import { useAuth } from '../lib/AuthContext';
import { UserProfile } from '../components/UserProfile';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
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
                  className="text-sm font-medium text-[#717D7E] hover:text-[#717D7E]/80"
                >
                  Sign in
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#212F3C] hover:bg-[#212F3C]/90"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Original components */}
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
      <TravelTips />
      <Footer />
    </div>
  );
};

export default Index;
