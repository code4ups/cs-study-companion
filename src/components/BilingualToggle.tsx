// src/components/BilingualToggle.tsx
import React from 'react';
import { Languages } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';

type Lang = 'el' | 'en';

type Props = {
    lang?: Lang;
    base?: string; // αν θες να επιβάλεις base, αλλιώς βρίσκουμε από URL
};

const BilingualToggle: React.FC<Props> = ({ lang, base }) => {
    const getLang = (): Lang => {
        if (lang === 'el' || lang === 'en') return lang;
        try {
            const l = document.documentElement.lang?.toLowerCase();
            return l?.startsWith('el') ? 'el' : 'en';
        } catch { return 'en'; }
    };
    const L = getLang();

    const hover = L === 'el' ? 'Αλλαγή σε Αγγλικά' : 'Switch to Greek';

    const getToggledHref = () => {
        const { pathname, search, hash } = window.location;
        const baseUrl = (base ?? (import.meta as any).env?.BASE_URL ?? '/')
            .replace(/\/+$/, '/').replace(/^\/+/, '/');

        const segs = pathname.replace(/^\/+/, '/').split('/').filter(Boolean);
        const idx = segs.findIndex(s => s === 'el' || s === 'en');
        if (idx >= 0) segs[idx] = L === 'el' ? 'en' : 'el';
        else segs.unshift(L === 'el' ? 'en' : 'el');

        const newPath = '/' + segs.join('/');
        return newPath + (search || '') + (hash || '');
    };

    const onClick = () => {
        try {
            window.location.assign(getToggledHref());
        } catch {
            document.documentElement.lang = L === 'el' ? 'en' : 'el';
        }
    };

    return (
        <IconButton title={hover} ariaLabel={hover} onClick={onClick}>
            <Languages className="h-5 w-5 transition-transform duration-300 hover:rotate-6" />
        </IconButton>
    );
};

export default BilingualToggle;
