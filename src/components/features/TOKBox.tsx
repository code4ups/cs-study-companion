import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Brain, ChevronDown, ChevronRight } from 'lucide-react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
    answer?: string; // ΝΕΟ: προσθήκη απάντησης
};

export const TOKBox = ({
                           children,
                           lang = 'el',
                           className = '',
                           answer // ΝΕΟ
                       }: Props) => {
    const label = lang === 'en' ? 'Theory of Knowledge (TOK)' : 'Θεωρία της Γνώσης (TOK)';

    // ΝΕΟ: State για toggle functionality
    const [showAnswer, setShowAnswer] = useState(false);

    // ΝΕΟ: Labels για τα buttons
    const toggleLabels = {
        en: { show: "Show Answer", hide: "Hide Answer" },
        el: { show: "Εμφάνιση Απάντησης", hide: "Απόκρυψη Απάντησης" }
    };
    const L = toggleLabels[lang];

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div
            className={[
                'not-prose list-none my-6 rounded-xl border p-4 shadow-sm',
                'bg-purple-50 border-purple-300',
                'dark:bg-purple-900/20 dark:border-purple-700',
                className,
            ].join(' ')}
            role="note"
            aria-label={label}
        >
            <div className="mb-2 flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-purple-400/30 bg-purple-100 dark:bg-purple-900/30">
                    <Brain className="h-4 w-4 text-purple-800 dark:text-purple-300" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-800 dark:text-purple-300">
                    {label}
                </p>
            </div>

            <div className="text-gray-800 dark:text-gray-100">{children}</div>

            {/* ΝΕΟ: Answer Toggle Section */}
            {answer && (
                <div className="mt-4">
                    <button
                        onClick={toggleAnswer}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                    >
                        {showAnswer ? (
                            <>
                                <ChevronDown className="h-4 w-4" />
                                {L.hide}
                            </>
                        ) : (
                            <>
                                <ChevronRight className="h-4 w-4" />
                                {L.show}
                            </>
                        )}
                    </button>

                    {showAnswer && (
                        <div className="mt-3 p-4 bg-purple-100 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                            <p className="text-purple-900 dark:text-purple-100 leading-relaxed whitespace-pre-line">
                                {answer}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};