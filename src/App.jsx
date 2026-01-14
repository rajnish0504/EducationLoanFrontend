import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./dashboard/StudentDashboard";
import LoanEligibility from "./pages/LoanEligibility";
import DocumentUpload from "./pages/DocumentUpload";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ===== Public Routes ===== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ===== Protected Routes ===== */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/apply-loan"
        element={
          <ProtectedRoute>
            <LoanEligibility />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload-documents/:applicationId"
        element={
          <ProtectedRoute>
            <DocumentUpload />
          </ProtectedRoute>
        }
      />

      {/* ===== Fallback ===== */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
