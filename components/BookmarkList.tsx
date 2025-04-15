import BookmarkCard from "@/components/BookmarkCard";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
export default async function BookmarkList() {
  const { userId } = await auth();
  if (!userId) return null;

  const bookmarks = await db.bookmark.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookmarks.length === 0 ? (
        <p className="text-gray-500 col-span-full">No bookmarks yet.</p>
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        ))
      )}
    </div>
  );
}
