import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { guests } from "@/lib/guests";
import { sendRsvpEmail } from "@/lib/sendRsvpEmail";

type Guest = {
  name: string;
  partner?: string;
};

type RSVPData = {
  guestName: string;
  attending: boolean;
  mealPreference?: string;
  arrivalDate?: string;
  dietaryRestrictions?: string;
  email?: string;
};

const Rsvp = () => {
  const [step, setStep] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [foundGuests, setFoundGuests] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [rsvpData, setRsvpData] = useState<RSVPData>({
    guestName: "",
    attending: true,
  });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  console.log("RSVP Data:", rsvpData); // Debugging line to check the RSVP data

  const steps = [
    "Find Invitation",
    "Wedding Details",
    "Meal Preference",
    "Arrival Date",
    "Dietary Info",
    "Confirmation",
  ];

  const mealOptions = [
    {
      id: "beef",
      label: "Beef Tenderloin",
      description: "Grass-fed beef tenderloin with truffle-infused chimichurri and arracacha purée",
      winePairing: "Paired with Château Lafite Rothschild 2010"
    },
    {
      id: "chicken",
      label: "Bacon-Wrapped Chicken",
      description: "Organic chicken stuffed with heirloom tomatoes and pesto, wrapped in artisanal bacon",
      winePairing: "Paired with Domaine Leflaive Puligny-Montrachet 2018"
    },
    {
      id: "cochinita",
      label: "Cochinita Pibil",
      description: "Heritage pork slow-roasted in banana leaves with achiote and sour orange",
      winePairing: "Paired with Vega Sicilia Unico 2012"
    },
  ];

  const arrivalDates = [
    { id: "june4", date: "Wednesday, June 4", location: "Domaine de Baulieu, Marseille" },
    { id: "june5", date: "Thursday, June 5", location: "Domaine de Baulieu, Marseille" },
    { id: "june6", date: "Friday, June 6", location: "Domaine de Baulieu, Marseille" },
  ];

  const handleSearch = () => {
    if (!searchName.trim()) return;

    const matches = guests.filter(guest =>
      guest.name.toLowerCase().includes(searchName.toLowerCase()) ||
      (guest.partner && guest.partner.toLowerCase().includes(searchName.toLowerCase()))
    );

    if (matches.length > 0) {
      setFoundGuests(matches);
      setStep(2);
    } else {
      setFoundGuests(guests);
      setStep(2);
    }
  };

  const handleGuestSelect = (guest: Guest) => {
    setSelectedGuest(guest);
    setRsvpData(prev => ({
      ...prev,
      guestName: guest.partner ? `${guest.name} & ${guest.partner}` : guest.name
    }));
    setStep(3);
  };

  const handleMealSelect = (meal: string) => {
    setRsvpData(prev => ({ ...prev, mealPreference: meal }));
    setStep(4);
  };


  const handleArrivalSelect = (date: string) => {
    setRsvpData(prev => ({ ...prev, arrivalDate: date }));
    setStep(5);
  };

  const handleDietarySubmit = (restrictions: string) => {
    setRsvpData(prev => ({ ...prev, dietaryRestrictions: restrictions }));
    setStep(7);
  };

  const handleSubmitRSVP = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const emailSent = await sendRsvpEmail(rsvpData, email);

      if (!emailSent) {
        throw new Error("Email failed to send");
      }

      // Success handling
      alert("Your RSVP has been gracefully received. Thank you!");

    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitError("We encountered an issue submitting your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center font-serif">
            <h1 className="text-3xl font-light mb-8 tracking-wider">RSVP</h1>
            <p className="mb-8 text-lg text-gray-600">
              Kindly locate your invitation to begin
            </p>
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Enter your name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full mb-6 p-4 text-center text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <svg
                className="absolute right-4 top-4 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Button
              onClick={handleSearch}
              className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm font-light hover:bg-gray-800 transition-colors duration-300"
            >
              Find Invitation
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-light mb-8 tracking-wider">Your Invitation</h1>
            <p className="mb-8 text-lg text-gray-600">
              We found these matches in our guest registry
            </p>
            <div className="max-w-md mx-auto space-y-4">
              {foundGuests.map((guest, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 hover:border-black cursor-pointer transition-colors duration-300"
                  onClick={() => handleGuestSelect(guest)}
                >
                  <p className="text-lg">
                    {guest.partner ? `${guest.name} & ${guest.partner}` : guest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-light mb-6 tracking-wider">Wedding Details</h1>
            <div className="max-w-md mx-auto space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <p className="text-xl mb-1">Saturday, 7th of June</p>
                <p className="text-lg">2025</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <p className="text-xl mb-2">Two O'Clock in the Afternoon</p>
                <p className="text-lg">Domaine de Baulieu</p>
                <p className="text-gray-600">Marseille, France</p>
              </div>
              <div className="pb-6">
                <p className="text-lg mb-2">Black Tie Preferred</p>
                <p className="text-gray-600">Dark Suit & Tie or Formal Evening Attire</p>
              </div>
              <div className="pt-6">
                <p className="text-xl font-medium">{selectedGuest?.name}</p>
              </div>
              <Button
                onClick={() => setStep(4)}
                className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm font-light mt-8"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-light mb-8 tracking-wider">Dinner Selection</h1>
            <p className="mb-8 text-lg text-gray-600">Please indicate your preferred entrée</p>
            <div className="space-y-8">
              {mealOptions.map((meal) => (
                <div
                  key={meal.id}
                  className={`p-6 border cursor-pointer transition-all duration-300 ${rsvpData.mealPreference === meal.label ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}
                  onClick={() => handleMealSelect(meal.label)}
                >
                  <div className="flex items-start">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-4 mt-1 ${rsvpData.mealPreference === meal.label ? 'border-black' : 'border-gray-300'}`}>
                      {rsvpData.mealPreference === meal.label && (
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-medium mb-2">{meal.label}</h3>
                      <p className="text-gray-600 mb-2">{meal.description}</p>
                      <p className="text-sm text-gray-500 italic">{meal.winePairing}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between max-w-md mx-auto">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 border-black text-black hover:bg-gray-50"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(5)}
                disabled={!rsvpData.mealPreference}
                className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-light disabled:opacity-50"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-light mb-8 tracking-wider">Arrival Details</h1>
            <p className="mb-8 text-lg text-gray-600">When will you be joining us in Marseille?</p>
            <div className="space-y-4">
              {arrivalDates.map((date) => (
                <div
                  key={date.id}
                  className={`p-6 border cursor-pointer transition-all duration-300 ${rsvpData.arrivalDate?.includes(date.date) ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}
                  onClick={() => handleArrivalSelect(`${date.date} at ${date.location}`)}
                >
                  <div className="flex items-start">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-4 mt-1 ${rsvpData.arrivalDate?.includes(date.date) ? 'border-black' : 'border-gray-300'}`}>
                      {rsvpData.arrivalDate?.includes(date.date) && (
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-medium mb-1">{date.date}</h3>
                      <p className="text-gray-600">{date.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between max-w-md mx-auto">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 border-black text-black hover:bg-gray-50"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(6)}
                disabled={!rsvpData.arrivalDate}
                className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-light disabled:opacity-50"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-light mb-8 tracking-wider">Dietary Considerations</h1>
            <p className="mb-8 text-lg text-gray-600">Please share any dietary restrictions or allergies</p>
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="e.g., Vegetarian, Gluten-Free, Nut Allergy"
                value={rsvpData.dietaryRestrictions || ""}
                onChange={(e) => setRsvpData(prev => ({
                  ...prev,
                  dietaryRestrictions: e.target.value
                }))}
                className="w-full mb-6 p-4 text-center border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
              />
              <p className="text-sm text-gray-500 mb-8">
                Our chef will personally accommodate your needs
              </p>
            </div>
            <div className="mt-8 flex justify-between max-w-md mx-auto">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 border-black text-black hover:bg-gray-50"
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  handleDietarySubmit(rsvpData.dietaryRestrictions || "");
                  setStep(7);
                }}
                className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-light"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-light mb-8 tracking-wider">Confirm Your RSVP</h1>
            <div className="max-w-md mx-auto text-left mb-10">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-xl font-medium mb-4">Your Details</h3>
                <p className="mb-2"><span className="text-gray-600">Name:</span> {rsvpData.guestName}</p>
                <p className="mb-2"><span className="text-gray-600">Meal:</span> {rsvpData.mealPreference}</p>
                <p className="mb-2"><span className="text-gray-600">Arrival:</span> {rsvpData.arrivalDate}</p>
                {rsvpData.dietaryRestrictions && (
                  <p><span className="text-gray-600">Dietary Notes:</span> {rsvpData.dietaryRestrictions}</p>
                )}
              </div>
              <div className="mb-8">
                <Label className="block text-gray-700 mb-2">Email for Confirmation</Label>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border border-gray-300 focus:border-black"
                />
                <div className="flex items-center mt-3">
                  <input
                    type="checkbox"
                    id="email-confirm"
                    className="w-4 h-4 border-gray-300 rounded focus:ring-black"
                  />
                  <Label htmlFor="email-confirm" className="ml-2 text-gray-700">
                    Send me a confirmation
                  </Label>
                </div>
              </div>
            </div>
            {submitError && (
              <p className="text-red-500 mb-4">{submitError}</p>
            )}
            <Button
              onClick={handleSubmitRSVP}
              disabled={isSubmitting}
              className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm font-light mb-4"
            >
              {isSubmitting ? 'Sending...' : 'Submit RSVP'}
            </Button>
            <p className="text-sm text-gray-500">
              Your response will be sent to the wedding planners
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-serif bg-white">
      <div className="w-full max-w-3xl">
        <div className="mb-12">
          <Progress
            value={(step / steps.length) * 100}
            className="h-[1px] bg-gray-200 [&>div]:bg-black [&>div]:h-[1px]"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500 tracking-widest">
            {steps.map((stepName, index) => (
              <span key={index} className={step > index + 1 ? 'text-black' : ''}>
                {stepName}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
