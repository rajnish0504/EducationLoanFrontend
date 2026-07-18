import { useEffect, useState } from "react";
import api from "../utils/api";
import PersonalInfoForm from "./steps/PersonalInfoForm";
import LoanInfoForm from "./steps/LoanInfoForm";
import PendingBlock from "./steps/PendingBlock";
import DocumentUploadStep from "./steps/DocumentUploadStep";

const ApplyLoan = () => {
  const [step, setStep] = useState(1);
  const [hasPending, setHasPending] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applicationId, setApplicationId] = useState(null);

  /* 🔍 CHECK PENDING APPLICATION */
  useEffect(() => {
    api
      .get("/api/loan-application/my-application")
      .then((res) => {
        if (res.data && res.data.applicationStatus === "PENDING") {
          setHasPending(true);
        } else {
          setHasPending(false);
        }
      })
      .catch(() => setHasPending(false))
      .finally(() => setLoading(false));
  }, []);

  /* 👤 FETCH PROFILE */
  useEffect(() => {
    api
      .get("/api/student/profile")
      .then((res) => setProfile(res.data))
      .catch(() => setProfile(null));
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading...</p>;
  }

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
        <span className={step === 3 ? "text-blue-400" : "text-slate-500"}>
          3. Documents
        </span>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <PersonalInfoForm
          profile={profile}
          onNext={() => setStep(2)}
        />
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <LoanInfoForm
          onBack={() => setStep(1)}
          onSuccess={(appId) => {
            setApplicationId(appId);
            setStep(3);
          }}
        />
      )}

      {/* STEP 3 */}
      {step === 3 && applicationId && (
        <DocumentUploadStep
          applicationId={applicationId}
          onBack={() => setStep(2)}
          onFinish={() => {
            alert("Loan application submitted successfully!");
            setHasPending(true);
          }}
        />
      )}
    </div>
  );
};

export default ApplyLoan;
