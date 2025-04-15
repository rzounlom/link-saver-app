"use client";

import { useFormStatus } from "react-dom";

export const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded text-white transition-all duration-300 ease-in-out ${
        pending
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 hover:cursor-pointer"
      }`}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export const CancelButton = ({
  handleOnclose,
}: {
  handleOnclose: () => void;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="button"
      onClick={handleOnclose}
      className={`text-gray-500 transition-all duration-300 ease-in-out ${
        pending
          ? "cursor-not-allowed"
          : "hover:cursor-pointer hover:text-gray-700"
      }`}
      disabled={pending}
    >
      Cancel
    </button>
  );
};
