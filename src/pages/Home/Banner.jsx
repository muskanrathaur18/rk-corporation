import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function banner() {
  const features = [
    {
      imgSrc: "https://www.bweld.in/frontend/assets/img/b-1.jpg",
      bgColor: "bg-black",
      link: "/feature1"
    },
    {
      imgSrc: "https://www.bweld.in/frontend/assets/img/b-2.jpg",
      bgColor: "bg-[#FFD200]",
      link: "/feature2"
    },
    {
      imgSrc: "/assets/image/banner/cnc-banner4.jpg",
      bgColor: "bg-[#02112B]",
      link: "/feature3"
    },
    {
      imgSrc: "https://www.bweld.in/upload/slider/1734435488.webp",
      bgColor: "bg-[#00B894]",
      link: "/feature4"
    },
  ];

  const boxVariants = [
    { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }, hover: { scale: 1.02, transition: { duration: 0.3 } } },
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, hover: { scale: 1.02, rotate: 1, transition: { duration: 0.3 } } },
    { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "backOut" } }, hover: { scale: 1.03, transition: { duration: 0.3 } } },
    { hidden: { opacity: 0, rotateY: 90 }, visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }, hover: { scale: 1.02, transition: { duration: 0.3 } } }
  ];

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: { scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.4 } }
  };

  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* Box 1 */}
          <motion.div
            className="w-full"
            variants={boxVariants[0]}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link to={features[0].link}>
              <div className={`flex items-center justify-center h-48 ${features[0].bgColor} overflow-hidden`}>
                <motion.img src={features[0].imgSrc} alt="Feature 1" className="object-fit h-full w-full" variants={imageVariants} />
              </div>
            </Link>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            className="w-full"
            variants={boxVariants[1]}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link to={features[1].link}>
              <div className={`flex items-center justify-center h-48 ${features[1].bgColor} overflow-hidden`}>
                <motion.img src={features[1].imgSrc} alt="Feature 2" className="object-fit h-full w-full" variants={imageVariants} />
              </div>
            </Link>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            className="w-full sm:col-span-2 md:row-span-2 md:col-auto"
            variants={boxVariants[3]}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link to={features[3].link}>
              <div className={`flex items-center justify-center h-48 md:h-full min-h-[240px] ${features[3].bgColor} overflow-hidden`}>
                <motion.img src={features[3].imgSrc} alt="Feature 4" className="object-fit h-full w-full" variants={imageVariants} />
              </div>
            </Link>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            className="w-full sm:col-span-2 md:col-span-2"
            variants={boxVariants[2]}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link to={features[2].link}>
              <div className={`flex items-center justify-center h-48 ${features[2].bgColor} overflow-hidden`}>
                <motion.img src={features[2].imgSrc} alt="Feature 3" className="object-fit h-full w-full" variants={imageVariants} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default banner;
