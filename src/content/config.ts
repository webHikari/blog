import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  	schema: z.object({
    	title: z.string(),
    	description: z.string(),
    	pubDate: z.coerce.date(),
  	}),
});

const labs = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { blog, labs }; 