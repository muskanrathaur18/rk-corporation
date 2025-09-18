import { useState, useEffect } from "react";

export default function ProductShowcase() {
  const slides = [
    {
      id: 1,
      img: "/assets/image/banner/cnc-banner.jpg",
    },
    {
      id: 2,
      img: "/assets/image/banner/cnc-banner2.jpg",
     
    },
     {
      id: 3,
      img: "/assets/image/banner/cnc-banner3.jpg",
     
    },
     
  ];

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation handlers
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="container mx-auto px-4 md:px-6 py-2 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Slider */}
      <div
        className="md:col-span-2 relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="w-full h-[280px] md:h-[390px] object-fill transition-all duration-500"
        />

        {/* Overlay */}
        <div className="absolute  flex flex-col justify-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {slides[current].title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base max-w-lg">
            {slides[current].desc}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-sm ${
                current === index ? "bg-yellow-400" : "bg-[#2457AA]"
              }`}
            ></button>
          ))}
        </div>

        {/* Left/Right Arrows */}
        {hovered && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {/* Right Static Product */}
      <div className="bg-white max-h-[390px]  flex flex-col justify-between">
        <img className="h-full object-fill"src="/assets/image/banner/cnc.jpg"></img>
      </div>
    </section>
  );
}
