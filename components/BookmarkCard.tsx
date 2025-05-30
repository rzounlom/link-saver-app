"use client";

import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

import { Bookmark } from "@prisma/client";
import DeleteBookmarkModal from "./DeleteBookmarkModal";
import EditBookmarkModal from "./EditBookmarkModal";
import { getTagColor } from "@/utils/getTagColor";
import { highlightMatch } from "@/utils/highlightMatch";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookmarkCard({
  bookmark,
  q,
}: {
  bookmark: Bookmark;
  q: string | undefined;
}) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const router = useRouter();
  const query = q || "";

  return (
    <div className="border border-gray-200 rounded p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <EditBookmarkModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        bookmark={bookmark}
      />

      <DeleteBookmarkModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        bookmarkId={bookmark.id}
        title={bookmark.title}
      />
      <div>
        <h3 className="text-lg font-semibold">
          {highlightMatch(bookmark.title, query)}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {bookmark.description}
          {highlightMatch(bookmark.description || "", query)}
        </p>

        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm inline-flex items-center gap-1 mt-2"
        >
          Visit Site
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </a>

        <div className="mt-2 flex flex-wrap gap-1 flex-1">
          {bookmark.tags.slice(0, 5).map((tag, idx) => {
            const { bg, text } = getTagColor(tag);
            return (
              <span
                key={idx}
                onClick={() => router.push(`/dashboard?tag=${tag}`)}
                className={`text-xs px-2 py-1 rounded-full hover:cursor-pointer font-medium ${bg} ${text}`}
              >
                #{tag}
              </span>
            );
          })}
          {bookmark.tags.length > 5 && (
            <span className="text-xs text-gray-500">
              +{bookmark.tags.length - 5} more
            </span>
          )}
        </div>
        <div className="mt-2 text-xs text-gray-400">
          Last updated{" "}
          {new Date(
            bookmark.updatedAt || bookmark.createdAt
          ).toLocaleDateString()}
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2 text-gray-400">
        <button title="Edit" onClick={() => setEditOpen(true)}>
          <PencilIcon className="w-5 h-5 hover:text-gray-600 transition hover:cursor-pointer" />
        </button>
        <button title="Delete" onClick={() => setDeleteOpen(true)}>
          <TrashIcon className="w-5 h-5 hover:text-red-600 transition hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
