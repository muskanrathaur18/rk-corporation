import React from "react";

export default function CncCatalog() {
  const products = [
    { title: "Furniture CNC Router",  img: "/assets/image/bg themes/Furniture-CNC-Router.png" },
    { title: "Door CNC Router",  img: "/assets/image/bg themes/Door-Cutting-CNC-Router.png" },
    { title: "Mini CNC Router",  img: "/assets/image/bg themes/Mini-CNC-Router.png" },
    { title: "ATC CNC Router", img: "/assets/image/bg themes/Door-ATC-CNC-Routers.png" },
    { title: "3D CNC Router",  img: "/assets/image/bg themes/3D-Wood-CNC-Router.png" },
    { title: "CNC Rotary Machine", img: "/assets/image/bg themes/CNC-Router-With-Rotary.png" },
    { title: "4 Axis CNC Router", img: "/assets/image/bg themes/4-Axis-CNC-Router.png" },
    { title: "CNC Router",  img: "/assets/image/bg themes/CNC-Router-With-Rotary.png" },
    
  ];

  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-5 gap-4">
        {/* Left banner */}
        <div className="col-span-1 bg-[#0b1d3a]  h-[346px]">
          <img
            src="https://www.bweld.in/frontend/assets/img/b-6.jpg"
            alt="CNC Machines Group"
            className="w-full object-fill"
          />
        </div>

        {/* Right products grid */}
        <div className="col-span-4 grid grid-cols-4 gap-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-[#F6F9FF] border p-6 text-center shadow-sm hover:shadow-md hover:bg-white transition flex flex-col justify-between"
            >
              {/* Text top */}
              <div>
                <h4 className="text-sm font-bold">{p.title}</h4>
              </div>

              {/* Image bottom */}
              <img
                src={p.img}
                alt={p.title}
                className="h-36 mx-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
