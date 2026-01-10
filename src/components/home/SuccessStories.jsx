import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const SuccessStories = () => {
  const stories = [
    {
      name: "Rashida Ahmed",
      grade: "A+",
      subject: "Mathematics",
      improvement: "From D to A+ in 3 months",
    },
    {
      name: "Karim Hassan",
      grade: "A",
      subject: "Physics",
      improvement: "Improved by 40% in final exam",
    },
    {
      name: "Fatima Khan",
      grade: "A+",
      subject: "Chemistry",
      improvement: "Perfect score in board exam",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-primary text-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl opacity-90">Real results from real students</p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {stories.map((story, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl cursor-pointer hover:shadow-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-6xl font-bold text-accent-300 mb-4">
                {story.grade}
              </div>
              <h4 className="text-xl font-semibold mb-2">{story.name}</h4>
              <p className="text-lg mb-2">{story.subject}</p>
              <p className="opacity-90">{story.improvement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;
