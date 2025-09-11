import { useState } from "react";
import {  Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const products = [
    "Stone CNC Router",
    "Stone Engraving CNC Router",
    "Wood Engraving CNC Router",
    "Furniture CNC Router",
    "Woodworking CNC Router",
    "Door CNC Router",
    "Mini CNC Router",
    "ATC CNC Router",
    "3D CNC Router",
    "Metal CNC Router",
    "CNC Rotary Machine",
    "CNC Routers with Rotary",
    "Automatic Tool Changing CNC Router",
    "CNC Router",
    "Plasma Cutting Machine",
    "Engraver CNC Router",
    "Multi Head CNC Router",
    "4 Axis CNC Router",
    "Acrylic Flaming Machine",
    "Metal Laser Machine",
    "Advertising CNC Router",
    "Graphite CNC Router",
    "Laser Cutting Machine",
    "Laser Engraving CNC Router",
    "Leather Cutting Machine",
    "MDF Board",
    "Cutting CNC Router",
    "Glass Engraving Machine",
  ];

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-24">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
          <img className="h-12 " src="/assets/image/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-[15px] font-medium">
          <a href="/" className="text-[#2457AA]">Home</a>
          <a href="/about" className="hover:text-[#2457AA]">About Us</a>
          <a href="/products" className="hover:text-[#2457AA]">Products</a>
          <a href="/career" className="hover:text-[#2457AA]">Career</a>
          {/* <a href="/gallery" className="hover:text-[#2457AA]">Gallery</a> */}
          <a href="/blog" className="hover:text-[#2457AA]">Blogs</a>
          <a href="/contact" className="hover:text-[#2457AA]">Contact Us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#2457AA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Second Row */}
      <div className="w-full border-t border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-3 px-20 relative">
          {/* Categories Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <div className="flex items-center border border-gray-300 w-[210px] cursor-pointer">
              <div className="bg-[#2457AA] px-3 py-2 flex items-center justify-center">
                <Menu size={20} className="text-white" />
              </div>
              <div className="bg-blue-50 px-6 py-2 flex-1">
                <span className="text-black font-medium">All Categories</span>
              </div>
            </div>

            {/* Dropdown Menu */}
            {categoryOpen && (
              <div className="absolute top-full left-0 w-[210px] bg-white shadow-lg z-50 max-h-64 overflow-y-auto">
                {products.map((product, index) => (
                  <a
                    key={index}
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {product}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex flex-1 max-w-xl mx-6">
            <input
              type="text"
              placeholder="Search Here..."
              className="flex-1 px-4 py-2 bg-blue-50 border border-r-0 outline-none"
            />
            <button className="bg-red-400 px-5 flex items-center justify-center">
              <Search size={22} className="text-white" />
            </button>
          </div>

          {/* Quote Button */}
          <a
            href="/quote"
            className="bg-[#2457AA] text-white px-5 py-2 font-medium shadow-md"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-[15px] font-medium">
          <a href="/" className="text-blue-600">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/career">Career</a>
          <a href="/gallery">Gallery</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
        </div>
      )}
    </header>
  );
}
