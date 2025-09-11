import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c2853] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p className="text-gray-300 mb-4">
            We post regularly interesting application photos and articles
            regarding drilling & bevelling.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 p-3 rounded-md hover:bg-blue-700 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sign Up To Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Join 500+ subscribers and get regular discount coupons and offer
            updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-yellow-400 text-black font-medium px-5 rounded-r-md hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Location</h3>
          <div className="rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.626398068404!2d77.474569!3d28.581407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc173ff00b3ab%3A0xa2d49c2eb5d63b64!2sPlot%20No.%20322%2C%20Sector%20Ecotech-1%20Extension%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1694263959472!5m2!1sen!2sin"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
