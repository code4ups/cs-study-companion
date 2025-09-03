import React from "react";
import { BookOpen } from "lucide-react";

export type SubtopicItem = {
    id: string; // π.χ. "A2.1"
    title: string; // π.χ. "Θεμελιώδεις αρχές δικτύων"
    description?: string;
    slug: string; // π.χ. "2-1"
};

export type SubtopicNavigationProps = {
    lang?: "el" | "en";
    themeId: string; // π.χ. "A2"
    themePath: string; // π.χ. "a2"
    subtopics: SubtopicItem[];
    baseUrl?: string; // π.χ. "/cs-study-companion"
    className?: string;
};

const labels = {
    en: {
        title: "SUBTOPICS",
        explore: "Explore subtopic"
    },
    el: {
        title: "ΥΠΟΘΕΜΑΤΑ",
        explore: "Εξερεύνηση υποθέματος"
    },
};

export const SubtopicNavigation = ({
                                       lang = "el",
                                       themeId,
                                       themePath,
                                       subtopics,
                                       baseUrl = "",
                                       className = "",
                                   }: SubtopicNavigationProps) => {
    const L = labels[lang];

    const getSubtopicUrl = (subtopic: SubtopicItem): string => {
        return `${baseUrl}/${lang}/${themePath}/${subtopic.slug}`;
    };

    return (
        <section
            className={[
                "not-prose rounded-2xl border p-6 shadow-sm",
                "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700",
                className,
            ].join(" ")}
            aria-labelledby="subtopic-navigation-title"
        >
            {/* Κεφαλίδα με εικονίδιο BookOpen */}
            <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-indigo-500/30 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20">
                    <BookOpen className="h-4 w-4 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                </div>
                <h2
                    id="subtopic-navigation-title"
                    className="text-xs font-semibold tracking-wider text-indigo-800 dark:text-indigo-300"
                >
                    {themeId} {L.title}
                </h2>
            </div>

            {/* Grid με τα subtopics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subtopics.map((subtopic) => (
                    <a
                        key={subtopic.id}
                        href={getSubtopicUrl(subtopic)}
                        className="group block rounded-xl border border-slate-200 p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 dark:border-slate-700 dark:hover:border-indigo-600"
                        aria-label={`${L.explore}: ${subtopic.title}`}
                    >
                        {/* Header με ID */}
                        <div className="mb-3 flex items-center justify-between">
                            <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-semibold text-indigo-800 ring-1 ring-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-200 dark:ring-indigo-700/50">
                                {subtopic.id}
                            </span>
                            <BookOpen className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400 transition-colors duration-200" />
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-200">
                            {subtopic.title}
                        </h3>

                        {/* Description (αν υπάρχει) */}
                        {subtopic.description && (
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                {subtopic.description}
                            </p>
                        )}

                        {/* Hover indicator */}
                        <div className="mt-3 flex items-center text-sm text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span>Εξερεύνηση</span>
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer με πληροφορίες */}
            <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                💡 Κάθε υπόθεμα περιλαμβάνει μαθησιακούς στόχους και ενότητες για εμβάθυνση
            </div>
        </section>
    );
};