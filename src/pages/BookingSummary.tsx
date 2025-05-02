import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { UserProfile } from '../components/UserProfile';
import { Link } from 'react-router-dom';

interface FlightDetails {
  id: number;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
}

interface BookingSummaryProps {
  flightDetails: FlightDetails;
  searchParams: {
    from: string;
    to: string;
    departDate: string;
    returnDate?: string;
    passengers: number;
    class: string;
  };
}

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { flightDetails, searchParams } = location.state as BookingSummaryProps;

  const [passengerDetails, setPassengerDetails] = useState(
    Array(Number(searchParams.passengers)).fill({}).map(() => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
    }))
  );

  const [formErrors, setFormErrors] = useState<{[key: string]: string}[]>(
    Array(Number(searchParams.passengers)).fill({})
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const handlePassengerChange = (index: number, field: string, value: string) => {
    const newPassengerDetails = [...passengerDetails];
    newPassengerDetails[index] = {
      ...newPassengerDetails[index],
      [field]: value,
    };
    setPassengerDetails(newPassengerDetails);

    const newErrors = [...formErrors];
    newErrors[index] = {
      ...newErrors[index],
      [field]: ''
    };
    setFormErrors(newErrors);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  const totalPrice = flightDetails.price * searchParams.passengers;

  const validatePassengerDetails = () => {
    const newErrors = passengerDetails.map(passenger => {
      const errors: {[key: string]: string} = {};
      
      if (!passenger.firstName.trim()) {
        errors.firstName = 'First name is required';
      }
      if (!passenger.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }
      if (!passenger.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.email)) {
        errors.email = 'Invalid email format';
      }
      if (!passenger.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(passenger.phone.replace(/[^0-9]/g, ''))) {
        errors.phone = 'Invalid phone number (10 digits required)';
      }
      if (!passenger.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required';
      }
      
      return errors;
    });
    
    setFormErrors(newErrors);
    const isValid = newErrors.every(errors => Object.keys(errors).length === 0);
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = () => {
    if (validatePassengerDetails()) {
      navigate('/payment', {
        state: {
          flightDetails,
          searchParams,
          passengerDetails
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#717D7E]/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-[#717D7E]/10">
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
                  className="text-sm font-medium text-[#212F3C]/90 hover:text-[#212F3C]"
                >
                  Sign in
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-[#212F3C]/90 hover:bg-[#212F3C] transition-all duration-200"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Summary */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 border border-[#717D7E]/10">
              <h2 className="text-2xl font-bold text-[#212F3C] mb-6">Flight Details</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-[#212F3C]">{flightDetails.airline}</p>
                    <p className="text-sm text-[#717D7E]">Flight {flightDetails.flightNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#717D7E]">{searchParams.class}</p>
                    <p className="text-lg font-semibold text-[#212F3C]">{formatPrice(flightDetails.price)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-2xl font-bold text-[#212F3C]">{flightDetails.departureTime}</p>
                    <p className="text-sm text-[#717D7E]">{flightDetails.departure}</p>
                  </div>
                  <div className="flex-1 border-t-2 border-[#717D7E]/20 relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-[#717D7E]">
                      {flightDetails.duration}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#212F3C]">{flightDetails.arrivalTime}</p>
                    <p className="text-sm text-[#717D7E]">{flightDetails.arrival}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#717D7E]/10">
                  <p className="text-sm text-[#717D7E]">
                    Date: {searchParams.departDate}
                  </p>
                  <p className="text-sm text-[#717D7E]">
                    {flightDetails.stops === 0 ? 'Direct Flight' : `${flightDetails.stops} Stop(s)`}
                  </p>
                </div>
              </div>
            </div>

            {/* Passenger Details Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 border border-[#717D7E]/10">
              <h2 className="text-2xl font-bold text-[#212F3C] mb-6">
                Passenger Details ({searchParams.passengers} {searchParams.passengers === 1 ? 'Passenger' : 'Passengers'})
              </h2>
              <div className="space-y-8">
                {passengerDetails.map((passenger, index) => (
                  <div key={index} className="space-y-4 pb-6 border-b border-[#717D7E]/10 last:border-0">
                    <h3 className="text-lg font-semibold text-[#212F3C] flex items-center gap-2">
                      Passenger {index + 1}
                      <span className="text-sm font-normal text-[#717D7E]">
                        (All fields are required)
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#212F3C]/90 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className={`w-full rounded-xl border ${formErrors[index].firstName ? 'border-red-500' : 'border-[#717D7E]/15'} shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 px-4 py-2 text-[#212F3C]`}
                          value={passenger.firstName}
                          onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                        />
                        {formErrors[index].firstName && (
                          <p className="mt-1 text-sm text-red-500">{formErrors[index].firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212F3C]/90 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className={`w-full rounded-xl border ${formErrors[index].lastName ? 'border-red-500' : 'border-[#717D7E]/15'} shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 px-4 py-2 text-[#212F3C]`}
                          value={passenger.lastName}
                          onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                        />
                        {formErrors[index].lastName && (
                          <p className="mt-1 text-sm text-red-500">{formErrors[index].lastName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212F3C]/90 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className={`w-full rounded-xl border ${formErrors[index].email ? 'border-red-500' : 'border-[#717D7E]/15'} shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 px-4 py-2 text-[#212F3C]`}
                          value={passenger.email}
                          onChange={(e) => handlePassengerChange(index, 'email', e.target.value)}
                        />
                        {formErrors[index].email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors[index].email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212F3C]/90 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          className={`w-full rounded-xl border ${formErrors[index].phone ? 'border-red-500' : 'border-[#717D7E]/15'} shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 px-4 py-2 text-[#212F3C]`}
                          value={passenger.phone}
                          onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                        />
                        {formErrors[index].phone && (
                          <p className="mt-1 text-sm text-red-500">{formErrors[index].phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#212F3C]/90 mb-1">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          required
                          className={`w-full rounded-xl border ${formErrors[index].dateOfBirth ? 'border-red-500' : 'border-[#717D7E]/15'} shadow-sm focus:border-[#212F3C]/70 focus:ring-[#212F3C]/70 bg-white/90 px-4 py-2 text-[#212F3C]`}
                          value={passenger.dateOfBirth}
                          onChange={(e) => handlePassengerChange(index, 'dateOfBirth', e.target.value)}
                        />
                        {formErrors[index].dateOfBirth && (
                          <p className="mt-1 text-sm text-red-500">{formErrors[index].dateOfBirth}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 border border-[#717D7E]/10 sticky top-8">
              <h2 className="text-2xl font-bold text-[#212F3C] mb-6">Price Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#717D7E]">Base Fare</span>
                  <span className="text-[#212F3C]">{formatPrice(flightDetails.price)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#717D7E]">Passengers</span>
                  <span className="text-[#212F3C]">x{searchParams.passengers}</span>
                </div>
                <div className="border-t border-[#717D7E]/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#212F3C]">Total</span>
                    <span className="text-2xl font-bold text-[#212F3C]">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full mt-6 px-6 py-3 bg-[#212F3C]/90 text-white rounded-xl hover:bg-[#212F3C] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isFormValid}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingSummary; 