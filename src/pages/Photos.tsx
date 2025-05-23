const photos = [
  { src: "/images/white-1.jpeg", alt: "Couple running on beach", bw: false },
  { src: "/images/white-2.jpeg", alt: "Holding hands by the ocean", bw: false },
  { src: "/images/white-3.jpeg", alt: "Elegant staircase", bw: true },
  { src: "/images/white-5.jpeg", alt: "Romantic columns scene", bw: false },
  { src: "/images/white-4.jpeg", alt: "Black and white beach moment", bw: false },
  { src: "/images/white-6.jpeg", alt: "Elevator wedding photo", bw: false },
  { src: "/images/white-2.jpeg", alt: "Sunset beach walk", bw: false },
  { src: "/images/white-3.jpeg", alt: "Close-up of wedding rings", bw: false },
];

const Photos = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 font-abhaya">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden group aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                photo.bw ? 'filter grayscale hover:grayscale-0' : ''
              }`}
              loading="lazy"
            />
            {/* Optional: Add a subtle overlay with the alt text on hover */}
            {/* <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-2 sm:p-3">
              <p className="text-black text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {photo.alt}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
