import type { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

export type GuidingQuestionProps = {
    lang?: "el" | "en";
    children: ReactNode;
    className?: string;
    titleOverride?: string;
};

const labels = { en: "GUIDING QUESTION", el: "ΕΡΩΤΗΣΗ ΚΑΘΟΔΗΓΗΣΗΣ" };

export const GuidingQuestion = ({
                                    lang = "el",
                                    children,
                                    className = "",
                                    titleOverride,
                                }: GuidingQuestionProps) => {
    const title = titleOverride ?? labels[lang];

    return (
        <section
            className={[
                "not-prose rounded-2xl border p-4 shadow-sm",
                // πιο “ζωντανό” υπόβαθρο στο header μέρος, χωρίς να βαραίνει
                "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700",
                className,
            ].join(" ")}
            aria-labelledby="guiding-question-title"
        >
            <div className="mb-3 flex items-center gap-3">
                {/* ΝΕΟ: κυκλικό εικονίδιο με gradient και Lightbulb */}
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-amber-500/30 bg-gradient-to-br from-amber-100 to-rose-50 dark:from-amber-900/30 dark:to-rose-900/20">
                    <Lightbulb className="h-4 w-4 text-amber-700 dark:text-amber-300" aria-hidden="true" />
                </div>
                <h2
                    id="guiding-question-title"
                    className="text-xs font-semibold tracking-wider text-amber-800 dark:text-amber-300"
                >
                    {title}
                </h2>
            </div>

            {/* Κείμενο ερώτησης πιο “τονισμένο” αλλά χωρίς υπερβολή */}
            <div className="text-lg leading-relaxed text-slate-900 dark:text-slate-100">
                {children}
            </div>
        </section>
    );
};
