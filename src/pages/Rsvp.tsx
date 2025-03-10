import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { guests } from "@/lib/guests";

const Rsvp = () => {
  const [fullName, setFullName] = useState("");
  const [guestFound, setGuestFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [numGuests, setNumGuests] = useState(1);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const handleCheckName = () => {
    const foundGuest = guests.some(
      (guest) => guest.toLowerCase() === fullName.toLowerCase()
    );

    if (foundGuest) {
      setGuestFound(true);
      setErrorMessage("");
    } else {
      setGuestFound(false);
      setErrorMessage(
        "Oops! We’re having trouble finding your invite. Please try another spelling of your name or contact the couple."
      );
    }
  };

  const handleSubmitRSVP = () => {
    alert(`Thank you, ${fullName}! Your RSVP has been recorded.`);
    setFullName("");
    setGuestFound(false);
    setAttending(null);
    setNumGuests(1);
    setDietaryRestrictions("");
  };

  return (
    <div className="font-abhaya mx-auto px-6 py-12 text-[#130c0e] flex flex-col items-center">
      <img src="/images/rings.jpg" alt="Wedding Rings" width={80} height={80} className="mb-4" />

      {!guestFound ? (
        <>
          <p className="mb-6 text-xl tracking-wide font-light">
            If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
          </p>
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full max-w-md mb-4 p-3 py-6 border rounded text-lg tracking-[1px] placeholder:text-lg placeholder:font-medium my-12"
          />
          <Button
            onClick={handleCheckName}
            className="bg-black min-w-[180px] text-white px-5 py-6 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-gray-800 transition cursor-pointer ">
            Find Your Invitation
          </Button>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold my-6">Welcome, {fullName}!</h2>
          <p className="mb-4 text-xl font-medium">Are you attending?</p>

          <div className="flex gap-4 my-6">
            <Button
              onClick={() => setAttending(true)}
              className={`${attending === true ? "bg-green-600" : "bg-gray-300"}  min-w-[180px] text-white px-5 py-6 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-green-600 transition cursor-pointer`}
            >
              Yes
            </Button>
            <Button
              onClick={() => setAttending(false)}
              className={`${attending === false ? "bg-red-500" : "bg-gray-300"} min-w-[180px] text-white px-5 py-6 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-red-600 transition cursor-pointer`}
            >
              No
            </Button>
          </div>

          {attending && (
            <div className="flex flex-col justify-items-start">
              <div className="my-6">
                <label className="block mb-4 text-xl font-medium">How many guests will be attending?</label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={numGuests}
                  onChange={(e) => setNumGuests(parseInt(e.target.value))}
                  className="w-full max-w-md mb-4 p-3 py-6 border rounded text-lg tracking-[1px] placeholder:text-lg placeholder:font-medium my-12"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-4 text-xl font-medium">Any dietary restrictions?</label>
                <Input
                  type="text"
                  placeholder="E.g., Vegetarian, No Nuts"
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  className="w-full max-w-md mb-4 p-3 py-6 border rounded text-lg tracking-[1px] placeholder:text-lg placeholder:font-medium my-12"
                />
              </div>
            </div>
          )}

          <Button
            onClick={handleSubmitRSVP}
            className="bg-black min-w-[180px] text-white px-5 py-6 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-gray-800 transition cursor-pointer ">
            Submit RSVP
          </Button>
        </>
      )}
    </div>
  );
};

export default Rsvp;
