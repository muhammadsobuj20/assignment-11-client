import { Link } from "react-router-dom";

const PaymentCancelled = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-red-500">
        Payment Cancelled ❌
      </h2>
      <Link to="/dashboard/student/my-tuitions">
        <button className="btn btn-primary mt-4">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
