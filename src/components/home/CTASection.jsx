import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CallToAction = () => {
  return (
    <motion.section
      className="py-28 bg-gradient-to-r from-secondary to-accent text-white relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-white opacity-10 rounded-full filter blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Ready to <span className="text-yellow-300">Start Learning?</span>
          </h2>
          <p className="text-lg lg:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who found their perfect tutor and
            elevate your learning experience today!
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link
              to="/tuitions"
              className="flex items-center justify-center btn bg-white text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Find a Tutor Now
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center btn border-2 border-white text-gray-500 px-8 py-4 rounded-xl hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Join as Student
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
