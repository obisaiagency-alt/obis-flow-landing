import { useEffect, useRef } from 'react';

export default function Hero({ t }) {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * 20;
            
            heroRef.current.style.backgroundPosition = `calc(50% + ${xPos}px) calc(50% + ${yPos}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="fade-in" dangerouslySetInnerHTML={{ __html: t('hero_title') }}></h1>
                <p className="subtitle fade-in-delay">{t('hero_subtitle')}</p>
                <div className="hero-actions fade-in-delay-2">
                    <a href="#contacto" className="btn btn-gold">{t('hero_btn_start')}</a>
                    <a href="#soluciones" className="btn btn-outline">{t('hero_btn_solutions')}</a>
                </div>
            </div>
        </section>
    );
}
