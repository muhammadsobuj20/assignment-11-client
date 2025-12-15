
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const AppliedTutors = () => {
  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["applied-tutors"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/applications/my-tuitions`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data;
    },
  });

  // Mutation for approving and creating payment
  const approveMutation = useMutation({
    mutationFn: async (applicationId) => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        {
          applicationId,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data; // { sessionId: "cs_test_..." }
    },
    onSuccess: async (data) => {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        toast.error(error.message);
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Payment failed!");
    },
  });

  const handleApprove = (application) => {
    toast.promise(approveMutation.mutateAsync(application._id), {
      loading: "Redirecting to payment...",
      success: "Redirecting to Stripe...",
      error: "Failed to create payment session",
    });
  };

  if (isLoading) {
    return <div className="text-center py-10"><LoadingSpinner/></div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Tutor Applications ({applications.length})
      </h2>

      {applications.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No tutor has applied yet.
        </div>
      ) : (
        <div className="grid gap-6 max-w-5xl mx-auto">
          {applications.map((app) => (
            <div
              key={app._id}
              className="card bg-base-100 shadow-xl border border-base-300"
            >
              <div className="card-body">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={app.tutorPhoto || "/default-avatar.png"}
                            alt={app.tutorName}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{app.tutorName}</h3>
                        <p className="text-sm text-gray-500">
                          Applied for: {app.tuitionTitle}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <p>
                        <strong>Qualification:</strong> {app.qualifications}
                      </p>
                      <p>
                        <strong>Experience:</strong> {app.experience} years
                      </p>
                      <p>
                        <strong>Expected Salary:</strong>{" "}
                        <span className="text-primary font-bold">
                          ৳{app.expectedSalary}
                        </span>
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        <span
                          className={`badge ${
                            app.status === "approved"
                              ? "badge-success"
                              : app.status === "rejected"
                              ? "badge-error"
                              : "badge-warning"
                          }`}
                        >
                          {app.status}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    {app.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(app)}
                          disabled={approveMutation.isLoading}
                          className="btn btn-success btn-md"
                        >
                          {approveMutation.isLoading ? (
                            <span className="loading loading-spinner"></span>
                          ) : (
                            "Approve & Pay Now"
                          )}
                        </button>
                        <button
                          // onClick={() => handleReject(app._id)}
                          className="btn btn-error btn-outline btn-md"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {app.status === "approved" && (
                      <div className="text-center">
                        <span className="badge badge-success badge-lg">
                          Paid & Approved
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedTutors;
