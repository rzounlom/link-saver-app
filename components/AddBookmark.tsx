"use client";

import AddBookmarkModal from "@/components/AddBookmarkModal";
import { useState } from "react";

export default function AddBookmark() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out"
      >
        + Add Bookmark
      </button>

      <AddBookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
