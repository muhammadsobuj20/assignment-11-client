import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { imageUpload, saveOrUpdateUser } from "../../utils";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, image } = data;
    const imageFile = image?.[0];

    if (!imageFile) {
      toast.error("Please upload a profile image");
      return;
    }

    setLoading(true);
    try {
      const imageURL = await imageUpload(imageFile);

      // Create user
      await createUser(email, password);

      // Update Firebase profile
      await updateUserProfile(name, imageURL);

      // Save or update in DB
      await saveOrUpdateUser({ name, email, image: imageURL });

      toast.success("Signup Successful!");
      reset();
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      let errorMsg = err?.message || "Signup failed";
      if (err.code === "auth/email-already-in-use") {
        errorMsg = "Email already registered. Please login.";
      } else if (err.code === "auth/weak-password") {
        errorMsg = "Password is too weak.";
      }
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName || "User",
        email: user?.email,
        image: user?.photoURL || "",
      });
      toast.success("Signup Successful with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Google sign in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="flex flex-col max-w-md w-full p-8 rounded-2xl shadow-2xl border-2 border-primary">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1 text-primary">Sign Up</h1>
          <p className="text-gray-500 text-sm">
            Create your account at eTuitionBD
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md border border-primary focus:outline-cyan-500 text-gray-500"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 30, message: "Max 30 characters" },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm mb-1">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-cyan-50 file:text-cyan-700
                hover:file:bg-cyan-100
                border border-dashed border-cyan-300 rounded-md cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
              {...register("image", { required: "Profile image required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md border border-primary focus:outline-cyan-500 text-gray-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-3 py-2 pr-10 rounded-md border border-primary focus:outline-cyan-500 text-gray-700"
              {...register("password", {
                required: "Password required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-400 hover:text-cyan-500 transition"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-70 transition"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline border border-primary w-full flex items-center hover:bg-cyan-200 hover:text-cyan-600 justify-center gap-2 transition"
          disabled={loading}
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-sm mt-4 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
