// src/components/ui/IconButton.tsx
import React from 'react';

type Props = {
    title: string;
    ariaLabel?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
};

const IconButton: React.FC<Props> = ({ title, ariaLabel, onClick, children, className = '' }) => (
    <button
        onClick={onClick}
        className={[
            // μέγεθος/στοίχιση
            'inline-flex h-10 w-10 items-center justify-center rounded-full',
            // υπόβαθρο + γυαλάδα
            'bg-white/70 dark:bg-white/10 backdrop-blur-sm',
            // περίγραμμα + σκιά
            'border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md',
            // hover/focus
            'hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70',
            className,
        ].join(' ')}
        aria-label={ariaLabel ?? title}
        title={title}
        type="button"
    >
        {children}
    </button>
);

export default IconButton;
