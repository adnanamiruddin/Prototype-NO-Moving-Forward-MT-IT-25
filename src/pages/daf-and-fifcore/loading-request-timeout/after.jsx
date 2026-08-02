import { useState } from "react";
import {
  FiFolder,
  FiSearch,
  FiChevronRight,
  FiChevronDown,
  FiHome,
  FiFileText,
  FiRefreshCw,
  FiCheckCircle,
  FiX,
  FiEye,
  FiMenu,
  FiClock,
  FiUser,
  FiAlertTriangle,
} from "react-icons/fi";

// ============================================================================
// INITIAL DOCUMENT LIST DATA
// ============================================================================
const INITIAL_DOCUMENTS = [
  { id: "1", name: "STNK", code: "STNK_VEHICLE", file: "", status: "empty" },
  {
    id: "2",
    name: "AC VEHICLE",
    code: "AC_VEHICLE",
    file: "",
    status: "empty",
  },
  {
    id: "3",
    name: "AC NON VEHICLE",
    code: "AC_NON_VEHICLE",
    file: "",
    status: "empty",
  },
  {
    id: "4",
    name: "PO VEHICLE",
    code: "PO_VEHICLE",
    file: "",
    status: "empty",
  },
  {
    id: "5",
    name: "PO NON VEHICLE",
    code: "PO_NON_VEHICLE",
    file: "",
    status: "empty",
  },
  {
    id: "6",
    name: "Foto Karoseri",
    code: "FOTO_KAROSERI",
    file: "",
    status: "empty",
  },
  {
    id: "7",
    name: "Foto Rumah Konsumen",
    code: "FOTO_RUMAH_KONSUMEN",
    file: "50000080105ae335cd21784262253757.C161F45_1_1",
    status: "uploaded",
  },
  {
    id: "8",
    name: "Foto Lingkungan",
    code: "FOTO_LINGKUNGAN_1",
    file: "50000080105ae335cd21784262253757.C166F45_1_1",
    status: "uploaded",
  },
  {
    id: "9",
    name: "Foto Lingkungan 2",
    code: "FOTO_LINGKUNGAN_2",
    file: "50000080105ae335cd21784262253757.C171F45_1_1",
    status: "uploaded",
  },
  {
    id: "10",
    name: "Foto Lingkungan 3",
    code: "FOTO_LINGKUNGAN_3",
    file: "50000080105ae335cd21784262253757.C176F45_1_1",
    status: "uploaded",
  },
  {
    id: "11",
    name: "Kwitansi Tanda Terima Dana / Surat Pengakuan Transfer (UFI)",
    code: "KWITANSI_UFI",
    file: "",
    status: "empty",
  },
  {
    id: "12",
    name: "Surat Pernyataan Penjamin Unit (UFI)",
    code: "PENJAMIN_UFI",
    file: "",
    status: "empty",
  },
  {
    id: "13",
    name: "Penagihan Dealer (UFI)",
    code: "PENAGIHAN_DEALER",
    file: "",
    status: "empty",
  },
  {
    id: "14",
    name: "Surat Pernyataan Pertanggungjawaban Pembiayaan",
    code: "SURAT_PERNYATAAN_PEMBIAYAAN",
    file: "WhatsApp Image 2026-07-17 at 11.18.35.jpeg",
    status: "uploaded",
  },
  {
    id: "15",
    name: "SPH (Surat Pendaftaran Pergi Haji)",
    code: "SPH_HAJI",
    file: "",
    status: "empty",
  },
  {
    id: "16",
    name: "Jemaah Haji Reguler",
    code: "HAJI_REGULER",
    file: "",
    status: "empty",
  },
  {
    id: "17",
    name: "FIFGO Konsumen",
    code: "FIFGO_KONSUMEN",
    file: "",
    status: "empty",
  },
  {
    id: "18",
    name: "Kepemilikan Mobil",
    code: "KEPEMILIKAN_MOBIL",
    file: "",
    status: "empty",
  },
  {
    id: "19",
    name: "NPWP PERUSAHAAN (SPT PPH 21)",
    code: "NPWP_PERUSAHAAN",
    file: "",
    status: "empty",
  },
  {
    id: "20",
    name: "COPY SIUP PERUSAHAAN",
    code: "SIUP_PERUSAHAAN",
    file: "",
    status: "empty",
  },
  {
    id: "21",
    name: "COPY TDP PERUSAHAAN",
    code: "TDP_PERUSAHAAN",
    file: "",
    status: "empty",
  },
  {
    id: "22",
    name: "TERIMA UNIT",
    code: "TERIMA_UNIT",
    file: "",
    status: "empty",
  },
  {
    id: "23",
    name: "PERNYATAAN KONSUMEN",
    code: "PERNYATAAN_KONSUMEN",
    file: "",
    status: "empty",
  },
  {
    id: "24",
    name: "KTP PEMOHON DENGAN KTP DAN FOTO",
    code: "KTP_PEMOHON_FOTO",
    file: "",
    status: "empty",
  },
];

// ============================================================================
// COMPONENT 1: TOP NAVBAR
// ============================================================================
export const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-md border-b border-blue-700">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleSidebar}
            className="p-1 rounded hover:bg-blue-700/50 text-blue-200 transition-colors"
            title="Toggle Sidebar"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-blue-900 shadow-sm text-sm tracking-tighter">
              FIF
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none tracking-wide text-white">
                FIFGROUP
              </h1>
              <span className="text-[10px] text-blue-200 uppercase tracking-widest block font-medium">
                member of ASTRA
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="hidden sm:flex items-center space-x-2 bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-700/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-blue-100 font-medium">
              Environment: DAFF System
            </span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <FiUser className="w-4 h-4 text-blue-300" />
            <span className="font-semibold">CREDIT PROCESSOR</span>
          </div>
        </div>
      </div>
      <div className="flex items-center px-2 bg-blue-950/60 border-t border-blue-800/80 text-xs overflow-x-auto">
        <div className="flex items-center space-x-1 pt-1">
          <div className="bg-slate-100 text-slate-800 px-4 py-1.5 rounded-t font-semibold flex items-center space-x-2 shadow-sm border-t-2 border-blue-600">
            <FiFileText className="w-3.5 h-3.5 text-blue-700" />
            <span>List Evidence</span>
            <button className="text-slate-400 hover:text-slate-600 ml-1">
              <FiX className="w-3 h-3" />
            </button>
          </div>
          <div className="text-blue-200 hover:bg-blue-800/50 px-3 py-1.5 rounded-t font-medium flex items-center space-x-2 cursor-pointer transition-colors">
            <span>Tracking Order</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// ============================================================================
// COMPONENT 2: SIDEBAR NAVIGATOR
// ============================================================================
export const Sidebar = ({ isOpen, activeTab, setActiveTab }) => {
  const [isProcessorOpen, setIsProcessorOpen] = useState(true);
  const [isTrackingOpen, setIsTrackingOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-slate-100 border-r border-slate-300 flex flex-col h-full shadow-sm select-none shrink-0">
      <div className="bg-slate-200 px-3 py-2 border-b border-slate-300 flex items-center justify-between text-slate-700">
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
          Navigator
        </span>
        <button className="text-slate-500 hover:text-slate-800">
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex border-b border-slate-300 bg-slate-200/60 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("responsibility")}
          className={`flex-1 py-1.5 text-center transition-colors ${
            activeTab === "responsibility"
              ? "bg-slate-100 text-blue-900 border-b-2 border-blue-800 font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Responsibility
        </button>
        <button
          onClick={() => setActiveTab("menu")}
          className={`flex-1 py-1.5 text-center transition-colors ${
            activeTab === "menu"
              ? "bg-slate-100 text-blue-900 border-b-2 border-blue-800 font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Menu
        </button>
      </div>
      <div className="p-2 overflow-y-auto flex-1 text-xs text-slate-700">
        <div className="mb-2">
          <button
            onClick={() => setIsProcessorOpen(!isProcessorOpen)}
            className="w-full flex items-center space-x-1.5 text-left font-bold text-slate-800 hover:text-blue-800 py-1"
          >
            {isProcessorOpen ? (
              <FiChevronDown className="w-3.5 h-3.5 text-slate-500" />
            ) : (
              <FiChevronRight className="w-3.5 h-3.5 text-slate-500" />
            )}
            <span className="text-[11px] tracking-tight uppercase">
              PROCESSOR CREDIT CABANG
            </span>
          </button>
          {isProcessorOpen && (
            <div className="ml-4 border-l border-slate-300 pl-2 space-y-0.5 mt-1">
              <a
                href="#home"
                className="flex items-center space-x-2 py-1 px-2 text-slate-700 hover:bg-slate-200 rounded font-medium"
              >
                <FiHome className="w-3.5 h-3.5 text-slate-500" />
                <span>Home</span>
              </a>
              <div className="py-1 px-2 text-slate-700 hover:bg-slate-200 rounded cursor-pointer font-medium flex items-center space-x-1.5">
                <FiChevronRight className="w-3 h-3 text-slate-400" />
                <span>HISTORY</span>
              </div>
              <div>
                <button
                  onClick={() => setIsTrackingOpen(!isTrackingOpen)}
                  className="w-full flex items-center justify-between py-1 px-2 text-slate-800 hover:bg-slate-200 rounded font-medium text-left"
                >
                  <div className="flex items-center space-x-1.5">
                    {isTrackingOpen ? (
                      <FiChevronDown className="w-3 h-3 text-slate-500" />
                    ) : (
                      <FiChevronRight className="w-3 h-3 text-slate-500" />
                    )}
                    <span>TRACKING ORDER</span>
                  </div>
                </button>
                {isTrackingOpen && (
                  <div className="ml-4 pl-2 border-l border-slate-300 space-y-0.5 mt-0.5">
                    <a
                      href="#tracking-order"
                      className="block py-1 px-2 text-slate-600 hover:bg-slate-200 rounded"
                    >
                      TRACKING ORDER
                    </a>
                    <a
                      href="#list-evidence"
                      className="block py-1 px-2 bg-blue-100 text-blue-900 font-bold rounded border-l-2 border-blue-700"
                    >
                      LIST EVIDENCE
                    </a>
                  </div>
                )}
              </div>
              <div className="py-1 px-2 text-slate-700 hover:bg-slate-200 rounded cursor-pointer font-medium flex items-center space-x-1.5">
                <FiChevronRight className="w-3 h-3 text-slate-400" />
                <span>REPORT</span>
              </div>
              <div className="py-1 px-2 text-slate-700 hover:bg-slate-200 rounded cursor-pointer font-medium flex items-center space-x-1.5">
                <FiChevronRight className="w-3 h-3 text-slate-400" />
                <span>REASSIGN</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

// ============================================================================
// COMPONENT 3: BREADCRUMB & HEADER PATH
// ============================================================================
export const Breadcrumb = () => {
  return (
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300 flex items-center justify-between text-xs">
      <div className="flex items-center space-x-2 font-bold text-blue-900 tracking-wide">
        <span>TRACKING ORDER</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-blue-700 uppercase">LIST EVIDENCE</span>
      </div>
      <div className="text-slate-500 text-[11px] flex items-center space-x-2">
        <FiClock className="w-3 h-3" />
        <span>Last Updated: {new Date().toLocaleDateString("id-ID")}</span>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 4: SINGLE EVIDENCE ROW ITEM
// ============================================================================
export const EvidenceRow = ({
  item,
  uploadingId,
  onFileSelect,
  onViewFile,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center py-1.5 px-3 border-b border-slate-200 hover:bg-slate-50 transition-colors text-xs">
      <div className="md:col-span-5 font-semibold text-slate-700 truncate pr-2 flex items-center space-x-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block"></span>
        <span title={item.name}>{item.name}</span>
      </div>
      <div className="md:col-span-5 flex items-center space-x-2">
        <input
          type="text"
          readOnly
          value={item.file || ""}
          placeholder="No file attached"
          className={`w-full px-2.5 py-1 text-xs border rounded shadow-inner outline-none transition-all ${
            item.file
              ? "bg-blue-50/50 border-blue-300 text-slate-800 font-mono font-medium"
              : "bg-white border-slate-300 text-slate-400 italic"
          }`}
        />
      </div>
      <div className="md:col-span-2 flex items-center space-x-1.5 justify-end">
        {/* Upload / Folder Button */}
        <label
          className="p-1.5 bg-gradient-to-b from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-amber-900 border border-amber-400 rounded cursor-pointer shadow-sm transition-all active:scale-95 flex items-center justify-center"
          title="Browse / Attachment Folder"
        >
          <FiFolder className="w-3.5 h-3.5" />
          <input
            type="file"
            className="hidden"
            onChange={(e) => onFileSelect(item.id, e)}
          />
        </label>

        {/* View / Search Button — triggers loading then timeout popup, abu-abu kalau kosong, aktif kalau ada file */}
        <button
          type="button"
          onClick={() => item.file && onFileSelect(item.id)}
          disabled={!item.file || uploadingId !== null}
          className={`p-1.5 border rounded shadow-sm transition-all flex items-center justify-center ${
            !item.file || uploadingId === item.id
              ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
              : "bg-gradient-to-b from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 border-slate-400 cursor-pointer active:scale-95"
          }`}
          title={item.file ? "View Evidence Detail" : "No File to View"}
        >
          {uploadingId === item.id ? (
            <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <FiSearch className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT 5: MAIN EVIDENCE LIST FORM CONTAINER
// ============================================================================
export const EvidenceFormList = () => {
  const [uploadingId, setUploadingId] = useState(null);
  const [showProcessing, setShowProcessing] = useState(false);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [timeoutDocId, setTimeoutDocId] = useState(null);

  const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFileModal, setSelectedFileModal] = useState(null);

  // Handle File Selection / View simulation
  const handleFileChange = (id) => {
    setUploadingId(id);
    setShowProcessing(true);
    document.body.style.cursor = "wait";

    // Simulate: after 5 seconds, show in-app timeout popup (not browser page)
    setTimeout(() => {
      setShowProcessing(false);
      setUploadingId(null);
      document.body.style.cursor = "default";
      setTimeoutDocId(id);
      setShowTimeoutModal(true);
    }, 5000);
  };

  // Retry the same request
  const handleRetryUpload = () => {
    setShowTimeoutModal(false);
    if (timeoutDocId) {
      handleFileChange(timeoutDocId);
    }
  };

  // OK — close timeout modal
  const handleTimeoutOk = () => {
    setShowTimeoutModal(false);
    setTimeoutDocId(null);
  };

  // Simulate Processing Action
  const handleSimulateProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Processing evidence completed successfully!");
    }, 2000);
  };

  // Filtered documents
  const filteredDocs = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.file.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="p-4 bg-slate-100 min-h-full flex flex-col">
      {/* Filter & Toolbar Area */}
      <div className="bg-white p-3 rounded-t border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center space-x-2 flex-1 max-w-xs">
          <div className="relative w-full">
            <FiSearch className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search document / file name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSimulateProcess}
            disabled={isProcessing}
            className="px-3 py-1.5 bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold text-xs rounded border border-blue-900 shadow-sm flex items-center space-x-1.5 transition-all active:scale-95 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <FiRefreshCw className="w-3 h-3" />
                <span>Process Evidence</span>
              </>
            )}
          </button>
          <button
            onClick={() => setDocuments(INITIAL_DOCUMENTS)}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded border border-slate-400 flex items-center space-x-1 transition-all"
          >
            <FiRefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Document List Panel */}
      <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex-1">
        <div className="bg-slate-100 border-b border-slate-300 px-3 py-2 grid grid-cols-1 md:grid-cols-12 gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
          <div className="md:col-span-5">Document Name / Type</div>
          <div className="md:col-span-5">Attached File Reference</div>
          <div className="md:col-span-2 text-right">Actions</div>
        </div>
        <div className="divide-y divide-slate-100 max-h-[calc(100vh-250px)] overflow-y-auto">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((item) => (
              <EvidenceRow
                key={item.id}
                item={item}
                uploadingId={uploadingId}
                onFileSelect={handleFileChange}
                onViewFile={(doc) => setSelectedFileModal(doc)}
              />
            ))
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              No documents matched your search filter.
            </div>
          )}
        </div>
      </div>

      {/* Status Footer */}
      <div className="mt-3 text-xs text-slate-500 flex justify-between items-center px-1">
        <span>Total Items: {documents.length}</span>
        <span className="text-emerald-700 font-medium">
          Uploaded: {documents.filter((d) => d.file).length} documents
        </span>
      </div>

      {/* MODAL: VIEW EVIDENCE PREVIEW */}
      {selectedFileModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full border border-slate-300 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-blue-900 text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiEye className="w-4 h-4 text-blue-200" />
                <h3 className="font-bold text-xs">Evidence Detail Viewer</h3>
              </div>
              <button
                onClick={() => setSelectedFileModal(null)}
                className="text-blue-200 hover:text-white"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3 text-xs">
              <div>
                <label className="text-slate-500 font-semibold block mb-0.5">
                  Document Type:
                </label>
                <div className="font-bold text-slate-800 text-sm">
                  {selectedFileModal.name}
                </div>
              </div>
              <div>
                <label className="text-slate-500 font-semibold block mb-0.5">
                  File Name / Path:
                </label>
                <div className="bg-slate-100 p-2 rounded font-mono text-slate-700 break-all border border-slate-200">
                  {selectedFileModal.file}
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-800 flex items-start space-x-2">
                <FiCheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  File uploaded and linked to credit proposal evidence storage.
                </span>
              </div>
            </div>
            <div className="bg-slate-100 px-4 py-2.5 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedFileModal(null)}
                className="px-4 py-1.5 bg-slate-700 text-white text-xs font-semibold rounded hover:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY: LOADING PROGRESS */}
      {showProcessing && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 backdrop-blur-[1px]">
          <div className="flex items-center gap-3 bg-[#efefef] border border-[#8c8c8c] px-7 py-4 shadow-[2px_2px_0px_#bdbdbd,-1px_-1px_0px_white]">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full border-[3px] border-gray-400 border-t-gray-700 animate-spin"></div>
            </div>
            <span className="text-[24px] text-gray-700 font-sans">
              Processing...
            </span>
          </div>
        </div>
      )}

      {/* MODAL: REQUEST TIMEOUT (In-App) */}
      {showTimeoutModal && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full border border-slate-300 overflow-hidden animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="bg-red-700 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiAlertTriangle className="w-4 h-4" />
                <h3 className="font-bold text-sm">Request Timeout</h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3 text-xs text-slate-700">
              <p className="leading-relaxed">
                Batas waktu tunggu (timeout) telah tercapai. Sistem tidak dapat
                memproses request ke server dalam waktu yang ditentukan.
              </p>
              <div className="bg-red-50 border border-red-200 rounded p-3 text-red-800">
                <strong>Data input tetap tersimpan.</strong> Kamu tidak perlu
                mengulang pengisian dari awal.
              </div>
            </div>

            {/* Footer Actions: OK & Retry */}
            <div className="bg-slate-100 px-4 py-3 border-t border-slate-200 flex justify-end space-x-2">
              <button
                onClick={handleTimeoutOk}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded border border-slate-400 transition-all"
              >
                OK
              </button>
              <button
                onClick={handleRetryUpload}
                className="px-4 py-2 bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-xs font-semibold rounded border border-blue-900 shadow-sm flex items-center space-x-1.5 transition-all active:scale-95"
              >
                <FiRefreshCw className="w-3 h-3" />
                <span>Retry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// MAIN WRAPPER APP COMPONENT
// ============================================================================
export default function LoadingRequestTimeoutAfterPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("responsibility");

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100 font-sans overflow-hidden">
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Breadcrumb />
          <EvidenceFormList />
        </main>
      </div>
    </div>
  );
}
