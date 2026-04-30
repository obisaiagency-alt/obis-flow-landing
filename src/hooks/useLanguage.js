import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

export function useLanguage() {
    const [lang, setLang] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang && ['es', 'ca', 'en'].includes(urlLang)) {
            return urlLang;
        }
        return localStorage.getItem('obis-flow-lang') || 'es';
    });

    const t = (key) => {
        return translations[lang]?.[key] || key;
    };

    useEffect(() => {
        localStorage.setItem('obis-flow-lang', lang);
        document.documentElement.lang = lang;
        
        const newUrl = lang === 'es' 
            ? window.location.pathname 
            : `${window.location.pathname}?lang=${lang}`;
            
        window.history.replaceState(null, '', newUrl);
        
        let canonicalUrl = `https://obisagency.com${lang === 'es' ? '/' : `/?lang=${lang}`}`;
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        document.title = t('meta_title');
        
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", t('meta_desc'));
        }
    }, [lang]);

    return { lang, setLang, t };
}
