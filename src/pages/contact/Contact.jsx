import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload na ho
    alert(`Form Submitted ✅ 
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`);
    
    // Yaha API call bhi kar sakte ho
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
  };

  return (
    <div className="w-full py-2">
      {/* Hero Section */}
      <section className=" h-[300px] relative">
        <img src="https://www.polypackenterprises.com/assets/new-images/images/banner/new-contact-us.jpg" className="w-full h-full object-fit"></img>
        <div className="container mx-auto flex flex-col items-center py-12 px-4">
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-60 absolute inset-x-0 inset-y-0 bottom-0 object-contain w-full max-w-5xl left-40">
            {/* Email Box */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <Mail className="w-6 h-6 text-[#2457AA] animate-bounce" />
              </div>
              <h3 className="font-bold text-md">Email Us</h3>
              <p className="text-gray-600 text-sm mt-2">support@example.com</p>
            </div>

            {/* Phone Box */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <Phone className="text-gray-500 w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-bold text-md">Call Us</h3>
              <p className="text-gray-600 text-sm mt-2">+91 8045479835 </p>
            </div>

            {/* Address Box */}
            <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <MapPin className="text-[#2457AA] w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="font-bold text-md">Address</h3>
              <p className="text-gray-600 text-sm mt-2">
                Plot No. 322, Sector-Ecotech-1 Exten, Greater Noida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Map Section */}
      <section className="container bg-gray-50 mx-auto py-12 mt-32 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map */}
        <div className="w-full h-[420px]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020424072407!2d-122.42067938468178!3d37.77928017975814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2b2b6d53%3A0x89b8fbb5d3a4a2a5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1632439380519!5m2!1sen!2sus"
            className="w-full h-full shadow"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Heading with Icon */}
          <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Send className="w-5 h-5 text-[#2457AA]" />
            Send Us a Message
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2457AA]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2457AA]"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2457AA]"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2457AA]"
                placeholder="Your Message Here..."
                required
              ></textarea>
            </div>

            {/* Button with Icon */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#2457AA] font-bold text-white py-2 rounded-lg"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
