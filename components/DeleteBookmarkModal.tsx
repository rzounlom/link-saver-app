"use client";

import { CancelButton, DeleteButton } from "./Buttons";

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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 opacity-100">
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

        <div className="flex justify-end gap-4">
          <CancelButton handleOnclose={onClose} />
          <DeleteButton />
        </div>
      </form>
    </div>
  );
}
