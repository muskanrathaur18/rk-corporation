import { Users, Clock3, Award, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('/assets/image/bg themes/man-using-angle-grinder-with-sparks.jpg')",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row justify-end px-4 sm:px-6 lg:px-20 py-10 sm:py-12 lg:py-6">
        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-white">
          {/* Heading */}
          <div className="mb-6 text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-medium">Why Choose Us</h4>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mt-2 leading-snug">
              We present work from skilled hands to perfection.
            </h2>
            <p className="text-gray-200 mt-3 text-sm sm:text-base leading-relaxed">
              We make energy efficient yet economical products with the help of
              latest technology & innovations
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0B0E40]/60 p-5 sm:p-6 flex flex-col items-center text-center shadow-md">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">
                Certified Expert & Team
              </h3>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                Our certified engineers and skilled professionals specialize in
                CNC router machine manufacturing, ensuring precision and
                innovation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0B0E40]/60 p-5 sm:p-6 flex flex-col items-center text-center shadow-md">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center">
                  <Clock3 className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">
                Fast Reliable Services
              </h3>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                We deliver CNC router machines on time with complete reliability
                to ensure smooth operations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0B0E40]/60 p-5 sm:p-6 flex flex-col items-center text-center shadow-md">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">
                The Best Quality
              </h3>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                We use advanced technology and premium materials for durability,
                accuracy, and long-lasting performance.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0B0E40]/60 p-5 sm:p-6 flex flex-col items-center text-center shadow-md">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">
                24/7 Premium Support
              </h3>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                Our support team provides installation, training, and
                troubleshooting anytime you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
