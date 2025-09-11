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
    {
      name: "Stone CNC Router",
      link: "/products/1",
    },
    {
      name: "Stone Engraving CNC Router",
      link: "/products/2",
    },
    {
      name: "Wood Engraving CNC Router",
      link: "/products/3",
    },
    {
      name: "Mezzanine Flooring System",
      link: "/products/4",
    },
    {
      name: "Wood CNC router",
      link: "/products/5",
    },
    {
      name: "Furniture CNC Router",
      link: "/products/6",
    },
    {
      name: "Woodworking CNC Router",
      link: "/products/10",
    },
    {
      name: "Door CNC Royer",
      link: "/products/11",
    },
    {
      name: "Door CNC Router",
      link: "/products/13",
    },
    {
      name: "Mini CNC Router",
      link: "/products/14",
    },
  ];

  return (
    <footer
      className="pt-6 pb-2"
      style={{
        backgroundImage: "url('src/assets/image/bg themes/banner.jpg')",
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
          className="fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-[#2457AA] text-white shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-110"
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6">
          {/* Company Info */}
          <div className="space-y-5">
            <img src="/assets/image/logo.png" className="h-12 pl-10"></img>
            <p className="text-[#313131] leading-relaxed">
              We are a leading manufacturer of high-performance CNC Router
              Machines, delivering cutting-edge solutions for industries across
              India and abroad. With years of expertise in precision
              engineering, we specialize in designing and producing machines
              that offer superior accuracy, efficiency, and durability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-700 relative group">
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
                <li key={index} className="overflow-hidden">
                  <Link
                    to={item.link}
                    className="text-[#313131] flex items-center group/link"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 transition-all duration-300 group-hover/link:bg-blue-400 group-hover/link:w-2 group-hover/link:h-2"></span>
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-700 relative group">
              Our Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3">
              {products.slice(0, 6).map((product, index) => (
                <li key={index} className="overflow-hidden">
                  <Link
                    to={product.link}
                    className="text-[#313131] flex items-center group/link"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 transition-all duration-300 group-hover/link:bg-purple-400 group-hover/link:w-2 group-hover/link:h-2"></span>
                    <span className="relative">
                      {product.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
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
            <h4 className="text-lg font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-700 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-500 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-[#2457AA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Plant 1",
                  text: "Plot No. 322, Sector-Ecotech-1 Exten,Greater Noida - 201310, Uttar Pradesh, India",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-[#2457AA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Plant 2",
                  text: "13 A Shiv Nagar Niwaru Bye Pass Jaipur",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-[#2457AA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  title: "Phone",
                  text: (
                    <p>
                      <Link to="tel:08045479835" className="hover:text-blue-600">
                        08045479835
                      </Link>{" "}
                      ,{" "}
                      <Link href="tel: 9872563981" className="hover:text-blue-600">
                         9872563981
                      </Link>
                    </p>
                  ),
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-[#2457AA]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Email",
                  text: (
                    <div>
                      <a
                        href="mailto:marketing@aavonsteels.com"
                        className="hover:text-[#2457AA] block"
                      >
                        {/* marketing@aavonsteels.com, */}
                      </a>
                      <a
                        href="mailto:ujjwal.s@aavonsteels.com"
                        className="hover:text-blue-600 block"
                      >
                        {/* ujjwal.s@aavonsteels.com */}
                      </a>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mt-1 mr-3 transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h5 className="text-gray-600 font-medium">{item.title}</h5>
                    <p className="text-[#313131] text-sm">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="block">
              <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left mb-2 md:mb-0 px-2 transform transition-all duration-500 hover:text-gray-600 hover:scale-105 cursor-pointer">
                &copy; {new Date().getFullYear()} <span className="text-[#2457AA]">R K CORPORATION</span> All Rights Reserved.
              </p>
            </Link>

            <p className="text-gray-500 text-sm mr-5 transform transition-all duration-500 hover:text-gray-600 hover:scale-105 text-center md:text-left px-2">
              © 2025 Designed & Developed By{" "}
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

      {/* Add these animations to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float-slow {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes slide-inner {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-slide {
          animation: slide 8s linear infinite;
          overflow: hidden;
        }
        .animate-slide-inner {
          animation: slide-inner 4s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
