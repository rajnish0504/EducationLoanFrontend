import { Routes, Route, Navigate } from "react-router-dom";

/* Public pages */
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Student dashboard & pages */
import StudentDashboard from "./dashboard/StudentDashboard";
import DashboardHome from "./dashboard/DashboardHome";
import MyLoans from "./dashboard/MyLoans";
import Documents from "./dashboard/Documents";

/* Other student pages */
import LoanEligibility from "./pages/LoanEligibility";
import DocumentUpload from "./pages/DocumentUpload";

/* Admin dashboard (placeholder for now) */
import AdminDashboard from "./dashboard/AdminDashboard";

/* Auth */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ===== Public Routes ===== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ===== Student Routes (Nested Dashboard) ===== */}
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

      {/* ===== Student Standalone Pages ===== */}
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

      {/* ===== Admin Routes ===== */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* ===== Smart Dashboard Redirect ===== */}
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

      {/* ===== Fallback ===== */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
