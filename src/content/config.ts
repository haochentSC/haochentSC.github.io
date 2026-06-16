import { defineCollection, z } from 'astro:content';

/**
 * Projects collection — the typed data layer. Each project is one Markdown file
 * in src/content/projects/. The build fails loudly if a required field is missing,
 * which is intended (keeps the site and the master resume in lockstep).
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string(),
    period: z.string(),
    status: z.enum(['live', 'shipped', 'complete', 'in-progress']).default('complete'),
    stack: z.array(z.string()),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    categories: z.array(z.string()).default([]),
    links: z
      .object({
        live: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(true),
    order: z.number().default(99),
    cover: z.string().optional(),
  }),
});

export const collections = { projects };
