import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

import { Bookmark } from "@prisma/client";

export default function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <div className="border border-gray-200 rounded p-4 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{bookmark.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {bookmark.description}
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

        <div className="mt-2 flex flex-wrap gap-1">
          {bookmark.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2 text-gray-400">
        <button>
          <PencilIcon className="w-5 h-5 hover:text-gray-600 transition hover:cursor-pointer" />
        </button>
        <button>
          <TrashIcon className="w-5 h-5 hover:text-red-600 transition hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
