
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RevenueHistory = () => {
  const { data: payments = [] } = useQuery({
    queryKey: ["tutor-revenue"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/payments/my`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return res.data;
    },
  });

  const totalEarnings = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Revenue History</h2>

      <div className="stats shadow mb-8">
        <div className="stat">
          <div className="stat-title">Total Earnings</div>
          <div className="stat-value text-success">৳{totalEarnings}</div>
          <div className="stat-desc">From {payments.length} tuitions</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.transactionId}>
                <td>{p.studentEmail}</td>
                <td>{p.tuition?.subject || "N/A"}</td>
                <td className="text-success font-bold">৳{p.amount}</td>
                <td>{new Date(p.paidAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueHistory;
