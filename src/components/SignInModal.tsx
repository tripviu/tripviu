"use client";
import { useEffect } from "react";

export default function SignInModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sign in to Tripviu</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
        </div>
        <form className="mt-4 space-y-3">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full bg-black text-white rounded px-4 py-2 hover:opacity-90">
            Continue
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">Demo-modal (geen echte login, nog te koppelen aan auth).</p>
      </div>
    </div>
  );
}
