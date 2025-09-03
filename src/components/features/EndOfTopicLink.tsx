import React from "react";
import { HelpCircle, ArrowRight } from "lucide-react";

export type EndOfTopicLinkProps = {
    lang?: "el" | "en";
    themeId: string; // π.χ. "A2"
    themePath: string; // π.χ. "a2"
    baseUrl?: string; // π.χ. "/cs-study-companion"
    className?: string;
};

const labels = {
    en: {
        title: "Ready to test your knowledge?",
        subtitle: "End-of-Topic Questions",
        description: "Challenge yourself with comprehensive questions covering all subtopics",
        buttonText: "Start Questions"
    },
    el: {
        title: "Έτοιμος να δοκιμάσεις τις γνώσεις σου;",
        subtitle: "Ερωτήσεις Τέλους Θέματος",
        description: "Δοκίμασε τον εαυτό σου με περιεκτικές ερωτήσεις από όλα τα υποθέματα",
        buttonText: "Έναρξη Ερωτήσεων"
    },
};

export const EndOfTopicLink = ({
                                   lang = "el",
                                   themeId,
                                   themePath,
                                   baseUrl = "",
                                   className = "",
                               }: EndOfTopicLinkProps) => {
    const L = labels[lang];

    const getEndOfTopicUrl = (): string => {
        return `${baseUrl}/${lang}/${themePath}/end-of-topic-questions`;
    };

    return (
        <section
            className={[
                "not-prose rounded-2xl border p-6 shadow-sm",
                "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200",
                "dark:from-violet-950/30 dark:to-purple-950/20 dark:border-violet-700",
                className,
            ].join(" ")}
        >
            {/* Κεφαλίδα */}
            <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-violet-500/30 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/30">
                    <HelpCircle className="h-5 w-5 text-violet-700 dark:text-violet-300" aria-hidden="true" />
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-violet-900 dark:text-violet-100">
                        {L.title}
                    </h2>
                    <p className="text-xs text-violet-600 dark:text-violet-300">
                        {themeId} {L.subtitle}
                    </p>
                </div>
            </div>

            {/* Περιγραφή */}
            <p className="mb-6 text-sm text-violet-800 dark:text-violet-200">
                {L.description}
            </p>

            {/* Call-to-Action Button */}
            <a
                href={getEndOfTopicUrl()}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                aria-label={`${L.buttonText} για ${themeId}`}
            >
                <HelpCircle className="h-4 w-4" />
                <span>{L.buttonText}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>

            {/* Decorative elements */}
            <div className="mt-4 flex items-center gap-2 text-xs text-violet-500 dark:text-violet-400">
                <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-violet-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-violet-300"></div>
                </div>
                <span>Συνολική αξιολόγηση γνώσεων</span>
            </div>
        </section>
    );
};