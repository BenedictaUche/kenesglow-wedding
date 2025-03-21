import React from "react";
import HomeHeaderImg from "/images/home-headerImg.png";

const Traditional = () => {
  return (
    <div className="font-abhaya bg-[#F9F6F2] min-h-screen">
      {/* Banner Image */}
      <img src={HomeHeaderImg} alt="Traditional Wedding" className="w-full" />

      <div className="max-w-6xl mx-auto py-10 px-6 md:px-12">
        {/* Welcome Message */}
        <div className="text-center my-6 text-gray-700 text-lg">
          <p>
            We can't wait to share this special day with our closest family and
            friends, and we are honored that you will be part of it!
          </p>
        </div>

        {/* Event Details */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#B19C7D] tracking-[4px] uppercase">Traditional Wedding Day</h1>
          <p className="text-2xl uppercase mt-2 tracking-[1px]">April 22nd, 2025</p>
          <p className="text-xl uppercase mt-1 tracking-[1px]">12:00 NOON</p>
          <p className="text-lg text-gray-700 mt-4">
            Acropolis Event Centre, 1001 Obijackson Boulevard Amaranta, Oghalegbu-Okija
          </p>
        </div>

        {/* Location Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold uppercase text-[#5A4A42]">Location</h2>
          <img src="/images/acropolis.jpg" alt="Location" className="w-full max-w-lg mx-auto shadow-md mt-4" />
          <p className="text-lg mt-4">Acropolis Event Centre, Oghalegbu-Okija</p>
          <a href="https://acropolisgardens.ng/" className="bg-black text-white px-6 py-2 uppercase text-xl tracking-wider hover:bg-gray-800 transition inline-block mt-4">
            Visit Website
          </a>
        </div>

        {/* Nearest Airport Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold uppercase text-[#5A4A42]">Nearest Airport</h2>
          <img src="/images/asaba-airport.png" alt="Airport" className="w-full max-w-lg mx-auto shadow-md mt-4" />
          <p className="text-lg mt-4">The nearest airport is Asaba International Airport</p>
          <a href="https://asabaairport.com/" className="text-[#B19C7D] font-semibold underline block mt-2">
            Visit Airport Website
          </a>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold uppercase text-[#5A4A42]">Contact People</h2>
          <img src="/images/contact.jpg" alt="Contacts" className="w-full max-w-lg mx-auto shadow-md mt-4" />
          <p className="text-lg mt-4">For inquiries, please contact:</p>
          <ul className="text-lg text-gray-700 mt-2 text-left inline-block">
            <li>+234 8034727156 (Ikenna Chukwudum)</li>
            <li>+234 8033333318 (Nnaji Igwe)</li>
            <li>+234 9045678888 (Nnamdi Okonkwo)</li>
          </ul>
        </div>

        {/* Color of the Day Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold uppercase text-[#5A4A42]">Color of the Day</h2>
          <p className="text-lg mt-4">The traditional wedding color theme is:</p>
          <div className="flex justify-center items-center mt-2">
            <div className="w-8 h-8 bg-[#7ecff5] rounded-full mr-2"></div>
            <p className="text-lg font-medium text-gray-700">Sky Blue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traditional;
