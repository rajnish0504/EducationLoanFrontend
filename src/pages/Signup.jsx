import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, User, Mail, Lock, Eye, EyeOff, ShieldCheck, FileCheck, Calculator, TrendingUp, ArrowLeft } from "lucide-react";
import authImage from "../assets/images/WhatsApp Image 2026-07-19 at 1.36.54 AM.jpeg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8093/api/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch {
      setError("Signup failed. Please try a different email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans text-slate-900 relative selection:bg-blue-100 selection:text-blue-900 p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-x-hidden">
      
      {/* SOFT ORGANIC BACKGROUND SHAPES */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* TOP HEADER */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between mb-4">
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tight text-[#18181B]">
            EduLoan Nexus
          </span>
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-200/60 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* MAIN CENTERED CANVAS CARD (Rounded outer container 32-40px with soft luxury shadow) */}
      <div className="max-w-5xl mx-auto w-full bg-white rounded-[36px] p-4 sm:p-6 lg:p-7 shadow-2xl shadow-slate-300/40 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* LEFT PANEL: BACKGROUND IMAGE + OVERLAY REACT UI COMPONENTS */}
        <div className="lg:col-span-6 rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[530px] max-h-[560px] relative shadow-xl shadow-blue-600/20 group">
          
          {/* BACKGROUND IMAGE FROM ASSETS */}
          <img
            src={authImage}
            alt="EduLoan Nexus Auth Background"
            className="w-full h-full object-cover rounded-[32px] absolute inset-0 -z-0"
          />

          {/* DARK OVERLAY TINT FOR HIGH CONTRAST */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-blue-900/30 pointer-events-none z-10" />

          {/* OVERLAY UI CONTENT CONTAINER */}
          <div className="relative z-20 h-full p-6 sm:p-8 flex flex-col justify-between">
            
            {/* TOP ROW: SECURITY BADGE & PORTAL PILL */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-md">
                <ShieldCheck className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="bg-white/20 text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-sm">
                STUDENT REGISTRATION PORTAL
              </span>
            </div>

            {/* FLOATING GLASS CARDS AREA */}
            <div className="relative my-auto py-8">
              
              {/* FLOATING CARD 1: Documents 99% Verified (Upper Middle Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="absolute top-2 left-2 bg-white/90 backdrop-blur-md text-slate-900 rounded-[18px] p-3 shadow-xl border border-white/60 flex items-center gap-2.5 z-30 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-extrabold tracking-tight">
                  Documents <span className="text-emerald-600 font-bold">99% Verified</span>
                </span>
              </motion.div>

              {/* FLOATING CARD 2: Instant EMI Calculator (Upper Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="absolute top-8 right-2 hidden sm:flex bg-white/90 backdrop-blur-md text-slate-900 rounded-[18px] p-3 shadow-xl border border-white/60 items-center gap-2.5 z-30 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-extrabold tracking-tight text-slate-800">
                  Instant EMI Calculator
                </span>
              </motion.div>

              {/* FLOATING CARD 3: EMI ₹12,000/mo (Center Right) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="absolute top-28 right-6 bg-white/90 backdrop-blur-md text-slate-900 rounded-[18px] p-3 shadow-xl border border-white/60 flex items-center gap-2.5 z-30 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="text-slate-400 font-bold block text-[9px]">EMI</span>
                  <span className="font-extrabold text-blue-600">₹12,000/mo</span>
                </div>
              </motion.div>

            </div>

            {/* BOTTOM BANNER LABELS */}
            <div className="flex items-center justify-between pt-2 border-t border-white/20">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white drop-shadow-md select-none">
                  ₹
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-sm">
                  Lowest Interest Rates
                </span>
              </div>
              <span className="text-[10px] font-semibold text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-sm">
                100% Digital Process
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: AUTHENTICATION FORM */}
        <div className="lg:col-span-6 px-2 sm:px-4 py-2 flex flex-col justify-between">
          <div>
            
            {/* TOP SEGMENTED PILL SWITCH */}
            <div className="bg-[#F3F4F6] p-1 rounded-full flex items-center justify-between mb-8 max-w-[240px] ml-auto border border-slate-200/60">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-1/2 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-full transition-all text-center"
              >
                Log In
              </button>
              <button
                type="button"
                className="w-1/2 py-1.5 text-xs font-extrabold bg-[#2563EB] text-white rounded-full shadow-md transition-all text-center"
              >
                Sign Up
              </button>
            </div>

            {/* FORM HEADING & SUBTITLE */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181B] tracking-tight">
                Create Account
              </h2>
              <p className="text-xs text-slate-500 font-normal mt-1">
                Fill in your details to apply for student education loans.
              </p>
            </div>

            {/* ERROR ALERT */}
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold p-3 rounded-2xl text-center">
                {error}
              </div>
            )}

            {/* STACKED FORM INPUT FIELDS */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* FULL NAME */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1.5 ml-1">
                  FULL NAME
                </label>
                <div className="relative flex items-center bg-[#F7F7F8] border border-slate-200/90 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-[#2563EB] transition-all">
                  <User className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Sharma"
                    required
                    className="w-full text-xs font-medium text-slate-900 bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* EMAIL ADDRESS */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1.5 ml-1">
                  EMAIL ADDRESS
                </label>
                <div className="relative flex items-center bg-[#F7F7F8] border border-slate-200/90 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-[#2563EB] transition-all">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    required
                    className="w-full text-xs font-medium text-slate-900 bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1.5 ml-1">
                  PASSWORD
                </label>
                <div className="relative flex items-center bg-[#F7F7F8] border border-slate-200/90 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-[#2563EB] transition-all">
                  <Lock className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full text-xs font-medium text-slate-900 bg-transparent focus:outline-none placeholder-slate-400 pr-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-600 shrink-0"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1.5 ml-1">
                  CONFIRM PASSWORD
                </label>
                <div className="relative flex items-center bg-[#F7F7F8] border border-slate-200/90 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-[#2563EB] transition-all">
                  <Lock className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full text-xs font-medium text-slate-900 bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* LARGE BLUE GRADIENT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2563EB] to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-bold text-xs sm:text-sm py-3.5 rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 mt-4"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

          </div>

          {/* BOTTOM TEXT */}
          <div className="text-center pt-6 text-xs text-slate-500 font-medium">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#2563EB] font-extrabold hover:underline"
            >
              Log In
            </button>
          </div>

        </div>

      </div>

      {/* FOOTER COPYRIGHT */}
      <div className="text-center text-[11px] text-slate-400 mt-4 font-medium">
        © 2027 EduLoan Nexus. All rights reserved.
      </div>

    </div>
  );
};

export default Signup;
