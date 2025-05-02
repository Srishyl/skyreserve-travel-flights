import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const TravelTips: React.FC = () => {
  const tips = [
    {
      id: 1,
      title: "Best Time to Book International Flights",
      description: "Learn the optimal timing to secure the best deals on international travel.",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Packing Essentials for Every Trip",
      description: "Never forget important items with our comprehensive packing guide.",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "How to Navigate Airports Like a Pro",
      description: "Tips and tricks to make your airport experience smooth and stress-free.",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#717D7E]/5 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#212F3C] leading-tight">Travel Tips & Guides</h2>
          <p className="text-[#717D7E] max-w-2xl mx-auto text-lg">
            Expert advice to enhance your travel experience and help you make the most of your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Card 
              key={tip.id} 
              className="border border-[#717D7E]/10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-[#212F3C] group-hover:text-[#212F3C]/90 transition-colors">
                  {tip.title}
                </CardTitle>
                <CardDescription className="text-[#717D7E] text-sm">
                  {tip.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#717D7E] text-base leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent text-[#212F3C] hover:text-[#717D7E] group-hover:translate-x-2 transition-all duration-300"
                >
                  Read More <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
