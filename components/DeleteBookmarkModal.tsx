"use client";

import { CancelButton, DeleteButton } from "./Buttons";
import { useActionState, useEffect } from "react";

import ModalShell from "./ModalShell";
import { deleteBookmark } from "@/app/dashboard/actions"; // your server action
import { toast } from "sonner";

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
  const initialState = { successState: false, errorState: false };
  const deleteAction = deleteBookmark.bind(null, { bookmarkId });
  const [formState, action] = useActionState(deleteAction, initialState);

  useEffect(() => {
    if (formState.successState) {
      toast.success("Bookmark deleted successfully");
      onClose(); // Close modal after toast
    }

    if (formState.errorState) {
      toast.error("Failed to delete bookmark. Please try again.");
    }
  }, [formState.successState, formState.errorState, onClose, formState]);

  if (!open) return null;

  return (
    <ModalShell open={open} onClose={onClose}>
      <form
        action={action}
        className="bg-white rounded-lg shadow p-6 w-full max-w-md transition-all"
      >
        <input type="hidden" name="confirm" value="true" />
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
    </ModalShell>
  );
}
