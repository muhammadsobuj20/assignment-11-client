import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../lib/api";

const Payment = () => {
  const { tuitionId } = useParams();

  const { isLoading, data: tuition } = useQuery({
    queryKey: ["tuition", tuitionId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tuitions/${tuitionId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    if (!tuition) return;

    const paymentInfo = {
      tuitionId: tuition._id,
      cost: tuition.salary || tuition.cost || 0,
      parcelName: tuition.subject,
      senderEmail: tuition.studentEmail,
    };

    const res = await axiosSecure.post(
      "/create-checkout-session",
      paymentInfo
    );

    window.location.href = res.data.url;
  };

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Pay ${tuition.salary || tuition.cost}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
