import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

      {/* Protected Route (example) */}
      <Route
        path="/dashboard"
        element={
          token ? <div>Dashboard Coming Soon</div> : <Navigate to="/login" />
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
