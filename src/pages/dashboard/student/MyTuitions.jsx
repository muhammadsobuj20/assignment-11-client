
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyTuitions = () => {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  const {
    data: tuitions = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-tuitions", email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions?email=${email}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    if (!confirm("Sure to delete?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Tuition deleted successfully!");
      refetch();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete!");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center">Failed to load data!</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Tuition Posts</h2>
      {tuitions.length === 0 ? (
        <p>No tuition posts found!</p>
      ) : (
        <div className="grid gap-6">
          {tuitions.map((t) => (
            <div key={t._id} className="card bg-base-100 shadow-xl">
              <div className="card-body flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">
                    {t.subject} - Class {t.class}
                  </h3>
                  <p>
                    Location: {t.location} | Budget: ৳{t.budget}
                  </p>
                  <span
                    className={`badge ${
                      t.status === "approved"
                        ? "badge-success"
                        : t.status === "rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {t.status.toUpperCase()}
                  </span>
                </div>
                <div className="space-x-2">
                  <Link
                    to={`/tuition/${t._id}`}
                    className="btn btn-sm btn-info"
                  >
                    View
                  </Link>
                  <Link
                    to={`/dashboard/student/post?id=${t._id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTuitions;
