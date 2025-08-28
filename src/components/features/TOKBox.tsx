import type { ReactNode } from 'react';
import { Brain } from 'lucide-react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
    className?: string;
};

export const TOKBox = ({ children, lang = 'el', className = '' }: Props) => {
    const label = lang === 'en' ? 'Theory of Knowledge (TOK)' : 'Θεωρία της Γνώσης (TOK)';

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
        </div>
    );
};
