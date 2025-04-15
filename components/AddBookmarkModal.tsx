"use client";

import { CancelButton, SaveButton } from "./Buttons";
import { useActionState, useEffect, useRef, useState } from "react";

import FormAlert from "./FormAlert";
import { createBookmark } from "@/app/dashboard/actions";

export default function AddBookmarkModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const initialState = {
    errorState: false,
    errors: {
      title: undefined,
      url: undefined,
      description: undefined,
      tags: undefined,
      _form: undefined,
    },
  };
  const [formState, action] = useActionState(createBookmark, initialState);
  const [formKey, setFormKey] = useState(0);
  const [cachedValues, setCachedValues] = useState({
    title: "",
    url: "",
    description: "",
    tags: "",
  });
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const handleBeforeSubmit = () => {
    setCachedValues({
      title: titleRef.current?.value || "",
      url: urlRef.current?.value || "",
      description: descRef.current?.value || "",
      tags: tagsRef.current?.value || "",
    });
  };

  const handleOnclose = () => {
    setCachedValues({ title: "", url: "", description: "", tags: "" });
    setFormKey((prev) => prev + 1);
    onClose();
  };

  useEffect(() => {
    if (formState.successState) {
      handleOnclose(); // close and reset
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.successState]);

  if (!open) {
    {
      return null;
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        key={formKey}
        action={action}
        onSubmit={handleBeforeSubmit}
        className="bg-white p-6 rounded shadow max-w-md w-full"
      >
        {formState.errorState && (
          <FormAlert
            alertType="error"
            messages={Object.values(formState.errors).flat()}
          />
        )}

        <h2 className="text-lg font-semibold mb-4">Add Bookmark</h2>
        <input
          name="title"
          placeholder="Title"
          className="input mb-2"
          defaultValue={cachedValues.title}
          ref={titleRef}
        />
        <input
          name="url"
          placeholder="URL"
          className="input mb-2"
          defaultValue={cachedValues.url}
          ref={urlRef}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="input mb-2"
          defaultValue={cachedValues.description}
          ref={descRef}
        />
        <input
          name="tags"
          placeholder="Tags (comma-separated)"
          className="input mb-4"
          defaultValue={cachedValues.tags}
          ref={tagsRef}
        />
        <div className="flex justify-end gap-2">
          {/* <button
            type="button"
            onClick={handleOnclose}
            className="text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out"
          >
            Cancel
          </button> */}
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            Save
          </button> */}
          <CancelButton handleOnclose={handleOnclose} />
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
