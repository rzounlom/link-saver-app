"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function createTestBookmark() {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");

  try {
    await db.bookmark.create({
      data: {
        url: "https://example.com",
        title: "Example Site",
        userId,
        tags: ["test"],
      },
    });
  } catch (error) {
    console.error(error);
  }
}
