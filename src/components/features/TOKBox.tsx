// src/components/features/TOKBox.tsx
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const TOKBox = ({ children }: Props) => (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-6">
        <div className="flex items-center mb-2">
            <span className="text-purple-600 font-semibold">🧠 Theory of Knowledge</span>
        </div>
        <div className="text-gray-700">{children}</div>
    </div>
);
