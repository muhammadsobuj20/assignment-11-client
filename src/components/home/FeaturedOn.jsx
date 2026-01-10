import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import dailyStar from "../../assets/daily-star.svg";
import ittefak from "../../assets/ittefak.svg";
import dell from "../../assets/dell-2.svg";
import samakal from "../../assets/samakal.svg";
import samsung from "../../assets/samsung-7.svg";
import sony from "../../assets/sony-2.svg";
import ptt from "../../assets/ptt-public.svg";
import philips from "../../assets/philips.svg";
import camps from "../../assets/champs-24.svg";
import apple from "../../assets/apple-11.svg";

// Framer-motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const logos = [
  { src: dailyStar, alt: "Daily Star" },
  { src: ittefak, alt: "Ittefak" },
  { src: dell, alt: "Dell" },
  { src: samakal, alt: "Samakal" },
  { src: samsung, alt: "Samsung" },
  { src: sony, alt: "Sony" },
  { src: ptt, alt: "PTT Public" },
  { src: philips, alt: "Philips" },
  { src: camps, alt: "Champs 24" },
  { src: apple, alt: "Apple" },
];

const FeaturedOn = () => {
  return (
    <motion.section
      className="py-16 text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-10"
        variants={fadeInUp}
      >
        We were <span className="text-cyan-500">Featured</span> on
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center items-center h-20"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default FeaturedOn;
