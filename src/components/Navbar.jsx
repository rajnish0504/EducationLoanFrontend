import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, logout } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useState(getAuth());

  /* Sync auth */
  useEffect(() => {
    const syncAuth = () => setAuth(getAuth());
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  /* Theme */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* Scroll helper */
  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setAuth({ isLoggedIn: false, role: null });
    navigate("/");
  };

  const dashboardRoute =
    auth.role === "ADMIN"
      ? "/admin/dashboard"
      : "/student/dashboard";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-[#0b1220]/80 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-blue-600"
        >
          EduLoan Nexus
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button onClick={() => scrollTo("features")}>Features</button>
          <button onClick={() => scrollTo("emi")}>EMI Calculator</button>
          <button onClick={() => scrollTo("process")}>How It Works</button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-2 rounded-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {!auth.isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate(dashboardRoute)}
                className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="hidden md:block border border-red-400 text-red-500 px-3 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden border px-3 py-2 rounded-lg"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
