import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Sidebar from "../dashboard/Sidebar";

const DocumentUpload = () => {
  const { applicationId } = useParams();

  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!documentType || !file) {
      setMessage("Please select document type and file");
      setSuccess(false);
      return;
    }

    const formData = new FormData();
    formData.append("applicationId", applicationId);
    formData.append("documentType", documentType);
    formData.append("file", file);

    try {
      await api.post("/api/documents/upload", formData);
      setMessage("Document uploaded successfully");
      setSuccess(true);
      setDocumentType("");
      setFile(null);
    } catch {
      setMessage("Upload failed");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex items-center justify-center p-8">
          <form
            onSubmit={handleUpload}
            className="bg-[#131c31] p-8 rounded-2xl w-[420px] text-white shadow-xl"
          >
            <h2 className="text-xl font-semibold text-center mb-1">
              Upload Documents
            </h2>

            <p className="text-center text-sm text-slate-400 mb-6">
              Application ID:{" "}
              <span className="text-blue-400">{applicationId}</span>
            </p>

            <select
              className="w-full mb-4 p-3 rounded bg-[#0b1220]"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
            >
              <option value="">Select Document Type</option>
              <option value="AADHAAR">Aadhaar Card</option>
              <option value="PAN">PAN Card</option>
              <option value="ADMISSION_LETTER">Admission Letter</option>
            </select>

            <input
              type="file"
              className="w-full mb-6 text-sm"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />

            <button
              type="submit"
              className="
                w-full bg-gradient-to-r from-blue-600 to-indigo-600
                py-3 rounded-xl font-semibold
                hover:scale-[1.02] transition-all
              "
            >
              Upload Document
            </button>

            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  success ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
