import NavGssys from "@/components/gssys/NavGssys";
import {
  FaShoppingCart,
  FaHome,
  FaStar,
  FaCog,
  FaBell,
  FaQuestionCircle,
  FaPowerOff,
  FaBars,
} from "react-icons/fa";

export default function HeaderGssys() {
  return (
    <>
      {/* TOP NAVBAR / HEADER */}
      <header className="bg-[#0f3c5f] text-white px-4 py-2 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <button className="text-gray-300 hover:text-white p-1">
            <FaBars className="w-4 h-4" />
          </button>
          <span className="font-bold text-base tracking-wider text-red-500">
            ORACLE
          </span>
          <span className="italic text-sm text-gray-200">iProcurement</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">
            <FaShoppingCart className="w-4 h-4" />
          </button>
          <button className="hover:text-gray-300">
            <FaHome className="w-4 h-4" />
          </button>
          <button className="hover:text-gray-300">
            <FaStar className="w-4 h-4" />
          </button>
          <button className="hover:text-gray-300">
            <FaCog className="w-4 h-4" />
          </button>

          {/* Notification Bell with Badge */}
          <div className="relative cursor-pointer">
            <FaBell className="w-4 h-4 hover:text-gray-300" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black font-bold text-[9px] rounded-full px-1">
              99+
            </span>
          </div>

          <span className="text-gray-300 ml-2">
            Logged In As <strong className="text-white">17604</strong>
          </span>
          <button className="hover:text-gray-300">
            <FaQuestionCircle className="w-4 h-4" />
          </button>
          <button className="hover:text-gray-300">
            <FaPowerOff className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* TABS NAVIGATION */}
      <NavGssys />

      {/* QUICK SWITCHER BANNER */}
      {/* <QuickSwitcherBannerGssys
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </>
  );
}
