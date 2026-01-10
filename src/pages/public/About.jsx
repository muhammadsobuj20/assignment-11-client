import React from "react";
import { Link } from "react-router-dom";
import { Users, BookOpen, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary/80 to-secondary/80 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            About eTuitionBD
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-lg opacity-90 mb-8"
            variants={fadeInUp}
          >
            eTuitionBD connects learners with trusted, verified tutors across
            Bangladesh. We provide a secure, transparent, and effective way to
            find the right tutor for every student — from primary school to
            university level.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link to="/tuitions" className="btn btn-accent">
              Browse Tuitions
            </Link>
            <Link
              to="/signup?role=tutor"
              className="btn btn-outline text-white border-white"
            >
              Become a Tutor
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-primary mb-4" />,
              title: "Our Community",
              desc: "We support a growing network of tutors and students focused on quality learning and measurable outcomes.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-primary mb-4" />,
              title: "Our Approach",
              desc: "Tutors are carefully vetted, and every tuition post includes clear expectations, budgets, and schedules so matches are more successful.",
            },
            {
              icon: <Shield className="h-8 w-8 text-primary mb-4" />,
              title: "Security & Trust",
              desc: "Secure payments and privacy protections give both students and tutors confidence to collaborate.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className=" p-8 rounded-xl shadow-md border-2 border-primary hover:shadow-xl transition"
              variants={fadeInUp}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 bg-base-200"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
          <p className="text-gray-500  max-w-3xl">
            Our mission is to make quality education accessible by connecting
            passionate tutors with motivated learners. We envision a platform
            where every student can reach their academic goals through reliable
            and affordable tutoring.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6">Contact & Careers</h2>
        <p className="text-gray-500  mb-4">
          For press, partnerships, or career inquiries, email us at{" "}
          <a
            href="mailto:careers@etuitionbd.com"
            className="text-primary font-medium"
          >
            careers@etuitionbd.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+8801712345678" className="text-primary font-medium">
            +880 1712 345678
          </a>
          .
        </p>
        <div className="mt-6">
          <Link to="/contact" className="btn btn-outline border-2 border-primary">
            Contact Support
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-base-100">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} eTuitionBD — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
