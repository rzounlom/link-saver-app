"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AddBookmarkModal from "./AddBookmarkModal";
import { useDebounce } from "use-debounce";

export default function BookmarkDashboardClient() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [debouncedSearch] = useDebounce(search, 400);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set("q", debouncedSearch);
    } else {
      params.delete("q");
    }
    router.push(`/dashboard?${params.toString()}`);
  }, [debouncedSearch, router, searchParams]);

  const handleClearFilters = (event: { preventDefault: () => void }) => {
    // 1. Stop browser from reloading the page
    event.preventDefault();
    // 2. Reset the URL cleanly
    setSearch(""); // ✅ Reset local state

    router.push("/dashboard?"); // ✅ Ensure route changes (even if it "looks" the same)

    // 3. Optionally force refresh (if nothing re-renders)
    router.refresh(); // ✅ Triggers a re-render + server component reload
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search bookmarks..."
            className="border rounded px-3 py-2 text-sm w-60"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search && (
            <button
              onClick={handleClearFilters}
              className="ml-2 text-sm text-gray-500 hover:text-gray-700 hover:cursor-pointer  underline"
            >
              Clear filters
            </button>
          )}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition hover:cursor-pointer duration-300 ease-in-out"
        >
          + Add Bookmark
        </button>
      </div>
      <AddBookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
