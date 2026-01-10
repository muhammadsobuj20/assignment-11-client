import React from "react";
import { motion } from "framer-motion";
import { Shield, DollarSign, MessageCircle, CheckCircle } from "lucide-react"; // or your preferred icon library

// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const KeyFeatures = () => {
  const features = [
    {
      title: "Verified Tutors",
      desc: "All tutors are background checked",
      icon: Shield,
      color: "bg-cyan-500",
    },
    {
      title: "Secure Payment",
      desc: "Safe and encrypted transactions",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "24/7 Support",
      desc: "Round the clock customer service",
      icon: MessageCircle,
      color: "bg-purple-500",
    },
    {
      title: "Quality Guarantee",
      desc: "100% satisfaction or money back",
      icon: CheckCircle,
      color: "bg-yellow-400",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-base-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Why <span className="text-cyan-500">Choose</span> eTuition
            <span className="text-cyan-500">BD</span>?
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto">
            The most trusted tutoring platform in Bangladesh
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="relative p-8 rounded-2xl shadow-lg hover:shadow-primary hover:shadow-2xl transition-all duration-300 text-center"
            >
              {/* Feature Icon */}
              <div
                className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Feature Title & Description */}
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyFeatures;
