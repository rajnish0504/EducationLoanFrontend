import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GraduationCap, Moon, Sun, Menu, X } from "lucide-react";
import { getAuth, logout } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useState(getAuth());

  useEffect(() => {
    const syncAuth = () => setAuth(getAuth());
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

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
    auth?.role === "ADMIN" ? "/admin/dashboard" : "/student/dashboard";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-4 px-6 sm:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div 
          onClick={() => scrollTo("hero")} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            EduLoan Nexus
          </span>
        </div>

        {/* CENTER LINKS */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
          <button onClick={() => scrollTo("hero")} className="hover:text-blue-600 transition-colors">Home</button>
          <button onClick={() => scrollTo("features")} className="hover:text-blue-600 transition-colors">Features</button>
          <button onClick={() => scrollTo("timeline")} className="hover:text-blue-600 transition-colors">Timeline</button>
          <button onClick={() => scrollTo("emi")} className="hover:text-blue-600 transition-colors">EMI Calculator</button>
          <button onClick={() => scrollTo("dashboard")} className="hover:text-blue-600 transition-colors">Previews</button>
          <button onClick={() => scrollTo("testimonials")} className="hover:text-blue-600 transition-colors">Testimonials</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-blue-600 transition-colors">FAQ</button>
          <button onClick={() => scrollTo("blog")} className="hover:text-blue-600 transition-colors">Resources</button>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden sm:flex items-center gap-3">
          {!auth.isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-xs font-bold text-slate-700 hover:text-slate-900 px-4 py-2.5 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#18181B] hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md shadow-slate-900/10 transition-all hover:scale-105"
              >
                Apply Now
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate(dashboardRoute)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-600/20 transition-all"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="text-xs font-bold text-slate-600 hover:text-red-600 px-3 py-2 transition-colors"
              >
                Logout
              </button>
            </>
          )}

          {/* DARK MODE CIRCLE TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-[#18181B] text-white flex items-center justify-center hover:bg-slate-800 transition-all ml-1 shadow-sm"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 fill-white text-white" />}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="w-8 h-8 rounded-full bg-[#18181B] text-white flex items-center justify-center"
          >
            {dark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 fill-white text-white" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE NAV DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 text-sm font-semibold text-slate-700 px-2 pb-3">
          <button onClick={() => scrollTo("hero")} className="text-left py-1 hover:text-blue-600">Home</button>
          <button onClick={() => scrollTo("features")} className="text-left py-1 hover:text-blue-600">Features</button>
          <button onClick={() => scrollTo("timeline")} className="text-left py-1 hover:text-blue-600">Timeline</button>
          <button onClick={() => scrollTo("emi")} className="text-left py-1 hover:text-blue-600">EMI Calculator</button>
          <button onClick={() => scrollTo("dashboard")} className="text-left py-1 hover:text-blue-600">Previews</button>
          <button onClick={() => scrollTo("testimonials")} className="text-left py-1 hover:text-blue-600">Testimonials</button>
          <button onClick={() => scrollTo("faq")} className="text-left py-1 hover:text-blue-600">FAQ</button>
          <button onClick={() => scrollTo("blog")} className="text-left py-1 hover:text-blue-600">Resources</button>
          
          <div className="flex items-center gap-3 pt-3">
            {!auth.isLoggedIn ? (
              <>
                <button
                  onClick={() => { setMenuOpen(false); navigate("/login"); }}
                  className="w-1/2 py-2.5 text-center text-xs font-bold border border-slate-300 rounded-full"
                >
                  Login
                </button>
                <button
                  onClick={() => { setMenuOpen(false); navigate("/signup"); }}
                  className="w-1/2 py-2.5 text-center text-xs font-bold bg-[#18181B] text-white rounded-full"
                >
                  Apply Now
                </button>
              </>
            ) : (
              <button
                onClick={() => { setMenuOpen(false); navigate(dashboardRoute); }}
                className="w-full py-2.5 text-center text-xs font-bold bg-blue-600 text-white rounded-full"
              >
                Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
