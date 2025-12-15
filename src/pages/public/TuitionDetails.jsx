import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const TuitionDetails = () => {
  const { id } = useParams();
  const [tuition, setTuition] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const studentEmail = localStorage.getItem("email");
  const token = localStorage.getItem("access-token");

  // Load Tuition Details

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/tuitions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTuition(res.data))
      .catch(() => toast.error("Unauthorized or Not Found"));
  }, [id, token]);

  // Generate Client Secret

  const generatePayment = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-payment-intent`,
        {
          price: tuition.budget,
          studentEmail,
          tutorEmail: tuition.tutorEmail,
          tuitionId: tuition._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setClientSecret(res.data.clientSecret);
    } catch (err) {
      toast.error("Failed to initialize payment");
      console.log(err);
    }
  };

  // Confirm Payment

  const handlePay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            name: "Student Payment",
            email: studentEmail,
          },
        },
      }
    );

    if (error) return toast.error(error.message);

    // Save in database
    await axios.post(
      `${import.meta.env.VITE_API_URL}/payments`,
      {
        transactionId: paymentIntent.id,
        studentEmail,
        tutorEmail: tuition.tutorEmail,
        tuitionId: tuition._id,
        amount: tuition.budget,
        paidAt: new Date(),
        status: "paid",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Payment successful!");
  };

  if (!tuition) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {tuition.subject} - Class {tuition.class}
      </h2>
      <p>Location: {tuition.location}</p>
      <p>Budget: ৳{tuition.budget}</p>
      <p>Status: {tuition.status}</p>

      {tuition.status !== "paid" && (
        <>
          {!clientSecret ? (
            <button className="btn btn-primary mt-4" onClick={generatePayment}>
              Pay Now
            </button>
          ) : (
            <form onSubmit={handlePay} className="mt-4">
              <CardElement className="border p-2 rounded mb-4" />
              <button type="submit" className="btn btn-success w-full">
                Pay ৳{tuition.budget}
              </button>
            </form>
          )}
        </>
      )}

      {tuition.status === "paid" && (
        <p className="text-green-600 font-bold mt-4">Payment completed ✅</p>
      )}
    </div>
  );
};

export default TuitionDetails;
