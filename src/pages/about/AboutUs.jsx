import React, { useState, useEffect } from "react";

// Counter Component
const CounterAnimation = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  return (
    <div
      id={`counter-${label}`}
      className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-indigo-100"
    >
      <div className="text-2xl font-bold text-indigo-700 animate-pulse">
        {Math.round(count)}
      </div>
      <div className="text-xs text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <div
      className="min-h-screen text-gray-800 bg-center"
      style={{
        backgroundImage:
          "url('/assets/image/bg themes/IMG-20250725-WA0013.jpg')",
      }}
    >
      {/* HERO with enhanced gradient and animations */}
      <header className="bg-gradient-to-r from-white via-gray-100 to-white text-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 lg:py-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                About Us
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-gray-600 rounded-full mt-4 animate-pulse"></div>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-300">
                Counted among the premium Manufacturer, Supplier and Distributor
                of an advanced range of industrial CNC & Engraving machines
                since <strong className="text-blue-600">2002</strong> — crafting
                solutions for interior designing, furniture and signage
                industries across India.
              </p>

              <div className="mt-8 flex gap-4 items-center animate-fade-in-up delay-500">
                <a
                  href="#contact"
                  className="group inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700"
                >
                  <span className="group-hover:animate-pulse">
                    📞 Contact Sales
                  </span>
                </a>
                <a
                  href="#products"
                  className="inline-block border-2 border-gray-400 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  🛠️ View Products
                </a>
              </div>
            </div>

            {/* Right Info Box */}
            <div className="mt-10 lg:mt-0 lg:w-1/2 animate-fade-in-left delay-700">
              <div className="rounded-3xl bg-white p-8 shadow-2xl border border-gray-200 hover:shadow-blue-200 transition-all duration-500 transform hover:scale-105">
                <dl className="grid grid-cols-2 gap-6 text-sm md:text-base">
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">
                      Business Type
                    </dt>
                    <dd className="text-blue-700">
                      Manufacturer, Supplier & Distributor
                    </dd>
                  </div>
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">
                      Export Percentage
                    </dt>
                    <dd className="text-blue-600 font-bold">100% 🌍</dd>
                  </div>
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">
                      No. of Staff
                    </dt>
                    <dd className="text-blue-700">50 👥</dd>
                  </div>
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">
                      Establishment
                    </dt>
                    <dd className="text-blue-600 font-bold">2002 🏭</dd>
                  </div>
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">
                      Legal Status
                    </dt>
                    <dd className="text-blue-700">Proprietorship</dd>
                  </div>
                  <div className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
                    <dt className="font-semibold text-gray-900">Proprietor</dt>
                    <dd className="text-blue-700 font-semibold">
                      Mr. Kuldeep Singh 👨‍💼
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* COMPANY BLURB */}
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
              <span className="text-2xl">🏢</span> Who we are
            </h2>
            <p className="mt-6 leading-relaxed text-gray-700 text-lg">
              Established in 2002, our deep industrial knowledge and vast
              experience allow us to deliver a flawless and quality-tested
              product line that includes CNC Routers, Engravers and specialized
              machines for wood, stone, doors and polyfoam. Our customer-centred
              approach, after-sales support and training programs have built us
              a strong reputation across the nation.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <h3 className="font-bold text-green-800 flex items-center gap-2 group-hover:animate-bounce">
                  <span>🛠️</span> After Sales Support
                </h3>
                <ul className="mt-4 text-sm list-none space-y-2 text-gray-700">
                  <li className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <span className="text-green-500">✓</span> Installation
                    Training
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <span className="text-green-500">✓</span> Onsite Support
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <span className="text-green-500">✓</span> Operational
                    Training
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <span className="text-green-500">✓</span> User Manuals
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <h3 className="font-bold text-blue-800 flex items-center gap-2 group-hover:animate-bounce">
                  <span>🏆</span> Competitive Advantages
                </h3>
                <ul className="mt-4 text-sm list-none space-y-2 text-gray-700">
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <span className="text-blue-500">★</span> Transparent
                    dealings
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <span className="text-blue-500">★</span> R&D department
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <span className="text-blue-500">★</span> Customized
                    solutions
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <span className="text-blue-500">★</span> Bulk order capacity
                  </li>
                </ul>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <CounterAnimation target={45} label="Monthly Units" />
              <CounterAnimation target={15} label="Engineers" />
              <CounterAnimation target={50} label="Staff" />
              <CounterAnimation
                target={2002}
                label="Established"
                duration={3000}
              />
            </div>
          </article>

          {/* CONTACT CARD */}
          <aside className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-6 shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-xl font-bold text-indigo-800 flex items-center gap-2">
              <span className="text-lg">📊</span> Quick Info
            </h3>
            <dl className="mt-6 text-sm space-y-4 text-gray-700">
              <div className="hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200">
                <dt className="font-semibold text-indigo-700">
                  Annual Turnover
                </dt>
                <dd className="font-bold text-green-600">
                  Rs. 50 Lakhs - Rs. 1 Crore 💰
                </dd>
              </div>
              <div className="hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200">
                <dt className="font-semibold text-indigo-700">Banker</dt>
                <dd>HDFC Bank Ltd. 🏦</dd>
              </div>
              <div className="hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200">
                <dt className="font-semibold text-indigo-700">
                  DGFT / IE Code
                </dt>
                <dd className="font-mono">3011003696</dd>
              </div>
              <div className="hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200">
                <dt className="font-semibold text-indigo-700">CST No.</dt>
                <dd className="font-mono">03062086199C</dd>
              </div>
              <div className="hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200">
                <dt className="font-semibold text-indigo-700">GST No.</dt>
                <dd className="font-mono">03BQHPS7761N1Z5</dd>
              </div>
            </dl>

            <div className="mt-8 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
              <h4 className="font-bold">Primary Contact</h4>
              <p className="text-sm mt-2 opacity-90">Mr. Kuldeep Singh 👨‍💼</p>
              <a
                href="#contact"
                className="mt-4 inline-block bg-white text-indigo-700 px-5 py-2 rounded-xl font-semibold hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get a Quote 📝
              </a>
            </div>
          </aside>
        </section>

        {/* USP SECTION */}
        <section className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-800 flex items-center gap-3 mb-6">
              <span className="text-2xl">🎯</span> Company USP
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-300 group">
                <span className="text-green-500 font-bold group-hover:animate-bounce">
                  🛠️
                </span>
                <span>
                  Provide After Sales Support including onsite and operational
                  training
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-300 group">
                <span className="text-green-500 font-bold group-hover:animate-bounce">
                  🤝
                </span>
                <span>Transparent dealings and strong TQM practices</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-300 group">
                <span className="text-green-500 font-bold group-hover:animate-bounce">
                  ⚡
                </span>
                <span>Customised solutions and strong R&D</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-300 group">
                <span className="text-green-500 font-bold group-hover:animate-bounce">
                  📦
                </span>
                <span>Ability to deliver bulk orders</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3 mb-6">
              <span className="text-2xl">📦</span> Packaging & Payment
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                <p className="text-blue-800 font-semibold">💳 Payment Modes</p>
                <p className="text-gray-700 mt-2">
                  Cash • Cheque • Credit Card • DD • Online
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 hover:shadow-md transition-all duration-300">
                <p className="text-indigo-800 font-semibold">
                  🚛 Shipment Mode
                </p>
                <p className="text-gray-700 mt-2">
                  By Road (Pan India Delivery)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🚀 MISSION & VISION SECTION */}
        <section className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission */}
          <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-3xl shadow-xl border border-yellow-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-yellow-800 flex items-center gap-3 mb-6">
              <span className="text-2xl">🎯</span> Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver{" "}
              <span className="font-semibold text-yellow-700">
                world-class CNC and Engraving solutions
              </span>{" "}
              that empower industries like furniture, signage, and interior
              designing. We aim to provide cutting-edge technology, reliable
              after-sales support, and a customer-first approach to ensure
              lasting partnerships and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-purple-800 flex items-center gap-3 mb-6">
              <span className="text-2xl">👁️</span> Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become a{" "}
              <span className="font-semibold text-purple-700">
                global leader in CNC technology
              </span>
              , recognized for innovation, reliability, and excellence. We
              strive to set benchmarks in quality manufacturing and inspire
              industries with sustainable, efficient, and future-ready
              solutions.
            </p>
          </div>
        </section>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
