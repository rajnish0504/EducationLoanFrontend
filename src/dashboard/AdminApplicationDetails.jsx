import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

const BACKEND_URL = "http://localhost:8080";

const AdminApplicationDetails = () => {
  const { applicationId } = useParams();
  const [details, setDetails] = useState(null);
  const [activeDocId, setActiveDocId] = useState(null);

  useEffect(() => {
    api
      .get(`/api/admin/applications/${applicationId}`)
      .then(res => setDetails(res.data))
      .catch(console.error);
  }, [applicationId]);

  const verifyDocument = async (docId) => {
    await api.post(`/api/admin/viewdocuments/${docId}/verify`);
    refresh();
  };

  const rejectDocument = async (docId) => {
    await api.post(`/api/admin/viewdocuments/${docId}/reject`);
    refresh();
  };

  const refresh = () => {
    api
      .get(`/api/admin/applications/${applicationId}`)
      .then(res => setDetails(res.data));
  };

  if (!details) return <p className="text-white">Loading...</p>;

  return (
    <div className="space-y-10">

      {/* LOAN INFO */}
      <div className="bg-[#131c31] p-6 rounded-2xl border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-3">
          Loan Information
        </h2>
        <p className="text-slate-400">Student: {details.studentName}</p>
        <p className="text-slate-400">Course: {details.courseName}</p>
        <p className="text-slate-400">Institute: {details.instituteName}</p>
        <p className="text-slate-400">Amount: ₹{details.loanAmount}</p>
      </div>

      {/* DOCUMENTS */}
      <div className="bg-[#131c31] p-6 rounded-2xl border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">
          Uploaded Documents
        </h2>

        <div className="space-y-6">
          {details.documents.map(doc => (
            <div key={doc.documentId} className="space-y-4">

              {/* DOC HEADER */}
              <div className="flex justify-between items-center bg-[#0b1220] p-4 rounded-xl border border-slate-700">
                <div>
                  <p className="text-white font-medium">{doc.documentType}</p>
                  <p className="text-slate-500 text-sm">
                    Uploaded: {doc.uploadedDate}
                  </p>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs
                  ${doc.verificationStatus === "VERIFIED"
                    ? "bg-green-500/20 text-green-400"
                    : doc.verificationStatus === "REJECTED"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-yellow-500/20 text-yellow-400"}`}
                >
                  {doc.verificationStatus}
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setActiveDocId(
                        activeDocId === doc.documentId ? null : doc.documentId
                      )
                    }
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg"
                  >
                    {activeDocId === doc.documentId ? "Hide" : "View"}
                  </button>

                  <button
                    onClick={() => verifyDocument(doc.documentId)}
                    className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg"
                  >
                    Verify
                  </button>

                  <button
                    onClick={() => rejectDocument(doc.documentId)}
                    className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>

              {/* INLINE DOCUMENT VIEWER */}
              {activeDocId === doc.documentId && (
                <div className="rounded-xl overflow-hidden border border-slate-600 bg-white">
                  <iframe
                    title="Document Preview"
                    src={`${BACKEND_URL}/api/admin/viewdocuments/view/${doc.documentId}`}
                    className="w-full h-[600px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminApplicationDetails;
