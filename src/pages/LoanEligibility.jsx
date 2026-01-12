import { useState } from "react";
import axios from "axios";

const LoanEligibility = () => {
  const [form, setForm] = useState({
    loanAmount: "",
    courseName: "",
    instituteName: "",
    courseDuration: "",
    studentId: 1, // later from token/session
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await axios.post(
        "http://localhost:8093/api/loan-application/apply",
        form
      );
      setStatus("✅ Application submitted successfully!");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus("❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#131c31] w-full max-w-xl p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Education Loan Application
        </h2>

        <div className="space-y-4">
          <input
            name="loanAmount"
            placeholder="Loan Amount"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b1220] text-white"
            required
          />

          <input
            name="courseName"
            placeholder="Course Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b1220] text-white"
            required
          />

          <input
            name="instituteName"
            placeholder="Institute Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b1220] text-white"
            required
          />

          <input
            name="courseDuration"
            placeholder="Course Duration (Years)"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b1220] text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>

        {status && (
          <p className="mt-4 text-center text-slate-300">{status}</p>
        )}
      </form>
    </div>
  );
};

export default LoanEligibility;
