import BookmarkCard from "@/components/BookmarkCard";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function BookmarkList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; tag?: string }>;
}) {
  const { userId } = await auth();
  if (!userId) return null;

  const { q, tag } = await searchParams;

  const bookmarks = await db.bookmark.findMany({
    where: {
      userId,
      ...(q && {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { url: { contains: q, mode: "insensitive" } },
          { tags: { hasSome: [q.toLowerCase()] } },
        ],
      }),
      ...(tag && { tags: { has: tag.toLowerCase() } }),
    },
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
