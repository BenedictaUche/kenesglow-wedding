const events = [
  {
    date: "APRIL 21ST - Welcome Cocktail",
    image: "/images/cocktail1.jpg",
    description:
      "For those arriving before the traditional wedding date, you are specially invited to the welcome cocktail as you settle into the resort.",
    deadline: "**Kindly book your room at the resort as early as the 8th of April as there is limited availability. **",
    details: [
      {
        title: "Guide",
        items: [
          "Please ensure your flight has been booked to Asaba airport.",
          "Notify the coordinator assigned to ensure arrangements are made for pickup from the airport to the resort; accompanied by security.",
          "Please book your room at the resort or any other alternative hotel arrangements close to the event venue.",
        ],
      },
    ],
    showButton: false,
  },
  {
    date: "APRIL 22ND - Traditional Wedding Ceremony",
    image: "/images/trad-2.jpg",
    description:
      "The moment we have all been waiting for. As we celebrate the couple of the moment Kene and Ugo, we want to ensure all our amazing guests who have joined us for this special occasion have a wonderful experience. We have put together a few details to help you navigate the day.",
    details: [
      {
        title: "Guide",
        items: [
          "Kindly be at the venue on or before 12pm on the day to ensure you are well received and  taken care of. ",
          "For those staying at the resort, although it is walking distance as well, transportation to the venue will be provided.",
          "For those coming on the day kindly inform the coordinator to ensure all pick-up arrangements are made. Thank you!",
        ],
      },
      {
        title: "LOCATION",
        items: ["Acropolis Event Centre, 1001 Obijackson Boulevard Amaranta, Oghalegbu-Okija", "April 22nd, 2025", "12:00 PM", "Your best attire"],
      },
      {
        title: "Important Notes",
        items: [
          "This is your time to let loose and celebrate with us!",
          "We'll have premium drinks, great music, and an amazing atmosphere",
          "While we'll have tight security present, please keep personal belongings secure",
          "Consider leaving valuables in your hotel safe if possible",
        ],
      },
    ],
    showButton: false,
  },
  {
    date: "APRIL 22ND - After Party",
    image: "/images/afterparty.jpg",
    description: "Let's keep the celebration going! After the traditional ceremony, join us for an unforgettable night of music, dancing, and fun as we party into the night.",
    details: [
      {
        title: "LOCATION",
        items: ["Acropolis Event Centre, Oghalegbu-Okija. Just a 3-minute walk from the wedding ceremony location", "April 22nd, 2025", "8:00 PM ", "Party Attire - Dress to impress!"],
      },

    ],
    showButton: false,
  },
  {
    date: "APRIL 23RD - Departure",
    image: "/images/events-mountain.png",
    description: "As our wedding celebrations come to a close, we want to take a moment to express our deepest gratitude to each and every one of you for being part of our special day. Your presence, love, and support have made this experience truly unforgettable. Safe travels back home - we wish you smooth journeys and happy memories",
    details: [
      {
        title: "Thank You!",
        items: [],
      },
    ],
    showButton: false,
  },
];

const Events = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 font-eb-garamond text-[#515151]">
      {events.map((event, index) => (
        <div key={index} className="mb-8 sm:mb-10 md:mb-12">
          {/* Event Date Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium uppercase mb-4 sm:mb-6 text-black">
            {event.date}
          </h2>

          {/* Event Image - Made responsive */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] mb-3 sm:mb-4 overflow-hidden rounded-lg">
            <img
              src={event.image}
              alt={event.date}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Event Description */}
          <p className="text-[#828282] font-medium text-normal sm:text-lg my-10 sm:mb-4">
            {event.description}
          </p>

          {/* Deadline (if exists) */}
          {event.deadline && (
            <p className="text-black text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {event.deadline}
            </p>
          )}

          {/* Event Details */}
          {event.details.map((detail, idx) => (
            <div key={idx} className="mb-3 sm:mb-4 mt-6 sm:mt-8 md:mt-10">
              <h3 className="font-semibold text-black text-lg sm:text-xl mb-4">
                {detail.title}
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2">
                {detail.items.map((item, i) => (
                  <li key={i} className="text-lg sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Button (if showButton is true) */}
          {event.showButton && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <button className="bg-black text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 uppercase text-sm sm:text-base md:text-lg tracking-wider hover:bg-gray-800 transition rounded">
                Website
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Events;
