import { Button } from "@/components/ui/button";
import Restaurant from "/images/restaurant.png";

const hotels = [
  {
    name: "Novotel",
    address: [
      "259 Calie 36C Suite, Envigado, Antioqua 055427 Colombia",
      "259 Calie 36C Suite, Envigado, Antioqua 055427 Colombia",
    ],
    description: "El Tosoro Mall is right downstairs with lots of options on food, shopping and salons.",
    contact: {
      coordinator: "Kene Obiejesi",
      whatsapp: "https://wa.link/21f43e",
      discountCode: "KeneandJohnWedding",
    },
  },
  {
    name: "Renaissance",
    address: [
      "259 Calie 36C Suite, Envigado, Antioqua 055427 Colombia",
      "259 Calie 36C Suite, Envigado, Antioqua 055427 Colombia",
    ],
    description: "El Tosoro Mall is right downstairs with lots of options on food, shopping and salons.",
    contact: {
      coordinator: "Kene Obiejesi",
      whatsapp: "https://wa.link/21f43e",
      discountCode: "KeneandJohnWedding",
    },
  },
];

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
            <img src={Restaurant} alt={hotel.name} className="w-xl h-[500px] mb-4" />
            <div className="underline text-inherit font-semibold tracking-[1px] mb-4">
              {hotel.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <p className="text-[#130c0e] mb-4 text-lg">{hotel.description}</p>

            <div className="text-[#130c0e] mb-4 text-lg">
              <p className="font-semibold">For a discounted rate and reservations, please contact:</p>
              <ul className="list-disc pl-5">
                <li>Coordinator: {hotel.contact.coordinator}</li>
                <li>
                  Whatsapp:{" "}
                  <a href={hotel.contact.whatsapp} className="text-[#130c0e] underline">
                    {hotel.contact.whatsapp}
                  </a>
                </li>
                <li>Our Discount Code: {hotel.contact.discountCode}</li>
              </ul>
            </div>

            <div className="flex justify-center gap-4">
              <Button className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg tracking-wide hover:bg-gray-800 transition cursor-pointer">
                Email
              </Button>
              <Button className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg tracking-wide hover:bg-gray-800 transition cursor-pointer">
                Website
              </Button>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center gap-[4rem]">
          <div className="tracking-[4px] font-normal text-center mb-4">
            <h1 className="text-[34px] uppercase text-center">AIRBNB</h1>
            <img src="/images/airbnb.webp" alt="Airbnb" className="mb-4"/>
            <p className=" tracking-normal text-lg font-[16px] text-left mb-4">There are also plenty of options on Airbnb - look near El Poblado, Provenza, Centro Comercial El Tesoro</p>
            <Button className="bg-black text-white px-6 py-2 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-gray-800 transition cursor-pointer">WEBSITE</Button>
          </div>

          <div className="tracking-[4px] font-normal  mb-4 max-w-[550px]">
            <h1 className="text-[34px] uppercase text-center">TRANSPORTATION WEDDING DAY</h1>
            <img src="/images/transport.webp" alt="Airbnb" className="mb-4"/>
            <p className="tracking-normal text-lg font-[16px] text-left">Transportation will be provided to and from the wedding venue for all guests at Novotel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
