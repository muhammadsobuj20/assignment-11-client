import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const FAQ = () => {
  const faqs = [
    {
      q: "How do I find a qualified tutor?",
      a: "Browse our verified tutor profiles, read reviews, and contact tutors directly.",
    },
    {
      q: "Is payment secure?",
      a: "Yes, we use industry-standard encryption and secure payment gateways.",
    },
    {
      q: "Can I get a refund?",
      a: "We offer a satisfaction guarantee. Contact support if you're not happy.",
    },
    {
      q: "How are tutors verified?",
      a: "All tutors go through background checks and qualification verification.",
    },
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
            Frequently <span className="text-cyan-500">Asked</span> Questions
          </h2>
          <p className="text-xl text-gray-500">Everything you need to know</p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div variants={staggerContainer} className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="collapse collapse-plus shadow-primary shadow-md mb-4"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">{faq.q}</div>
              <div className="collapse-content">
                <p className="text-gray-500">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
