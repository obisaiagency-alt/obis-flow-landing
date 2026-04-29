import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

export function useLanguage() {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('obis-flow-lang') || 'es';
    });

    useEffect(() => {
        localStorage.setItem('obis-flow-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (key) => {
        return translations[lang]?.[key] || key;
    };

    return { lang, setLang, t };
}
