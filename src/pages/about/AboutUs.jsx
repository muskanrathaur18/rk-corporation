import React from "react";
import { GiTechnoHeart, GiElectric, GiShield } from "react-icons/gi";

const AboutUs = () => {
  const features = [
    {
      title: "Our Vision",
      description:
        "To provide exceptional, innovative technology at the most cost-effective prices, continuously striving to meet and exceed customer expectations with integrity, sustainability, growth, reliability, and excellence.",
     
      bgColor: "bg-[#2457AA]",
      textColor: "text-white",
    },
    {
      title: "Our Mission",
      description:
        "To design and deliver world-class CNC Routers that are reliable, high-quality, and energy-efficient, empowering industries like furniture, signage, and interior designing with durable machines and strong after-sales support.",
      bgColor: "bg-[#FFD200]",
      textColor: "text-black",
    },
    {
      title: "Core Values",
      description:
        "ntegrity, innovation, customer focus, quality, sustainability, commitment, trust, excellence, transparency, reliability, growth, responsibility, collaboration, accountability, respect, creativity, adaptability, dedication, teamwork, professionalism.",
      bgColor: "bg-[#02112B]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="bg-white py-2">
      <section className="h-96 max-w-7xl bg-gray-600">
        <img src="https://aavonsteels.jaikvik.in/images/bg%20themes/about.jpg" className="w-full h-full object-fit"></img>
      </section>
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row  gap-10 mt-10 items-stretch">
        {/* Left Content */}
        <div className="md:w-1/2 text-justify">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
           Established in 2002, we are a premium Manufacturer, Supplier, and Distributor of CNC Routers and industrial machines, dedicated to providing high-quality, innovative, and reliable solutions to a diverse range of industries. With over two decades of experience, we have developed an extensive and flawless product line that includes CNC Routers, Wood CNC Routers, 3D CNC Routers, Engraving Machines, Stone CNC Routers, Door CNC Routers, and numerous specialized machines designed to meet specific industrial needs. Our strong market credibility, vast technical expertise, customer-centric approach, and stringent quality-driven operations enable us to consistently exceed client expectations. By offering exceptional products, comprehensive after-sales support, customized solutions, and continuous guidance, we have successfully built long-term relationships and trust with customers across India, empowering them to achieve enhanced productivity, operational efficiency, and sustainable growth in their businesses.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/01/87/60/16/240_F_187601645_kyrjV7wsTXjnvUcKq1BvQTJPbkfLJkZu.jpg"
            alt="About Us"
            className="w-full h-[350px] rounded-md shadow-lg mt-10"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="aboutus py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-1 p-6 flex flex-row items-center ${feature.bgColor}`}
              >
                <div className="flex flex-col">
                  <h3
                    className={`text-xl font-bold mb-1 ${feature.textColor}`}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${feature.textColor}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section (Image Left, Content Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-10 mt-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://www.bweld.in/frontend/assets/img/about/c-policy.png"
            alt="Advanced Welding"
            className="w-full h-auto rounded-md shadow-lg mt-14"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-justify">
          <h2 className="text-3xl font-bold mb-4">Customer Policy</h2>
          <p className="mb-4">
            At our company, we strongly believe in transparent dealings, ethical business practices, and complete customer satisfaction. Every machine we manufacture is meticulously designed and engineered for maximum durability, reliability, operational efficiency, and long-term performance. To ensure smooth and uninterrupted functioning, we provide comprehensive after-sales support including installation training, onsite assistance, operational guidance, detailed user manuals, timely spare parts supply, technical consultation, preventive maintenance, troubleshooting, software updates, process optimization, performance monitoring, safety instructions, warranty support, staff training, and customized solutions tailored to specific client requirements. Our dedicated support team works closely with customers to enhance productivity, minimize downtime, extend machine life, improve operational efficiency, ensure consistent quality, and foster long-term reliability, growth, and sustainable success across diverse industries.
          </p>
        
        </div>
      </div>

      {/* Fourth Section (Image Right, Content Left) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-10 mt-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-justify">
          <h2 className="text-3xl font-bold mb-4">People Development & Growth (People Policy)</h2>
          <p className="mb-4">
            Our people are the cornerstone of our success and the driving force behind our innovation and growth. With a dedicated team of over 50 staff members and 15 highly skilled engineers, we emphasize continuous training, professional development, and skill enhancement to ensure that every individual reaches their full potential. We foster a culture that encourages innovation, technical excellence, and collaboration, while creating a safe, supportive, and growth-oriented workplace. By providing opportunities for long-term career advancement, mentoring, and exposure to advanced technologies, we aim to build a motivated workforce that contributes meaningfully to organizational success. Our people policy is designed to empower employees, nurture talent, cultivate leadership, and align individual growth with the company’s vision, ensuring sustained productivity, engagement, and mutual success.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://www.bweld.in/frontend/assets/img/about/p-policy.png"
            alt="Why Choose Us"
            className="w-full h-auto rounded-md shadow-lg mt-14"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
