import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Stone CNC Router');
  const navigate = useNavigate(); 

  const categories = [
    'Stone CNC Router',
    'Wood Engraving CNC Router',
    'Metal CNC Router',
    'Laser Cutting Machine',
  ];

  const categoryProducts = {
    'Stone CNC Router': [
      { name: 'Stone CNC Router', img: '/assets/image/bg themes/Stone-CNC-Router.png', link: '/product/stone013' },
      { name: 'Stone Engraving CNC Router', img: '/assets/image/bg themes/Stone-Engraving-CNC-Router.png', link: '/product/engrave007' },
      { name: 'Stone CNC Router Heavy Duty', img: '/assets/image/bg themes/Heavy-Duty-Stone-CNC-Router.png', link: '/product/stone006' },
      { name: 'Stone 3D CNC Machine', img: '/assets/image/bg themes/3D-Wood-CNC-Router.png', link: '/product/stone005' },
      { name: '8x4 Feet Stone CNC Router', img: '/assets/image/bg themes/8x4-Feet-Stone-CNC-Router.png', link: '/product/stone010' },
    ],
    'Wood Engraving CNC Router': [
      { name: 'CNC Rotary Machine', img: '/assets/image/bg themes/CNC-Rotary-Machine.png', link: '/products/cnc-rotary' },
      { name: 'Wood Engraving CNC Router Machine', img: '/assets/image/bg themes/Wood-Engraving-CNC-Router-Machine.png', link: '/products/wood-engraving-router' },
      { name: 'Wood Pattern CNC Router', img: '/assets/image/bg themes/Wood-Pattern-CNC-Router.png', link: '/products/wood-pattern-router' },
      { name: 'Wood CNC Router', img: '/assets/image/bg themes/Wood-CNC-Router.png', link: '/products/wood-cnc-router' },
      { name: 'Wood Cutting CNC Routers', img: '/assets/image/bg themes/Wood-Cutting-CNC-Routers.png', link: '/products/wood-cutting-router' },
    ],
    'Metal CNC Router': [
      { name: 'Metal CNC Router 1325', img: '/assets/image/bg themes/cnc-stone-router-1325.png', link: '/products/metal-1325' },
      { name: 'Metal CNC Router 1530', img: '/assets/image/bg themes/cnc-router-1530.png', link: '/products/metal-1530' },
      { name: 'Metal CNC Router Heavy Duty', img: '/assets/image/bg themes/Heavy-Duty-Stone-CNC-Router.png', link: '/products/metal-heavy-duty' },
      { name: 'Metal CNC Router Sheet Cutting', img: '/assets/image/bg themes/Metal-Cutting-CNC-Router.png', link: '/products/metal-sheet-cutting' },
      { name: 'Metal CNC Router', img: '/assets/image/bg themes/Stone-CNC-Router.png', link: '/products/metal-cnc-router' },
    ],
    'Laser Cutting Machine': [
      { name: 'Laser Cutting Machine', img: '/assets/image/bg themes/laser-cutting-machines.png', link: '/products/laser-cutting' },
      { name: 'Laser Engraving Machine', img: '/assets/image/bg themes/Laser-Engraving-Machine.png', link: '/products/laser-engraving' },
      { name: 'Metal Laser Machine', img: '/assets/image/bg themes/Metal-Laser-Machine.png', link: '/products/metal-laser' },
      { name: 'Acrylic Laser Cutting', img: '/assets/image/bg themes/acrylic.png', link: '/products/acrylic-laser' },
      { name: 'Metal & Non-Metal Laser Machine', img: '/assets/image/bg themes/metal-and-non-metal-laser-cutting-machine.png', link: '/products/metal-non-metal-laser' },
    ],
  };

  // Render product cards
  const renderProductCards = (products) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-white border shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(product.link)} 
        >
          <div className="bg-[#F6F9FF] border-b flex justify-center items-center h-44 sm:h-48 md:h-48 lg:h-44">
            <img
              src={product.img}
              alt={product.name}
              className="p-2 object-contain h-full w-full transform transition-transform duration-500 hover:scale-105"
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
    <div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-10">
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
          <div className="flex flex-wrap gap-6">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-3 px-2 font-medium transition-colors text-sm sm:text-base ${
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

export default Categories;
