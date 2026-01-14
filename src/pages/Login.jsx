import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { saveToken } from "../utils/auth";
import { applyTheme, getInitialTheme } from "../utils/theme";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dark, setDark] = useState(getInitialTheme());

  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(dark);
  }, [dark]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8093/api/auth/login",
        { email, password }
      );

      saveToken(res.data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-[#0b1220] border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-bold text-blue-600"
          >
            EduLoan Nexus
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-2 rounded"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Login */}
      <section className="min-h-screen pt-28 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#131c31] p-8 rounded-xl w-[400px]"
        >
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          {error && <p className="text-red-500">{error}</p>}

          <input
            className="w-full mb-4 p-3 rounded border"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full mb-6 p-3 rounded border"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
