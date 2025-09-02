// src/content.config.ts
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    description: z.string().optional(),

    // Επέκταση του Schema για τα χαρακτηριστικά
    features: z.array(z.enum([
        'tok',
        'key-term',
        'practice-question',
        'guiding-question',
        'syllabus-understanding'
    ])).optional(),

    // Νέα πεδία για την ιεραρχία
    type: z.enum(['theme', 'topic', 'subtopic', 'section']).optional(),
    parent: z.string().optional(), // π.χ. "a2/2-1" για sections
    syllabus_id: z.string().optional(), // π.χ. "A2.1.3"
    ahl: z.boolean().optional() // για AHL sections
});

export const collections = {
    en: defineCollection({ type: "content", schema: baseSchema }),
    el: defineCollection({ type: "content", schema: baseSchema }),
};