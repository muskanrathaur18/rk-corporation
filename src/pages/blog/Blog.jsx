import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/Blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));

    // Animate blog cards
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".blog-card");
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("pop-in");
        }, i * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-2">
      <section className="h-96 max-w-7xl bg-gray-600">
        <img src="https://aavonsteels.jaikvik.in/images/bg%20themes/blog.jpg" className="w-full h-full object-fit"></img>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-8 relative">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover the latest innovations in CNC technology and applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform opacity-0 translate-y-20"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-2 inline-flex px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with CNC Technology</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest product updates and industry insights.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
       {/* SVG Wave */}
        <svg className="absolute top-0 left-0 w-full h-16 text-white transform -translate-y-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,15 L0,100 Z" fill="currentColor"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-16 text-white transform rotate-180 translate-y-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,15 L0,100 Z" fill="currentColor"></path>
        </svg>
      </section>

      <style jsx>{`
        .blog-card.pop-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease-out,
            transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
