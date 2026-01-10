import React from "react";
import { motion } from "framer-motion";
import partner from "../../assets/partner-.svg";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AffiliatePartner = () => {
  return (
    <motion.section
      className="py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <h2 className="text-4xl font-bold">
            Affiliate <span className="text-cyan-500">Partner</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Tuition Terminal's Affiliate Program is a fantastic method for extra
            earnings. Everyone is eligible for this opportunity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-2xl transition-all duration-300"
          >
            Join Now
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.img
          src={partner}
          alt="Affiliate Partner"
          className="max-w-md mx-auto"
          variants={fadeInUp}
        />
      </div>
    </motion.section>
  );
};

export default AffiliatePartner;
