import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, BookOpen, MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";

const FeaturedTuitions = ({ tuitions = [], fadeInUp, staggerContainer }) => {
  return (
    <motion.section
      className="py-20 bg-base-200"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="text-cyan-500">Tuitions</span> Posts
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect tutoring opportunity
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {tuitions.slice(0, 8).map((tuition) => (
            <motion.div
              key={tuition._id}
              variants={fadeInUp}
              className="card bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
            >
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="badge badge-primary">{tuition.subject}</div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>

                <h3 className="card-title text-lg mb-2">
                  {tuition.subject} Tutor Needed
                </h3>

                <div className="space-y-2 text-sm text-gray-600 ">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Class: {tuition.class}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tuition.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />৳{tuition.budget}/month
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {tuition.schedule || "Flexible"}
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/tuition/${tuition._id}`}
                    className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link
            to="/tuitions"
            className="btn btn-outline border-2 border-primary btn-lg"
          >
            View All Tuitions
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedTuitions;
