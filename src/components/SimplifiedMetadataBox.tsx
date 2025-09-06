import React, { useState } from "react";
import { Clock, Target } from "lucide-react";

export type SimplifiedMetadataProps = {
    lang?: "el" | "en";
    syllabus_id?: string;
    parent_title?: string;
    difficulty?: "beginner" | "intermediate" | "advanced";
    estimated_time?: string;
    prerequisites?: string[];
    tags?: string[];
    ahl?: boolean;
    className?: string;
};

const labels = {
    en: {
        ahl: "AHL",
        prerequisites: "Prerequisites"
    },
    el: {
        ahl: "AHL",
        prerequisites: "Προαπαιτούμενα"
    }
};

export const SimplifiedMetadataBox = ({
                                          lang = "el",
                                          syllabus_id,
                                          parent_title, // ΝΕΟ
                                          difficulty,
                                          estimated_time,
                                          prerequisites,
                                          tags,
                                          ahl,
                                          className = ""
                                      }: SimplifiedMetadataProps) => {
    const L = labels[lang];
    const [showAllTags, setShowAllTags] = useState(false);

    const difficultyColors = {
        beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
        intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
        advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
    };

    return (
        <div className={`mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 ${className}`}>
            {/* Compact Header Row με parent context */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    {parent_title && (
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                            {parent_title}
                        </span>
                    )}
                    {syllabus_id && (
                        <span className="text-sm font-mono bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                            {syllabus_id}
                        </span>
                    )}
                    {ahl && (
                        <span className="text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded">
                            {L.ahl}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {difficulty && (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors[difficulty]}`}>
                            {difficulty}
                        </span>
                    )}
                    {estimated_time && (
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                            <Clock className="h-3 w-3" />
                            {estimated_time}
                        </div>
                    )}
                </div>
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                    {(showAllTags ? tags : tags.slice(0, 4)).map((tag) => (
                        <span key={tag} className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                    {tags.length > 4 && (
                        <button
                            onClick={() => setShowAllTags(!showAllTags)}
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer underline"
                        >
                            {showAllTags
                                ? (lang === 'el' ? 'λιγότερα' : 'show less')
                                : (lang === 'el'
                                        ? `+${tags.length - 4} περισσότερα`
                                        : `+${tags.length - 4} more`
                                )
                            }
                        </button>
                    )}
                </div>
            )}

            {/* Prerequisites (compact) */}
            {prerequisites && prerequisites.length > 0 && (
                <div className="text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-medium">{L.prerequisites}:</span> {prerequisites.join(', ')}
                </div>
            )}
        </div>
    );
};