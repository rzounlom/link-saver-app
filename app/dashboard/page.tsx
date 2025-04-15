import { FC, Suspense } from "react";

import BookmarkList from "@/components/BookmarkList";
import BookmarkSkeletonGrid from "@/components/BookmarkSkeletonGrid";

const DashboardPage: FC = async () => {
  return (
    <div>
      <Suspense fallback={<BookmarkSkeletonGrid />}>
        <BookmarkList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
