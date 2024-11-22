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

export const collections = { team };