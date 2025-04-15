"use client";

import AddBookmarkModal from "./AddBookmarkModal";
import { useState } from "react";

export default function BookmarkDashboardClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer transition"
        >
          + Add Bookmark
        </button>
      </div>

      <AddBookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
