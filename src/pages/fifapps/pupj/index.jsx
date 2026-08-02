import { useState } from "react";
import {
  FaSave,
  FaSignOutAlt,
  FaCut,
  FaCopy,
  FaPaste,
  FaPrint,
  FaSearch,
  FaPlay,
  FaTimes,
  FaStepBackward,
  FaChevronLeft,
  FaChevronRight,
  FaStepForward,
  FaPlus,
  FaTrash,
  FaQuestionCircle,
  FaEllipsisH,
  FaDownload,
  FaFileUpload,
} from "react-icons/fa";

/* ================================================================
   CONFIGS
   ================================================================ */

const TOOLBAR_GROUPS = [
  [
    { icon: FaSave, title: "Save", color: "text-blue-700" },
    { icon: FaSignOutAlt, title: "Exit", color: "text-red-600" },
  ],
  [
    { icon: FaCut, title: "Cut", color: "text-gray-600" },
    { icon: FaCopy, title: "Copy", color: "text-gray-600" },
    { icon: FaPaste, title: "Paste", color: "text-gray-600" },
  ],
  [{ icon: FaPrint, title: "Print", color: "text-gray-700" }],
  [
    { icon: FaSearch, title: "Enter Query", color: "text-blue-600" },
    { icon: FaPlay, title: "Execute Query", color: "text-green-600" },
    { icon: FaTimes, title: "Cancel Query", color: "text-red-500" },
  ],
  [
    { icon: FaStepBackward, title: "First Record", color: "text-gray-700" },
    { icon: FaChevronLeft, title: "Previous", color: "text-gray-700" },
    { icon: FaChevronRight, title: "Next", color: "text-gray-700" },
    { icon: FaStepForward, title: "Last Record", color: "text-gray-700" },
  ],
  [
    { icon: FaPlus, title: "Insert", color: "text-green-700" },
    { icon: FaTrash, title: "Delete", color: "text-red-600" },
  ],
  [{ icon: FaQuestionCircle, title: "Help", color: "text-blue-500" }],
];

const TABLE_COLUMNS = [
  { key: "cab", title: "Cab", width: "w-16", align: "text-left" },
  {
    key: "cabangContract",
    title: "Cabang Contract",
    width: "w-36",
    align: "text-left",
  },
  { key: "itemNo", title: "Item No", width: "w-20", align: "text-left" },
  {
    key: "contractNo",
    title: "Contract No",
    width: "w-32",
    align: "text-left",
  },
  { key: "brand", title: "Brand", width: "w-28", align: "text-left" },
  {
    key: "objectCode",
    title: "Object Code",
    width: "w-24",
    align: "text-left",
  },
  { key: "model", title: "Model", width: "w-28", align: "text-left" },
  { key: "tahun", title: "Tahun", width: "w-20", align: "text-left" },
  {
    key: "hargaPengajuan",
    title: "Harga Pengajuan",
    width: "w-32",
    align: "text-right",
  },
];

const SUMMARY_FIELDS = [
  { label: "Total Record", key: "totalRecord" },
  { label: "Total Success Record", key: "successRecord" },
  { label: "Total Failed Record", key: "failedRecord" },
];

const REMARK_BOXES = [
  {
    title: "Status",
    key: "status",
    span: 3,
    readOnly: true,
    isTextarea: false,
  },
  {
    title: "Remark Reason",
    key: "remarkReason",
    span: 4,
    readOnly: false,
    isTextarea: true,
  },
  {
    title: "History Remark",
    key: "historyRemark",
    span: 5,
    readOnly: true,
    isTextarea: true,
  },
];

/* ================================================================
   1. MENU BAR
   ================================================================ */
const MenuBar = () => (
  <div className="bg-[#e5e9f0] border-b border-gray-400 px-2 py-1 text-xs text-gray-800 flex justify-between items-center select-none">
    <div className="flex gap-4">
      {["Action", "Edit", "Query", "Help", "Window"].map((m) => (
        <span
          key={m}
          className="cursor-pointer hover:bg-blue-200 px-1.5 py-0.5 rounded"
        >
          {m}
        </span>
      ))}
    </div>
    <span className="text-[10px] text-gray-500">FIFAPPS12c</span>
  </div>
);

/* ================================================================
   2. TOOLBAR
   ================================================================ */
const ToolBar = () => (
  <div className="bg-[#f0f4f8] border-b border-gray-300 px-2 py-1 flex items-center gap-1 text-gray-700 shadow-sm">
    {TOOLBAR_GROUPS.map((group, gi) => (
      <div key={gi} className="flex items-center gap-1">
        {group.map(({ icon: Icon, title, color }) => (
          <button
            key={title}
            title={title}
            className="p-1 hover:bg-gray-200 rounded border border-transparent hover:border-gray-400"
          >
            <Icon className={`w-3.5 h-3.5 ${color}`} />
          </button>
        ))}
        {gi < TOOLBAR_GROUPS.length - 1 && (
          <div className="h-4 w-[1px] bg-gray-300 mx-1" />
        )}
      </div>
    ))}
  </div>
);

/* ================================================================
   3. FORM HEADER
   ================================================================ */
const FormHeaderInfo = () => (
  <div className="bg-[#3b5998] text-white px-3 py-1 flex justify-between items-center text-xs font-semibold">
    <div className="flex gap-6 items-center">
      <span className="uppercase tracking-wider">
        PENGAJUAN UNIT PERSIAPAN JUAL
      </span>
      <span>Date : 30/07/2026</span>
      <span>Form : RITRNF307/RITRNF307.fmx</span>
      <span>User : Muhidin</span>
      <span>Office : 12300</span>
    </div>
    <span className="text-xs text-gray-200 font-mono">22-07-2025 09:35 AM</span>
  </div>
);

/* ================================================================
   4. RECORD SUMMARY BOX
   ================================================================ */
const RecordSummaryBox = ({ data }) => (
  <div className="border border-gray-400 bg-[#e8ecef] p-2 rounded w-[260px] text-xs space-y-1.5 shadow-sm">
    {SUMMARY_FIELDS.map(({ label, key }) => (
      <div key={key} className="flex justify-between items-center">
        <label className="text-gray-700 font-medium">{label} :</label>
        <input
          type="text"
          readOnly
          value={data[key] || ""}
          className="w-24 bg-[#d9e1e8] border border-gray-400 px-1 py-0.5 text-right font-mono text-xs rounded-sm focus:outline-none"
        />
      </div>
    ))}
    <div className="pt-1">
      <button
        disabled
        className="w-full bg-gray-300 text-gray-500 border border-gray-400 py-1 px-2 text-xs rounded cursor-not-allowed flex items-center justify-center gap-1"
      >
        <FaDownload className="w-3 h-3" /> Download Failure Record
      </button>
    </div>
  </div>
);

/* ================================================================
   5. FORM CONTROLS
   ================================================================ */
const FormControls = ({
  formData,
  onChange,
  onBrowse,
  onDownloadTemplate,
  onUpload,
}) => (
  <div className="grid grid-cols-12 gap-4 items-start text-xs">
    {/* Left Inputs */}
    <div className="col-span-8 space-y-2">
      {/* Request No */}
      <div className="flex items-center gap-2">
        <label className="w-28 text-right font-medium text-gray-700">
          Request No
        </label>
        <div className="flex items-center gap-1">
          <input
            type="text"
            name="requestNo"
            value={formData.requestNo}
            onChange={onChange}
            className="w-44 bg-amber-50 border border-gray-400 px-2 py-0.5 rounded-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-200 border border-gray-400 px-1.5 py-0.5 rounded hover:bg-gray-300 active:bg-gray-400">
            <FaEllipsisH className="w-3 h-3 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Type */}
      <div className="flex items-center gap-2">
        <label className="w-28 text-right font-medium text-gray-700">
          Type
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={onChange}
          className="w-44 bg-amber-50 border border-gray-400 px-1 py-0.5 rounded-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">-- Select Type --</option>
          <option value="TYPE_A">Type A</option>
          <option value="TYPE_B">Type B</option>
        </select>
      </div>

      {/* File To Upload */}
      <div className="flex items-center gap-2">
        <label className="w-28 text-right font-medium text-gray-700">
          File To Upload
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={formData.filePath}
            className="w-80 bg-gray-200 border border-gray-400 px-2 py-0.5 rounded-sm focus:outline-none"
          />
          <button
            type="button"
            onClick={onBrowse}
            className="bg-gray-200 border border-gray-400 px-3 py-0.5 rounded hover:bg-gray-300 font-medium"
          >
            Browse
          </button>
          <button
            type="button"
            onClick={onDownloadTemplate}
            className="bg-gray-200 border border-gray-400 px-3 py-0.5 rounded hover:bg-gray-300 font-medium text-blue-800"
          >
            Download Template
          </button>
        </div>
      </div>

      {/* Upload Button */}
      <div className="pl-[7.5rem] pt-1">
        <button
          type="button"
          onClick={onUpload}
          className="bg-gray-200 border border-gray-400 px-4 py-1 rounded text-gray-700 hover:bg-gray-300 active:bg-gray-400 font-medium flex items-center gap-1.5 shadow-xs"
        >
          <FaFileUpload className="w-3.5 h-3.5 text-blue-600" /> Upload File
        </button>
      </div>
    </div>

    {/* Right Summary */}
    <div className="col-span-4 flex justify-end">
      <RecordSummaryBox data={formData} />
    </div>
  </div>
);

/* ================================================================
   6. DATA TABLE
   ================================================================ */
const DataTableGrid = ({ data }) => {
  const rows = data.length > 0 ? data : Array.from({ length: 7 });

  return (
    <div className="border border-gray-400 bg-white overflow-x-auto rounded-sm shadow-inner">
      <table className="w-full border-collapse text-xs text-left">
        <thead>
          <tr className="bg-[#e2e8f0] border-b border-gray-400 text-gray-700 font-semibold select-none">
            {TABLE_COLUMNS.map(({ title, width }) => (
              <th
                key={title}
                className={`p-1.5 border-r border-gray-300 whitespace-nowrap ${width}`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-300 hover:bg-blue-50 transition-colors"
            >
              {TABLE_COLUMNS.map(({ key, align }) => (
                <td
                  key={key}
                  className="p-1 border-r border-gray-300 bg-[#e2e8f0]/40"
                >
                  <input
                    type="text"
                    value={row?.[key] || ""}
                    readOnly
                    className={`w-full bg-transparent border-none focus:outline-none ${align}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ================================================================
   7. ACTION BUTTONS
   ================================================================ */
const ActionButtons = ({ isEnabled = false }) => {
  const btnClass = (base, active) =>
    `px-5 py-1 border rounded font-medium transition-all ${
      isEnabled
        ? `${active} cursor-pointer`
        : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
    }`;

  return (
    <div className="flex gap-2 text-xs">
      <button
        disabled={!isEnabled}
        className={btnClass(
          "bg-green-600 text-white border-green-700 hover:bg-green-700",
        )}
      >
        Approve
      </button>
      <button
        disabled={!isEnabled}
        className={btnClass(
          "bg-red-600 text-white border-red-700 hover:bg-red-700",
        )}
      >
        Reject
      </button>
    </div>
  );
};

/* ================================================================
   8. STATUS & REMARKS
   ================================================================ */
const StatusAndRemarksSection = ({ formData, onChange }) => (
  <div className="grid grid-cols-12 gap-3 text-xs">
    {REMARK_BOXES.map(({ title, key, span, readOnly, isTextarea }) => (
      <div key={key} className={`col-span-${span}`}>
        <div className="bg-[#2b6cb0] text-white px-2 py-0.5 text-center font-bold tracking-wide rounded-t-sm">
          {title}
        </div>
        <div className="border border-gray-400 border-t-0 p-1 bg-[#d9e1e8] h-28 rounded-b-sm">
          {isTextarea ? (
            <textarea
              name={key}
              value={formData[key] || ""}
              onChange={readOnly ? undefined : onChange}
              readOnly={readOnly}
              className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-gray-800 p-1"
            />
          ) : (
            <input
              type="text"
              readOnly
              value={formData[key] || ""}
              className="w-full bg-transparent border-none focus:outline-none font-semibold text-gray-800"
            />
          )}
        </div>
      </div>
    ))}
  </div>
);

/* ================================================================
   9. STATUS BAR
   ================================================================ */
const StatusBar = () => (
  <div className="bg-[#e5e9f0] border-t border-gray-400 px-3 py-1 flex items-center text-xs text-gray-700 font-mono select-none">
    <div className="w-48 border-r border-gray-300 pr-2">Record: 1/1</div>
    <div className="pl-3">List of Values</div>
  </div>
);

/* ================================================================
   MAIN
   ================================================================ */
export default function PupjPage() {
  const [formData, setFormData] = useState({
    requestNo: "",
    type: "",
    filePath: "",
    totalRecord: "",
    successRecord: "",
    failedRecord: "",
    status: "",
    remarkReason: "",
    historyRemark: "",
  });

  const [tableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const stub = (msg) => () => alert(msg);

  return (
    <div className="min-h-screen bg-[#f4f6f8] font-sans flex flex-col justify-between text-gray-800">
      <div className="flex-1 flex flex-col">
        <MenuBar />
        <ToolBar />
        <FormHeaderInfo />

        <div className="p-4 space-y-4 flex-1 bg-[#f0f4f8]">
          <FormControls
            formData={formData}
            onChange={handleChange}
            onBrowse={stub("Browse file clicked")}
            onDownloadTemplate={stub("Downloading template...")}
            onUpload={stub("Uploading file...")}
          />
          <DataTableGrid data={tableData} />
          <ActionButtons isEnabled={false} />
          <StatusAndRemarksSection
            formData={formData}
            onChange={handleChange}
          />
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
