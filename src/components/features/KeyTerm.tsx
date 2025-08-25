import type { ReactNode } from 'react';

interface Props {
    term: string;
    children: ReactNode;
}

export const KeyTerm = ({ term, children }: Props) => (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold text-yellow-700">🔑 {term}</p>
        <p className="text-gray-700">{children}</p>
    </div>
);
