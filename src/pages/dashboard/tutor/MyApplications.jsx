
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PaymentHistory = () => {
  const { data: payments = [] } = useQuery({
    queryKey: ["student-payments"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/payments/my`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Payment History</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Tutor</th>
              <th>Subject</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.transactionId}>
                <td>{p.tutorEmail || "N/A"}</td>
                <td>{p.tuition?.subject || "N/A"}</td>
                <td>৳{p.amount}</td>
                <td><span className="badge badge-success">Paid</span></td>
                <td>{new Date(p.paidAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;