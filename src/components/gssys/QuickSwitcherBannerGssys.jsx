export default function QuickSwitcherBannerGssys({
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="bg-blue-50 border-b border-blue-200 px-4 py-1.5 text-[11px] flex justify-between items-center text-blue-900">
      <span>📍 Mode Switch Halaman (Next.js Demo):</span>
      <div className="space-x-2">
        <button
          onClick={() => setCurrentPage("search")}
          className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
            currentPage === "search"
              ? "bg-blue-700 text-white font-medium"
              : "bg-white border border-blue-300 text-blue-800"
          }`}
        >
          Halaman 1 (Pengajuan PR di GSSYS)
        </button>
        <button
          onClick={() => setCurrentPage("requisition")}
          className={`px-2.5 py-0.5 rounded text-xs transition-colors ${
            currentPage === "requisition"
              ? "bg-blue-700 text-white font-medium"
              : "bg-white border border-blue-300 text-blue-800"
          }`}
        >
          Halaman 2 (Edit & Submit Requisition)
        </button>
      </div>
    </div>
  );
}
