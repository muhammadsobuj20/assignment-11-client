import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Newsletter = () => {
  return (
    <motion.section
      className="py-16 bg-base-200"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg text-gray-500 mb-8">
            Get the latest tuition posts and educational tips
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
             className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
            />
            <button className="btn btn-primary flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
