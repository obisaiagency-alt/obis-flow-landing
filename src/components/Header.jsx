import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset || document.documentElement.scrollTop;
            setScrolled(offset > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header 
            className={`main-header ${scrolled ? 'scrolled' : ''}`}
            style={{ 
                backgroundColor: scrolled ? '#060d1a' : '#0a192f',
                borderBottom: scrolled ? '1px solid rgba(197, 160, 89, 0.5)' : '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="container">
                <a href="#" className="logo">
                    <Scale className="gold-text" style={{ marginRight: '8px', width: '28px', height: '28px' }} />
                    <span className="gold-text">OBIS</span> AGENCY
                </a>
                
                <nav className={`desktop-nav ${mobileMenuOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#beneficios" onClick={closeMobileMenu}>{t('nav_benefits')}</a>
                    <a href="#metodologia" onClick={closeMobileMenu}>{t('nav_methodology')}</a>
                    <a href="#soluciones" onClick={closeMobileMenu}>{t('nav_pricing')}</a>
                    <a href="#faq" onClick={closeMobileMenu}>{t('nav_faq')}</a>
                    <a href="#contacto" className="btn btn-header" onClick={closeMobileMenu}>{t('nav_cta')}</a>
                    
                    <div className="lang-switcher">
                        <button className={`lang-btn ${lang === 'ca' ? 'active' : ''}`} onClick={() => setLang('ca')}>CA</button>
                        <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
                        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                    </div>
                </nav>
                
                <button className="mobile-menu-btn" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
