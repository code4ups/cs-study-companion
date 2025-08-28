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
                                      }: SyllabusUnderstandingProps) => {
    const L = labels[lang];

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

            {/* Στόχοι χωρίς εικονίδιο */}
            <ol className="space-y-3">
                {items.map(({ id, text, ahl }) => (
                    <li
                        key={id}
                        className="rounded-xl border border-slate-200 p-3 shadow-sm dark:border-slate-700"
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
                        <p className="leading-snug text-slate-900 dark:text-slate-100">{text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};
