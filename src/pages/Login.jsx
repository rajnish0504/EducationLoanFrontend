import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, getInitialTheme } from "../utils/theme";


const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /* Dark mode toggle */
  const [dark, setDark] = useState(getInitialTheme());

useEffect(() => {
  applyTheme(dark);
}, [dark]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );

      const jwtToken = response.data.token;
      onLoginSuccess(jwtToken);

      navigate("/"); // redirect to landing page
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Invalid credentials");
      } else {
        setError("Server not reachable");
      }
    }
  };

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-[#0b1220] border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-xl sm:text-2xl font-bold text-blue-600 hover:opacity-90 transition"
          >
            EduLoan Nexus
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="border border-slate-300 dark:border-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* ===== Login Section ===== */}
      <section className="min-h-screen pt-28 flex items-center justify-center bg-grid bg-white dark:bg-[#0b1220] px-4">
        <div className="w-full max-w-md bg-white dark:bg-[#131c31] rounded-2xl shadow-2xl p-8 sm:p-10 animate-fade-up">
          
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-sm mb-8">
            Login to continue to{" "}
            <span className="font-semibold">EduLoan Nexus</span>
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-slate-300 dark:border-slate-600
                  bg-white dark:bg-slate-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-slate-300 dark:border-slate-600
                  bg-white dark:bg-slate-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full mt-4
                bg-blue-600 hover:bg-blue-700
                text-white font-medium
                py-3 rounded-xl
                shadow-lg hover:shadow-xl
                transition
              "
            >
              Login
            </button>
          </form>

          {/* Signup Redirect */}
          <div className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
