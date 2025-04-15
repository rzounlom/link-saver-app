import { FC, Suspense } from "react";

import BookmarkDashboardClient from "@/components/BookmarkDashboardClient";
import BookmarkList from "@/components/BookmarkList";
import BookmarkSkeletonGrid from "@/components/BookmarkSkeletonGrid";

const DashboardPage: FC = async () => {
  return (
    <div>
      <BookmarkDashboardClient />
      <Suspense fallback={<BookmarkSkeletonGrid />}>
        <BookmarkList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
