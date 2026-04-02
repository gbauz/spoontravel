import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    location: z.string(),
    duration: z.string(),
    image: z.string().url(),
    imageAlt: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

export const collections = { guides };
