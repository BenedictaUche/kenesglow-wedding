import React from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const weddingParty: Member[] = [
  { name: "Uzoulu", role: "Maid of Honor", image: "/images/uzoulu.jpg" },
  { name: "Chinemelum", role: "Bridesmaid", image: "/images/chinemelum.jpg" },
  { name: "Tosin", role: "Groomsman", image: "/images/Tosin.jpg" },
  { name: "Tito", role: "Groomsman", image: "/images/Tito.jpg" },
  { name: "Tamara", role: "Bridesmaid", image: "/images/tamara.jpg" },
  { name: "Tomi Dahunsi", role: "Bridesmaid", image: "/images/tomi.jpg" },
  { name: "KC", role: "Groomsman", image: "/images/KC.jpg" },
  { name: "Tinya", role: "Groomsman", image: "/images/Tinya.jpg" },
  { name: "Victoria", role: "Bridesmaid", image: "/images/victoria.jpg" },
  { name: "Odinaka", role: "Bridesmaid", image: "/images/odinaka.jpg" },
  { name: "Kosi", role: "Groomsman", image: "/images/kosi.jpg" },
  { name: "Uche", role: "Groomsman", image: "/images/uche.jpg" },
  { name: "Chisom", role: "Bridesmaid", image: "/images/chisom.jpg" },
];

// Filter wedding party members by role
const bridalParty = weddingParty.filter(member =>
  member.role === "Maid of Honor" || member.role === "Bridesmaid"
);

const groomsParty = weddingParty.filter(member =>
  member.role === "Groomsman"
);

const WeddingParty: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-abhaya text-slate-800">
      {/* Elegant header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest">WEDDING PARTY</h1>
        <div className="flex justify-center mt-6">
          <div className="w-24 h-px bg-amber-300"></div>
        </div>
      </div>

      {/* Maid of Honor Special Feature */}
      <div className="mb-24">
        <h2 className="text-center text-3xl font-light tracking-[4px] mb-12 text-slate-800">
          MAID OF HONOR
        </h2>

        {bridalParty
          .filter(member => member.role === "Maid of Honor")
          .map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-amber-200 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl tracking-wider font-light">{member.name}</p>
            </div>
          ))}
      </div>

      {/* Bridesmaids Section */}
      <div className="mb-24">
        <h2 className="text-center text-3xl font-light tracking-[4px] mb-12 text-slate-800">
          BRIDESMAIDS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {bridalParty
            .filter(member => member.role === "Bridesmaid")
            .map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-amber-200 mb-4 transition-all duration-300 ease-in-out group-hover:border-amber-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl tracking-wider font-light">{member.name}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Elegant divider */}
      <div className="flex justify-center mb-24">
        <div className="w-32 h-px bg-amber-200"></div>
      </div>

      {/* Groomsmen Section */}
      <div className="mb-24">
        <h2 className="text-center text-3xl font-light tracking-[4px] mb-12 text-slate-800">
          GROOMSMEN
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {groomsParty.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-amber-200 mb-4 transition-all duration-300 ease-in-out group-hover:border-amber-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl tracking-wider font-light">{member.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final elegant divider */}
      <div className="flex justify-center mt-16">
        <div className="w-24 h-px bg-amber-300"></div>
      </div>
    </div>
  );
};

export default WeddingParty;
