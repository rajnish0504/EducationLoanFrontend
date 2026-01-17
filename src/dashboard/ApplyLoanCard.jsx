import { FilePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplyLoanCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400">
          <FilePlus />
        </div>
        <div>
          <h3 className="text-white font-semibold">
            Apply for Education Loan
          </h3>
          <p className="text-slate-400 text-sm">
            Submit application & documents
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/student/apply-loan")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Apply →
      </button>
    </div>
  );
};

export default ApplyLoanCard;
