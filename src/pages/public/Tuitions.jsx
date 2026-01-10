import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  BookOpen,
  DollarSign,
  Clock,
  Star,
  Calendar,
  Users,
  Grid3X3,
  List,
  SlidersHorizontal,
  ArrowUpDown,
  ChevronDown,
  X,
} from "lucide-react";

const Tuitions = () => {
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); 
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    class: "",
    subject: "",
    minBudget: "",
    maxBudget: "",
    sort: "latest",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["tuitions", page, filters],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tuitions`, {
        params: { page, limit: 12, ...filters },
      });
      return res.data;
    },
  });

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Bangla",
    "Economics",
    "Accounting",
    "ICT",
    "Statistics",
    "Geography",
    "History",
  ];

  const classes = ["6", "7", "8", "9", "10", "11", "12", "Honors", "Masters"];

  const locations = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Gazipur",
  ];

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      class: "",
      subject: "",
      minBudget: "",
      maxBudget: "",
      sort: "latest",
    });
    setPage(1);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto py-10 px-4">
          <div className="text-center mb-8">
            <div className="skeleton h-12 w-64 mx-auto mb-4"></div>
            <div className="skeleton h-4 w-96 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="skeleton h-6 w-full mb-4"></div>
                  <div className="skeleton h-4 w-3/4 mb-2"></div>
                  <div className="skeleton h-4 w-1/2 mb-2"></div>
                  <div className="skeleton h-4 w-2/3 mb-4"></div>
                  <div className="skeleton h-8 w-24 ml-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Failed to load tuitions. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-primary to-secondary text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Find Your Perfect Tutor
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Browse {data?.total || 0} available tuition opportunities
            </p>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute  left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search by subject, location, or class..."
                className="input input-bordered w-full pl-12 py-4 text-lg text-gray-500"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto py-10 px-4">
        {/* Filter Bar */}
        <motion.div
          className=" p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-primary-700"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Filter Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-outline btn-sm flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm  dark:text-gray-500">
                  {data?.total || 0} tuitions found
                </span>
                {Object.values(filters).some((v) => v && v !== "latest") && (
                  <button
                    onClick={clearFilters}
                    className="btn btn-ghost btn-xs text-error"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                className="select select-bordered select-sm"
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="budget-high">Highest Budget</option>
                <option value="budget-low">Lowest Budget</option>
              </select>

              {/* View Mode */}
              <div className="join">
                <button
                  className={`join-item btn btn-sm ${
                    viewMode === "grid" ? "btn-active" : "btn-outline"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  className={`join-item btn btn-sm ${
                    viewMode === "list" ? "btn-active" : "btn-outline"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div>
                <label className="label label-text">Location</label>
                <select
                  className="select select-bordered w-full"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label label-text">Class</label>
                <select
                  className="select select-bordered w-full"
                  value={filters.class}
                  onChange={(e) =>
                    setFilters({ ...filters, class: e.target.value })
                  }
                >
                  <option value="">All Classes</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>
                      Class {cls}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label label-text">Subject</label>
                <select
                  className="select select-bordered w-full"
                  value={filters.subject}
                  onChange={(e) =>
                    setFilters({ ...filters, subject: e.target.value })
                  }
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label label-text">Budget Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="input input-bordered w-full"
                    value={filters.minBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, minBudget: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="input input-bordered w-full"
                    value={filters.maxBudget}
                    onChange={(e) =>
                      setFilters({ ...filters, maxBudget: e.target.value })
                    }
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results */}
        {data?.tuitions?.length === 0 ? (
          <motion.div
            className="text-center py-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
              No tuitions found
            </h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search criteria
            </p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === "grid" && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {data?.tuitions?.map((tuition) => (
                  <motion.div
                    key={tuition._id}
                    variants={fadeInUp}
                    className="card shadow-lg text-gray-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="card-body p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="badge badge-primary">
                          {tuition.subject}
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm ml-1">4.8</span>
                        </div>
                      </div>

                      <h3 className="card-title text-lg mb-3">
                        {tuition.subject} Tutor Needed
                      </h3>

                      <div className="space-y-2 text-sm text-gray-400 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-primary" />
                          Class: {tuition.class}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {tuition.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 text-primary" />৳
                          {tuition.budget}/month
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {tuition.daysPerWeek || "Flexible"} days/week
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {new Date(tuition.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="card-actions justify-end">
                        <Link
                          to={`/tuition/${tuition._id}`}
                          className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {data?.tuitions?.map((tuition) => (
                  <motion.div
                    key={tuition._id}
                    variants={fadeInUp}
                    className="card dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="card-body p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="badge badge-primary">
                              {tuition.subject}
                            </div>
                            <div className="flex items-center text-yellow-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm ml-1">4.8</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-3">
                            {tuition.subject} Tutor Needed
                          </h3>

                          <div className="grid grid-cols-2 lg:grid-cols-5  gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Class: {tuition.class}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              {tuition.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2 text-primary" />
                              ৳{tuition.budget}/month
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              {tuition.daysPerWeek || "Flexible"} days/week
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              {new Date(tuition.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <Link
                            to={`/tuition/${tuition._id}`}
                            className="btn btn-primary hover:scale-105 transition-transform"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Pagination */}
            <motion.div
              className="flex justify-center mt-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="join">
                {Array.from(
                  { length: Math.ceil((data?.total || 0) / 12) },
                  (_, i) => (
                    <button
                      key={i}
                      className={`join-item btn ${
                        page === i + 1 ? "btn-active" : ""
                      }`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tuitions;
