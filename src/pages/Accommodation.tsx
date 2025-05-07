import { Button } from "@/components/ui/button";
import Aquabella from "/images/aquabella.jpg";
import Coste from "/images/coste.jpg";
import Fonscolombes from "/images/fonscolombe.jpg";

const hotels = [
  {
    name: "Aquabella Hotel & Spa",
    address: "2 Rue des Étuves, 13100 Aix-en-Provence",
    image: Aquabella,
    description: "Aquabella Hotel & Spa is a luxurious hotel located in the heart of Marseille, France. It offers stunning views of the city and the Mediterranean Sea, as well as a full-service spa and wellness center. It is just 20mins (15kms) away from the wedding venue.",
    website: "https://www.aquabella.com/en/",
    email: "reservation@aquabella.com"
  },
  {
    name: "Chateau de Fonscolombes",
    address: "Route de Saint-Canadet13610 Le Puy-Sainte-Réparade",
    image: Fonscolombes,
    description: "Chateau de Fonscolombes is a beautiful hotel located in the countryside of Marseille, France. It offers a peaceful and serene atmosphere, perfect for relaxation. The hotel features elegant rooms, a restaurant, and a garden. It is just 15mins (14kms) away from the wedding venue.",
    website: "https://www.fonscolombe.com/en/",
    email: "contact@fonscolombe.com"
  },
  {
    name: "Chateau la Coste - L'Auberge",
    address: "2750 Route de la Cride 13610Le Puy-Sainte-Réparade",
    image: Coste,
    description: "Chateau la Coste - L'Auberge is a charming hotel located in the heart of the Provence region of France. It offers stunning views of the surrounding vineyards and olive groves. The hotel features a restaurant, spa, and outdoor pool. It is just 10mins (11kms) away from the wedding venue.",
    website: "https://aubergelacoste.com/en",
    email: "info@aubergelacoste.com"
  },
];

const handleEmailClick = (email: string) => {
  window.location.href = `mailto:${email}`;
}

const handleWebsiteClick = (url: string) => {
  window.open(url, "_blank");
}

const Accommodation = () => {
  return (
    <div className="font-abhaya max-w-3xl mx-auto px-4 py-10 text-[#130c0e] flex flex-col justify-center items-center">
      <div className="mb-12">
        <h1 className="text-[34px] font-medium uppercase tracking-[4px] text-center">Booking Note</h1>
        <div className="flex flex-col gap-4 py-6">
          <p className="text-xl font-normal tracking-[1px]">We highly recommend booking your accommodations early to ensure availability</p>
          <p className="font-semibold text-[18px] tracking-[1px]">**Hotel pricing will be listed in Euro**</p>
          <div>
            <p className="underline font-semibold text-lg text-[#343434]">Currency Exchange Converter</p>
            <p className="text-[#828282] text-lg">1 Euro - Naira 1821</p>
          </div>
        </div>
      </div>

      <div className="max-w-[550px]">
        <h1 className="text-[34px] tracking-[4px] font-normal uppercase text-center mb-8">Recommended Hotels</h1>
        {hotels.map((hotel, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-[34px] tracking-[4px] font-normal uppercase text-center mb-4">{hotel.name}</h2>
            <img src={hotel.image} alt={hotel.name} className="w-xl h-[500px] mb-4" />
            <div className="underline text-inherit font-semibold tracking-[1px] mb-4">
              {hotel.address}
            </div>
            <p className="text-[#130c0e] mb-4 text-lg">{hotel.description}</p>

            <div className="flex justify-center gap-4">
              <Button
                className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg tracking-wide hover:bg-gray-800 transition cursor-pointer"
                onClick={() => handleEmailClick(hotel.email)}
              >
                Email
              </Button>
              <Button
                className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg tracking-wide hover:bg-gray-800 transition cursor-pointer"
                onClick={() => handleWebsiteClick(hotel.website)}
              >
                Website
              </Button>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center gap-[4rem]">
          <div className="tracking-[4px] font-normal text-center mb-4">
            <h1 className="text-[34px] uppercase text-center">AIRBNB</h1>
            <img src="/images/airbnb.webp" alt="Airbnb" className="mb-4" />
            <p className="tracking-normal text-lg font-[16px] text-left mb-4">
              There are also plenty of Airbnb options in and around Marseille. We recommend looking in these areas:
              <ul className="list-disc pl-5 mt-2">
                <li>Vieux-Port (Old Port) - Central location with many restaurants and attractions</li>
                <li>Le Panier - Charming historic district</li>
                <li>La Corniche - Coastal area with beautiful sea views</li>
                <li>Aix-en-Provence - About 30 minutes from Marseille (quieter option)</li>
                <li>Cassis - Coastal town about 40 minutes away (picturesque fishing village)</li>
              </ul>
            </p>
            <Button
              className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-gray-800 transition cursor-pointer"
              onClick={() => handleWebsiteClick("https://www.airbnb.com")}
            >
              WEBSITE
            </Button>
          </div>

          <div className="tracking-[4px] font-normal  mb-4 max-w-[550px]">
            <h1 className="text-[34px] uppercase text-center">TRANSPORTATION WEDDING DAY</h1>
            <img src="/images/transport.webp" alt="Airbnb" className="mb-4" />
            <p className="tracking-normal text-lg font-[16px] text-left">Transportation will be provided to and from the wedding venue for all guests at Novotel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
