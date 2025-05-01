
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar as CalendarIcon, MapPin, Users, Plane } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchForm: React.FC = () => {
  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/10 p-2 rounded-full">
          <Plane size={24} className="text-accent" />
        </div>
        <h2 className="text-xl font-semibold">Search for Flights</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2 col-span-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            From
          </label>
          <Input 
            placeholder="Enter departure city" 
            className="w-full"
          />
        </div>
        
        <div className="space-y-2 col-span-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            To
          </label>
          <Input 
            placeholder="Enter destination city" 
            className="w-full"
          />
        </div>
        
        <div className="space-y-2 col-span-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users size={16} className="text-gray-500" />
            Passengers
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <CalendarIcon size={16} className="text-gray-500" />
            Departure Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !departureDate && "text-muted-foreground"
                )}
              >
                {departureDate ? format(departureDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <CalendarIcon size={16} className="text-gray-500" />
            Return Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !returnDate && "text-muted-foreground"
                )}
              >
                {returnDate ? format(returnDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <Button className="w-full md:w-auto px-8 py-6 text-lg bg-accent hover:bg-accent/90 transition-colors">
        <Search className="mr-2 h-4 w-4" /> Search Flights
      </Button>
    </div>
  );
};

export default SearchForm;
