import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosSecure from "../../lib/api";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => setInfo(res.data))
        .catch(console.error);
    }
  }, [sessionId]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-green-600">
        Payment Successful ✅
      </h2>
      <p className="mt-4">Transaction ID: {info.transactionId}</p>
      <p>Tracking ID: {info.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
