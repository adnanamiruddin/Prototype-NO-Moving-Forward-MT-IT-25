import React, { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import {
  FileSpreadsheet,
  CreditCard,
  Printer,
  ChevronRight,
  ChevronDown,
  ChevronsRight,
  Download,
  List,
  Menu,
  Home,
  Clock,
  User,
  X,
} from "lucide-react";

// ==========================================
// DATA DUMMY & STATUS STYLES
// ==========================================
const STATUS_DATA = [
  { label: "Survey, belum ada hasil", count: 1, color: "#2563EB" },
  { label: "Survey, proses komite", count: 0, color: "#EAB308" },
  { label: "Approve - Cek dokumen", count: 7, color: "#84CC16" },
  { label: "Batal", count: 45, color: "#EC4899" },
  { label: "Reject", count: 12, color: "#000000" },
  { label: "Cancel PO", count: 1, color: "#FEF08A" },
  { label: "Tagihan masuk belum cair", count: 1, color: "#991B1B" },
  {
    label: "Kontrak sudah terbentuk belum send to AP",
    count: 0,
    color: "#9CA3AF",
  },
  { label: "Dana sudah cair", count: 5, color: "#06B6D4" },
  { label: "Unknown", count: 0, color: "#A3E635" },
];

const SAMPLE_ORDERS = [
  {
    id: 1,
    noOrder: "",
    noAplikasi: "11126145892",
    tglOrder: "15-Jul-2026",
    namaPemohon: "ERA WATI",
    namaBpkb: "BEAT SPORTY CBS",
    cabangFif: "11100 - CILEDUG",
    noRangka: "MH1JME120TK281581",
    noMesin: "JME1E2280577",
    timeService: "0 Hari 4 Jam 30 Menit",
    statusOrder: "Tagihan masuk belum cair",

    detailKendala: "Customer belum memberikan ttd pasangan.",

    lastUpdate: "01 Aug 2026 15:23 WIB",

    estimasi: "01 Aug 2026 17:00 WIB",

    riwayat: [
      "15:05 WIB - Kontrak berhasil terbentuk",
      "15:10 WIB - Tagihan berhasil dibuat",
      "15:23 WIB - Menunggu transfer dana",
    ],
  },
];

// Filter data chart yang count-nya > 0 untuk PieChart
const chartPieData = STATUS_DATA.filter((item) => item.count > 0);

// ==========================================
// SUB-KOMPONEN 1: NAVBAR (gaya DAF / FIFCORE)
// ==========================================
function Navbar({ onToggleSidebar }) {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-md border-b border-blue-700">
      {/* Top Bar with Brand & System Info */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleSidebar}
            className="p-1 rounded hover:bg-blue-700/50 text-blue-200 transition-colors"
            title="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo Area */}
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

        {/* User Info / Quick Actions */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="hidden sm:flex items-center space-x-2 bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-700/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-blue-100 font-medium">
              Environment: DIS System
            </span>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <User className="w-4 h-4 text-blue-300" />
            <span className="font-semibold">DISBURSEMENT PROCESSOR</span>
          </div>
        </div>
      </div>

      {/* Browser Tab Style Sub-bar */}
      <div className="flex items-center px-2 bg-blue-950/60 border-t border-blue-800/80 text-xs overflow-x-auto">
        <div className="flex items-center space-x-1 pt-1">
          <div className="bg-slate-100 text-slate-800 px-4 py-1.5 rounded-t font-semibold flex items-center space-x-2 shadow-sm border-t-2 border-blue-600">
            <FileSpreadsheet className="w-3.5 h-3.5 text-blue-700" />
            <span>Pending BPKB</span>
            <button className="text-slate-400 hover:text-slate-600 ml-1">
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="text-blue-200 hover:bg-blue-800/50 px-3 py-1.5 rounded-t font-medium flex items-center space-x-2 cursor-pointer transition-colors">
            <span>Disbursement</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==========================================
// SUB-KOMPONEN 2: SIDEBAR (gaya Navigator DAF / FIFCORE)
// list menu tetap: Pending BPKB, Disbursement, Report Cetak BAST
// ==========================================
function Sidebar({ isOpen, activeTab, setActiveTab }) {
  const [isProcessorOpen, setIsProcessorOpen] = useState(true);

  if (!isOpen) return null;

  const menuItems = [
    { label: "Pending BPKB", icon: CreditCard },
    { label: "Disbursement", icon: CreditCard },
    { label: "Report Cetak BAST", icon: Printer },
  ];

  return (
    <aside className="w-64 bg-slate-100 border-r border-slate-300 flex flex-col h-full shadow-sm select-none shrink-0">
      {/* Sidebar Header */}
      <div className="bg-slate-200 px-3 py-2 border-b border-slate-300 flex items-center justify-between text-slate-700">
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
          Navigator
        </span>
        <button className="text-slate-500 hover:text-slate-800">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Tab Selectors (Responsibility / Menu) */}
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

      {/* Tree Content Area */}
      <div className="p-2 overflow-y-auto flex-1 text-xs text-slate-700">
        <div className="mb-2">
          {/* Main Category Accordion Header */}
          <button
            onClick={() => setIsProcessorOpen(!isProcessorOpen)}
            className="w-full flex items-center space-x-1.5 text-left font-bold text-slate-800 hover:text-blue-800 py-1"
          >
            {isProcessorOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            )}
            <span className="text-[11px] tracking-tight uppercase">
              DISBURSEMENT PROCESSOR CABANG
            </span>
          </button>

          {/* Sub Menu Items */}
          {isProcessorOpen && (
            <div className="ml-4 border-l border-slate-300 pl-2 space-y-0.5 mt-1">
              <a
                href="#home"
                className="flex items-center space-x-2 py-1 px-2 text-slate-700 hover:bg-slate-200 rounded font-medium"
              >
                <Home className="w-3.5 h-3.5 text-slate-500" />
                <span>Home</span>
              </a>

              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === 0;
                return (
                  <a
                    key={item.label}
                    href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`flex items-center space-x-2 py-1 px-2 rounded font-medium ${
                      isActive
                        ? "bg-blue-100 text-blue-900 font-bold border-l-2 border-blue-700"
                        : "text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

// ==========================================
// SUB-KOMPONEN 3: BREADCRUMB
// ==========================================
function Breadcrumb() {
  return (
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300 flex items-center justify-between text-xs">
      <div className="flex items-center space-x-2 font-bold text-blue-900 tracking-wide">
        <span>DISBURSEMENT</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-blue-700 uppercase">PENDING BPKB</span>
      </div>
      <div className="text-slate-500 text-[11px] flex items-center space-x-2">
        <Clock className="w-3 h-3" />
        <span>Last Updated: {new Date().toLocaleDateString("id-ID")}</span>
      </div>
    </div>
  );
}

// ==========================================
// SUB-KOMPONEN 4: CHART & LEGEND CARD
// ==========================================
function SummaryChartSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Pie Chart */}
        <div className="md:col-span-5 h-[280px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartPieData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={110}
                paddingAngle={0}
                dataKey="count"
              >
                {chartPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `${value} Data`,
                  props.payload.label,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Legend List */}
        <div className="md:col-span-7 flex flex-col gap-1.5 justify-center">
          {STATUS_DATA.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <span
                className="w-7 h-6 flex items-center justify-center text-white text-xs font-bold rounded"
                style={{
                  backgroundColor: item.color,
                  color: ["#FEF08A", "#EAB308", "#A3E635", "#9CA3AF"].includes(
                    item.color,
                  )
                    ? "#000"
                    : "#FFF",
                }}
              >
                {item.count}
              </span>
              <span className="text-slate-700 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-KOMPONEN 5: ORDER TRACKING TABLE
// ==========================================
function OrderTrackingTable() {
  const [filterStatus, setFilterStatus] = useState("Tagihan masuk belum cair");
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800">Order Tracking</h2>
        <button className="flex items-center gap-2 bg-[#2b72a8] hover:bg-[#205781] text-white text-sm font-medium px-4 py-2 rounded transition-colors">
          <span>Download</span>
          <FileSpreadsheet className="w-4 h-4" />
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs text-slate-700">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200 text-slate-800 font-semibold text-center">
              <th className="p-3 border-r border-gray-200 min-w-[100px]">
                No. Order
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[120px]">
                No. Aplikasi
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[100px]">
                Tgl Order
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[130px]">
                Nama Pemohon
              </th>
              <th
                className="p-3 border-r border-gray-200 min-w-[180px]"
                colSpan={2}
              >
                Objek
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[160px]">
                No. Rangka
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[150px]">
                No. Mesin
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[120px]">
                Time Service (HH:MM)
              </th>
              <th className="p-3 border-r border-gray-200 min-w-[200px]">
                Status Order
              </th>
              <th className="p-3 min-w-[80px]">Action</th>
              <th className="p-3 min-w-[80px]">Status Detail</th>
            </tr>
            <tr className="bg-slate-50 border-b border-gray-200 text-center font-medium">
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200 text-slate-600 font-normal">
                Nama BPKB
              </th>
              <th className="p-2 border-r border-gray-200 text-slate-600 font-normal">
                Cabang FIFGroup
              </th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2 border-r border-gray-200"></th>
              <th className="p-2"></th>
            </tr>
            {/* Filter Input Row */}
            <tr className="bg-white border-b border-gray-200">
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200"></td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500"
                />
              </td>
              <td className="p-2 border-r border-gray-200"></td>
              <td className="p-2 border-r border-gray-200">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-blue-500 bg-white"
                >
                  <option value="Tagihan masuk belum cair">
                    Tagihan masuk belum cair
                  </option>
                  <option value="Dana sudah cair">Dana sudah cair</option>
                  <option value="Approve - Cek dokumen">
                    Approve - Cek dokumen
                  </option>
                </select>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_ORDERS.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 hover:bg-slate-50 text-center"
              >
                <td className="p-3 border-r border-gray-200">
                  {row.noOrder || "-"}
                </td>
                <td className="p-3 border-r border-gray-200 font-mono text-slate-800">
                  {row.noAplikasi}
                </td>
                <td className="p-3 border-r border-gray-200">{row.tglOrder}</td>
                <td className="p-3 border-r border-gray-200 font-medium">
                  {row.namaPemohon}
                </td>
                <td className="p-3 border-r border-gray-200 font-medium text-slate-800">
                  {row.namaBpkb}
                </td>
                <td className="p-3 border-r border-gray-200">
                  {row.cabangFif}
                </td>
                <td className="p-3 border-r border-gray-200 font-mono">
                  {row.noRangka}
                </td>
                <td className="p-3 border-r border-gray-200 font-mono">
                  {row.noMesin}
                </td>
                <td className="p-3 border-r border-gray-200">
                  {row.timeService}
                </td>
                <td className="p-3 border-r border-gray-200">
                  <span className="inline-block bg-[#991b1b] text-white font-medium px-3 py-1.5 rounded text-xs">
                    {row.statusOrder}
                  </span>
                </td>
                {/* Action Existing */}
                <td className="p-3 text-center">
                  <button className="bg-[#059669] hover:bg-[#047857] text-white p-2 rounded transition-colors">
                    <List className="w-4 h-4" />
                  </button>
                </td>
                {/* Improvement */}
                <td className="p-3 text-center">
                  <button
                    onClick={() => setSelectedOrder(row)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded transition-colors cursor-pointer"
                  >
                    Lihat Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1 border border-gray-300 rounded hover:bg-slate-50 font-medium">
            1
          </button>
          <span className="px-2">dari 1</span>
          <button className="p-1 border border-gray-300 rounded hover:bg-slate-50">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-slate-50">
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>data per halaman</span>
          </div>
          <span>1 - 1/1</span>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl">
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="font-bold text-lg">Detail Status Pencairan</h2>

              <button onClick={() => setSelectedOrder(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs text-gray-500 mb-1">Status</p>

                <span className="inline-block bg-red-800 text-white px-3 py-1 rounded text-sm">
                  {selectedOrder.statusOrder}
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Detail Kendala</p>

                <p className="text-sm">{selectedOrder.detailKendala}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Last Update</p>

                  <p className="text-sm">{selectedOrder.lastUpdate}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Estimasi Cair</p>

                  <p className="text-sm">{selectedOrder.estimasi}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Riwayat Proses</p>

                <ul className="space-y-2">
                  {selectedOrder.riwayat.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm border-l-2 border-blue-500 pl-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// UTAMA: MAIN DASHBOARD PAGE (DIS)
// ==========================================
export default function DashboardSlicingAfterPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("responsibility");

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100 font-sans overflow-hidden">
      {/* 1. Navbar bergaya DAF / FIFCORE */}
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* 2. Main Layout Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar bergaya Navigator DAF / FIFCORE, menu list tetap sama */}
        <Sidebar
          isOpen={isSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Content Panel */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Breadcrumb />
          <div className="p-6 space-y-6">
            <SummaryChartSection />
            <OrderTrackingTable />
          </div>
        </main>
      </div>
    </div>
  );
}
