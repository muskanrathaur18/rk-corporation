import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const products = [
    { name: "Stone CNC Router", link: "/products/1" },
    { name: "Stone Engraving CNC Router", link: "/products/2" },
    { name: "Wood Engraving CNC Router", link: "/products/3" },
    { name: "Mezzanine Flooring System", link: "/products/4" },
    { name: "Wood CNC router", link: "/products/5" },
    { name: "Furniture CNC Router", link: "/products/6" },
    { name: "Woodworking CNC Router", link: "/products/10" },
    { name: "Door CNC Royer", link: "/products/11" },
    { name: "Door CNC Router", link: "/products/13" },
    { name: "Mini CNC Router", link: "/products/14" },
  ];

  return (
    <footer
      className="pt-6 pb-2"
      style={{
        backgroundImage: "url('/assets/image/bg themes/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
      }}
    >
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8 z-50 w-12 h-12 rounded-full bg-[#2457AA] text-white shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-6">
          {/* Company Info */}
          <div className="space-y-5">
            <img src="/assets/image/logo.png" className="h-12" alt="Logo" />
            <p className="text-[#313131] leading-relaxed text-sm sm:text-base">
              We are a leading manufacturer of high-performance CNC Router
              Machines, delivering cutting-edge solutions for industries across
              India and abroad. With years of expertise in precision
              engineering, we specialize in designing and producing machines
              that offer superior accuracy, efficiency, and durability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4 sm:mb-6 pb-2 border-b border-gray-700 relative group">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Products", link: "/products" },
                { name: "Contact Us", link: "/contact" },
                { name: "Blogs", link: "/blog" },
                { name: "Career", link: "/career" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-[#313131] flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 transition-all duration-300 group-hover:bg-blue-400 group-hover:w-2 group-hover:h-2"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4 sm:mb-6 pb-2 border-b border-gray-700 relative group">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.link}
                    className="text-[#313131] flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 transition-all duration-300 group-hover:bg-purple-400 group-hover:w-2 group-hover:h-2"></span>
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-[#2457AA] font-medium flex items-center group"
                >
                  <span className="mr-2">View All Products</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4 sm:mb-6 pb-2 border-b border-gray-700 relative group">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <h5 className="text-gray-600 font-medium">Plant 1</h5>
                <p className="text-[#313131]">
                  Plot No. 322, Sector-Ecotech-1 Exten, Greater Noida - 201310, Uttar Pradesh, India
                </p>
              </li>
              <li>
                <h5 className="text-gray-600 font-medium">Plant 2</h5>
                <p className="text-[#313131]">13 A Shiv Nagar Niwaru Bye Pass Jaipur</p>
              </li>
              <li>
                <h5 className="text-gray-600 font-medium">Phone</h5>
                <p>
                  <Link to="tel:08045479835" className="hover:text-blue-600">08045479835</Link>,{" "}
                  <Link to="tel:9872563981" className="hover:text-blue-600">9872563981</Link>
                </p>
              </li>
              <li>
                <h5 className="text-gray-600 font-medium">Email</h5>
                <p>
                  <a href="mailto:marketing@aavonsteels.com" className="hover:text-blue-600 block">marketing@aavonsteels.com</a>
                  <a href="mailto:ujjwal.s@aavonsteels.com" className="hover:text-blue-600 block">ujjwal.s@aavonsteels.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-0">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} <span className="text-[#2457AA]">R K CORPORATION</span> All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed & Developed By{" "}
              <a
                href="https://www.jaikviktechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2457AA]"
              >
                Jaikvik Technology India Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
