import type { ReactNode } from 'react';
import { HelpCircle } from 'lucide-react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
};

export const PracticeQuestion = ({ children, lang = 'el', className = '' }: Props) => {
    const label = lang === 'en' ? 'Practice Questions' : 'Ερωτήσεις εξάσκησης';

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
            <div className="mb-2 flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-blue-400/30 bg-blue-100 dark:bg-blue-900/30">
                    <HelpCircle className="h-4 w-4 text-blue-800 dark:text-blue-300" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-800 dark:text-blue-300">
                    {label}
                </p>
            </div>

            <div className="text-gray-800 dark:text-gray-100">{children}</div>
        </div>
    );
};
