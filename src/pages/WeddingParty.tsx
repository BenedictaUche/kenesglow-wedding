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
];

const WeddingParty: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center align-middle items-center">
        {weddingParty.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto"
            />
            <p className="mt-4 font-medium">{member.name} - {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingParty;
