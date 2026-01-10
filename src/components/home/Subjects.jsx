import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const Subjects = () => {
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Bangla",
    "Economics",
    "Accounting",
    "ICT",
    "Statistics",
    "Geography",
    "History",
  ];

  return (
    <motion.section
      className="py-20 bg-base-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Popular <span className="text-cyan-500">Subjects</span>
          </h2>
          <p className="text-xl text-gray-500">Find tutors for any subject</p>
        </motion.div>

        {/* Subjects Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={staggerContainer}
        >
          {subjects.map((subject) => (
            <motion.div
              key={subject}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-md hover:shadow-primary text-center cursor-pointer hover:shadow-lg transition-all"
            >
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold">{subject}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Subjects;
