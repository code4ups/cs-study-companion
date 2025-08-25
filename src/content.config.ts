// src/content.config.ts
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    description: z.string().optional(),

    //Επέκταση του Schema. Αυτό επιτρέπει να δηλώνουμε αυτά τα χαρακτηριστικά στο frontmatter των αρχείων .mdx
    features: z.array(z.enum([
        'tok',
        'key-term',
        'practice-question'
    ])).optional()

});

export const collections = {
    en: defineCollection({ type: "content", schema: baseSchema }),
    el: defineCollection({ type: "content", schema: baseSchema }),
};
