import { FilePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplyLoanCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-gradient-to-r from-blue-600/20 to-blue-400/10
        border border-blue-500/30
        rounded-2xl p-6
        flex items-center justify-between
        hover:border-blue-400/60
        transition
      "
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-xl bg-blue-600/20 text-blue-400">
          <FilePlus size={24} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            Apply for Education Loan
          </h3>
          <p className="text-sm text-slate-400">
            Fill application & upload documents
          </p>
        </div>
      </div>

      {/* Action button */}
      <button
        onClick={() => navigate("/apply-loan")}
        className="
          bg-blue-600 text-white
          px-6 py-2
          rounded-lg
          font-medium
          hover:bg-blue-700
          transition
        "
      >
        Apply →
      </button>
    </div>
  );
};

export default ApplyLoanCard;
