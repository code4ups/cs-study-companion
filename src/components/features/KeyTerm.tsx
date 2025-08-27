import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
};

export const KeyTerm = ({ children, lang = 'el', className = '' }: Props) => {
    const label = lang === 'en' ? '🔑 Key term' : '🔑 Βασικός όρος';

    return (
        <div
            className={[
                'not-prose list-none my-6 rounded-xl border p-4 shadow-sm',
                'bg-yellow-50 border-yellow-300',
                'dark:bg-yellow-900/15 dark:border-yellow-600',
                className,
            ].join(' ')}
            role="note"
            aria-label={label}
        >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-800 dark:text-yellow-300">
                {label}
            </p>
            <div className="text-gray-800 dark:text-gray-100">
                {children}
            </div>
        </div>
    );
};
