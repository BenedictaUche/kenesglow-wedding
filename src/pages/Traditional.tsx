import HomeHeaderImg from "/images/trad-1.jpg";

const Traditional = () => {
  return (
    <div className="font-abhaya min-h-screen">
      {/* Banner Image - Made responsive */}
      <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[700px] overflow-hidden">
        <img
          src={HomeHeaderImg}
          alt="Traditional Wedding"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-6xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12">
        {/* Welcome Message */}
        <div className="text-center my-4 sm:my-6 text-gray-700 text-base sm:text-lg">
          <p>
            We can't wait to share this special day with our closest family and
            friends, and we are honored that you will be part of it!
          </p>
        </div>

        {/* Event Details */}
        <div className="text-center mt-10 sm:mt-16 md:mt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B19C7D] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase">
            Traditional Wedding Day
          </h1>
          <p className="text-xl sm:text-2xl uppercase mt-1 sm:mt-2 tracking-[1px]">
            April 22nd, 2025
          </p>
          <p className="text-lg sm:text-xl uppercase mt-1 tracking-[1px]">
            12:00 NOON
          </p>
          <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-4">
            Acropolis Event Centre, 1001 Obijackson Boulevard Amaranta, Oghalegbu-Okija
          </p>
        </div>

        {/* Location Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#5A4A42]">
            venue Location
          </h2>
          <img
            src="/images/acropolis.jpg"
            alt="Location"
            className="w-full max-w-md sm:max-w-lg mx-auto shadow-md mt-2 sm:mt-4 rounded-lg"
          />
          <p className="text-base sm:text-lg mt-2 sm:mt-4">
            Acropolis Event Centre, Oghalegbu-Okija
          </p>
        </div>

        {/* Nearest Airport Section */}
        <div className="text-center mt-12 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#5A4A42]">
            Nearest Airport
          </h2>
          <img
            src="/images/asaba-airport.png"
            alt="Airport"
            className="w-full max-w-md sm:max-w-lg mx-auto shadow-md mt-2 sm:mt-4 rounded-lg"
          />
          <p className="text-base sm:text-lg mt-2 sm:mt-4">
            The nearest airport is Asaba International Airport
          </p>
          <a
            href="https://asabaairport.com/"
            className="text-[#B19C7D] font-semibold underline block mt-1 sm:mt-2 text-sm sm:text-base"
          >
            Visit Airport Website
          </a>
        </div>

        {/* Accommodation Section */}
        <div className="text-center mt-12 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#5A4A42]">
            Accommodation
          </h2>
          <img
            src="/images/acropolis-room.jpg"
            alt="Airport"
            className="w-full max-w-md sm:max-w-lg mx-auto shadow-md mt-2 sm:mt-4 rounded-lg"
          />
          <p className="text-base sm:text-lg mt-2 sm:mt-4">
            Exclusive wedding packages at Acropolis Gardens & Residence:
          </p>
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-t-4 border-[#B19C7D]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5A4A42]">Ambassador</h3>
              <p className="text-base sm:text-lg mt-1 sm:mt-2">N500,000</p>
              <p className="text-xs sm:text-sm text-gray-600">2 Bed Apartment</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-t-4 border-[#B19C7D]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5A4A42]">Corporate</h3>
              <p className="text-base sm:text-lg mt-1 sm:mt-2">N300,000</p>
              <p className="text-xs sm:text-sm text-gray-600">1 Bed Apartment</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-t-4 border-[#B19C7D]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5A4A42]">Standard Room</h3>
              <p className="text-base sm:text-lg mt-1 sm:mt-2">N195,000</p>
              <p className="text-xs sm:text-sm text-gray-600">Hotel Room</p>
            </div>
          </div>
          <p className="text-base sm:text-lg mt-4 sm:mt-6 font-medium">
            Offer valid from <span className="font-bold">1st April</span> till <span className="font-bold">30th April</span>. Please make your reservations early
          </p>
          <div className="mt-4 sm:mt-6">
            <p className="text-base sm:text-lg font-medium">For reservations:</p>
            <p className="text-lg sm:text-xl font-semibold text-[#B19C7D]">
              09064880226 | 09066659449
            </p>
            <a
              href="https://www.acropolisgardens.ng"
              className="text-[#B19C7D] font-semibold underline mt-1 sm:mt-2 inline-block text-sm sm:text-base"
            >
              Visit Acropolis Gardens
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#5A4A42]">
            Contact People
          </h2>
          <p className="text-base sm:text-lg mt-2 sm:mt-4">For inquiries, please contact:</p>
          <ul className="text-base sm:text-lg text-gray-700 mt-1 sm:mt-2 text-left inline-block space-y-1">
            <li>+234 8034727156 (Ikenna Chukwudum)</li>
            <li>+234 8033333318 (Nnaji Igwe)</li>
            <li>+234 9045678888 (Nnamdi Okonkwo)</li>
          </ul>
        </div>

        {/* Color of the Day Section */}
        <div className="text-center mt-12 sm:mt-20 md:mt-24 relative bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg border-l-8 border-[#5A4A42]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#5A4A42]">
            Color of the Day
          </h2>
          <p className="text-base sm:text-lg mt-2 sm:mt-4">
            Celebrate in elegance with our official wedding color:
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#7ecff5] shadow-lg flex items-center justify-center border-4 sm:border-8 border-[#5A4A42]">
              <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                Sky Blue
              </span>
            </div>
            <p className="text-base sm:text-lg font-medium text-[#5A4A42] mt-2 sm:mt-4 italic">
              Symbolizing peace, love, and new beginnings.
            </p>
          </div>
          <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#7ecff5] rounded-full border-2 border-white shadow-md"></div>
          <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 bg-[#7ecff5] rounded-full border-2 border-white shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Traditional;
