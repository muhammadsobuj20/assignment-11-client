import React from "react";
import { motion } from "framer-motion";
import { UserPlus, FileText, FileCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={24} />,
    title: "Create Profile",
    desc: "Create a profile to get more learning benefits from website.",
  },
  {
    icon: <FileText size={24} />,
    title: "Submit Requirements",
    desc: "Fill up expected tutor requirements & submit the request.",
  },
  {
    icon: <FileCheck size={24} />,
    title: "Get Tutors' CV",
    desc: "On requirements, we will provide some expert tutors' CVs.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Select Your Tutor",
    desc: "Evaluate tutors & start learning with your favorite one.",
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

const ConnectionSteps = () => {
  return (
    <motion.section
      className="py-20 bg-base-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-14"
        variants={fadeInUp}
      >
        The ways <span className="text-cyan-500">Parents/Students</span> can connect with us.
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4"
        variants={staggerContainer}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border-2 border-cyan-200 p-6 text-center space-y-4 cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-primary"
          >
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-cyan-500 text-white">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ConnectionSteps;
