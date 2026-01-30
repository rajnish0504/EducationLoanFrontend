import { useEffect, useState } from "react";
import api from "../utils/api";
import PersonalInfoForm from "./steps/PersonalInfoForm";
import LoanInfoForm from "./steps/LoanInfoForm";
import PendingBlock from "./steps/PendingBlock";

const ApplyLoan = () => {
  const [step, setStep] = useState(1);
  const [hasPending, setHasPending] = useState(false);
  const [profile, setProfile] = useState(null);

  // 🔥 Check pending loan
  useEffect(() => {
    api.get("/api/student/loans")
      .then(res => {
        const pending = res.data.some(
          l => l.applicationStatus === "PENDING"
        );
        setHasPending(pending);
      });
  }, []);

  // 🔥 Fetch personal profile
  useEffect(() => {
    api.get("/api/student/profile")
      .then(res => setProfile(res.data))
      .catch(() => setProfile(null));
  }, []);

  if (hasPending) {
    return <PendingBlock />;
  }

  return (
    <div className="max-w-3xl bg-[#131c31] p-8 rounded-2xl border border-slate-700">
      <h1 className="text-2xl font-bold text-white mb-6">
        Apply for Education Loan
      </h1>

      {/* STEP INDICATOR */}
      <div className="flex gap-4 mb-8 text-sm">
        <span className={step === 1 ? "text-blue-400" : "text-slate-500"}>
          1. Personal Info
        </span>
        <span className={step === 2 ? "text-blue-400" : "text-slate-500"}>
          2. Loan Details
        </span>
        <span className="text-slate-500">3. Documents</span>
      </div>

      {step === 1 && (
        <PersonalInfoForm
          profile={profile}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <LoanInfoForm
          onBack={() => setStep(1)}
          onSuccess={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <div className="text-slate-400">
          📂 Document upload coming next
        </div>
      )}
    </div>
  );
};

export default ApplyLoan;
