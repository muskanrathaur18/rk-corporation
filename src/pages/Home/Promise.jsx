import React from "react";

export default function OurPromise() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('/assets/image/bg themes/male-working-with-welding-torch.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-10 text-center text-white max-w-4xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative inline-block">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full inline-block"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-400 rounded-full inline-block absolute -top-2 sm:-top-3 -right-2"></span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Promise
          </h2>
        </div>

        {/* Content */}
        <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
          RK Corporation offers a comprehensive range of CNC router and cutting
          machines, designed for industries like furniture, stone, metal,
          acrylic, and signage. Our advanced CNC solutions promise high
          precision, durability, and efficiency, empowering manufacturers to
          achieve superior quality with reduced production time. With a
          commitment to innovation and reliability, RK Corporation delivers
          tailored CNC machines that ensure accuracy, performance, and long-term
          value, making us a trusted partner for businesses worldwide.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-yellow-400 text-black font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-sm hover:bg-yellow-500 transition">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}
