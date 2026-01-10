import React from "react";
import { motion } from "framer-motion";

const tutorsData = [
  {
    name: "John Doe",
    subjects: "Math, Physics, Chemistry",
    experience: "5+ years experience",
    rating: 5,
    photoURL: "",
  },
  {
    name: "Jane Smith",
    subjects: "English, History",
    experience: "4+ years experience",
    rating: 4,
    photoURL: "",
  },
  {
    name: "Michael Lee",
    subjects: "Biology, Chemistry",
    experience: "6+ years experience",
    rating: 5,
    photoURL: "",
  },
  {
    name: "Sara Khan",
    subjects: "Math, ICT",
    experience: "3+ years experience",
    rating: 4,
    photoURL: "",
  },
  {
    name: "Ali Rahman",
    subjects: "Economics, Accounting",
    experience: "7+ years experience",
    rating: 5,
    photoURL: "",
  },
  {
    name: "Fatima Noor",
    subjects: "English, Bangla",
    experience: "5+ years experience",
    rating: 5,
    photoURL: "",
  },
];

// Framer-motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const Tutors = () => {
  return (
    <motion.div
      className="container mx-auto py-20 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        variants={fadeInUp}
      >
        Our Verified Tutors
      </motion.h1>
      <motion.p
        className="text-center text-xl text-gray-500 mb-16"
        variants={fadeInUp}
      >
        Browse top tutors by subject and location.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutorsData.map((tutor, i) => (
          <motion.div
            key={i}
            className="rounded-2xl shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl hover:shadow-primary"
            variants={fadeInUp}
          >
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2 mb-4">
              {tutor.photoURL ? (
                <img
                  src={tutor.photoURL}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-2xl text-gray-400 font-bold">
                  {tutor.name.charAt(0)}
                </div>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-1">{tutor.name}</h3>
            <p className="text-gray-600 mb-1">{tutor.subjects}</p>
            <p className="text-gray-400 text-sm mb-2">{tutor.experience}</p>

            {/* Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={`w-5 h-5 ${
                    idx < tutor.rating ? "text-orange-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.068 9.384c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tutors;
