import { FC } from "react";
import { auth } from "@clerk/nextjs/server";

const DashboardPage: FC = async () => {
  const { userId } = await auth();
  console.log({ userId });

  if (!userId) return null; // Will redirect using middleware
  return <div className="p-4">Welcome to your dashboard!</div>;
};

export default DashboardPage;
