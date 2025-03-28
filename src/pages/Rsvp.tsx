import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { guests } from "@/lib/guests";



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
      label: "Lomo de Res / Beef Tenderloin",
      description: "Lomo de Res a la Parrilla con Chimichurri y Puré de Arracacha Beef Tenderloin with Chimichurri Sauce and Arracacha Purée",
    },
    {
      id: "chicken",
      label: "Pollo Relleno/Bacon-Wrapped Chicken",
      description: "Pollo Relleno de Espinaca y Pesto de Tomates Secos Cremoso, Envuelto en Tocineta con Papas Crocantes y Broccolini",
    },
    {
      id: "cochinita",
      label: "Cochinita Pibil",
      description: "Cochinita Pibil con Arroz Cremoso / Cochinita Pibil with Creamy Rice",
    },
  ];

  const arrivalDates = [
    { id: "july3", date: "July 3/Julio 3", day: "Wednesday/Miércoles" },
    { id: "july4", date: "July 4/Julio 4", day: "Thursday/Jueves" },
    { id: "july5", date: "July 5/Julio 5", day: "Friday/Viernes" },
  ];

  const handleSearch = () => {
    if (!searchName.trim()) return;

    // Search in our simplified guest list
    const matches = guests.filter(guest =>
      guest.name.toLowerCase().includes(searchName.toLowerCase()) ||
      (guest.partner && guest.partner.toLowerCase().includes(searchName.toLowerCase()))
    );

    if (matches.length > 0) {
      setFoundGuests(matches);
      setStep(2);
    } else {
      // For demo purposes, if no match found, show all guests
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
    setStep(7); // Changed from setStep(6) to setStep(7)
  };

  const handleSubmitRSVP = async () => {
    try {
      // Save to Firebase or local JSON
      // await saveRSVP({ ...rsvpData, email });

      // Send email to couple
      // await sendEmailNotification({ ...rsvpData, email });

      alert("RSVP submitted successfully!");
      // Reset form or redirect
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP. Please try again.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center font-abhaya">
            <p className="mb-6 text-xl">
              If you're responding for you and a guest (or your family)
            </p>
            <Input
              type="text"
              placeholder="FIND YOUR INVITATION"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full max-w-md mb-4 p-4 text-center text-lg"
            />
            <Button
              onClick={handleSearch}
              className="bg-black text-white px-8 py-4 uppercase text-lg"
            >
              Search
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">RSVP</h1>
            <p className="mb-6 text-xl">
              We've found more than one match in the guest list.
              Please select your name from the list below.
            </p>
            <RadioGroup className="space-y-4">
              {foundGuests.map((guest, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={guest.name}
                    id={`guest-${index}`}
                    onClick={() => handleGuestSelect(guest)}
                  />
                  <Label htmlFor={`guest-${index}`}>
                    {guest.partner ? `${guest.name} & ${guest.partner}` : guest.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <p className="mb-2 text-xl">Saturday, July 06, 2024 at 04:00 PM</p>
            <p className="mb-2">Volla - Wink Eventos</p>
            <p className="mb-4">Dark Suit and Tie / Long Dress</p>
            <p className="font-bold">{selectedGuest?.name}</p>
            <Button
              onClick={() => setStep(4)}
              className="mt-6 bg-black text-white px-8 py-4 uppercase text-lg"
            >
              Continue
            </Button>
          </div>
        );
      case 4:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Meal Preference</h1>
            <p className="mb-6">¿Cuál es su preferencia de comida?</p>
            <RadioGroup className="space-y-6">
              {mealOptions.map((meal) => (
                <div key={meal.id} className="text-left">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={meal.id}
                      id={meal.id}
                      onClick={() => handleMealSelect(meal.label)}
                    />
                    <Label htmlFor={meal.id} className="font-bold">
                      {meal.label}
                    </Label>
                  </div>
                  <p className="ml-6 text-sm text-gray-600">{meal.description}</p>
                </div>
              ))}
            </RadioGroup>
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(5)}
                disabled={!rsvpData.mealPreference}
                className="bg-black text-white px-6 py-3"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Arrival Date</h1>
            <p className="mb-6">¿Qué día llega a Colombia?</p>
            <p className="font-bold mb-4">{selectedGuest?.name}:</p>
            <RadioGroup className="space-y-4">
              {arrivalDates.map((date) => (
                <div key={date.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={date.id}
                    id={date.id}
                    onClick={() => handleArrivalSelect(`${date.date} (${date.day})`)}
                  />
                  <Label htmlFor={date.id}>
                    {date.date} <span className="text-gray-600">{date.day}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(6)}
                disabled={!rsvpData.arrivalDate}
                className="bg-black text-white px-6 py-3"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Dietary Restrictions</h1>
            <p className="mb-6">Do you have any dietary restrictions or allergies?</p>
            <p className="mb-6">¿Alergias/intolerancias?</p>
            <Input
              type="text"
              placeholder="Please specify any dietary needs"
              value={rsvpData.dietaryRestrictions || ""}
              onChange={(e) => setRsvpData(prev => ({
                ...prev,
                dietaryRestrictions: e.target.value
              }))}
              className="w-full max-w-md mb-6 p-4"
            />
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3"
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  handleDietarySubmit(rsvpData.dietaryRestrictions || "");
                  setStep(7); // Add this line to ensure step advancement
                }}
                className="bg-black text-white px-6 py-3"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Confirm RSVP</h1>
            <p className="mb-6">Send your RSVP to Kene & Ugo's Email</p>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left max-w-md mx-auto">
              <h3 className="font-bold mb-2">RSVP Summary:</h3>
              <p>Name: {rsvpData.guestName}</p>
              <p>Meal: {rsvpData.mealPreference}</p>
              <p>Arrival: {rsvpData.arrivalDate}</p>
              {rsvpData.dietaryRestrictions && (
                <p>Dietary Needs: {rsvpData.dietaryRestrictions}</p>
              )}
            </div>

            <div className="mb-6">
              <Input
                type="email"
                placeholder="Email for confirmation"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-md mb-4 p-4"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="email-confirm" className="w-4 h-4" />
                <Label htmlFor="email-confirm">
                  Send me an RSVP confirmation by email
                </Label>
              </div>
            </div>

            <Button
              onClick={handleSubmitRSVP}
              className="bg-black text-white px-8 py-4 uppercase text-lg"
            >
              Send RSVP
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <div className="mb-8">
        <Progress value={(step / steps.length) * 100} className="h-2" />

      </div>

      {renderStep()}
    </div>
  );
};

export default Rsvp;
