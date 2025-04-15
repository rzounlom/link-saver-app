export default function BookmarkSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="border rounded border-gray-200 p-4 bg-white shadow-sm animate-pulse flex flex-col justify-between"
        >
          <div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-full bg-gray-200 rounded mb-2" />
            <div className="h-3 w-2/3 bg-gray-200 rounded mb-4" />
            <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
