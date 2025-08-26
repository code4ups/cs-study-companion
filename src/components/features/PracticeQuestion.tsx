// src/components/features/PracticeQuestion.tsx
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
};

export const PracticeQuestion = ({ children, lang = 'el' }: Props) => {
    const label = lang === 'en' ? '📘 Practice Questions' : '📘 Ερωτήσεις εξάσκησης';

    return (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
            <p className="font-semibold text-blue-700 mb-2">{label}</p>
            <div className="text-gray-800">{children}</div>
        </div>
    );
};
