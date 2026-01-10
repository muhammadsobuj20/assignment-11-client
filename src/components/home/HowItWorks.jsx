import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award } from "lucide-react"; // or any icon library you use

// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Post Your Requirement",
      desc: "Tell us what subject and class you need help with",
      icon: BookOpen,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      step: 2,
      title: "Connect with Tutors",
      desc: "Qualified tutors will apply to your post",
      icon: Users,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      step: 3,
      title: "Start Learning",
      desc: "Choose your tutor and begin your learning journey",
      icon: Award,
      color: "bg-gradient-to-br from-green-400 to-teal-500",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-b "
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            How It <span className="text-cyan-500">Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto">
            Get started in 3 simple steps and kickstart your learning journey
            with ease.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerContainer}
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative p-10 rounded-3xl shadow-xl hover:shadow-primary hover:shadow-2xl transition-all duration-300 text-center"
            >
              {/* Step Icon */}
              <div
                className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <item.icon className="h-10 w-10 text-white" />
              </div>

              {/* Step Number */}
              <div className="absolute -top-5 -right-5 bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary shadow-md">
                {item.step}
              </div>

              {/* Step Title & Description */}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
