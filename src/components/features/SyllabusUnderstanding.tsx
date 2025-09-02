import React from "react";
import { ListChecks } from "lucide-react";

export type SyllabusItem = {
    id: string;
    text: string;
    ahl?: boolean;
};

export type SyllabusUnderstandingProps = {
    lang?: "el" | "en";
    items: SyllabusItem[];
    titleOverride?: string;
    className?: string;
    basePath?: string; // ΝΕΟ: π.χ. "a2/2-1" για το A2.1
    enableLinks?: boolean; // ΝΕΟ: για να ενεργοποιούμε/απενεργοποιούμε τα links
    baseUrl?: string; // ΝΕΟ: για το base URL από Astro
};

const labels = {
    en: { title: "SYLLABUS UNDERSTANDINGS", ahl: "Additional Higher Level (AHL)" },
    el: { title: "ΜΑΘΗΣΙΑΚΟΙ ΣΤΟΧΟΙ", ahl: "Πρόσθετο Ανώτερο Επίπεδο (AHL)" },
};

export const SyllabusUnderstanding = ({
                                          lang = "el",
                                          items,
                                          titleOverride,
                                          className = "",
                                          basePath, // ΝΕΟ
                                          enableLinks = true, // ΝΕΟ: default true
                                          baseUrl = "", // ΝΕΟ: default κενό για dev
                                      }: SyllabusUnderstandingProps) => {
    const L = labels[lang];

    // ΝΕΑ ΣΥΝΑΡΤΗΣΗ: Δημιουργία URL για κάθε section
    const getSectionUrl = (item: SyllabusItem): string => {
        if (!enableLinks || !basePath) return '#';

        // Μετατρέπουμε το id από "A2.1.3" σε "a2/2-1/2-1-3" (σαν slug)
        const parts = item.id.split('.');
        if (parts.length !== 3) return '#';

        const [theme, topic, section] = parts;
        // Από "A2.1.3" παίρνουμε: theme="A2", topic="1", section="3"
        // Θέλουμε να φτιάξουμε: "a2/2-1/2-1-3"
        const themeNumber = theme.substring(1); // "A2" -> "2"
        const sectionSlug = `${basePath}/${themeNumber}-${topic}-${section}`;

        // Χρήση του baseUrl που περνάει από έξω (από Astro)
        return `${baseUrl}/${lang}/${sectionSlug}`;
    };

    // ΝΕΑ ΣΥΝΑΡΤΗΣΗ: Έλεγχος αν ένα item είναι clickable
    const isClickable = (item: SyllabusItem): boolean => {
        return Boolean(enableLinks) && Boolean(basePath) && getSectionUrl(item) !== '#';
    };

    return (
        <section
            className={[
                "not-prose rounded-2xl border p-4 shadow-sm",
                "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700",
                className,
            ].join(" ")}
            aria-labelledby="syllabus-understanding-title"
        >
            {/* Κεφαλίδα με εικονίδιο ListChecks */}
            <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-emerald-500/30 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/20">
                    <ListChecks className="h-4 w-4 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                </div>
                <h2
                    id="syllabus-understanding-title"
                    className="text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300"
                >
                    {titleOverride ?? L.title}
                </h2>
            </div>

            {/* Στόχοι με προαιρετικά clickable links */}
            <ol className="space-y-3">
                {items.map((item) => {
                    const { id, text, ahl } = item;
                    const clickable = isClickable(item);

                    return (
                        <li
                            key={id}
                            className={[
                                "rounded-xl border border-slate-200 p-3 shadow-sm dark:border-slate-700",
                                // ΝΕΟ: hover effects μόνο για clickable items
                                clickable && "transition-all duration-200 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 dark:hover:border-emerald-600 cursor-pointer"
                            ].filter(Boolean).join(" ")}
                        >
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-mono text-slate-700 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:ring-slate-600">
                                    {id}
                                </span>
                                {ahl && (
                                    <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:ring-amber-700/50">
                                        {L.ahl}
                                    </span>
                                )}
                            </div>

                            {/* ΤΡΟΠΟΠΟΙΗΜΕΝΟ: Conditional wrapping με link */}
                            {clickable ? (
                                <a
                                    href={getSectionUrl(item)}
                                    className="block group"
                                    aria-label={`Μετάβαση στην ενότητα ${id}: ${text}`}
                                >
                                    <p className="leading-snug text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-200">
                                        {text}
                                    </p>
                                </a>
                            ) : (
                                <p className="leading-snug text-slate-900 dark:text-slate-100">
                                    {text}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ol>

            {/* ΝΕΟ: Προαιρετικό footer με οδηγίες αν υπάρχουν clickable links */}
            {Boolean(enableLinks) && Boolean(basePath) && items.some(item => isClickable(item)) && (
                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    💡 Κάντε κλικ σε έναν μαθησιακό στόχο για να μεταβείτε στη σχετική ενότητα
                </div>
            )}
        </section>
    );
};