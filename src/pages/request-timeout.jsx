"use client";

import { FiAlertCircle, FiRotateCw, FiArrowLeft } from "react-icons/fi";

export default function RequestTimeoutPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="shrink-0 mt-1">
            <div className="w-16 h-16 rounded-lg border-2 border-gray-400 flex items-center justify-center">
              <FiAlertCircle className="text-gray-500" size={32} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-light text-gray-800">
              This page isn't responding
            </h1>

            <p className="mt-4 text-gray-600 leading-7">
              The request took too long to complete.
              <br />
              The server may be temporarily unavailable or overloaded.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => location.reload()}
                className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <span className="flex items-center gap-2">
                  <FiRotateCw />
                  Reload
                </span>
              </button>

              <button
                onClick={() => history.back()}
                className="px-5 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="flex items-center gap-2">
                  <FiArrowLeft />
                  Go Back
                </span>
              </button>
            </div>

            <details className="mt-10 border-t pt-5">
              <summary className="cursor-pointer text-gray-700 font-medium">
                Details
              </summary>

              <div className="mt-4 text-sm text-gray-500 leading-7 font-mono">
                Error Code: REQUEST_TIMEOUT
                <br />
                HTTP Status: 408
                <br />
                Timestamp: {new Date().toLocaleString()}
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
