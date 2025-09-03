// src/content.config.ts
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
    title: z.string(),
    description: z.string().optional(),

    // Επέκταση του Schema για όλα τα χαρακτηριστικά που έχουμε φτιάξει
    features: z.array(z.enum([
        'tok',                      // TOKBox component
        'key-term',                 // KeyTerm component
        'practice-question',        // PracticeQuestion component
        'guiding-question',         // GuidingQuestion component
        'syllabus-understanding',   // SyllabusUnderstanding component
        'subtopic-navigation',      // SubtopicNavigation component
        'end-of-topic-link',        // EndOfTopicLink component
        'exam-questions'            // ExamQuestions component
    ])).optional(),

    // Νέα πεδία για την ιεραρχία
    type: z.enum(['theme', 'topic', 'subtopic', 'section', 'assessment']).optional(),
    parent: z.string().optional(), // π.χ. "a2/2-1" για sections
    syllabus_id: z.string().optional(), // π.χ. "A2.1.3"
    ahl: z.boolean().optional(), // για AHL sections

    // Επιπλέον metadata πεδία
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    estimated_time: z.string().optional(), // π.χ. "45 minutes"
    prerequisites: z.array(z.string()).optional(), // π.χ. ["A1.1", "A1.2"]
    learning_outcomes: z.array(z.string()).optional(),

    // Tags για καλύτερη οργάνωση
    tags: z.array(z.string()).optional(), // π.χ. ["networking", "security", "protocols"]

    // Πεδία για multilingual support
    translations: z.record(z.string()).optional() // π.χ. { "en": "networking", "el": "δίκτυα" }
});

export const collections = {
    en: defineCollection({ type: "content", schema: baseSchema }),
    el: defineCollection({ type: "content", schema: baseSchema }),
};