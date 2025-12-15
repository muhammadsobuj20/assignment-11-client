
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AdminDashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [users, tuitions, payments] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/users`, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        axios.get(`${import.meta.env.VITE_API_URL}/admin/tuitions`, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        axios.get(`${import.meta.env.VITE_API_URL}/admin/reports`, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
      ]);
      return {
        totalUsers: users.data.length,
        pendingTuitions: tuitions.data.filter((t) => t.status === "pending")
          .length,
        totalEarnings: payments.data.totalEarnings || 0,
      };
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow bg-error text-white">
          <div className="stat">
            <div className="stat-title">Pending Tuitions</div>
            <div className="stat-value">{stats?.pendingTuitions || 0}</div>
          </div>
        </div>
        <div className="stats shadow bg-primary text-white">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{stats?.totalUsers || 0}</div>
          </div>
        </div>
        <div className="stats shadow bg-success text-white">
          <div className="stat">
            <div className="stat-title">Platform Earnings</div>
            <div className="stat-value">৳{stats?.totalEarnings || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
