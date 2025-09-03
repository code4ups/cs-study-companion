// src/components/DarkModeToggle.tsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';

type Mode = 'light' | 'dark';
type Lang = 'el' | 'en';

type Props = { lang?: Lang };

const DarkModeToggle: React.FC<Props> = ({ lang }) => {
  const getLang = (): Lang => {
    if (lang === 'el' || lang === 'en') return lang;
    try {
      const l = document.documentElement.lang?.toLowerCase();
      return l?.startsWith('el') ? 'el' : 'en';
    } catch { return 'en'; }
  };
  const L = getLang();

  const getInitial = (): Mode => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch { return 'light'; }
  };

  // ΝΕΟ: Αρχικοποίηση με null για αποφυγή hydration mismatch
  const [mode, setMode] = useState<Mode | null>(null);

  const apply = (m: Mode) => {
    const root = document.documentElement;
    if (m === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', m); } catch {}
  };

  // ΝΕΟ: Initialization μετά το mount
  useEffect(() => {
    const initialMode = getInitial();
    setMode(initialMode);
    apply(initialMode);
  }, []);

  useEffect(() => {
    if (mode) apply(mode);
  }, [mode]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  const toggle = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));

  // ΝΕΟ: Επιστροφή loading state μέχρι το initialization
  if (mode === null) {
    return (
        <IconButton title="Loading..." ariaLabel="Loading theme" onClick={() => {}} className="ml-2">
          <div className="h-5 w-5" /> {/* Empty placeholder */}
        </IconButton>
    );
  }

  const hover =
      mode === 'dark'
          ? (L === 'el' ? 'Αλλαγή σε φωτεινό' : 'Switch to light mode')
          : (L === 'el' ? 'Αλλαγή σε σκοτεινό' : 'Switch to dark mode');

  return (
      <IconButton title={hover} ariaLabel={hover} onClick={toggle} className="ml-2">
        {mode === 'dark' ? (
            <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
        ) : (
            <Moon className="h-5 w-5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </IconButton>
  );
};

export default DarkModeToggle;