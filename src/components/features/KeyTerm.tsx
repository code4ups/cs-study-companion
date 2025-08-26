// src/components/features/KeyTerm.tsx
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    lang?: 'en' | 'el';
};

export const KeyTerm = ({ children, lang = 'el' }: Props) => {
    const label = lang === 'en' ? '🔑 Key term' : '🔑 Βασικός όρος';

    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
            <p className="font-semibold text-yellow-700 mb-2">{label}</p>
            <div className="text-gray-800">{children}</div>
        </div>
    );
};
