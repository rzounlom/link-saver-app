"use client";

import { ReactNode, useEffect } from "react";

type ModalShellProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalShell({
  open,
  onClose,
  children,
}: ModalShellProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", onEsc);
    }
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg shadow max-w-md w-full transform transition-all duration-300 scale-100"
      >
        {children}
      </div>
    </div>
  );
}
