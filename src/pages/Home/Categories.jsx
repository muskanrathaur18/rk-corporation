import React, { useState } from 'react';

const WeldingCategories = () => {
  const [activeCategory, setActiveCategory] = useState('Stone CNC Router');

  const categories = [
    'Stone CNC Router',
    'Wood Engraving CNC Router',
    'Metal CNC Router',
    'Laser Cutting Machine',
  ];

  const categoryProducts = {
    'Stone CNC Router': [
      { name: 'Stone CNC Router', img: '/assets/image/bg themes/Stone-CNC-Router.png' },
      { name: 'Stone Engraving CNC Router', img: '/assets/image/bg themes/Stone-Engraving-CNC-Router.png' },
      { name: 'Stone CNC Router Heavy Duty', img: '/assets/image/bg themes/Heavy-Duty-Stone-CNC-Router.png' },
      { name: 'Stone 3D CNC Machine', img: '/assets/image/bg themes/3D-Wood-CNC-Router.png' },
      { name: '8x4 Feet Stone CNC Router', img: '/assets/image/bg themes/8x4-Feet-Stone-CNC-Router.png' },
    ],
    'Wood Engraving CNC Router': [
      { name: 'CNC Rotary Machine', img: '/assets/image/bg themes/CNC-Rotary-Machine.png' },
      { name: 'Wood Engraving CNC Router Machine', img: '/assets/image/bg themes/Wood-Engraving-CNC-Router-Machine.png' },
      { name: 'Wood Pattern CNC Router', img: '/assets/image/bg themes/Wood-Pattern-CNC-Router.png' },
      { name: 'Wood CNC Router', img: '/assets/image/bg themes/Wood-CNC-Router.png' },
      { name: 'Wood Cutting CNC Routers', img: '/assets/image/bg themes/Wood-Cutting-CNC-Routers.png' },
    ],
    'Metal CNC Router': [
      { name: 'Metal CNC Router 1325', img: '/assets/image/bg themes/cnc-stone-router-1325.png' },
      { name: 'Metal CNC Router 1530', img: '/assets/image/bg themes/cnc-router-1530.png' },
      { name: 'Metal CNC Router Heavy Duty', img: '/assets/image/bg themes/Heavy-Duty-Stone-CNC-Router.png' },
      { name: 'Metal CNC Router Sheet Cutting', img: '/assets/image/bg themes/Metal-Cutting-CNC-Router.png' },
      { name: 'Metal CNC Router', img: '/assets/image/bg themes/Stone-CNC-Router.png' },
    ],
    'Laser Cutting Machine': [
      { name: 'Laser Cutting Machine', img: '/assets/image/bg themes/laser-cutting-machines.png' },
      { name: 'Laser Engraving Machine', img: '/assets/image/bg themes/Laser-Engraving-Machine.png' },
      { name: 'Metal Laser Machine', img: '/assets/image/bg themes/Metal-Laser-Machine.png' },
      { name: 'Acrylic Laser Cutting', img: '/assets/image/bg themes/acrylic.png' },
      { name: 'Metal & Non-Metal Laser Machine', img: '/assets/image/bg themes/metal-and-non-metal-laser-cutting-machine.png' },
    ],
  };

  // Render product cards
  const renderProductCards = (products) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-white border shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="bg-[#F6F9FF] border-b flex justify-center items-center h-44">
            <img
              src={product.img}
              alt={product.name}
              className="p-2 object-contain h-full w-full transform transition-transform duration-1000 hover:rotate-y-180"
            />
          </div>
          <div className="p-2 text-center">
            <h3 className="text-md text-gray-800">{product.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-2 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="relative inline-block">
              <span className="w-4 h-4 bg-blue-600 rounded-full inline-block"></span>
              <span className="w-4 h-4 border-2 border-yellow-400 rounded-full inline-block absolute -top-3 -right-2"></span>
            </span>
            <h1 className="text-4xl font-bold text-gray-800">Our Categories</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore our premium CNC Routers and Laser Cutting Machines designed 
            for stone, wood, metal, and acrylic industries.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-[#F6F9FF] border-b border-gray-200">
          <div className="flex flex-wrap gap-8">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeCategory === category
                    ? 'text-[#2457AA] border-b-2 border-[#2457AA]'
                    : 'text-gray-800 hover:text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {renderProductCards(categoryProducts[activeCategory])}
      </div>
    </div>
  );
};

export default WeldingCategories;
