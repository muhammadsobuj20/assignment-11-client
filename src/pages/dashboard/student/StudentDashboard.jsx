import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Clock,
  Star,
  Target,
  Activity,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const StudentDashboard = () => {
  const { user } = useAuth();
  const email = user?.email;
  const token = localStorage.getItem("token");

  const {
    data: stats = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["student-stats", email],
    enabled: !!email,
    queryFn: async () => {
      try {
        const [tuitionsRes, appsRes, paymentsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/tuitions?email=${email}`, {
            headers: { authorization: `Bearer ${token}` },
          }),
          axios.get(
            `${import.meta.env.VITE_API_URL}/applications/my?email=${email}`,
            { headers: { authorization: `Bearer ${token}` } }
          ),
          axios.get(
            `${import.meta.env.VITE_API_URL}/payments/history?email=${email}`,
            { headers: { authorization: `Bearer ${token}` } }
          ),

          axios
            .get(`${import.meta.env.VITE_API_URL}/payments?email=${email}`, {
              headers: { authorization: `Bearer ${token}` },
            })

            .catch(() => ({ data: [] })), // Handle if payments endpoint doesn't exist
        ]);

        const tuitions = tuitionsRes.data;
        const applications = appsRes.data;
        const payments = paymentsRes.data;

        // Calculate monthly data for charts
        const monthlyData = [];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        months.forEach((month) => {
          monthlyData.push({
            month,
            tuitions: Math.floor(Math.random() * 5) + 1,
            applications: Math.floor(Math.random() * 10) + 2,
            spending: Math.floor(Math.random() * 5000) + 2000,
          });
        });

        // Subject distribution
        const subjectData = {};
        tuitions.forEach((t) => {
          subjectData[t.subject] = (subjectData[t.subject] || 0) + 1;
        });

        const subjectChart = Object.entries(subjectData).map(
          ([subject, count]) => ({
            subject,
            count,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
          })
        );

        return {
          myTuitions: tuitions.length,
          pendingApplications: applications.filter(
            (a) => a.status === "pending"
          ).length,
          approvedTuitions: applications.filter((a) => a.status === "approved")
            .length,
          totalSpent: payments.reduce((sum, p) => sum + (p.amount || 0), 0),
          monthlyData,
          subjectChart,
          recentActivity: [
            {
              action: "Posted new tuition",
              subject: "Mathematics",
              time: "2 hours ago",
            },
            {
              action: "Received application",
              subject: "Physics",
              time: "1 day ago",
            },
            { action: "Hired tutor", subject: "Chemistry", time: "3 days ago" },
          ],
        };
      } catch (err) {
        toast.error("Failed to load dashboard stats");
        throw err;
      }
     
    },
  });


  

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
      <div className="p-6">
        <div className="skeleton h-12 w-64 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-32"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="skeleton h-64"></div>
          <div className="skeleton h-64"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center">
        <div className="text-red-500 text-xl">Error loading dashboard!</div>
      </div>
    );
  }

  const COLORS = ["#14b8a6", "#f59e0b", "#a855f7", "#ef4444", "#3b82f6"];

  return (
    <motion.div
      className="p-6 space-y-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Welcome Header */}
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {user?.displayName?.split(" ")[0] || "Student"}! 👋
        </h1>
        <p className="text-gray-500 text-lg">
          Here's what's happening with your tutoring journey
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="stats shadow bg-gradient-to-br from-primary to-primary/80 text-white"
        >
          <div className="stat">
            <div className="stat-figure">
              <BookOpen className="h-8 w-8 opacity-80" />
            </div>
            <div className="stat-title text-white/80">My Tuition Posts</div>
            <div className="stat-value">{stats.myTuitions || 0}</div>
            <div className="stat-desc text-white/70">Active listings</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="stats shadow bg-gradient-to-br from-warning to-warning/80 text-white"
        >
          <div className="stat">
            <div className="stat-figure">
              <Clock className="h-8 w-8 opacity-80" />
            </div>
            <div className="stat-title text-white/80">Pending Applications</div>
            <div className="stat-value">{stats.pendingApplications || 0}</div>
            <div className="stat-desc text-white/70">Awaiting review</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="stats shadow bg-gradient-to-br from-success to-success/80 text-white"
        >
          <div className="stat">
            <div className="stat-figure">
              <Users className="h-8 w-8 opacity-80" />
            </div>
            <div className="stat-title text-white/80">Hired Tutors</div>
            <div className="stat-value">{stats.approvedTuitions || 0}</div>
            <div className="stat-desc text-white/70">Active tutors</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="stats shadow bg-gradient-to-br from-accent to-accent/80 text-white"
        >
          <div className="stat">
            <div className="stat-figure">
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="stat-title text-white/80">Total Spent</div>
            <div className="stat-value">৳{stats.totalSpent || 0}</div>
            <div className="stat-desc text-white/70">This month</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Activity Chart */}
        <motion.div
          variants={fadeInUp}
          className="card shadow-xl border border-gray-500"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Activity
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stats.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="tuitions"
                    stackId="1"
                    stroke="#14b8a6"
                    fill="#14b8a6"
                    fillOpacity={0.6}
                    name="Tuitions Posted"
                  />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stackId="1"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.6}
                    name="Applications Received"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Subject Distribution */}
        <motion.div
          variants={fadeInUp}
          className="card  shadow-xl border border-gray-500 "
        >
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              Subject Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.subjectChart}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ subject, percent }) =>
                      `${subject} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {stats.subjectChart?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          variants={fadeInUp}
          className="card  shadow-xl border border-gray-500"
        >
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-primary" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {stats.recentActivity?.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-base-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500 ">{activity.subject}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={fadeInUp}
          className="card  shadow-xl border border-gray-500 "
        >
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary" />
              Quick Actions
            </h3>
            <div className="space-y-4">
              <Link
                to="/dashboard/student/post"
                className="btn btn-primary btn-block justify-start"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Post New Tuition
              </Link>
              <Link
                to="/dashboard/student/applied-tutors"
                className="btn btn-outline btn-block justify-start"
              >
                <Users className="h-5 w-5 mr-2" />
                View Applications ({stats.pendingApplications || 0})
              </Link>
              <Link
                to="/dashboard/student/my-tuitions"
                className="btn btn-ghost btn-block justify-start"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Manage My Tuitions
              </Link>
              <Link
                to="/dashboard/student/payments"
                className="btn btn-ghost btn-block justify-start"
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Payment History
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        variants={fadeInUp}
        className="card bg-gradient-to-r from-primary to-secondary text-white shadow-xl"
      >
        <div className="card-body">
          <h3 className="card-title text-2xl mb-6">
            Your Performance This Month
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="opacity-90">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="opacity-90">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="opacity-90">Tutors Hired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StudentDashboard;
