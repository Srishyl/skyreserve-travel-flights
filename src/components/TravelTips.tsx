
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Travel Tips & Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert advice to enhance your travel experience and help you make the most of your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <Card key={tip.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{tip.title}</CardTitle>
                <CardDescription>{tip.readTime}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{tip.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent text-accent">
                  Read More <ArrowUpRight className="ml-1 h-4 w-4" />
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
