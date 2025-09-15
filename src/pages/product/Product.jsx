import React, { useState } from "react";
import { motion } from "framer-motion";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Wood CNC Router",
    image:
      "https://www.shutterstock.com/image-photo/cnc-router-cutting-wood-sheet-600nw-2157087057.jpg",
    category: "Wood CNC",
    description: "High precision CNC Router for furniture & interior cutting.",
  },
  {
    id: 2,
    name: "Metal CNC Router",
    image:
      "https://www.shutterstock.com/image-photo/cnc-router-cutting-metal-sheet-600nw-2148029345.jpg",
    category: "Metal CNC",
    description: "Heavy-duty CNC router for cutting & engraving on metals.",
  },
  {
    id: 3,
    name: "3D CNC Router",
    image:
      "https://www.shutterstock.com/image-photo/cnc-router-engraving-3d-design-600nw-2201230040.jpg",
    category: "3D CNC",
    description: "Advanced 3D CNC router for complex carving and detailing.",
  },
  {
    id: 4,
    name: "Stone CNC Router",
    image:
      "https://www.shutterstock.com/image-photo/stone-cnc-router-machine-engraving-600nw-2179016540.jpg",
    category: "Stone CNC",
    description: "Specialized CNC machine for marble, granite & stone work.",
  },
];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our CNC Machine Product Range
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          Explore our high-performance CNC Routers designed for wood, metal,
          stone, and 3D carving industries.
        </p>
      </section>

      {/* Filter Section */}
      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {["All", "Wood CNC", "Metal CNC", "3D CNC", "Stone CNC"].map(
          (cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium shadow-sm transition ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {product.description}
                </p>
                <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Looking for Custom CNC Solutions?</h2>
        <p className="mt-3 text-lg opacity-90">
          Contact us today to discuss your requirements.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
