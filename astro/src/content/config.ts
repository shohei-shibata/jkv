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

const capabilities = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    cover: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    coverAltText: z.string(),
    category: z.string(),
    order: z.number()
  })
});

export const collections = { team, projects, capabilities };