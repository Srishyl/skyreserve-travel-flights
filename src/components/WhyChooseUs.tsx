
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
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SkyReserve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to making your flight booking experience seamless and worry-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
