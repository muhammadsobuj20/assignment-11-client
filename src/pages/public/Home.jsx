import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Star,
  MapPin,
  DollarSign,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// Import existing components
import Coverage from "../../components/shared/Coverage";
import hero from "../../assets/hero.svg";
import AffiliatePartner from "../../components/home/AffiliatePartner";
import FeaturedOn from "../../components/home/FeaturedOn";
import ConnectionSteps from "../../components/home/ConnectionSteps";
// import PlatformStats from "../../components/home/PlatformStats";
// import FeaturedTuitions from "../../components/home/FeaturedTuitions";
import { fadeInUp, staggerContainer } from "../../animations/motionVariants";
import HowItWorks from "../../components/home/HowItWorks";
import KeyFeatures from "../../components/home/KeyFeatures";
import CallToAction from "../../components/home/CTASection";
import Subjects from "../../components/home/Subjects";
import SuccessStories from "../../components/home/SuccessStories";
import Newsletter from "../../components/home/Newsletter";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  const { data: tuitions = [] } = useQuery({
    queryKey: ["latest-tuitions"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions?limit=8&sort=latest`
      );
      return res.data.tuitions;
    },
  });

  const { data: stats = {} } = useQuery({
    queryKey: ["platform-stats"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/stats`);
      return res.data;
    },
  });

  fadeInUp;
  staggerContainer;

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Interactive with CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero min-h-[70vh] bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="hero-content text-center flex-col lg:flex-row gap-12 relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Find Your Perfect
              <span className="text-accent-300"> Tutor</span> in Minutes
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Connect with verified tutors • Secure payments • Real-time
              communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tuitions"
                className="btn btn-accent btn-lg text-white hover:scale-105 transition-transform"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Tuitions
              </Link>
              <Link
                to="/signup?role=tutor"
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
              >
                <Users className="h-5 w-5 mr-2" />
                Become a Tutor
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img src={hero} alt="Hero" className="max-w-md lg:max-w-lg" />
            <motion.div
              className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Platform Statistics */}
      <motion.section
        className="py-16 bg-base-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Active Tutors",
                value: stats.tutors || "500+",
                icon: Users,
              },
              {
                label: "Students Helped",
                value: stats.students || "2000+",
                icon: BookOpen,
              },
              { label: "Success Rate", value: "98%", icon: TrendingUp },
              { label: "Avg. Rating", value: "4.9/5", icon: Star },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary transition-shadow"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 ">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* <PlatformStats/> */}

      {/* 3. Featured Tuitions */}
      <motion.section
        className="py-20 bg-base-200"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                      <DollarSign className="h-4 w-4 mr-2" />৳{tuition.budget}
                      /month
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
      {/* <FeaturedTuitions/> */}

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Key Features */}
      <KeyFeatures />

      {/* 6. Subject Categories */}
      <Subjects />

      {/* 7. Success Stories */}
      <SuccessStories />

      {/* 8. Call to Action */}
      <CallToAction />

      {/* 9. Newsletter Signup */}
      <Newsletter />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* Existing Components */}
      <FeaturedOn />
      <AffiliatePartner />
      <ConnectionSteps />
      <Coverage />
    </div>
  );
};

export default Home;
