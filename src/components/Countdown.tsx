import { useEffect, useState } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-06-07T00:00:00").getTime();
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      const calculatedDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(calculatedDays);
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const renderMessage = () => {
    if (daysLeft > 0) {
      return <p className="text-lg md:text-xl mt-4 tracking-[3px]">{daysLeft} DAYS TO GO!</p>;
    } else if (daysLeft === -1) {
      return <p className="text-lg md:text-xl mt-4 tracking-[3px]">YAY, IT'S OUR WEDDING DAY!</p>;
    } else {
      return <p className="text-lg md:text-xl mt-4 tracking-[3px]">OUR WEDDING HAS PASSED!</p>;
    }
  };

  return (
    <div className="text-center py-28 text-[#130c0e]">
      <h1 className="font-ballet text-6xl md:text-8xl">We Do</h1>
      <div className="mt-20">
        <h1 className="font-medium font-gilda text-4xl md:text-6xl tracking-[8px]">
          KENE & UGO OKONKWO
        </h1>
        <div className="mt-10 font-eb-garamond">
          <p className="text-xl md:text-2xl tracking-[3px] uppercase">June 07, 2025</p>
          {renderMessage()}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
