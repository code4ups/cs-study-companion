import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
};

export const TOKBox = ({ children, lang = 'el', className = '' }: Props) => {
    const label = lang === 'en' ? '🧠 Theory of Knowledge (TOK)' : '🧠 Θεωρία της Γνώσης (TOK)';

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
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-800 dark:text-purple-300">
                {label}
            </p>
            <div className="text-gray-800 dark:text-gray-100">
                {children}
            </div>
        </div>
    );
};
