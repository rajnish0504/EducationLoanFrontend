import { useState } from "react";
import { UploadCloud, FileCheck } from "lucide-react";
import api from "../../utils/api";

const REQUIRED_DOCS = [
  { key: "AADHAAR", label: "Aadhaar Card" },
  { key: "PAN", label: "PAN Card" },
  { key: "ADMISSION", label: "Admission Letter" },
];

const DocumentUploadStep = ({ applicationId, onBack, onFinish }) => {
  const [files, setFiles] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (type, file) => {
    setFiles((prev) => ({ ...prev, [type]: file }));
  };

  const allUploaded = REQUIRED_DOCS.every((d) => files[d.key]);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      for (const doc of REQUIRED_DOCS) {
        const formData = new FormData();
        formData.append("file", files[doc.key]);
        formData.append("documentType", doc.key);

        await api.post(
          `/api/student/documents/upload/${applicationId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      onFinish(); // ✅ only after all uploads succeed

    } catch (err) {
      alert("Failed to upload documents");
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">

      <h2 className="text-lg font-semibold text-white">
        Upload Required Documents
      </h2>

      {REQUIRED_DOCS.map((doc) => (
        <div
          key={doc.key}
          className="flex items-center justify-between
                     bg-[#0b1220] border border-slate-700
                     p-4 rounded-xl"
        >
          <div>
            <p className="text-white">{doc.label}</p>
            <p className="text-xs text-slate-400">
              PDF / JPG / PNG
            </p>
          </div>

          <label
            className={`cursor-pointer flex items-center gap-2 text-sm
              ${files[doc.key] ? "text-green-400" : "text-blue-400"}`}
          >
            {files[doc.key] ? (
              <>
                <FileCheck size={18} />
                Uploaded
              </>
            ) : (
              <>
                <UploadCloud size={18} />
                Upload
              </>
            )}

            <input
              type="file"
              hidden
              disabled={submitting}
              onChange={(e) =>
                handleFileChange(doc.key, e.target.files[0])
              }
            />
          </label>
        </div>
      ))}

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          disabled={submitting}
          className="px-6 py-2 rounded-lg
                     border border-slate-600
                     text-slate-300 disabled:opacity-50"
        >
          ← Back
        </button>

        <button
          disabled={!allUploaded || submitting}
          onClick={handleSubmit}
          className={`px-6 py-2 rounded-lg text-white
            ${
              allUploaded
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-600 cursor-not-allowed"
            }`}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </div>
  );
};

export default DocumentUploadStep;
