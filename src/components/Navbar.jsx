import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* Apply theme globally */
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  /* Scroll helper (only works on landing page) */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  /* Logo click logic */
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollTo("hero");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-[#0b1220]/80 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          onClick={handleLogoClick}
          className="cursor-pointer text-xl sm:text-2xl font-bold text-blue-600"
        >
          EduLoan Nexus
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
          <button
            onClick={() => scrollTo("features")}
            className="hover:text-blue-600 transition"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("emi")}
            className="hover:text-blue-600 transition"
          >
            EMI Calculator
          </button>
          <button
            onClick={() => scrollTo("process")}
            className="hover:text-blue-600 transition"
          >
            How It Works
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="border border-slate-300 dark:border-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Login (Desktop) */}
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden border border-slate-300 dark:border-slate-600 px-3 py-2 rounded-lg"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0b1220] border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col px-6 py-4 gap-4 text-slate-700 dark:text-slate-300">
            <button
              onClick={() => scrollTo("features")}
              className="text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("emi")}
              className="text-left"
            >
              EMI Calculator
            </button>
            <button
              onClick={() => scrollTo("process")}
              className="text-left"
            >
              How It Works
            </button>

            <button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
