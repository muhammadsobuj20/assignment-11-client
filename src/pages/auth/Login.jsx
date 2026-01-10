import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import { saveOrUpdateUser } from "../../utils";
import { useAuth } from "../../Context/AuthContext";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useState } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace />;

  const demoCredentials = {
    admin: { email: "admin@gmail.com", password: "123456" },
    student: { email: "student@gmail.com", password: "123456" },
    tutor: { email: "tutor@gmail.com", password: "123456" },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);
      const { user } = await signIn(formData.email, formData.password);

      await saveOrUpdateUser({
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (role) => {
    const credentials = demoCredentials[role];
    setFormData(credentials);

    try {
      setLoading(true);
      const { user } = await signIn(credentials.email, credentials.password);

      await saveOrUpdateUser({
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });

      navigate(from, { replace: true });
      toast.success(`Demo ${role} login successful`);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Demo login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      const user = result.user;
      const idToken = await user.getIdToken();
      localStorage.setItem("token", idToken);

      await saveOrUpdateUser({
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="flex flex-col max-w-md w-full p-8 rounded-2xl shadow-2xl border-2 border-primary">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-500 mb-2">Welcome Back</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>

        {/* Demo Buttons */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3 text-center">Quick Demo Access:</p>
          <div className="grid grid-cols-3 gap-2">
            {["admin", "student", "tutor"].map((role) => (
              <button
                key={role}
                onClick={() => handleDemoLogin(role)}
                className="btn btn-outline border border-primary hover:bg-cyan-100 hover:text-cyan-600 btn-sm"
                disabled={loading}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="divider text-gray-400">OR</div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="form-control">
              <label className="label flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-control">
              <label className="label flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500  text-gray-400"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 hover:text-cyan-500" /> : <Eye className="h-5 w-5 text-primary " />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span className="label-text ml-2">Remember me</span>
            </label>
            <button type="button" className="link link-primary text-sm">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? <TbFidgetSpinner className="animate-spin h-5 w-5" /> : "Sign In"}
          </button>
        </form>

        <div className="divider text-gray-400">Continue with</div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline border border-primary w-full flex items-center hover:bg-cyan-200 hover:text-cyan-600 justify-center gap-2 transition"
          disabled={loading}
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link state={from} to="/signup" className="link link-primary font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
