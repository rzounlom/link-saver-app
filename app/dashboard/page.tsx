import BookmarkDashboardClient from "@/components/BookmarkDashboardClient";
import BookmarkList from "@/components/BookmarkList";
import BookmarkSkeletonGrid from "@/components/BookmarkSkeletonGrid";
import { Suspense } from "react";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; tag?: string }>;
}) {
  return (
    <div>
      <BookmarkDashboardClient />
      <Suspense fallback={<BookmarkSkeletonGrid />}>
        <BookmarkList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
