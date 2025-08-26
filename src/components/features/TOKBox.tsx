// src/components/features/TOKBox.tsx
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
};

export const TOKBox = ({ children, lang = 'el' }: Props) => {
    const label = lang === 'en' ? '🧠 Theory of Knowledge (TOK)' : '🧠 Θεωρία της Γνώσης (TOK)';

    return (
        <div className="bg-purple-50 border border-purple-300 rounded-lg p-4 my-6">
            <p className="font-semibold text-purple-700 mb-2">{label}</p>
            <div className="text-gray-800">{children}</div>
        </div>
    );
};
