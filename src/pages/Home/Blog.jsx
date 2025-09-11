import React from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom"; // React Router

export default function BlogSection() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: "/assets/image/Blog/High Precision Woodwork.png",
      category: "Wood CNC Router",
      date: "05-01-2025",
      title: "High Precision Wood CNC Routers for Furniture & Interior",
      description: "Wood CNC Routers are revolutionizing the furniture industry with unmatched accuracy, speed, and cost-effectiveness. From intricate designs to bulk cutting, they ensure perfection in every detail...",
    },
    {
      id: 2,
      image: "/assets/image/Blog/Stone CNC Innovation.png",
      category: "Stone CNC Router",
      date: "12-01-2025",
      title: "Stone CNC Routers: Redefining Marble & Granite Engraving",
      description: "Stone CNC Routers are ideal for marble, granite, and other hard materials. With automated precision, they allow flawless carving for monuments, temples, and architectural works...",
    },
    {
      id: 3,
      image: "/assets/image/Blog/Industrial Metal CNC Routers.png",
      category: "Metal CNC Router",
      date: "18-01-2025",
      title: "Metal CNC Routers for Industrial Applications",
      description: "Metal CNC Routers are widely used in aerospace, automotive, and fabrication industries. With robust power and accuracy, they handle steel, aluminum, and other metals with ease...",
    },
    {
      id: 4,
      image: "/assets/image/Blog/Precision Manufacturing Fusion.png",
      category: "Laser Cutting Machine",
      date: "22-01-2025",
      title: "Laser Cutting & CNC Machines – A Perfect Combination",
      description: "Laser cutting machines integrated with CNC technology provide unparalleled precision for sheet metal cutting, signage, and customized designs in bulk production...",
    },
    {
      id: 5,
      image: "/assets/image/Blog/Polyfoam CNC Routers_simple_compos.png",
      category: "Polyfoam CNC Router",
      date: "28-01-2025",
      title: "Polyfoam CNC Routers for Mould Making",
      description: "Polyfoam CNC Routers are specialized machines for creating moulds and patterns. They provide accuracy and efficiency in making 3D models for construction and automotive use...",
    },
    {
      id: 6,
      image: "/assets/image/Blog/3D CNC Routers_simple.png",
      category: "3D CNC Router",
      date: "02-02-2025",
      title: "3D CNC Routers – Bringing Imagination to Reality",
      description: "3D CNC Routers allow complex engraving and shaping with high detail. Perfect for sign boards, wooden crafts, and decorative items, they bring creativity to the next level...",
    },
  ];

  const latestUpdate = {
    id: 7,
    image: "/assets/image/Blog/Precision CNC Door Design_simple.png",
    category: "Door CNC Router",
    date: "07-02-2025",
    title: "Door CNC Routers: Precision in Designing Modern Doors",
    description: "Door CNC Routers ensure flawless carving and cutting for modern wooden doors. They save time, reduce wastage, and guarantee uniform quality in every design...",
  };

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Section - Blogs */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#2457AA] text-sm font-medium mb-1">Recent Activities</p>
              <h1 className="text-4xl font-bold text-gray-900">Our Blogs</h1>
            </div>
            <div className="flex gap-2">
              <button ref={navigationPrevRef} className="swiper-button-prev-custom w-8 h-8 bg-[#2457AA] text-white flex items-center justify-center rounded-full">
                <ChevronLeft size={16} />
              </button>
              <button ref={navigationNextRef} className="swiper-button-next-custom w-8 h-8 bg-[#2457AA] text-white flex items-center justify-center rounded-full">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-40 object-fill" />
                  </div>

                  <div className="p-3">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-gray-600 font-medium text-sm">{blog.category}</span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    <h3 className="text-base mt-3 font-bold text-gray-900 mb-1 leading-tight">{blog.title}</h3>

                    <p className="text-gray-600 mt-5 text-xs mb-2 leading-snug">{blog.description}</p>

                    <button
                      onClick={() => navigate(`/blog/${blog.id}`)}
                      className="bg-[#2457AA] mt-5 text-white px-3 py-2 rounded-md font-medium text-sm"
                    >
                      Read Full Story
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Section - Latest Updates */}
        <div className="lg:col-span-1 bg-[#F6F9FF] p-4">
          <div className="mb-6">
            <p className="text-[#2457AA] text-sm font-medium mb-1">RK Corporation</p>
            <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img src={latestUpdate.image} alt={latestUpdate.title} className="w-full h-32 object-cover" />
            </div>

            <div className="p-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-gray-600 font-medium text-sm">{latestUpdate.category}</span>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Calendar size={16} />
                  <span>{latestUpdate.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{latestUpdate.title}</h3>

              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{latestUpdate.description}</p>

              <button
                onClick={() => navigate(`/blog/${latestUpdate.id}`)}
                className="bg-[#2457AA] text-white px-4 py-2 rounded-lg font-medium text-sm"
              >
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
