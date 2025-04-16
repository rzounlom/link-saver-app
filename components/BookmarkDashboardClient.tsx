"use client";

import { useRouter, useSearchParams } from "next/navigation";

import AddBookmarkModal from "./AddBookmarkModal";
import { useState } from "react";

export default function BookmarkDashboardClient() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (q) {
      newParams.set("q", q);
    } else {
      newParams.delete("q");
    }
    router.push(`/dashboard?${newParams.toString()}`);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            name="search"
            placeholder="Search bookmarks..."
            className="border rounded px-3 py-2 text-sm w-60"
            defaultValue={searchParams.get("q") || ""}
          />
          <button
            type="submit"
            className="bg-gray-200 hover:bg-blue-400 px-3 rounded text-sm rounded hover:bg-blue-600 hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Bookmark
        </button>
      </div>
      <AddBookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
