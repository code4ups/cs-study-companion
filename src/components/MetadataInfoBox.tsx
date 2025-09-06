import React, { useState } from "react";
import { Clock, BookOpen, Target, ChevronDown, ChevronRight, User, Tag } from "lucide-react";

export type PageMetadata = {
    title: string;
    description?: string;
    type?: "theme" | "topic" | "subtopic" | "section" | "assessment";
    difficulty?: "beginner" | "intermediate" | "advanced";
    estimated_time?: string;
    prerequisites?: string[];
    learning_outcomes?: string[];
    tags?: string[];
    syllabus_id?: string;
    ahl?: boolean;
};

export type MetadataInfoBoxProps = {
    lang?: "el" | "en";
    metadata: PageMetadata;
    className?: string;
};

const labels = {
    en: {
        subtopic: "Subtopic",
        section: "Section",
        assessment: "Assessment",
        topic: "Topic",
        theme: "Theme",
        difficulty: "Difficulty Level",
        estimatedTime: "Estimated Time",
        prerequisites: "Prerequisites",
        learningOutcomes: "Learning Outcomes",
        tags: "Tags",
        showMore: "Show Details",
        hideMore: "Hide Details",
        ahl: "AHL",
        showLess: "Show less"
    },
    el: {
        subtopic: "Υποθέμα",
        section: "Ενότητα",
        assessment: "Αξιολόγηση",
        topic: "Θέμα",
        theme: "Θεματική Ενότητα",
        difficulty: "Επίπεδο Δυσκολίας",
        estimatedTime: "Εκτιμώμενος Χρόνος",
        prerequisites: "Προαπαιτούμενα",
        learningOutcomes: "Μαθησιακά Αποτελέσματα",
        tags: "Ετικέτες",
        showMore: "Εμφάνιση Λεπτομερειών",
        hideMore: "Απόκρυψη Λεπτομερειών",
        ahl: "AHL",
        showLess: "λιγότερα"
    }
};

export const MetadataInfoBox = ({
                                    lang = "el",
                                    metadata,
                                    className = ""
                                }: MetadataInfoBoxProps) => {
    const L = labels[lang];
    const [showDetails, setShowDetails] = useState(false);
    const [showAllTags, setShowAllTags] = useState(false);

    const difficultyColors = {
        beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
        intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
        advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
    };

    const typeIcons = {
        theme: BookOpen,
        topic: BookOpen,
        subtopic: Target,
        section: Target,
        assessment: User
    };

    const TypeIcon = typeIcons[metadata.type || 'section'];

    return (
        <div className={`mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 ${className}`}>
            {/* Header Row */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <TypeIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {L[metadata.type || 'section']}
                    </span>
                    {metadata.syllabus_id && (
                        <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                            {metadata.syllabus_id}
                        </span>
                    )}
                    {metadata.ahl && (
                        <span className="text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded">
                            {L.ahl}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {metadata.difficulty && (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors[metadata.difficulty]}`}>
                            {metadata.difficulty}
                        </span>
                    )}
                    {metadata.estimated_time && (
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                            <Clock className="h-3 w-3" />
                            {metadata.estimated_time}
                        </div>
                    )}
                </div>
            </div>

            {/* Description */}
            {metadata.description && (
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    {metadata.description}
                </p>
            )}

            {/* Quick Tags - με clickable toggle */}
            {metadata.tags && metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                    {(showAllTags ? metadata.tags : metadata.tags.slice(0, 3)).map((tag) => (
                        <span key={tag} className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                    {metadata.tags.length > 3 && (
                        <button
                            onClick={() => setShowAllTags(!showAllTags)}
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer underline"
                        >
                            {showAllTags
                                ? L.showLess
                                : lang === 'el'
                                    ? `+${metadata.tags.length - 3} περισσότερα`
                                    : `+${metadata.tags.length - 3} more`
                            }
                        </button>
                    )}
                </div>
            )}

            {/* Expandable Details */}
            {(metadata.prerequisites?.length || metadata.learning_outcomes?.length) && (
                <div>
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                        {showDetails ? (
                            <>
                                <ChevronDown className="h-4 w-4" />
                                {L.hideMore}
                            </>
                        ) : (
                            <>
                                <ChevronRight className="h-4 w-4" />
                                {L.showMore}
                            </>
                        )}
                    </button>

                    {showDetails && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 space-y-3">
                            {metadata.prerequisites && metadata.prerequisites.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        {L.prerequisites}
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {metadata.prerequisites.map((prereq) => (
                                            <span key={prereq} className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded">
                                                {prereq}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {metadata.learning_outcomes && metadata.learning_outcomes.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        {L.learningOutcomes}
                                    </h4>
                                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                                        {metadata.learning_outcomes.map((outcome, index) => (
                                            <li key={index} className="flex items-start gap-1">
                                                <span className="text-indigo-500 mt-1">•</span>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};