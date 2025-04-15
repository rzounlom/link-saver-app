import { z } from "zod";

export const bookmarkSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  url: z.string().url("Must be a valid URL"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  tags: z.string().refine(
    (value) => {
      // split by comma, trim whitespace
      const tags = value.split(",").map((tag) => tag.trim());
      return tags.every((tag) => tag.length >= 2);
    },
    {
      message: "Each tag must be at least 2 characters long",
    }
  ),
});
