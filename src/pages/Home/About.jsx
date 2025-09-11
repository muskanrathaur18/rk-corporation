import React from "react";
import { GiTechnoHeart, GiElectric, GiShield } from "react-icons/gi";

function ProductFeatures() {
  const features = [
    {
      title: "Innovative Technology",
      description:
        "Cutting-edge features deliver enhanced welding precision, efficiency, and versatility.",
      icon: <GiTechnoHeart className="text-6xl text-blue-600 mr-4 -mt-8 transform transition-transform duration-500 hover:-translate-y-2 hover:scale-110" />,
      bgColor: "bg-[#F6F9FF]",
      textColor: "text-black",
    },
    {
      title: "Energy Savings",
      description:
        "Optimized power usage ensures efficient welding with reduced energy consumption.",
      icon: <GiElectric className="text-6xl text-black mr-2 -mt-9 transform transition-transform duration-500 hover:-translate-y-2 hover:scale-110" />,
      bgColor: "bg-[#FFD200]",
      textColor: "text-black",
    },
    {
      title: "Warranty",
      description:
        "Warranty period is 1 year. Bweld guarantees that its products are faultless with regard to manufacturing defects.",
      icon: <GiShield className="text-6xl text-white mr-2 -mt-14 transform transition-transform duration-500 hover:-translate-y-2 hover:scale-110" />,
      bgColor: "bg-[#02112B]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-6xl mx-auto px-0">
        {/* Features Container */}
        <div className="flex flex-row w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 p-6 flex flex-row items-center ${feature.bgColor}`}
            >
              {feature.icon}
              <div className="flex flex-col">
                <h3 className={`text-xl font-semibold mb-1 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${feature.textColor}`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
