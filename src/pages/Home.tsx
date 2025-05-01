// import HomeHeaderImg from "/images/home-headerImg.png";
import VenueLocation from "/images/venue-location.png";
import OutfitTwo from "/images/trad-1.jpg";

const events = [
    {
        time: "4:00 PM - 5:00 PM",
        title: "CEREMONY",
        attire: "Attire: Formal Attire (Black-tie optional)",
        description: "Our ceremony will be held outdoors, weather permitting.",
    },
    {
        time: "4:00 PM - 5:00 PM",
        title: "CEREMONY",
        attire: "Attire: Formal Attire (Black-tie optional)",
        description: "Our ceremony will be held outdoors, weather permitting.",
    }, {
        time: "4:00 PM - 5:00 PM",
        title: "CEREMONY",
        attire: "Attire: Formal Attire (Black-tie optional)",
        description: "Our ceremony will be held outdoors, weather permitting.",
    }, {
        time: "4:00 PM - 5:00 PM",
        title: "CEREMONY",
        attire: "Attire: Formal Attire (Black-tie optional)",
        description: "Our ceremony will be held outdoors, weather permitting.",
    },
];

const Home = () => {
    return (
        <div className="p-4 font-abhaya">
            <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[700px] overflow-hidden">
                <img
                    src={OutfitTwo}
                    alt="White Wedding"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="flex justify-center items-center my-6 text-gray-500 text-center">
                <p className=" text-lg text-[#828282]">
                    We can't wait to share this special day with our closest family and
                    friends, and <br className="hidden md:block" />
                    we are honored that you will be part of it!
                </p>
            </div>

            <div className="flex flex-col items-center mt-20 gap-4  text-[#130c0e]">
                <h1 className="font-normal text-4xl uppercase">Wedding Day</h1>
                <p className="text-[23px] uppercase font-normal">June 7, 2025</p>
                <p className="text-[23px] uppercase font-normal">4:00PM - 2:00AM</p>
                <div className="mx-auto text-center mt-4 text-[#828282] font-medium text-lg tracking-[1px]">
                    <p>Domaine de Baulieu - Route B14C</p>
                    <p>13840 ROGNES EN PROVENCE</p>
                </div>

                {/* Event Section */}
                <div className="mt-10 w-full max-w-2xl text-[#130c0e]">
                    {events.map((event, index) => (
                        <div key={index} className="text-center">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-24 justify-center pb-10">
                                <p className="text-2xl font-bold ">{event.time}</p>
                                <div className="flex flex-col justify-start text-start">
                                    <p className="text-2xl font-medium uppercase mt-1">
                                        {event.title}
                                    </p>
                                    <p className="italic mt-1">{event.attire}</p>
                                    <p className="mt-2 ">{event.description}</p>
                                </div>
                            </div>
                            {index !== events.length - 1 && (
                                <div className="border-t-2 border-[#C4C4C4] opacity-40 w-full mx-auto my-6"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Venue Location Section */}
            <div className="mt-20  flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-light uppercase">Venue Location</h1>
                <div className="my-10">
                    <img
                        src={VenueLocation}
                        alt="Venue Location"
                        className="w-full max-w-md"
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-xl text-[#828282] mb-2">Domaine de Baulieu</p>
                    <p className="text-xl text-[#828282] underline">
                        Route B14C, 13840 ROGNES EN PROVENCE, France
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
