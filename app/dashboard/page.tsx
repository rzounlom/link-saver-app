import AddBookmark from "@/components/AddBookmark";
import { FC } from "react";
import { auth } from "@clerk/nextjs/server";

const DashboardPage: FC = async () => {
  const { userId } = await auth();

  if (!userId) return null; // Will redirect using middleware
  return (
    <div className="p-4">
      <AddBookmark />
    </div>
  );
};

export default DashboardPage;
