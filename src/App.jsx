import { Routes, Route, Navigate } from "react-router-dom";

/* ===== Public Pages ===== */
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* ===== Student Dashboard & Pages ===== */
import StudentDashboard from "./dashboard/StudentDashboard";
import DashboardHome from "./dashboard/DashboardHome";
import MyLoans from "./dashboard/MyLoans";
import Documents from "./dashboard/Documents";

/* ===== Student Standalone Pages ===== */
import LoanEligibility from "./pages/LoanEligibility";
import DocumentUpload from "./pages/DocumentUpload";

/* ===== Admin Layout & Pages ===== */
import AdminLayout from "./dashboard/AdminLayout";
import AdminDashboard from "./dashboard/AdminDashboard";
import AdminApplications from "./dashboard/AdminApplications";
import AdminApprovals from "./dashboard/AdminApprovals";
import AdminStudents from "./dashboard/AdminStudents";

/* ===== Auth ===== */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ================= STUDENT ROUTES ================= */}
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
        <Route path="loans" element={<MyLoans />} />
        <Route path="documents" element={<Documents />} />
      </Route>

      {/* ===== Student Standalone Pages =====*/}
      <Route
        path="/apply-loan"
        element={
          <ProtectedRoute allowedRole="STUDENT">
            <LoanEligibility />
          </ProtectedRoute>
        }
      /> 

      <Route
        path="/upload-documents/:applicationId"
        element={
          <ProtectedRoute allowedRole="STUDENT">
            <DocumentUpload />
          </ProtectedRoute>
        }
      />

      {/* ================= ADMIN ROUTES ================= */}
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
        <Route path="approvals" element={<AdminApprovals />} />
        <Route path="students" element={<AdminStudents />} />
      </Route>

      {/* ================= SMART DASHBOARD REDIRECT ================= */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {localStorage.getItem("role") === "ADMIN" ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <Navigate to="/student/dashboard" replace />
            )}
          </ProtectedRoute>
        }
      />

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
