import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const Contact = () => {
  return (
    <motion.div
      className="container mx-auto py-20 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-4"
        variants={fadeInUp}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 text-center mb-12"
        variants={fadeInUp}
      >
        Have questions? We're here to help!
      </motion.p>

      {/* Contact Info Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        variants={staggerContainer}
      >
        <motion.div
          className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          variants={fadeInUp}
        >
          <Mail className="mx-auto mb-4 text-primary w-10 h-10" />
          <h3 className="text-2xl font-bold mb-2">Email</h3>
          <p className="text-lg text-gray-700">support@etuitionbd.com</p>
        </motion.div>

        <motion.div
          className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          variants={fadeInUp}
        >
          <Phone className="mx-auto mb-4 text-primary w-10 h-10" />
          <h3 className="text-2xl font-bold mb-2">Phone</h3>
          <p className="text-lg text-gray-700">+880 1234-567890</p>
        </motion.div>

        <motion.div
          className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          variants={fadeInUp}
        >
          <MapPin className="mx-auto mb-4 text-primary w-10 h-10" />
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <p className="text-lg text-gray-500">Dhaka, Bangladesh</p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-3xl mx-auto p-10 rounded-2xl shadow-lg"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Send us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500  text-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
             className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500  text-gray-400"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500  text-gray-400"
            required
          />
          <textarea
            placeholder="Message"
            className="textarea w-full border-primary focus:outline-cyan-500  text-gray-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
