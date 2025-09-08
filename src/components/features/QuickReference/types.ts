export type ProgrammingLanguage = "python" | "java";

export type CheatSheetItem = {
    id: string;
    concept: string;
    syntax: string;
    example?: string;
    description: string;
    tags?: string[];
};

export type CheatSheetSubsection = {
    id: string;
    title: string;
    content: CheatSheetItem[];
};

export type CheatSheetSection = {
    id: string;
    title: string;
    icon: string;
    subsections: CheatSheetSubsection[];
};

// Νέος τύπος για comparative data
export type ComparativeCheatSheetItem = {
    id: string;
    concept: string;
    python: {
        syntax: string;
        example?: string;
        description: string;
    };
    java: {
        syntax: string;
        example?: string;
        description: string;
    };
    tags?: string[];
    notes?: string; // Για επιπλέον σημειώσεις σύγκρισης
};

export type ComparativeSubsection = {
    id: string;
    title: string;
    content: ComparativeCheatSheetItem[];
};

export type ComparativeSection = {
    id: string;
    title: string;
    icon: string;
    subsections: ComparativeSubsection[];
};

export type QuickReferenceProps = {
    lang?: "el" | "en";
    viewMode?: "comparative" | "single";
    selectedLanguage?: ProgrammingLanguage;
    searchable?: boolean;
    className?: string;
};