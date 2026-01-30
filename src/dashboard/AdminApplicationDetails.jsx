import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import DocumentViewerModal from "../components/DocumentViewerModal";

const AdminApplicationDetails = () => {
  const { applicationId } = useParams();
  const [details, setDetails] = useState(null);
  const [docUrl, setDocUrl] = useState(null);

  const fetchDetails = () => {
    api.get(`/api/admin/applications/${applicationId}`)
      .then(res => setDetails(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const viewDocument = async (docId) => {
    const response = await api.get(
      `/api/admin/viewdocuments/view/${docId}`,
      { responseType: "blob" }
    );

    const url = URL.createObjectURL(
      new Blob([response.data])
    );

    setDocUrl(url);
  };

  const verifyDocument = async (docId) => {
    await api.post(`/api/admin/viewdocuments/${docId}/verify`);
    fetchDetails();
  };

  const rejectDocument = async (docId) => {
    await api.post(`/api/admin/viewdocuments/${docId}/reject`);
    fetchDetails();
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

        <div className="space-y-4">
          {details.documents.map(doc => (
            <div
              key={doc.documentId}
              className="flex justify-between items-center
                         bg-[#0b1220] p-4 rounded-xl border border-slate-700"
            >
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
                  : "bg-yellow-500/20 text-yellow-400"}
              `}>
                {doc.verificationStatus}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() => viewDocument(doc.documentId)}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg"
                >
                  View
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
          ))}
        </div>
      </div>

      {/* MODAL */}
      <DocumentViewerModal
        fileUrl={docUrl}
        onClose={() => setDocUrl(null)}
      />

    </div>
  );
};

export default AdminApplicationDetails;
