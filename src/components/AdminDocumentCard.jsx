import api from "../utils/api";

const AdminDocumentCard = ({ doc }) => {

  const verify = async () => {
    await api.post(`/api/admin/documents/verify/${doc.documentId}`);
    window.location.reload();
  };

  const reject = async () => {
    const reason = prompt("Reason for rejection?");
    if (!reason) return;

    await api.post(
      `/api/admin/documents/reject/${doc.documentId}?reason=${reason}`
    );
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center
                    bg-[#0b1220] p-4 rounded-xl border border-slate-700">

      <div>
        <p className="text-white font-medium">
          {doc.documentType}
        </p>
        <p className="text-xs text-slate-400">
          Status: {doc.verificationStatus}
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href={doc.documentUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 text-sm rounded
                     bg-blue-600/20 text-blue-400"
        >
          View
        </a>

        <button
          onClick={verify}
          className="px-3 py-1 text-sm rounded
                     bg-green-600/20 text-green-400"
        >
          Verify
        </button>

        <button
          onClick={reject}
          className="px-3 py-1 text-sm rounded
                     bg-red-600/20 text-red-400"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AdminDocumentCard;
