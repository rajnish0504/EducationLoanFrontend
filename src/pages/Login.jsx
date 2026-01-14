import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { saveToken } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();
  const location = useLocation();

  /* Apply global theme */
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  /* Logo click */
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      document
        .getElementById("hero")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  /* Login submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8093/api/auth/login",
        { email, password, role }
      );

      saveToken(res.data.token);
      localStorage.setItem("role", role);

      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-[#0b1220]/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1
            onClick={handleLogoClick}
            className="cursor-pointer text-xl sm:text-2xl font-bold text-blue-600"
          >
            EduLoan Nexus
          </h1>

          {/* Theme Toggle */}
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
            Login to <span className="font-semibold">EduLoan Nexus</span>
          </p>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Role */}
            <div>
              <label className="block text-sm mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-slate-300 dark:border-slate-600
                  bg-white dark:bg-slate-800
                "
              >
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {/* Email */}
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
                "
              />
            </div>

            {/* Password */}
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
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
