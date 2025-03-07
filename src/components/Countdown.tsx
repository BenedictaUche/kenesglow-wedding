import { useEffect, useState } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-07-06").getTime();
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      setDaysLeft(Math.floor(difference / (1000 * 60 * 60 * 24)));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="text-center py-28">
      <h1 className="font-ballet text-6xl md:text-8xl">We Do</h1>
      <div className="mt-20">
        <h1 className="font-medium font-gilda text-4xl md:text-6xl">
          GABRIELLA & JUAN DIEGO
        </h1>
        <div className="mt-10 font-eb-garamond">
          <p className="text-xl md:text-2xl">JULY 6, 2025</p>
          <p className="text-lg md:text-xl mt-2">{daysLeft} DAYS TO GO!</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
