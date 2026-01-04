import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthNavbar = () => {
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0b1220] border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-xl sm:text-2xl font-bold text-blue-600 hover:opacity-90 transition"
        >
          EduLoan Nexus
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="border border-slate-300 dark:border-slate-600 px-3 py-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default AuthNavbar;
