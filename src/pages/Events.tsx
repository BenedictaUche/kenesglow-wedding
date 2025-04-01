const events = [
  {
    date: "APRIL 21ST - Welcome Cocktail",
    image: "/images/cocktail.jpg",
    description:
      "Explore the vibrant streets of Guatape, climb the famous El Peñol Rock for a stunning panoramic view, and enjoy a boat ride on the nearby waters.",
    deadline: "**Deadline to book the tour: June 4th**",
    details: [
      {
        title: "What's Included",
        items: [
          "Round Trip Private Transportation",
          "Local Trip Guide",
          "Lunch by the Rocks",
          "Tickets Included",
          "Boat ride (shared)",
        ],
      },
      {
        title: "Payment",
        items: [
          "Round Trip Private Transportation",
          "Local Trip Guide",
          "Lunch by the Rocks",
          "Tickets Included",
          "Boat ride (shared)",
        ],
      },
    ],
    showButton: false,
  },
  {
    date: "APRIL 22ND - Traditional Wedding Ceremony",
    image: "/images/trad-2.jpg",
    description:
      "Let's kick off the wedding celebrations with some delicious drinks and fun moments the evening before the wedding.",
    details: [
      {
        title: "LOCATION",
        items: ["BARBARÁN RUM & GIN BAR", "JULY 5TH, 2025", "8:00 PM - 12:00 AM", "Optional Attire"],
      },
    ],
    showButton: true,
  },
  {
    date: "APRIL 22ND - After Party",
    image: "/images/dancing-trad.jpg",
    description: "Details about another event happening on July 6th.",
    details: [
      {
        title: "LOCATION",
        items: ["Acropolis Event Centre, Oghalegbu-Okija. Just a 3-minute walk from the wedding ceremony location", "April 22nd, 2025", "8:00 PM ", "Party Attire"],
      },
    ],
    showButton: true,
  },
  {
    date: "APRIL 23RD - Departure",
    image: "/images/events-mountain.png",
    description: "Details about another event happening on July 6th.",
    details: [
      {
        title: "LOCATION",
        items: ["Venue Name", "July 6th, 2025", "6:00 PM - 11:00 PM", "Formal Attire"],
      },
    ],
    showButton: true,
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
          <p className="text-[#828282] font-medium text-base sm:text-lg mb-3 sm:mb-4">
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
              <h3 className="font-semibold text-black text-lg sm:text-xl">
                {detail.title}
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 sm:space-y-2">
                {detail.items.map((item, i) => (
                  <li key={i} className="text-sm sm:text-base">
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
