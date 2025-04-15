"use client";

import { deleteBookmark } from "@/app/dashboard/actions"; // your server action
import { useActionState } from "react";

interface DeleteBookmarkModalProps {
  open: boolean;
  onClose: () => void;
  bookmarkId: string;
  title?: string;
}

export default function DeleteBookmarkModal({
  open,
  onClose,
  bookmarkId,
  title,
}: DeleteBookmarkModalProps) {
  const initialState = { success: false };
  const deleteAction = deleteBookmark.bind(null, bookmarkId);
  const [formState, formAction] = useActionState(deleteAction, initialState);

  if (!open) return null;

  if (formState.success) {
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <form
        action={formAction}
        className="bg-white rounded-lg shadow p-6 w-full max-w-md transition-all"
      >
        <h2 className="text-lg font-semibold text-red-700 mb-4">
          Delete Bookmark
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Are you sure you want to delete{" "}
          <strong>{title || "this bookmark"}</strong>? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
