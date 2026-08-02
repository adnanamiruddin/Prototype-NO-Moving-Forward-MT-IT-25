import Link from "next/link";
import { HiOutlineClipboardList, HiChevronRight } from "react-icons/hi";

const menus = [
  {
    title: "DIS - Disbursement Status",
    href: "/dis/disbursement-status",
  },
  {
    title: "GSSYS - Pre PR Detail",
    href: "/gssys/pre-pr-detail",
  },
  {
    title: "GSSYS - PR Cart",
    href: "/gssys/pr-cart",
  },
  {
    title: "DAF and FIFCORE - Loading Request Timeout",
    href: "/daf-and-fifcore/loading-request-timeout",
  },
  {
    title: "FIFAPPS - PUPJ",
    href: "/fifapps/pupj",
  },
];

function MenuCard({ title, suffix = "" }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      <div className="space-y-3">
        {menus.map((menu) => (
          <Link
            key={`${title}-${menu.title}`}
            href={`${menu.href}${suffix}`}
            target="_blank"
            className="group flex items-center justify-between rounded-lg bg-gray-50 hover:bg-lime-50 border border-gray-200 p-4 transition"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
                <HiOutlineClipboardList size={22} />
              </div>

              <span className="font-medium">
                {menu.title} {suffix === "/after" && "(After)"}
              </span>
            </div>

            <HiChevronRight
              size={20}
              className="text-gray-400 group-hover:translate-x-1 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold">Prototype NO - Moving Forward</h1>

        <p className="text-sm text-gray-500 mt-1 mb-8">
          Pilih halaman yang ingin dibuka.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MenuCard title="BEFORE" />

          <MenuCard title="AFTER" suffix="/after" />
        </div>
      </div>
    </main>
  );
}
