import { useEffect, useState } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-04-22").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isDday: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        // It's D-Day or past D-Day
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isDday: true
        });
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isDday: false
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  if (timeLeft.isDday) {
    return (
      <div className="text-center py-28 text-[#130c0e] font-abhaya">
        <h1 className="font-ballet text-6xl md:text-8xl">We Do</h1>
        <div className="mt-20">
          <h1 className="font-medium font-gilda text-4xl md:text-6xl tracking-[8px]">
            KENE & UGO
          </h1>
          <div className="mt-10 font-eb-garamond">
            <p className="text-xl md:text-2xl tracking-[3px]">APRIL 22, 2025</p>
            <p className="text-3xl md:text-4xl mt-6 font-bold text-[#B19C7D] animate-pulse">
              🎉 IT'S OUR WEDDING DAY! 🎉
            </p>
            <p className="text-lg md:text-xl mt-4 tracking-[3px]">
              The celebration begins soon!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-28 text-[#130c0e]">
      <h1 className="font-ballet text-6xl md:text-8xl">We Do</h1>
      <div className="mt-20">
        <h1 className="font-medium font-gilda text-4xl md:text-6xl tracking-[8px]">
          KENE & UGO
        </h1>
        <div className="mt-10 font-eb-garamond">
          <p className="text-xl md:text-2xl tracking-[3px]">APRIL 22, 2025</p>
          <p className="text-lg md:text-xl mt-2 tracking-[3px]">
            {timeLeft.days} DAYS TO GO!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
