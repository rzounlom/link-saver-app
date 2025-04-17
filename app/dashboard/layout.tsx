import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">
            <Link href="/">Bookmarks</Link>
          </h1>
          <UserButton />
        </div>
        {children}
      </main>
    </div>
  );
}
