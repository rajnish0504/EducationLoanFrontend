import { Routes, Route, Navigate } from "react-router-dom";

/* PUBLIC */
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* STUDENT */
import StudentDashboard from "./dashboard/StudentDashboard";
import DashboardHome from "./dashboard/DashboardHome";
import MyLoans from "./dashboard/MyLoans";
import ApplyLoan from "./dashboard/ApplyLoan";

/* ADMIN */
import AdminLayout from "./dashboard/AdminLayout";
import AdminDashboard from "./dashboard/AdminDashboard";
import AdminApplications from "./dashboard/AdminApplications";
import AdminApplicationDetails from "./dashboard/AdminApplicationDetails";
import AdminApprovals from "./dashboard/AdminApprovals";
import AdminStudents from "./dashboard/AdminStudents";

/* AUTH */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* STUDENT */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="STUDENT">
            <StudentDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="apply-loan" element={<ApplyLoan />} />
        <Route path="loans" element={<MyLoans />} />
      </Route>

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="applications" element={<AdminApplications />} />
        <Route
          path="applications/:applicationId"
          element={<AdminApplicationDetails />}
        />
        <Route path="approvals" element={<AdminApprovals />} />
        <Route path="students" element={<AdminStudents />} />
      </Route>

      {/* SMART REDIRECT */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {localStorage.getItem("role") === "ADMIN"
              ? <Navigate to="/admin/dashboard" />
              : <Navigate to="/student/dashboard" />}
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
