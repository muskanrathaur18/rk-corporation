import React from "react";

export default function TopSellingProducts() {
  const products = [
    { title: "Stone CNC Router", img: "/assets/image/bg themes/Stone-CNC-Router.png" },
    { title: "Wood Engraving CNC", img: "/assets/image/bg themes/Wood-Engraving-CNC-Router-Machine.png" },
    { title: "Glass Engraving CNC Machine", img: "/assets/image/bg themes/Glass-Engraving-CNC-Machine.png" },
    { title: "Leather Cutting Machine", img: "/assets/image/bg themes/Leather-Cutting-Machine.png" },
  ];

  return (
    <section className="py-8 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2">
          <span className="relative inline-block">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full inline-block"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-400 rounded-full inline-block absolute -top-2 sm:-top-3 -right-2"></span>
          </span>
          <span>Top Selling Products</span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Our top-selling CNC machines include high-performance stone routers,
          precision wood engraving routers, durable metal cutting routers, and
          advanced laser cutting machines — designed to deliver efficiency and
          accuracy across industries.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#F9FBFF] border  shadow-sm hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-48 p-4">
              <img
                src={product.img}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <div className="bg-white border-t text-center py-4 rounded-b-lg">
              <h3 className="font-medium text-gray-800">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
