import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    position: z.string(),
    image: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    imageAltText: z.string(),
    order: z.number(),
  })
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    imageAltText: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { team, projects };