import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Mail, ExternalLink } from "lucide-react";
import Aquabella from "/images/aquabella1.jpg";
import Coste from "/images/coste1.jpeg";
import Fonscolombes from "/images/fonscolombe.jpg";

const hotels = [
  {
    name: "Aquabella Hotel & Spa",
    address: "2 Rue des Étuves, 13100 Aix-en-Provence",
    image: Aquabella,
    description: "Aquabella Hotel & Spa is a luxurious hotel located in the heart of Marseille, France. It offers stunning views of the city and the Mediterranean Sea, as well as a full-service spa and wellness center. It is just 20 minutes (15km) away from the wedding venue.",
    website: "https://www.aquabella.com/en/",
    email: "reservation@aquabella.com"
  },
  {
    name: "Château de Fonscolombe",
    address: "Route de Saint-Canadet, 13610 Le Puy-Sainte-Réparade",
    image: Fonscolombes,
    description: "Château de Fonscolombe is a beautiful hotel located in the countryside of Marseille, France. It offers a peaceful and serene atmosphere, perfect for relaxation. The hotel features elegant rooms, a restaurant, and a garden. It is just 15 minutes (14km) away from the wedding venue.",
    website: "https://www.fonscolombe.com/en/",
    email: "contact@fonscolombe.com"
  },
  {
    name: "Château la Coste - L'Auberge",
    address: "2750 Route de la Cride, 13610 Le Puy-Sainte-Réparade",
    image: Coste,
    description: "Château la Coste - L'Auberge is a charming hotel located in the heart of the Provence region of France. It offers stunning views of the surrounding vineyards and olive groves. The hotel features a restaurant, spa, and outdoor pool. It is just 10 minutes (11km) away from the wedding venue.",
    website: "https://aubergelacoste.com/en",
    email: "info@aubergelacoste.com"
  },
];

interface Hotel {
  name: string;
  address: string;
  image: string;
  description: string;
  website: string;
  email: string;
}

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWebsiteClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mb-16 md:mb-20 bg-white shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wider uppercase">{hotel.name}</h2>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <p className="text-gray-600 italic mb-4 text-sm md:text-base">{hotel.address}</p>

        <div className={`transition-all duration-500 overflow-hidden ${expanded || isMobile ? "max-h-none" : "max-h-24"}`}>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">{hotel.description}</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6">
            <Button
              className="bg-black hover:bg-gray-800 text-white border border-black px-4 md:px-8 py-3 md:py-6 flex items-center justify-center gap-2 tracking-wider uppercase text-xs md:text-sm rounded-none"
              onClick={() => handleEmailClick(hotel.email)}
            >
              <Mail size={isMobile ? 14 : 16} />
              Contact Hotel
            </Button>
            <Button
              className="bg-white hover:bg-gray-100 text-black border border-black px-4 md:px-8 py-3 md:py-6 flex items-center justify-center gap-2 tracking-wider uppercase text-xs md:text-sm rounded-none"
              onClick={() => handleWebsiteClick(hotel.website)}
            >
              <ExternalLink size={isMobile ? 14 : 16} />
              Visit Website
            </Button>
          </div>
        </div>

        {!isMobile && (
          <button
            className="flex items-center justify-center w-full mt-4 text-gray-500 hover:text-black transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span className="text-xs uppercase tracking-wider mr-2">Show Less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span className="text-xs uppercase tracking-wider mr-2">Show More</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const Accommodation = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider md:tracking-widest text-center mb-4 md:mb-6 text-gray-900">Accommodations</h1>
          <div className="w-16 md:w-20 h-px bg-black mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic px-2">
            We have curated a selection of the finest accommodations for your stay in Provence.
            To ensure your comfort, we recommend securing your reservation early.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12 mb-16 md:mb-24 shadow-md">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl font-light uppercase tracking-wide md:tracking-widest mb-6 md:mb-8 text-gray-900">Important Information</h2>
            <div className="w-12 md:w-16 h-px bg-black mx-auto mb-6 md:mb-8"></div>

            <div className="mb-6 md:mb-10 max-w-2xl">
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                We highly recommend booking your accommodations early to ensure availability during the celebration.
              </p>
              <p className="text-base md:text-lg text-gray-800 font-medium mb-4 md:mb-6">
                All hotel pricing will be listed in Euro (€)
              </p>
              <div className="border-t border-b border-gray-200 py-4 md:py-6 px-2 md:px-4">
                <p className="text-base md:text-lg text-gray-800 font-medium mb-2">Currency Exchange Information</p>
                <p className="text-base md:text-lg text-gray-600">1 Euro (€) ≈ 1,821 Naira (₦)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide md:tracking-widest text-center mb-6 md:mb-10 text-gray-900">Curated Luxury Hotels</h2>
          <div className="w-12 md:w-16 h-px bg-black mx-auto mb-10 md:mb-16"></div>

          <div>
            {hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide md:tracking-widest text-center mb-6 md:mb-10 text-gray-900">Premium Residences</h2>
          <div className="w-12 md:w-16 h-px bg-black mx-auto mb-10 md:mb-16"></div>

          <div className="bg-white shadow-lg border border-gray-100 overflow-hidden">
            <div className="relative">
              <img
                src="/images/airbnb.webp"
                alt="Luxury Airbnb"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide md:tracking-wider uppercase">Private Villas & Residences</h2>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 md:mb-8">
                For those seeking more privacy, we have curated a selection of luxury private residences and villas.
                We recommend exploring these exclusive areas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 md:mb-10">
                <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Vieux-Port (Old Port)</h3>
                  <p className="text-sm md:text-base text-gray-600">Central location with many fine dining establishments and cultural attractions</p>
                </div>

                <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Le Panier</h3>
                  <p className="text-sm md:text-base text-gray-600">Charming historic district with authentic Provençal character</p>
                </div>

                <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">La Corniche</h3>
                  <p className="text-sm md:text-base text-gray-600">Prestigious coastal area with breathtaking Mediterranean views</p>
                </div>

                <div className="border-l-2 border-gray-300 pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Aix-en-Provence</h3>
                  <p className="text-sm md:text-base text-gray-600">Elegant town approximately 30 minutes from Marseille offering tranquility</p>
                </div>

                <div className="border-l-2 border-gray-300 pl-4 md:pl-6 sm:col-span-2 md:col-span-1">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Cassis</h3>
                  <p className="text-sm md:text-base text-gray-600">Picturesque fishing village about 40 minutes away with stunning calanques</p>
                </div>
              </div>

              <div className="flex justify-center mt-6 md:mt-8">
                <Button
                  className="bg-black hover:bg-gray-800 text-white border border-black px-4 sm:px-6 md:px-8 py-3 md:py-6 flex items-center justify-center gap-2 tracking-wider uppercase text-xs md:text-sm rounded-none"
                  onClick={() => window.open("https://www.airbnb.com", "_blank")}
                >
                  <ExternalLink size={16} />
                  Browse Private Residences
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide md:tracking-widest text-center mb-6 md:mb-10 text-gray-900">Transportation</h2>
          <div className="w-12 md:w-16 h-px bg-black mx-auto mb-10 md:mb-16"></div>

          <div className="bg-white shadow-lg border border-gray-100 overflow-hidden">
            <div className="relative">
              <img
                src="/images/transport.webp"
                alt="Luxury Transportation"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide md:tracking-wider uppercase">Wedding Day Service</h2>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 text-center">
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                For your convenience, private luxury transportation will be provided for all guests
                staying at Novotel to and from the wedding venue.
              </p>
              <div className="mt-4 md:mt-6 inline-block border-t border-gray-200 pt-4 md:pt-6">
                <p className="text-sm md:text-base text-gray-600 italic">
                  Additional details regarding pickup times will be provided closer to the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
