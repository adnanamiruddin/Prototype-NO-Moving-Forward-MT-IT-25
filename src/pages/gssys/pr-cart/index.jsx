import HeaderGssys from "@/components/gssys/HeaderGssys";
import { FaCog, FaRedoAlt, FaCheck } from "react-icons/fa";

export default function PrCartPage() {
  return (
    <>
      <HeaderGssys />

      <div className="space-y-3">
        {/* Search Input Bar */}
        <div className="flex items-center space-x-2 text-xs">
          <label className="font-semibold">Search</label>
          <select className="border border-gray-400 rounded px-1 py-0.5 bg-white">
            <option>ALL ITEM</option>
          </select>
          <input
            type="text"
            defaultValue="%LAKBAN BENING"
            className="border border-gray-400 rounded px-2 py-0.5 w-64 bg-white"
          />
          <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-3 py-0.5 rounded font-semibold text-xs">
            Go
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="text-[11px] text-blue-800 space-x-1">
          <span className="hover:underline cursor-pointer">Shop: Stores</span>
          <span>&gt;</span>
          <span className="hover:underline cursor-pointer">Shop ALL ITEM</span>
          <span>&gt;</span>
        </div>

        {/* Confirmation Alert Box */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 p-2 text-xs flex items-center space-x-2 rounded-sm">
          <span className="bg-green-600 text-white text-[9px] p-0.5 rounded-full">
            <FaCheck />
          </span>
          <div>
            <strong className="block font-semibold">Confirmation</strong>
            Item added successfully to the Cart. Your shopping cart contains 2
            item(s).
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* LEFT CONTENT: Items List */}
          <div className="col-span-12 lg:col-span-9 space-y-4">
            <h1 className="text-sm font-bold text-gray-800">
              Search Results from ALL ITEM: %LAKBAN BENING
            </h1>

            {/* Controls Bar */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by</span>
                <select className="border border-gray-300 rounded px-1 py-0.5 bg-white">
                  <option></option>
                </select>
                <select className="border border-gray-300 rounded px-1 py-0.5 bg-white">
                  <option>Ascending</option>
                </select>
                <button className="bg-gray-200 border border-gray-300 px-2 py-0.5 rounded text-xs font-semibold">
                  Go
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-xs">
                  Hide Images
                </button>
                <div className="flex space-x-2 text-gray-600 border-l pl-2 border-gray-300 items-center">
                  <FaRedoAlt className="w-3 h-3 cursor-pointer" />
                  <FaCog className="w-3 h-3 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* ITEM 1 */}
            <div className="border-b border-gray-200 pb-4 space-y-2">
              <a
                href="#"
                className="text-blue-800 hover:underline font-semibold text-xs block"
              >
                OPX - Lakban Bening (Khusus Tender)
              </a>
              <div className="text-[11px] text-gray-600 flex space-x-4">
                <span>Attachments</span>
                <span className="text-gray-500">None</span>
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[11px] max-w-2xl bg-gray-50/60 p-2 rounded">
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">
                    Shopping Category
                  </span>
                  <span>NON CENTRAL-ATK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Category</span>
                  <span className="text-right">
                    OPX.NON CENTRAL.PERLENGKAPAN KANTOR.ATK.LAKBAN
                  </span>
                </div>
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">Supplier</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Supplier Site
                  </span>
                  <span></span>
                </div>
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">
                    Supplier Item
                  </span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Internal Item Number
                  </span>
                  <span>OPX.LAKBAN BENING (TENDER)</span>
                </div>
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">Source</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Un Number</span>
                  <span></span>
                </div>
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">Price</span>
                  <span>1 IDR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Hazard Class
                  </span>
                  <span></span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <span>Quantity</span>
                  <input
                    type="text"
                    defaultValue="1"
                    className="border border-gray-300 w-12 text-center py-0.5 rounded bg-white"
                  />
                  <span className="text-gray-600">Piece</span>
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded font-semibold text-xs ml-2">
                    Add to Cart
                  </button>
                </div>
                <div className="space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded text-xs font-semibold">
                    Add to Favorites
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded text-xs font-semibold">
                    Add to Compare
                  </button>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="border-b border-gray-200 pb-4 space-y-2">
              <a
                href="#"
                className="text-blue-800 hover:underline font-semibold text-xs block"
              >
                OPX - Lakban Bening Khusus Untuk UTJ
              </a>
              <div className="text-[11px] text-gray-600 flex space-x-4">
                <span>Attachments</span>
                <span className="text-gray-500">None</span>
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[11px] max-w-2xl bg-gray-50/60 p-2 rounded">
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">
                    Shopping Category
                  </span>
                  <span>OPX.CENTRAL.PERLENGKAPAN KANTOR.ATK.LAKBAN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Category</span>
                  <span className="text-right">
                    OPX.CENTRAL.PERLENGKAPAN KANTOR.ATK.LAKBAN
                  </span>
                </div>
                <div className="flex justify-between pr-4">
                  <span className="text-gray-600 font-semibold">Price</span>
                  <span>1 IDR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Internal Item Number
                  </span>
                  <span>OPX.LAKBAN BENING UTJ</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <span>Quantity</span>
                  <input
                    type="text"
                    defaultValue="1"
                    className="border border-gray-300 w-12 text-center py-0.5 rounded bg-white"
                  />
                  <span className="text-gray-600">Piece</span>
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded font-semibold text-xs ml-2">
                    Add to Cart
                  </button>
                </div>
                <div className="space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded text-xs font-semibold">
                    Add to Favorites
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 border border-gray-400 px-2 py-0.5 rounded text-xs font-semibold">
                    Add to Compare
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            <div className="bg-gray-50 border border-gray-300 p-3 rounded space-y-3">
              <h3 className="font-bold text-gray-800 text-xs border-b border-gray-200 pb-1">
                Shopping Cart
              </h3>
              <p className="text-[11px] text-gray-600">
                Your cart contains 2 lines.
              </p>

              <div className="text-[11px] space-y-2 border-b border-gray-200 pb-3">
                <div className="font-semibold text-gray-700">
                  Recently Added Lines
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-blue-800 hover:underline cursor-pointer truncate max-w-30">
                    OPX - Lakban Be...
                  </span>
                  <span>1 Piece</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-blue-800 hover:underline cursor-pointer truncate max-w-30">
                    OPX - Kertas HV...
                  </span>
                  <span>1 Rim</span>
                </div>
              </div>

              <button className="w-full bg-gray-200 hover:bg-gray-300 border border-gray-400 text-gray-800 font-bold py-1 px-2 rounded text-xs shadow-sm">
                View Cart and Checkout
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-3 rounded">
              <h3 className="font-bold text-gray-800 text-xs border-b border-gray-200 pb-1">
                Compare Items
              </h3>
              <p className="text-[11px] text-gray-500 mt-1">
                No items selected.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-3 rounded space-y-2">
              <h3 className="font-bold text-gray-800 text-xs border-b border-gray-200 pb-1">
                Related Links
              </h3>
              <div className="text-[11px] space-y-1">
                <div className="font-semibold text-gray-700">Categories</div>
                <div className="text-blue-800 hover:underline cursor-pointer flex items-center space-x-1">
                  <span className="text-red-500 text-[8px]">●</span>
                  <span>NON CENTRAL-ATK</span>
                </div>
                <div className="text-blue-800 hover:underline cursor-pointer flex items-center space-x-1">
                  <span className="text-red-500 text-[8px]">●</span>
                  <span>OPX.CENTRAL.PERLENGKA...</span>
                </div>
                <div className="text-blue-800 hover:underline cursor-pointer pt-1">
                  More...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
