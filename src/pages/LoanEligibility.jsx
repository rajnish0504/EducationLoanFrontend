import { useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Sidebar from "../dashboard/Sidebar";
import { useNavigate } from "react-router-dom";

const LoanEligibility = () => {
  const [form, setForm] = useState({
    loanAmount: "",
    courseName: "",
    instituteName: "",
    courseDuration: "",
    studentId: 1, // later derive from token
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting application...");

    try {
      const res = await api.post(
        "/api/loan-application/apply",
        form
      );

      const applicationId = res.data.applicationId;
      setStatus("Application submitted successfully");

      setTimeout(() => {
        navigate(`/upload-documents/${applicationId}`);
      }, 600);
    } catch {
      setStatus("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          <form
            onSubmit={handleSubmit}
            className="bg-[#131c31] max-w-xl mx-auto p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Education Loan Application
            </h2>

            <div className="space-y-4">
              <input
                type="number"
                name="loanAmount"
                placeholder="Loan Amount"
                value={form.loanAmount}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0b1220] text-white"
                required
              />

              <input
                name="courseName"
                placeholder="Course Name"
                value={form.courseName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0b1220] text-white"
                required
              />

              <input
                name="instituteName"
                placeholder="Institute Name"
                value={form.instituteName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0b1220] text-white"
                required
              />

              <input
                type="number"
                name="courseDuration"
                placeholder="Course Duration (Years)"
                value={form.courseDuration}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0b1220] text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`
                mt-8 w-full py-3 rounded-xl font-semibold
                bg-gradient-to-r from-blue-600 to-indigo-600
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }
              `}
            >
              {loading ? "Processing..." : "Next → Upload Documents"}
            </button>

            {status && (
              <p className="mt-4 text-center text-slate-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;
