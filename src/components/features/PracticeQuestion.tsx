import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const PracticeQuestion = ({ children }: Props) => (
    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6">
        <p className="font-semibold text-blue-700 mb-2">📘 Ερωτήσεις εξάσκησης</p>
        <div className="text-gray-700 space-y-2">{children}</div>
    </div>
);
