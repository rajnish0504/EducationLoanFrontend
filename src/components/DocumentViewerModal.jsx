const DocumentViewerModal = ({ fileUrl, onClose }) => {
  if (!fileUrl) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#0b1220] w-[85%] h-[85%] rounded-2xl relative border border-slate-700">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <iframe
          src={fileUrl}
          title="Document Viewer"
          className="w-full h-full rounded-b-2xl"
        />
      </div>
    </div>
  );
};

export default DocumentViewerModal;
