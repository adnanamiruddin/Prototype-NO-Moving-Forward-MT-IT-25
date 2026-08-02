import HeaderGssys from "@/components/gssys/HeaderGssys";
import {
  FaSearch,
  FaRedoAlt,
  FaChevronRight,
  FaCalendarAlt,
  FaPaperclip,
} from "react-icons/fa";

export default function PrePrDetailPage() {
  return (
    <>
      <HeaderGssys />

      <div className="bg-white p-4 border border-gray-300 space-y-4">
        {/* Action Buttons Top Bar */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <h1 className="text-base font-bold text-gray-800">
              Edit and Submit Requisition
            </h1>
            <p className="text-[11px] text-blue-800">
              <span className="text-blue-600 font-bold">*</span> Indicates
              required field
            </p>
          </div>
          <div className="space-x-2">
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-3 py-1 rounded font-semibold text-xs">
              Save
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-3 py-1 rounded font-semibold text-xs">
              Printable Page
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-3 py-1 rounded font-semibold text-xs">
              Submit
            </button>
          </div>
        </div>

        <h2 className="text-sm font-bold text-gray-800">
          Requisition 12300-209910
        </h2>

        {/* Form Section */}
        <div className="max-w-3xl space-y-2 text-xs">
          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 font-semibold text-gray-700">
              <span className="text-blue-600 font-bold">*</span> Description
            </label>
            <input
              type="text"
              defaultValue="OPX - Kertas HVS A4 WIL 3"
              className="col-span-9 border border-gray-400 rounded px-2 py-0.5 bg-white w-full"
            />
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 text-gray-700">
              Justification
            </label>
            <input
              type="text"
              className="col-span-9 border border-gray-400 rounded px-2 py-0.5 bg-white w-full"
            />
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 text-gray-700">
              P-Card Number
            </label>
            <input
              type="text"
              className="col-span-9 border border-gray-400 rounded px-2 py-0.5 bg-white w-full"
            />
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 font-semibold text-gray-700">
              BRANCH
            </label>
            <div className="col-span-9 space-y-0.5">
              <div className="flex items-center space-x-1">
                <input
                  type="text"
                  defaultValue="12300"
                  className="border border-gray-400 rounded px-2 py-0.5 w-32 bg-white"
                />
                <button className="text-gray-600 hover:text-black">
                  <FaSearch className="w-3 h-3" />
                </button>
              </div>
              <div className="text-[10px] text-blue-800 font-semibold">
                CENTRAL SUPPORT AND WAREHOUSE TAMAN PALEM
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 text-gray-700">
              REQUESTER
            </label>
            <div className="col-span-9 flex items-center space-x-1">
              <input
                type="text"
                className="border border-gray-400 rounded px-2 py-0.5 w-32 bg-white"
              />
              <button className="text-gray-600 hover:text-black">
                <FaSearch className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 text-gray-700">
              PRE-PR NO
            </label>
            <div className="col-span-9 flex items-center space-x-1">
              <input
                type="text"
                className="border border-gray-400 rounded px-2 py-0.5 w-32 bg-white"
              />
              <button className="text-gray-600 hover:text-black">
                <FaSearch className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <label className="col-span-3 text-right pr-3 font-semibold text-gray-700">
              <span className="text-blue-600 font-bold">*</span> SOURCING
            </label>
            <div className="col-span-9 flex items-center space-x-1">
              <input
                type="text"
                className="border border-gray-400 rounded px-2 py-0.5 w-32 bg-white"
              />
              <button className="text-gray-600 hover:text-black">
                <FaSearch className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Table Toolbar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-1">
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded font-semibold text-xs">
              Update
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded font-semibold text-xs">
              Copy
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded font-semibold text-xs">
              Delete
            </button>
            <select className="border border-gray-400 rounded px-1 py-0.5 bg-white text-xs">
              <option>Context</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <button>
              <FaRedoAlt className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full text-[11px] text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 border-b border-gray-300 font-semibold whitespace-nowrap">
              <tr>
                <th className="p-1 border-r border-gray-300">Details</th>
                <th className="p-1 border-r border-gray-300">Select</th>
                <th className="p-1 border-r border-gray-300">Description</th>
                <th className="p-1 border-r border-gray-300">Quantity Unit</th>
                <th className="p-1 border-r border-gray-300">Price</th>
                <th className="p-1 border-r border-gray-300">Amount (IDR)</th>
                <th className="p-1 border-r border-gray-300">Need By Date</th>
                <th className="p-1 border-r border-gray-300">
                  Destination Type
                </th>
                <th className="p-1 border-r border-gray-300">
                  Deliver-To Location
                </th>
                <th className="p-1 border-r border-gray-300">Subinventory</th>
                <th className="p-1 border-r border-gray-300">Nomor Blanket</th>
                <th className="p-1 border-r border-gray-300">Pre-PR Line No</th>
                <th className="p-1 border-r border-gray-300">
                  On Hand Quantity
                </th>
                <th className="p-1 border-r border-gray-300">
                  Supply Quantity
                </th>
                <th className="p-1">Attachments</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-1 text-center border-r border-gray-200">
                  <FaChevronRight className="w-2.5 h-2.5 text-gray-500 inline" />
                </td>
                <td className="p-1 text-center border-r border-gray-200">
                  <input type="checkbox" className="rounded-none" />
                </td>
                <td className="p-1 border-r border-gray-200">
                  OPX - Kertas HVS A4 WIL 3
                </td>
                <td className="p-1 border-r border-gray-200">
                  <div className="flex items-center space-x-1">
                    <input
                      type="text"
                      defaultValue="1"
                      className="border border-gray-300 w-8 text-center py-0.5 bg-white"
                    />
                    <span>Rim</span>
                  </div>
                </td>
                <td className="p-1 border-r border-gray-200">
                  <div className="flex items-center space-x-1">
                    <input
                      type="text"
                      defaultValue="1"
                      className="border border-gray-300 w-8 text-center py-0.5 bg-white"
                    />
                    <span>IDR</span>
                  </div>
                </td>
                <td className="p-1 border-r border-gray-200 text-right">1</td>
                <td className="p-1 border-r border-gray-200">
                  <div className="flex items-center space-x-1">
                    <input
                      type="text"
                      defaultValue="03-Aug-2026 00:00:00"
                      className="border border-gray-300 px-1 py-0.5 text-[10px] w-28 bg-white"
                    />
                    <FaCalendarAlt className="w-3 h-3 text-gray-500 cursor-pointer" />
                  </div>
                </td>
                <td className="p-1 border-r border-gray-200"></td>
                <td className="p-1 border-r border-gray-200">
                  <div className="text-blue-800">
                    <div>12300 INVENTORY T</div>
                    <a
                      href="#"
                      className="text-[10px] underline hover:text-blue-600"
                    >
                      Enter one-time address
                    </a>
                  </div>
                </td>
                <td className="p-1 border-r border-gray-200 text-right">
                  <button>
                    <FaSearch className="w-3 h-3 text-gray-500" />
                  </button>
                </td>
                <td className="p-1 border-r border-gray-200 text-right">
                  <button>
                    <FaSearch className="w-3 h-3 text-gray-500" />
                  </button>
                </td>
                <td className="p-1 border-r border-gray-200 text-right">
                  <button>
                    <FaSearch className="w-3 h-3 text-gray-500" />
                  </button>
                </td>
                <td className="p-1 border-r border-gray-200 text-center">4</td>
                <td className="p-1 border-r border-gray-200 text-center">0</td>
                <td className="p-1 text-center">
                  <FaPaperclip className="w-3 h-3 text-green-600 inline cursor-pointer" />
                </td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td
                  colSpan={5}
                  className="p-1 text-right border-r border-gray-200"
                >
                  Total
                </td>
                <td className="p-1 text-right border-r border-gray-200">1</td>
                <td colSpan={9}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Approvals Bottom Section */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <p className="text-gray-600 text-[11px]">
            Your requisition will be sent to the following list of approvers.
          </p>
          <h3 className="font-bold text-gray-800 text-xs">Approvals</h3>
          <div className="flex space-x-2">
            <div className="h-6 w-32 bg-blue-100 border border-blue-300 rounded"></div>
            <div className="h-6 w-32 bg-blue-100 border border-blue-300 rounded"></div>
            <div className="h-6 w-32 bg-blue-100 border border-blue-300 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
