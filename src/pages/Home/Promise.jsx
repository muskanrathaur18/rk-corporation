import React from "react";

export default function OurPromise() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/assets/image/bg themes/male-working-with-welding-torch.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative container mx-auto px-6 py-12 text-center text-white max-w-4xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative inline-block">
            <span className="w-4 h-4 bg-blue-600 rounded-full inline-block"></span>
            <span className="w-4 h-4 border-2 border-yellow-400 rounded-full inline-block absolute -top-3 -right-2"></span>
          </span>
          <h2 className="text-3xl font-bold">Our Promise</h2>
        </div>

        {/* Content */}
        <p className="text-lg leading-relaxed">
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
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-sm hover:bg-yellow-500 transition">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}
