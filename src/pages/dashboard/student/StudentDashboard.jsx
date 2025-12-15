import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import toast from "react-hot-toast";

const StudentDashboard = () => {
  const { user } = useAuth();
  const email = user?.email;
  const token = localStorage.getItem("token");

  const { data: stats = {}, isLoading, isError } = useQuery({
    queryKey: ["student-stats", email],
    enabled: !!email, // wait for user email to exist
    queryFn: async () => {
      try {
        const [tuitionsRes, appsRes] = await Promise.all([
          axios.get(
            `${import.meta.env.VITE_API_URL}/tuitions?email=${email}`,
            { headers: { authorization: `Bearer ${token}` } }
          ),
          axios.get(
            `${import.meta.env.VITE_API_URL}/applications/my?email=${email}`,
            { headers: { authorization: `Bearer ${token}` } }
          ),
        ]);

        return {
          myTuitions: tuitionsRes.data.length,
          pendingApplications: appsRes.data.filter((a) => a.status === "pending").length,
          approvedTuitions: appsRes.data.filter((a) => a.status === "approved").length,
        };

      } catch (err) {
        toast.error("Failed to load dashboard stats");
        throw err;
      }
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading dashboard...</p>;
  if (isError) return <p className="text-red-500 text-center">Error loading dashboard!</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-2">
        Welcome back, {user?.displayName || "Student"}!
      </h1>
      <p className="text-gray-600 mb-8">
        Manage your tuition posts and hire the best tutors
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="stats shadow bg-primary text-white">
          <div className="stat">
            <div className="stat-title">My Tuition Posts</div>
            <div className="stat-value">{stats.myTuitions || 0}</div>
          </div>
        </div>

        <div className="stats shadow bg-warning text-white">
          <div className="stat">
            <div className="stat-title">Pending Applications</div>
            <div className="stat-value">{stats.pendingApplications || 0}</div>
          </div>
        </div>

        <div className="stats shadow bg-success text-white">
          <div className="stat">
            <div className="stat-title">Hired Tutors</div>
            <div className="stat-value">{stats.approvedTuitions || 0}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/dashboard/student/post" className="btn btn-primary btn-lg">
          Post New Tuition
        </Link>
        <Link to="/dashboard/student/applied-tutors" className="btn btn-outline btn-lg">
          View Tutor Applications
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
