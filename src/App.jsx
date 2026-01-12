import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./dashboard/StudentDashboard";
import LoanEligibility from "./pages/LoanEligibility";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/login"
        element={<Login onLoginSuccess={setToken} />}
      />

      <Route
        path="/signup"
        element={<Signup onSignupSuccess={() => {}} />}
      />

      {/* ✅ PROTECTED DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          token ? <StudentDashboard /> : <Navigate to="/login" />
        }
      />

      {/* Optional fallback */}
      <Route path="*" element={<Navigate to="/" />} />

            <Route
        path="/apply-loan"
        element={token ? <LoanEligibility /> : <Navigate to="/login" />}
/>
    </Routes>
  );
}

export default App;
