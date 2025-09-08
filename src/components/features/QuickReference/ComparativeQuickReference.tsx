import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, Code, ToggleLeft, ToggleRight, Info } from 'lucide-react';
import type { QuickReferenceProps, ComparativeCheatSheetItem, ComparativeSection, ProgrammingLanguage } from './types';
import { getComparativeData } from './cheatSheetData';

const labels = {
    en: {
        search: "Search...",
        copy: "Copy",
        copied: "Copied!",
        noResults: "No results found",
        allSections: "All Sections",
        comparative: "Compare Languages",
        pythonOnly: "Python Only",
        javaOnly: "Java Only",
        example: "Example:",
        notes: "Notes:"
    },
    el: {
        search: "Αναζήτηση...",
        copy: "Αντιγραφή",
        copied: "Αντιγράφηκε!",
        noResults: "Δεν βρέθηκαν αποτελέσματα",
        allSections: "Όλες οι Ενότητες",
        comparative: "Σύγκριση Γλωσσών",
        pythonOnly: "Μόνο Python",
        javaOnly: "Μόνο Java",
        example: "Παράδειγμα:",
        notes: "Σημειώσεις:"
    }
};
export const ComparativeQuickReference = ({
                                              lang = "el",
                                              viewMode = "comparative",
                                              selectedLanguage = "python",
                                              searchable = true,
                                              className = ""
                                          }: QuickReferenceProps) => {
    const L = labels[lang];
    const sectionsData = getComparativeData(lang);

    const [searchTerm, setSearchTerm] = useState('');
    const [copiedItem, setCopiedItem] = useState<string | null>(null);
    const [selectedSection, setSelectedSection] = useState<string>('all');
    const [currentViewMode, setCurrentViewMode] = useState<"comparative" | "single">(viewMode);
    const [currentLanguage, setCurrentLanguage] = useState<ProgrammingLanguage>(selectedLanguage);

    // Search functionality
    const filteredSections = useMemo(() => {
        if (!searchTerm && selectedSection === 'all') {
            return sectionsData;
        }

        return sectionsData
            .map(section => {
                if (selectedSection !== 'all' && section.id !== selectedSection) {
                    return null;
                }

                const filteredSubsections = section.subsections
                    .map(subsection => ({
                        ...subsection,
                        content: subsection.content.filter(item =>
                            item.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.python.syntax.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.java.syntax.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.python.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.java.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                    }))
                    .filter(subsection => subsection.content.length > 0);

                return filteredSubsections.length > 0
                    ? {...section, subsections: filteredSubsections}
                    : null;
            })
            .filter(Boolean) as ComparativeSection[];
    }, [searchTerm, selectedSection, sectionsData]);

    const copyToClipboard = async (text: string, itemId: string, language: ProgrammingLanguage) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(`${itemId}-${language}`);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    return (
        <div className={`max-w-7xl mx-auto ${className}`}>
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        Programming Quick Reference
                    </h1>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">View Mode:</span>

                    <button
                        onClick={() => setCurrentViewMode('comparative')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                            currentViewMode === 'comparative'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                        }`}
                    >
                        <ToggleRight className="h-4 w-4" />
                        {L.comparative}
                    </button>

                    <button
                        onClick={() => setCurrentViewMode('single')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                            currentViewMode === 'single'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                        }`}
                    >
                        <ToggleLeft className="h-4 w-4" />
                        {currentViewMode === 'single' ? (currentLanguage === 'python' ? 'Python Only' : 'Java Only') : 'Single Language'}
                    </button>

                    {/* Language selector για single mode */}
                    {currentViewMode === 'single' && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentLanguage('python')}
                                className={`px-3 py-1 text-xs rounded ${
                                    currentLanguage === 'python'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
                                }`}
                            >
                                Python
                            </button>
                            <button
                                onClick={() => setCurrentLanguage('java')}
                                className={`px-3 py-1 text-xs rounded ${
                                    currentLanguage === 'java'
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
                                }`}
                            >
                                Java
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* Search Controls */}
            {searchable && (
                <div className="mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={L.search}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedSection('all')}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                selectedSection === 'all'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                            }`}
                        >
                            {L.allSections}
                        </button>
                        {sectionsData.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setSelectedSection(section.id)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                    selectedSection === section.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                                }`}
                            >
                                {section.icon} {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {/* Content */}
            <div className="space-y-8">
                {filteredSections.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                        {L.noResults}
                    </div>
                ) : (
                    filteredSections.map(section => (
                        <section key={section.id} className="space-y-6">
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                                <span className="text-2xl">{section.icon}</span>
                                {section.title}
                            </h2>

                            {section.subsections.map(subsection => (
                                <div key={subsection.id} className="space-y-4">
                                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                                        {subsection.title}
                                    </h3>

                                    <div className="space-y-6">
                                        {subsection.content.map(item => (
                                            <ComparativeItemCard
                                                key={item.id}
                                                item={item}
                                                viewMode={currentViewMode}
                                                selectedLanguage={currentLanguage}
                                                onCopy={(syntax, language) => copyToClipboard(syntax, item.id, language)}
                                                copiedItem={copiedItem}
                                                labels={L}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    ))
                )}
            </div>
        </div>
    );
};
// Component για κάθε comparative item
const ComparativeItemCard = ({
                                 item,
                                 viewMode,
                                 selectedLanguage,
                                 onCopy,
                                 copiedItem,
                                 labels
                             }: {
    item: ComparativeCheatSheetItem;
    viewMode: "comparative" | "single";
    selectedLanguage: ProgrammingLanguage;
    onCopy: (syntax: string, language: ProgrammingLanguage) => void;
    copiedItem: string | null;
    labels: any;
}) => {
    if (viewMode === 'single') {
        // Single language view
        const data = selectedLanguage === 'python' ? item.python : item.java;
        const languageColor = selectedLanguage === 'python' ? 'green' : 'orange';

        return (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                            {item.concept}
                        </h4>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded text-${languageColor}-700 bg-${languageColor}-100 dark:text-${languageColor}-300 dark:bg-${languageColor}-900/30`}>
              {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
            </span>
                    </div>
                    <button
                        onClick={() => onCopy(data.syntax, selectedLanguage)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm bg-${languageColor}-100 dark:bg-${languageColor}-900/30 text-${languageColor}-700 dark:text-${languageColor}-300 rounded hover:bg-${languageColor}-200 dark:hover:bg-${languageColor}-900/50 transition-colors`}
                    >
                        {copiedItem === `${item.id}-${selectedLanguage}` ? (
                            <>
                                <Check className="h-4 w-4" />
                                {labels.copied}
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                {labels.copy}
                            </>
                        )}
                    </button>
                </div>

                <div className="space-y-4">
          <pre className="bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{data.syntax}</code>
          </pre>

                    {data.example && (
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <span className="font-medium">{labels.example}</span>
                            <code className="ml-2 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{data.example}</code>
                        </div>
                    )}

                    <p className="text-slate-700 dark:text-slate-300">
                        {data.description}
                    </p>

                    {item.notes && (
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-sm font-medium text-blue-800 dark:text-blue-300">{labels.notes}</span>
                                    <p className="text-sm text-blue-700 dark:text-blue-200 mt-1">{item.notes}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Comparative view
    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
            <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-6 text-center">
                {item.concept}
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Python Column */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30">
              Python
            </span>
                        <button
                            onClick={() => onCopy(item.python.syntax, 'python')}
                            className="flex items-center gap-1 px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                        >
                            {copiedItem === `${item.id}-python` ? (
                                <>
                                    <Check className="h-3 w-3" />
                                    {labels.copied}
                                </>
                            ) : (
                                <>
                                    <Copy className="h-3 w-3" />
                                    {labels.copy}
                                </>
                            )}
                        </button>
                    </div>

                    <pre className="bg-slate-900 dark:bg-slate-950 text-green-400 p-3 rounded text-sm overflow-x-auto">
            <code>{item.python.syntax}</code>
          </pre>

                    {item.python.example && (
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            <span className="font-medium">{labels.example}</span>
                            <code className="ml-1 bg-slate-100 dark:bg-slate-700 px-1 rounded">{item.python.example}</code>
                        </div>
                    )}

                    <p className="text-sm text-slate-700 dark:text-slate-300">
                        {item.python.description}
                    </p>
                </div>

                {/* Java Column */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30">
              Java
            </span>
                        <button
                            onClick={() => onCopy(item.java.syntax, 'java')}
                            className="flex items-center gap-1 px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                        >
                            {copiedItem === `${item.id}-java` ? (
                                <>
                                    <Check className="h-3 w-3" />
                                    {labels.copied}
                                </>
                            ) : (
                                <>
                                    <Copy className="h-3 w-3" />
                                    {labels.copy}
                                </>
                            )}
                        </button>
                    </div>

                    <pre className="bg-slate-900 dark:bg-slate-950 text-orange-400 p-3 rounded text-sm overflow-x-auto">
            <code>{item.java.syntax}</code>
          </pre>

                    {item.java.example && (
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            <span className="font-medium">{labels.example}</span>
                            <code className="ml-1 bg-slate-100 dark:bg-slate-700 px-1 rounded">{item.java.example}</code>
                        </div>
                    )}

                    <p className="text-sm text-slate-700 dark:text-slate-300">
                        {item.java.description}
                    </p>
                </div>
            </div>

            {/* Comparative Notes */}
            {item.notes && (
                <div className="mt-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">{labels.notes}</span>
                            <p className="text-sm text-blue-700 dark:text-blue-200 mt-1">{item.notes}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};