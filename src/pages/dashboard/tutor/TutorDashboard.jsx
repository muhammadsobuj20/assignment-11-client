import { useAuth } from "../../../Context/AuthContext";



const TutorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-2">
        Hello, {user?.displayName || "Tutor"}!
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Find and apply for tuition jobs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl p-8 text-center hover:shadow-2xl transition">
          <div className="text-3xl mb-4">Search</div>
          <h3 className="text-xl font-bold">Browse Tuitions</h3>
          <p className="my-4">Find students looking for tutors like you</p>
          <a href="/tuitions" className="btn btn-primary">
            Browse Now
          </a>
        </div>

        <div className="card bg-base-100 shadow-xl p-8 text-center hover:shadow-2xl transition">
          <div className="text-3xl mb-4">Application</div>
          <h3 className="text-xl font-bold">My Applications</h3>
          <p className="my-4">Track your application status</p>
          <a href="/dashboard/tutor/applications" className="btn btn-success">
            View Applications
          </a>
        </div>

        <div className="card bg-base-100 shadow-xl p-8 text-center hover:shadow-2xl transition">
          <div className="text-6xl mb-4">Money</div>
          <h3 className="text-2xl font-bold">Revenue</h3>
          <p className="my-4">See your total earnings</p>
          <a
            href="/dashboard/tutor/revenue"
            className="btn btn-info text-white"
          >
            View Earnings
          </a>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
