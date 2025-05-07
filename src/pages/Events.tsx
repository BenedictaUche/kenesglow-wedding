const events = [
  {
    date: "JUNE 6TH - Arrival & Welcome Cocktail",
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
    date: "JUNE 7TH - Wedding Day & Ceremonies",
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
        items: ["Acropolis Event Centre, 1001 Obijackson Boulevard Amaranta, Oghalegbu-Okija", "April 22nd, 2025", "12:00 PM", "Your best attire - Dress to impress!"],
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
    date: "JUNE 8TH - Farewells",
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
    <div className="max-w-5xl mx-auto px-6 py-12 font-abhaya text-slate-800">
      {/* Elegant header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest">THE CELEBRATIONS</h1>
        <div className="flex justify-center mt-6">
          <div className="w-24 h-px bg-amber-300"></div>
        </div>
      </div>

      {events.map((event, index) => (
        <div key={index} className="mb-32">
          {/* Timeline marker for visual elegance */}
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 rounded-full bg-amber-300"></div>
            <div className="h-px w-16 bg-amber-200 ml-2"></div>
          </div>

          {/* Event Date Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[4px] mb-12 text-slate-800">
            {event.date}
          </h2>

          {/* Event Image with overlay */}
          <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[550px] mb-12 overflow-hidden">
            <img
              src={event.image}
              alt={event.date}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>

          {/* Event Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl tracking-wider leading-relaxed text-center mb-16">
              {event.description}
            </p>

            {/* Deadline (if exists) */}
            {event.deadline && (
              <p className="text-center text-xl font-medium mb-16 border-y border-amber-200 py-6">
                Kindly book your room at the resort as early as the 8th of April as there is limited availability.
              </p>
            )}

            {/* Event Details */}
            {event.details.map((detail, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-xl md:text-2xl font-light tracking-[3px] mb-8 text-center">
                  {detail.title}
                </h3>

                {detail.items.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {detail.items.map((item, i) => (
                      <div key={i} className="border-l-2 border-amber-200 pl-5 py-2">
                        <p className="text-lg tracking-wider leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center my-12">
                    <div className="w-32 h-32 rounded-full border-2 border-amber-200 flex items-center justify-center">
                      <p className="text-2xl font-light tracking-widest">♡</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {event.showButton && (
              <div className="flex justify-center mt-12">
                <button className="bg-amber-100 border border-amber-300 text-slate-800 px-8 py-3 uppercase text-lg tracking-widest hover:bg-amber-200 transition duration-300 ease-in-out">
                  Website
                </button>
              </div>
            )}
          </div>

          {/* Elegant divider between events */}
          {index < events.length - 1 && (
            <div className="flex justify-center mt-20">
              <div className="w-32 h-px bg-amber-200"></div>
            </div>
          )}
        </div>
      ))}

      {/* Final elegant divider */}
      <div className="flex justify-center mt-16">
        <div className="w-24 h-px bg-amber-300"></div>
      </div>
    </div>
  );
};

export default Events;
