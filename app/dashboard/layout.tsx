import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="space-y-2">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tags">Tags</Link>
          <Link href="/account">Account</Link>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Bookmarks</h1>
          <UserButton />
        </div>
        {children}
      </main>
    </div>
  );
}
