import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Leadership team members
const leadership = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leadership' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    order: z.number().optional(),
  }),
});

// Events
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    description: z.string().optional(),
    rsvpLink: z.string().url().optional(),
  }),
});

// Resources (articles, guides, etc.)
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    category: z.enum(['article', 'guide', 'video', 'book', 'other']).optional(),
  }),
});

// Note: Site settings in src/content/settings/general.json should be imported directly
// rather than using content collections (e.g., import settings from '../content/settings/general.json')

export const collections = {
  leadership,
  events,
  resources,
};
