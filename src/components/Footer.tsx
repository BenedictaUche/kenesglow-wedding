const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white text-[#130c0e] text-center font-serif font-eb-garamond space-y-2">
      <h1 className="text-[60px] font-normal tracking-[8px]">K & U</h1>
      <hr className="w-24 border-t border-black my-2" />
      <p className="text-2xl tracking-[3px]">07.6.2025</p>

      <p className="text-sm mt-4">
        Created by{" "}
        <a
          href="https://benedicta-onyebuchi-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          Benedicta
        </a>
      </p>
    </div>
  );
};

export default Footer;
