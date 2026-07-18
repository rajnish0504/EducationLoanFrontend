import { useState } from "react";
import api from "../../utils/api";

const LoanInfoForm = ({ onBack, onSuccess }) => {
  const [loan, setLoan] = useState({
    loanAmount: "",
    courseName: "",
    instituteName: "",
    courseDuration: ""
  });

  const handleChange = (e) =>
    setLoan({ ...loan, [e.target.name]: e.target.value });

  const submitLoan = async () => {
    try {
      const res = await api.post(
        "/api/loan-application/apply",
        loan
      );

      // 🔥 IMPORTANT: pass applicationId to parent
      onSuccess(res.data.applicationId);

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Failed to apply loan"
      );
    }
  };

  return (
    <div className="space-y-4">
      {Object.keys(loan).map((k) => (
        <input
          key={k}
          name={k}
          value={loan[k]}
          onChange={handleChange}
          placeholder={k.replace(/([A-Z])/g, " $1")}
          className="w-full p-3 rounded
                     bg-[#0b1220] text-white
                     border border-slate-600"
        />
      ))}

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 border
                     border-slate-500
                     text-slate-300 rounded"
        >
          ← Back
        </button>

        <button
          onClick={submitLoan}
          className="bg-green-600
                     px-6 py-2 rounded text-white"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default LoanInfoForm;
