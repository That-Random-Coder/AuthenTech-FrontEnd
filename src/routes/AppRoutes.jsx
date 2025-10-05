// src/routes/AppRoutes.jsx
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import StudentDashboard from "../pages/Student/StudentDashboard";
import TeacherDashboard from "../pages/Teacher/TeacherDashboard";
import Sessions from "../pages/Teacher/Sessions";
import Reports from "../pages/Teacher/Reports";
import AdminDashboard from "../pages/HOD/AdminDashboard";
import Users from "../pages/HOD/Users";
import Courses from "../pages/HOD/Courses";
import Register from "../pages/Auth/Register";
import Home from "../pages/Public/Home";
import About from "../pages/Public/About";
import Contact from "../pages/Public/Contact";
import PublicAuthLayout from "../pages/Public/PublicAuthLayout";
import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated, role } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated
            ? role === "STUDENT"
              ? <StudentDashboard />
              : role === "TEACHER"
                ? <TeacherDashboard />
                : <AdminDashboard />
            : <Home />
            // :<StudentDashboard />
            // :<AdminDashboard />
        }
      />

      {isAuthenticated && role === "TEACHER" && (
        <>
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/reports" element={<Reports />} />
        </>
      )}

      {isAuthenticated && role === "ADMIN" && (
        <>
          <Route path="/users" element={<Users />} />
          <Route path="/courses" element={<Courses />} />
        </>
      )}

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/login"
        element={
          isAuthenticated
            ? <Navigate to="/" replace />
            : <PublicAuthLayout><Login /></PublicAuthLayout>
        }
      />

      <Route
        path="/register"
        element={
          isAuthenticated
            ? <Navigate to="/" replace />
            : <PublicAuthLayout><Register /></PublicAuthLayout>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
