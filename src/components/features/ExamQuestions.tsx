import React, { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Target, Star } from "lucide-react";

export type ExamQuestion = {
    id: string;
    question: string;
    marks: string;
    ahl?: boolean;
    answer?: string;
};

export type ExamQuestionsProps = {
    lang?: "el" | "en";
    themeId: string; // π.χ. "A2"
    themeTitle: string; // π.χ. "Δίκτυα"
    topicReview: {
        question: string;
        description?: string;
        answer: string;
    };
    examQuestions: ExamQuestion[];
    className?: string;
};

const labels = {
    en: {
        title: "End-of-Topic Questions",
        subtitle: "How well do you understand the principles and concepts?",
        topicReview: "TOPIC REVIEW",
        examStyle: "EXAM-STYLE QUESTIONS",
        showAnswer: "Show Answer",
        hideAnswer: "Hide Answer",
        ahlNote: "Additional Higher Level (AHL) questions are:",
        marks: "marks",
        noMarks: "no marks"
    },
    el: {
        title: "Ερωτήσεις Τέλους Θέματος",
        subtitle: "Πόσο καλά κατανοείς τις αρχές και τις έννοιες;",
        topicReview: "ΕΠΑΝΑΛΗΨΗ ΘΕΜΑΤΟΣ",
        examStyle: "ΕΡΩΤΗΣΕΙΣ ΤΥΠΟΥ ΕΞΕΤΑΣΗΣ",
        showAnswer: "Εμφάνιση Απάντησης",
        hideAnswer: "Απόκρυψη Απάντησης",
        ahlNote: "Οι ερωτήσεις πρόσθετου ανώτερου επιπέδου (AHL) είναι:",
        marks: "βαθμοί",
        noMarks: "χωρίς βαθμούς"
    },
};

export const ExamQuestions = ({
                                  lang = "el",
                                  themeId,
                                  themeTitle,
                                  topicReview,
                                  examQuestions,
                                  className = "",
                              }: ExamQuestionsProps) => {
    const L = labels[lang];
    const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(new Set());

    const toggleAnswer = (questionId: string) => {
        const newExpanded = new Set(expandedAnswers);
        if (newExpanded.has(questionId)) {
            newExpanded.delete(questionId);
        } else {
            newExpanded.add(questionId);
        }
        setExpandedAnswers(newExpanded);
    };

    const ahlQuestions = examQuestions.filter(q => q.ahl).map(q => q.id);

    return (
        <div className={`space-y-8 ${className}`}>
            {/* Header - χωρίς αλλαγή */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {themeId} – {L.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    {L.subtitle}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                    <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
                        {themeTitle}
                    </span>
                </div>
            </div>

            {/* Topic Review Section - ΕΝΗΜΕΡΩΜΕΝΟ */}
            <section className="rounded-2xl border bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 p-6 dark:from-blue-950/30 dark:to-cyan-950/20 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-blue-500/30 bg-blue-100 dark:bg-blue-900/40">
                        <Target className="h-4 w-4 text-blue-700 dark:text-blue-300" />
                    </div>
                    <h2 className="text-xs font-semibold tracking-wider text-blue-800 dark:text-blue-300">
                        {L.topicReview}
                    </h2>
                </div>

                <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                    {/* ΝΕΟ: Προσθήκη ID για Topic Review */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-700 text-xs font-mono font-semibold text-blue-700 dark:text-blue-100">
                            1
                        </span>
                        <span className="text-xs text-blue-600 dark:text-blue-300">
                            [{L.noMarks}]
                        </span>
                    </div>

                    <p className="text-blue-900 dark:text-blue-100 font-medium leading-relaxed mb-3">
                        {topicReview.question}
                    </p>

                    {topicReview.description && (
                        <p className="text-sm text-blue-700 dark:text-blue-200 italic mb-3">
                            {topicReview.description}
                        </p>
                    )}

                    {/* ΝΕΟ: Answer Toggle για Topic Review */}
                    {topicReview.answer && (
                        <div className="mt-4">
                            <button
                                onClick={() => toggleAnswer('topic-review')}
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                            >
                                {expandedAnswers.has('topic-review') ? (
                                    <>
                                        <ChevronDown className="h-4 w-4" />
                                        {L.hideAnswer}
                                    </>
                                ) : (
                                    <>
                                        <ChevronRight className="h-4 w-4" />
                                        {L.showAnswer}
                                    </>
                                )}
                            </button>

                            {expandedAnswers.has('topic-review') && (
                                <div className="mt-3 p-4 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                                    <p className="text-indigo-900 dark:text-indigo-100 leading-relaxed whitespace-pre-line">
                                        {topicReview.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Exam Questions Section */}
            <section className="rounded-2xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-emerald-500/30 bg-emerald-100 dark:bg-emerald-900/40">
                        <BookOpen className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                    </div>
                    <h2 className="text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300">
                        {L.examStyle}
                    </h2>
                </div>

                <div className="space-y-4">
                    {examQuestions.map((question) => (
                        <div
                            key={question.id}
                            className={[
                                "rounded-xl border p-4 transition-all duration-200",
                                question.ahl
                                    ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 dark:from-amber-950/20 dark:to-yellow-950/10 dark:border-amber-700/50"
                                    : "bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700"
                            ].join(" ")}
                        >
                            {/* Question Header */}
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-xs font-mono font-semibold text-slate-700 dark:text-slate-100">
                                            {question.id}
                                        </span>
                                        {question.ahl && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-xs font-semibold text-amber-800 dark:text-amber-200 ring-1 ring-amber-200 dark:ring-amber-700/50">
                                                <Star className="h-3 w-3 mr-1" />
                                                AHL
                                            </span>
                                        )}
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            [{question.marks} {L.marks}]
                                        </span>
                                    </div>
                                    <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
                                        {question.question}
                                    </p>
                                </div>
                            </div>

                            {/* Answer Toggle */}
                            {question.answer && (
                                <div className="mt-4">
                                    <button
                                        onClick={() => toggleAnswer(question.id)}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                                    >
                                        {expandedAnswers.has(question.id) ? (
                                            <>
                                                <ChevronDown className="h-4 w-4" />
                                                {L.hideAnswer}
                                            </>
                                        ) : (
                                            <>
                                                <ChevronRight className="h-4 w-4" />
                                                {L.showAnswer}
                                            </>
                                        )}
                                    </button>

                                    {expandedAnswers.has(question.id) && (
                                        <div className="mt-3 p-4 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                                            <p className="text-indigo-900 dark:text-indigo-100 leading-relaxed whitespace-pre-line">
                                                {question.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* AHL Questions Note */}
            {ahlQuestions.length > 0 && (
                <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4">
                    <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-amber-800 dark:text-amber-200 font-medium">
                                {L.ahlNote}
                            </p>
                            <p className="text-amber-700 dark:text-amber-300 font-bold mt-1">
                                {ahlQuestions.join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};