import React from "react";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PrivateRoute from "./components/ui/PrivateRoute";
import ErrorPage from "./components/ui/ErrorPage";

// Public Pages
import Home from "./pages/public/Home";
import Tuitions from "./pages/public/Tuitions";
import TuitionDetails from "./pages/public/TuitionDetails";
import Tutors from "./pages/public/Tutors";
import Contact from "./pages/public/Contact";

// Auth
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

// Dashboard Layout & Sidebar
import DashboardLayout from "./components/layout/DashboardLayout";

// Student
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import MyTuitions from "./pages/dashboard/student/MyTuitions";
import PostTuition from "./pages/dashboard/student/PostTuition";
import AppliedTutors from "./pages/dashboard/student/AppliedTutors";
import PaymentHistory from "./pages/dashboard/student/PaymentHistory";

// Tutor
import TutorDashboard from "./pages/dashboard/tutor/TutorDashboard";
import MyApplications from "./pages/dashboard/tutor/MyApplications";
import RevenueHistory from "./pages/dashboard/tutor/RevenueHistory";

// Admin
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import UserManagement from "./pages/dashboard/admin/UserManagement";
import TuitionManagement from "./pages/dashboard/admin/TuitionManagement";
import Reports from "./pages/dashboard/admin/Reports";
import Profile from "./pages/public/Profile";

//payment pages
import PaymentCancelled from "./pages/payments/PaymentCancelled";
import Payment from "./pages/payments/Payment";
import PaymentSuccess from "./pages/payments/PaymentSuccess";
import TutorProfile from "./pages/public/TutorProfile";
import Coverage from "./components/shared/Coverage";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tuitions" element={<Tuitions />} />
        <Route path="tuition/:id" element={<TuitionDetails />} />
        <Route path="tutors" element={<Tutors />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/coverage" element={<Coverage />} />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Payment Routes */}
      <Route path="payment" element={<Payment />} />
      <Route path="payment/success" element={<PaymentSuccess />} />
      <Route path="payment/cancel" element={<PaymentCancelled />} />
      <Route path="/payment" element={<Payment />} />
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Dashboard Routes (Protected + Role Based) */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute allowedRoles={["student", "tutor", "admin"]}>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* Student Routes */}
        <Route path="student" element={<StudentDashboard />} />
        <Route path="student/my-tuitions" element={<MyTuitions />} />
        <Route path="student/post" element={<PostTuition />} />
        <Route path="student/applied-tutors" element={<AppliedTutors />} />
        <Route path="student/payments" element={<PaymentHistory />} />

        {/* Tutor Routes */}
        <Route path="tutor" element={<TutorDashboard />} />
        <Route path="tutor/applications" element={<MyApplications />} />
        <Route path="tutor/revenue" element={<RevenueHistory />} />

        {/* Admin Routes */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/users" element={<UserManagement />} />
        <Route path="admin/tuitions" element={<TuitionManagement />} />
        <Route path="admin/reports" element={<Reports />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
