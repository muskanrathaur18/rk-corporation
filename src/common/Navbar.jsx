import { useState } from "react";
import {
  Menu,
  Search,
  X,
  User,
  Mail,
  MessageSquare,
  SearchCheckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

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
    <header className="w-full bg-white relative">
      {/* Top Navbar */}
      <div
  className="container mx-auto flex items-center justify-between py-2 px-4 md:px-24 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
  }}
>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="h-12 " src="/assets/image/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[15px] font-medium">
          <Link to="/" className="text-[#2457AA]">
            HOME
          </Link>
          <Link to="/about" className="hover:text-[#2457AA]">
            ABOUT US
          </Link>
          <Link to="/productmain" className="hover:text-[#2457AA]">
            PRODUCTS
          </Link>
          <Link to="/career" className="hover:text-[#2457AA]">
            CAREER
          </Link>
          <Link to="/blog" className="hover:text-[#2457AA]">
            BLOGS
          </Link>
          <Link to="/contact" className="hover:text-[#2457AA]">
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#2457AA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Second Row - Categories + Search + Quote (Hidden on Mobile) */}
      <div className="w-full border-t border-gray-200 hidden md:block">
        <div className="container  flex items-center justify-between py-2 px-20 relative">
          {/* Categories Dropdown */}
          <div className="flex md:gap-[60px] ">
            <div
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <div className="flex items-center border border-gray-300 w-[210px] cursor-pointer">
                <div className="bg-[#2457AA] px-3 py-2.5 flex items-center justify-center">
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
                    <Link
                      key={index}
                      to="/products"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex flex-1 md:w-[600px]  mx-6">
              <input
                type="text"
                placeholder="Search Here..."
                className="flex-1 px-4 py-2 bg-blue-50 border border-r-0 outline-none"
              />
              <button className="bg-red-400 px-5 flex items-center justify-center">
                <Search size={22} className="text-white" />
              </button>
            </div>
          </div>

          {/* Quote Button */}
          <button
            onClick={() => setQuoteOpen(true)}
            className="bg-[#2457AA] text-white px-5 py-2 font-medium shadow-md hover:bg-[#1e4a91] transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-[15px] font-medium">
          <Link to="/" className="text-blue-600">
            Home
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/product">Products</Link>
          <Link to="/career">Career</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      )}

      {/* Quote Form Modal */}
      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setQuoteOpen(false)}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md z-50 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#2457AA] to-[#3a7ad9] p-6 text-white">
              <h2 className="text-2xl font-bold">Get a Quote</h2>
              <p className="text-blue-100 mt-1">
                We'll get back to you shortly
              </p>
              <button
                className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
                onClick={() => setQuoteOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Form */}
            <form className="p-6 space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-200 px-10 py-3 rounded-lg outline-none focus:border-[#2457AA] focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full border border-gray-200 px-10 py-3 rounded-lg outline-none focus:border-[#2457AA] focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                  <MessageSquare size={18} className="text-gray-400" />
                </div>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  className="w-full border border-gray-200 px-10 py-3 rounded-lg outline-none focus:border-[#2457AA] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2457AA] to-[#3a7ad9] text-white font-medium py-3 rounded-lg shadow-md hover:from-[#1e4a91] hover:to-[#2d65c1] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2457AA] focus:ring-opacity-50"
              >
                Submit Request
              </button>
            </form>

            {/* Modal Footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 text-center text-sm text-gray-500">
              We value your privacy and promise to keep your information secure.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
