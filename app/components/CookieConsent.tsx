"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sweden-relocators-cookie-consent";

type ConsentChoice = "all" | "essential" | "custom";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  // Show banner only if user hasn't made a choice before
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (!existing) {
        setOpen(true);
      }
    } catch (e) {
      // If localStorage is unavailable, still show the banner
      setOpen(true);
    }
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, choice);
      } catch (e) {
        // Ignore storage errors
      }
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] max-w-sm w-full pointer-events-none">
      <div
        className="pointer-events-auto bg-white shadow-2xl rounded-xl border border-gray-200 p-6 text-sm text-gray-800 transform translate-y-4 opacity-0 animate-[cookieFadeIn_0.35s_ease-out_forwards]"
      >
        <style jsx>{`
          @keyframes cookieFadeIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <h2 className="text-xl font-semibold mb-2">Cookie settings</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Our website uses cookies to improve your user experience and assist in our
          marketing efforts. More info can be found in our
          <button
            type="button"
            className="ml-1 text-blue-700 font-semibold underline underline-offset-2 hover:text-blue-900"
          >
            cookie policy
          </button>
          .
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => handleChoice("custom")}
            className="w-full border border-[#0A4A8A] text-[#0A4A8A] font-semibold py-2.5 rounded-lg uppercase tracking-wide text-xs hover:bg-blue-50 transition-colors"
          >
            Change preferences
          </button>
          <button
            type="button"
            onClick={() => handleChoice("essential")}
            className="w-full bg-[#0A4A8A] text-white font-semibold py-2.5 rounded-lg uppercase tracking-wide text-xs hover:bg-[#083664] transition-colors"
          >
            Only accept essential cookies
          </button>
          <button
            type="button"
            onClick={() => handleChoice("all")}
            className="w-full bg-[#0A4A8A] text-white font-semibold py-2.5 rounded-lg uppercase tracking-wide text-xs hover:bg-[#083664] transition-colors"
          >
            Accept all cookies
          </button>
        </div>
      </div>
    </div>
  );
}
