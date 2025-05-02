import React from "react";
import { Shield, Clock, CreditCard, HeartHandshake } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Secure Booking",
      description: "Your payment and personal information are always protected",
    },
    {
      id: 2,
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs",
    },
    {
      id: 3,
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it and give you extra credit",
    },
    {
      id: 4,
      icon: <HeartHandshake className="h-8 w-8 text-accent" />,
      title: "Trusted Partners",
      description: "We work with reliable airlines around the world",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#717D7E]/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#212F3C] leading-tight">
            Why Choose SkyReserve
          </h2>
          <p className="text-[#717D7E] max-w-2xl mx-auto text-lg">
            We're dedicated to making your flight booking experience seamless and worry-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-md border border-[#717D7E]/10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center bg-[#717D7E]/5 rounded-full mb-6 group-hover:bg-[#212F3C]/5 transition-colors duration-300">
                {React.cloneElement(feature.icon, {
                  className: "h-10 w-10 text-[#212F3C] group-hover:text-[#212F3C]"
                })}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#212F3C]">{feature.title}</h3>
              <p className="text-[#717D7E] text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
