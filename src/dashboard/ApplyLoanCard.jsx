import { FilePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplyLoanCard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#131c31] border border-blue-500/30 rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
          <FilePlus />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            Apply for Education Loan
          </h3>
          <p className="text-sm text-slate-400">
            Start your loan application
          </p>
        </div>

        <button
          onClick={() => navigate("/apply-loan")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Apply →
        </button>
      </div>
    </div>
  );
};

export default ApplyLoanCard;
