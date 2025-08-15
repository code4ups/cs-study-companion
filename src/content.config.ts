// src/content.config.ts
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
});

export const collections = {
    en: defineCollection({ type: "content", schema: baseSchema }),
    el: defineCollection({ type: "content", schema: baseSchema }),
};
