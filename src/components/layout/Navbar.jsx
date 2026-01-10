import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import ThemeToggle from "../ui/ThemeToggle";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  BookOpen,
  Users,
  Phone,
  Info,
  Home,
} from "lucide-react";

const Navbar = () => {
  const { user, role, userLogOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userLogOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const publicRoutes = [
    { path: "/", label: "Home", icon: Home },
    { path: "/tuitions", label: "Tuitions", icon: BookOpen },
    { path: "/tutors", label: "Tutors", icon: Users },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const loggedInRoutes = [
    { path: "/", label: "Home", icon: Home },
    { path: "/tuitions", label: "Tuitions", icon: BookOpen },
    { path: "/tutors", label: "Tutors", icon: Users },
    { path: "/about", label: "About", icon: Info },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/help", label: "Help", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const routes = user ? loggedInRoutes : publicRoutes;

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0  z-9999 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
          >
            {routes.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? "active" : ""}`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case text-2xl font-bold text-primary flex items-center gap-2"
        >
          <BookOpen className="h-8 w-8" />
          eTuitionBD
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map(({ path, label, icon: Icon  }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "active" : ""}`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <ThemeToggle />

        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost flex items-center gap-2"
            >
              <div className="avatar">
                <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "/avatar.png"} alt="user" />
                </div>
              </div>
              <span className="hidden md:inline">
                {user.displayName?.split(" ")[0]}
              </span>
              <ChevronDown className="h-4 w-4" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10 border border-base-300"
            >
              <li className="menu-title">
                <span>Account</span>
              </li>
              <li>
                <Link
                  to={`/dashboard/${role}`}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <a
                  onClick={handleLogout}
                  className="text-error flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-outline border border-primary btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
