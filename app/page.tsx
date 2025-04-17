// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683732137653-9121ba5e8ede?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // ✅ Add your image to /public
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl text-center max-w-md shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Organize your web with{" "}
          <span className="text-blue-400">Link Saver</span>
        </h1>
        <p className="text-lg mb-6">
          Save, tag, and manage all your favorite links in one place.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
