import React from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const weddingParty: Member[] = [
  { name: "Marcelo Abinum", role: "Best Man", image: "/images/manSmiling1.jpg" },
  { name: "Giselle Fakhri", role: "Maid of Honor", image: "/images/manSmiling2.jpg" },
  { name: "Chinemelum", role: "Bridesmaid", image: "/images/chinemelum.jpg" },
  { name: "Tamara", role: "Bridesmaid", image: "/images/tamara.jpg" },
  { name: "Tomi Dahunsi", role: "Bridesmaid", image: "/images/tomi.jpg" },
  { name: "Victoria", role: "Bridesmaid", image: "/images/victoria.jpg" },
  { name: "Odinaka", role: "Bridesmaid", image: "/images/odinaka.jpg" },
];

const WeddingParty: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center align-middle items-center">
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
