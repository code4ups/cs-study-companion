import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
};

export const PracticeQuestion = ({ children, lang = 'el', className = '' }: Props) => {
    const label = lang === 'en' ? '📘 Practice Questions' : '📘 Ερωτήσεις εξάσκησης';

    return (
        <div
            className={[
                'not-prose list-none my-6 rounded-xl border p-4 shadow-sm',
                'bg-blue-50 border-blue-300',
                'dark:bg-blue-900/20 dark:border-blue-700',
                className,
            ].join(' ')}
            role="region"
            aria-label={label}
        >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-800 dark:text-blue-300">
                {label}
            </p>
            <div className="text-gray-800 dark:text-gray-100">
                {children}
            </div>
        </div>
    );
};
