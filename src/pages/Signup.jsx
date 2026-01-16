import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8093/api/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-[#0b1220]/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <h1
            onClick={handleLogoClick}
            className="cursor-pointer text-xl font-bold text-blue-600"
          >
            EduLoan Nexus
          </h1>

          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-2 rounded-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Signup Form */}
      <section className="min-h-screen pt-28 flex items-center justify-center bg-white dark:bg-[#0b1220]">
        <div className="w-full max-w-md bg-white dark:bg-[#131c31] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          {error && (
            <div className="mb-4 text-red-500 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600"
            >
              Login
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
