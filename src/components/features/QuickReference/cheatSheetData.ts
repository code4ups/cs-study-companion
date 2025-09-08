import type { ComparativeSection } from './types';

export const comparativeCheatSheetData: Record<"el" | "en", ComparativeSection[]> = {
    el: [
        {
            id: "basic-types",
            title: "Βασικοί Τύποι Δεδομένων",
            icon: "🔤",
            subsections: [
                {
                    id: "primitive-types",
                    title: "Πρωτογενείς Τύποι",
                    content: [
                        {
                            id: "integer",
                            concept: "Ακέραιος Αριθμός",
                            python: {
                                syntax: "x = 42",
                                example: "age = 25",
                                description: "Δυναμικός τύπος, απεριόριστο μέγεθος"
                            },
                            java: {
                                syntax: "int x = 42;",
                                example: "int age = 25;",
                                description: "32-bit signed integer (-2³¹ έως 2³¹-1)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "Στην Python οι ακέραιοι μπορούν να είναι απεριόριστου μεγέθους"
                        },
                        {
                            id: "float",
                            concept: "Δεκαδικός Αριθμός",
                            python: {
                                syntax: "x = 3.14",
                                example: "price = 19.99",
                                description: "64-bit floating point (double precision)"
                            },
                            java: {
                                syntax: "double x = 3.14;",
                                example: "double price = 19.99;",
                                description: "64-bit floating point (double precision)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "Και οι δύο γλώσσες χρησιμοποιούν IEEE 754 standard"
                        },
                        {
                            id: "string",
                            concept: "Συμβολοσειρά",
                            python: {
                                syntax: "x = 'Hello' ή x = \"Hello\"",
                                example: "name = 'Νίκος'",
                                description: "Immutable sequence of Unicode characters"
                            },
                            java: {
                                syntax: "String x = \"Hello\";",
                                example: "String name = \"Νίκος\";",
                                description: "Immutable sequence of Unicode characters"
                            },
                            tags: ["basic", "text"],
                            notes: "Και στις δύο γλώσσες τα strings είναι immutable"
                        },
                        {
                            id: "boolean",
                            concept: "Λογικός Τύπος",
                            python: {
                                syntax: "x = True ή x = False",
                                example: "is_student = False",
                                description: "True ή False (με κεφαλαίο πρώτο γράμμα)"
                            },
                            java: {
                                syntax: "boolean x = true;",
                                example: "boolean isStudent = false;",
                                description: "true ή false (με μικρά γράμματα)"
                            },
                            tags: ["basic", "logic"],
                            notes: "Προσοχή: Python χρησιμοποιεί True/False, Java true/false"
                        }
                    ]
                }
            ]
        },
        {
            id: "variables",
            title: "Μεταβλητές",
            icon: "📦",
            subsections: [
                {
                    id: "declaration",
                    title: "Δήλωση Μεταβλητών",
                    content: [
                        {
                            id: "variable-declaration",
                            concept: "Δήλωση Μεταβλητής",
                            python: {
                                syntax: "variable_name = value",
                                example: "student_age = 20",
                                description: "Δυναμική τυποποίηση, δεν χρειάζεται δήλωση τύπου"
                            },
                            java: {
                                syntax: "type variableName = value;",
                                example: "int studentAge = 20;",
                                description: "Στατική τυποποίηση, απαιτείται δήλωση τύπου"
                            },
                            tags: ["variables", "basic"],
                            notes: "Python: duck typing, Java: static typing"
                        },
                        {
                            id: "naming-convention",
                            concept: "Συμβάσεις Ονομασίας",
                            python: {
                                syntax: "snake_case",
                                example: "user_name, total_score",
                                description: "Χρήση underscore για διαχωρισμό λέξεων"
                            },
                            java: {
                                syntax: "camelCase",
                                example: "userName, totalScore",
                                description: "Κεφαλαίο γράμμα στην αρχή κάθε λέξης (εκτός της πρώτης)"
                            },
                            tags: ["variables", "style"],
                            notes: "Διαφορετικές συμβάσεις ονομασίας ανά γλώσσα"
                        }
                    ]
                }
            ]
        }
    ],
    en: [
        {
            id: "basic-types",
            title: "Basic Data Types",
            icon: "🔤",
            subsections: [
                {
                    id: "primitive-types",
                    title: "Primitive Types",
                    content: [
                        {
                            id: "integer",
                            concept: "Integer Number",
                            python: {
                                syntax: "x = 42",
                                example: "age = 25",
                                description: "Dynamic type, unlimited size"
                            },
                            java: {
                                syntax: "int x = 42;",
                                example: "int age = 25;",
                                description: "32-bit signed integer (-2³¹ to 2³¹-1)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "Python integers can be unlimited in size"
                        },
                        {
                            id: "float",
                            concept: "Decimal Number",
                            python: {
                                syntax: "x = 3.14",
                                example: "price = 19.99",
                                description: "64-bit floating point (double precision)"
                            },
                            java: {
                                syntax: "double x = 3.14;",
                                example: "double price = 19.99;",
                                description: "64-bit floating point (double precision)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "Both languages use IEEE 754 standard"
                        },
                        {
                            id: "string",
                            concept: "String",
                            python: {
                                syntax: "x = 'Hello' or x = \"Hello\"",
                                example: "name = 'John'",
                                description: "Immutable sequence of Unicode characters"
                            },
                            java: {
                                syntax: "String x = \"Hello\";",
                                example: "String name = \"John\";",
                                description: "Immutable sequence of Unicode characters"
                            },
                            tags: ["basic", "text"],
                            notes: "Strings are immutable in both languages"
                        },
                        {
                            id: "boolean",
                            concept: "Boolean Type",
                            python: {
                                syntax: "x = True or x = False",
                                example: "is_student = False",
                                description: "True or False (with capital first letter)"
                            },
                            java: {
                                syntax: "boolean x = true;",
                                example: "boolean isStudent = false;",
                                description: "true or false (lowercase)"
                            },
                            tags: ["basic", "logic"],
                            notes: "Note: Python uses True/False, Java uses true/false"
                        }
                    ]
                }
            ]
        },
        {
            id: "variables",
            title: "Variables",
            icon: "📦",
            subsections: [
                {
                    id: "declaration",
                    title: "Variable Declaration",
                    content: [
                        {
                            id: "variable-declaration",
                            concept: "Variable Declaration",
                            python: {
                                syntax: "variable_name = value",
                                example: "student_age = 20",
                                description: "Dynamic typing, no type declaration needed"
                            },
                            java: {
                                syntax: "type variableName = value;",
                                example: "int studentAge = 20;",
                                description: "Static typing, type declaration required"
                            },
                            tags: ["variables", "basic"],
                            notes: "Python: duck typing, Java: static typing"
                        },
                        {
                            id: "naming-convention",
                            concept: "Naming Conventions",
                            python: {
                                syntax: "snake_case",
                                example: "user_name, total_score",
                                description: "Use underscore to separate words"
                            },
                            java: {
                                syntax: "camelCase",
                                example: "userName, totalScore",
                                description: "Capital letter at the beginning of each word (except first)"
                            },
                            tags: ["variables", "style"],
                            notes: "Different naming conventions per language"
                        }
                    ]
                }
            ]
        }
    ]
};

// Helper function
export const getComparativeData = (lang: "el" | "en"): ComparativeSection[] => {
    return comparativeCheatSheetData[lang];
};