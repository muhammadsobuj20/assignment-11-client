// src/pages/public/Tuitions.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Tuitions = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    class: "",
    subject: "",
    sort: "latest",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["tuitions", page, filters],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tuitions`, {
        params: { page, limit: 9, ...filters },
      });
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">All Tuition Posts</h1>

      {/* Filters */}
      <div className="bg-base-200 p-6 rounded-xl mb-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Search by subject/location..."
            className="input input-bordered"
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered"
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <input
            type="text"
            placeholder="Class (e.g., 10)"
            className="input input-bordered"
            onChange={(e) => setFilters({ ...filters, class: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered"
            onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
          />
          <select
            className="select select-bordered"
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Tuition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.tuitions?.map((t) => (
          <div key={t._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <div className="card-body">
              <h2 className="card-title text-primary">{t.subject}</h2>
              <p><strong>Class:</strong> {t.class}</p>
              <p><strong>Location:</strong> {t.location}</p>
              <p><strong>Salary:</strong> ৳{t.budget}/month</p>
              <p><strong>Days/Week:</strong> {t.daysPerWeek || "Flexible"}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/tuition/${t._id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="join flex justify-center mt-12">
        {Array.from({ length: Math.ceil((data?.total || 0) / 9) }, (_, i) => (
          <button
            key={i}
            className={`join-item btn ${page === i + 1 ? "btn-active" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tuitions;