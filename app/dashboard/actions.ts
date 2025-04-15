"use server";

import { auth } from "@clerk/nextjs/server";
import { bookmarkSchema } from "./schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface CreateLinkFormState {
  errorState: boolean;
  successState?: boolean;
  errors: {
    title?: string[];
    url?: string[];
    description?: string[];
    tags?: string[];
    _form?: string[];
  };
}

export async function createBookmark(
  formState: CreateLinkFormState,
  formData: FormData
): Promise<CreateLinkFormState> {
  const { userId } = await auth();
  if (!userId)
    return {
      errorState: true,
      errors: {
        _form: ["You must sign in to create a Bookmark."],
      },
    };

  const values = {
    title: formData.get("title") as string,
    url: formData.get("url") as string,
    description: formData.get("description") as string,
    tags: formData.get("tags") as string,
  };

  const result = bookmarkSchema.safeParse(values);

  if (!result.success) {
    return {
      errorState: true,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, url, description, tags } = result.data;

  try {
    await db.bookmark.create({
      data: {
        title,
        url,
        description,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        userId,
      },
    });

    return {
      successState: true,
      errorState: false,
      errors: {},
    };
  } catch (err: unknown) {
    console.error("Error creating bookmark:", err);
    if (err instanceof Error) {
      return {
        errorState: true,
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errorState: true,
        errors: {
          _form: ["An unknown error occurred. Please try again."],
        },
      };
    }
  } finally {
    //revalidate dashboard
    revalidatePath("/dashboard");
  }
}
