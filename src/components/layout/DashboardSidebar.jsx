import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


const DashboardSidebar = () => {
  const { role } = useAuth();

  const links = {
    student: [
      { to: "/dashboard/student", label: "My Tuitions" },
      { to: "/dashboard/student/post", label: "Post Tuition" },
      { to: "/dashboard/student/applied-tutors", label: "Applied Tutors" },
      { to: "/dashboard/student/payments", label: "Payments" },
    ],
    tutor: [
      { to: "/dashboard/tutor", label: "My Applications" },
      { to: "/dashboard/tutor/ongoing", label: "Ongoing Tuitions" },
      { to: "/dashboard/tutor/revenue", label: "Revenue History" },
    ],
    admin: [
      { to: "/dashboard/admin/users", label: "User Management" },
      { to: "/dashboard/admin/tuitions", label: "Tuition Management" },
      { to: "/dashboard/admin/reports", label: "Reports & Analytics" },
    ],
  };

  const menu = links[role] || links.student;

  return (
    <div className="bg-base-200 min-h-screen w-64 p-6">
      <Link to="/" className="text-2xl font-bold mb-8 text-primary">eTuitionBD</Link>
      <ul className="menu">
        {menu.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
