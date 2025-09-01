import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/stories" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    excerpt: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.string(),
  }),
});

export const collections = { stories };
