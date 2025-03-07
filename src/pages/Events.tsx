

const events = [
  {
    date: "JULY 4TH - GUATAPE TOUR",
    image: "/images/events-mountain.png",
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
    date: "JULY 5TH - WELCOME PARTY",
    image: "/images/events-mountain.png",
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
    date: "JULY 6TH - ANOTHER EVENT",
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
    <div className="max-w-3xl mx-auto px-4 py-10 font-eb-garamond text-[#515151]">
      {events.map((event, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-4xl font-medium uppercase mb-6 text-black">{event.date}</h2>
          <img src={event.image} alt={event.date} className="w-xl h-[500px]  mb-4" />
          <p className="text-[#828282] font-medium text-lg mb-4 w-xl">{event.description}</p>
          {event.deadline && <p className="text-black text-xl font-semibold mb-4">{event.deadline}</p>}
          {event.details.map((detail, idx) => (
            <div key={idx} className="mb-4 mt-10">
              <h3 className="font-semibold text-black">{detail.title}</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {detail.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* Show button only for events after July 4th */}
          <div className="flex justify-center">
          {event.showButton && (
            <button className="bg-black text-white px-6 py-2 uppercase text-xl tracking-wider hover:bg-gray-800 transition">
              Website
            </button>
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
