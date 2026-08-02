export default function NavGssys() {
  return (
    <nav className="bg-[#eef3f8] px-4 pt-2 border-b border-gray-300">
      <div className="flex space-x-1 text-xs">
        <button
          className={`px-3 py-1 cursor-pointer font-semibold border-x rounded-t bg-white border-gray-300 text-blue-900 border-t-4 border-t-blue-800`}
        >
          Shop
        </button>
        <button className="px-3 py-1 cursor-pointer text-gray-600 hover:brightness-110">
          Post Award Requests
        </button>
        <button className="px-3 py-1 cursor-pointer text-gray-600 hover:brightness-110">
          Post Award Requests
        </button>
        <button className="px-3 py-1 cursor-pointer text-gray-600 hover:brightness-110">
          Assessments
        </button>
      </div>

      {/* SUB TABS */}
      <div className="flex space-x-4 py-1 text-[11px] text-blue-800 border-t border-gray-200 -mt-px bg-white px-2">
        <span className="hover:underline cursor-pointer">Stores</span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">Shopping Lists</span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">
          Non-Catalog Request
        </span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">
          Contractor Request
        </span>
      </div>
    </nav>
  );
}
